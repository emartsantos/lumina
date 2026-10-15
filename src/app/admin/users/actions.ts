"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/db/prisma";
import { requireRole } from "@/lib/auth/session";
import { writeAuditEvent } from "@/lib/audit";
import { staffSchema } from "@/lib/admin/validation";
import type { ActionState } from "@/app/admin/action-state";

const roleEnum = z.enum(["ADMIN", "EDITOR", "VIEWER"]);

function fieldErrors(
  issues: { path: PropertyKey[]; message: string }[],
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "form");
    out[key] ??= issue.message;
  }
  return out;
}

export async function createStaffUser(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireRole(["ADMIN"]);

  const parsed = staffSchema.safeParse({
    email: formData.get("email")?.toString().trim().toLowerCase() ?? "",
    name: formData.get("name")?.toString().trim() ?? "",
    role: formData.get("role")?.toString() ?? "VIEWER",
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: fieldErrors(parsed.error.issues),
    };
  }

  const { email, role } = parsed.data;
  const name = parsed.data.name || null;

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    return {
      ok: false,
      message: "An account with that email already exists.",
      errors: { email: "Email already in use" },
    };
  }

  let created;
  try {
    created = await prisma.adminUser.create({
      data: { email, name, role, active: true },
    });
  } catch {
    return {
      ok: false,
      message: "Could not add the staff account. Please try again.",
    };
  }

  await writeAuditEvent({
    actorSub: session.sub,
    actorEmail: session.email,
    action: "admin.user_create",
    entity: "AdminUser",
    entityId: created.email,
    meta: { role },
  });

  revalidatePath("/admin/users");
  redirect("/admin/users?created=1");
}

export async function updateUserRole(
  id: string,
  role: "ADMIN" | "EDITOR" | "VIEWER",
): Promise<void> {
  const session = await requireRole(["ADMIN"]);
  const parsed = roleEnum.safeParse(role);
  if (!parsed.success) return;

  if (id === session.userId && parsed.data !== "ADMIN") {
    return;
  }

  const user = await prisma.adminUser.update({
    where: { id },
    data: { role: parsed.data },
  });

  await writeAuditEvent({
    actorSub: session.sub,
    actorEmail: session.email,
    action: "admin.role_update",
    entity: "AdminUser",
    entityId: user.email,
    meta: { role: parsed.data },
  });

  revalidatePath("/admin/users");
}

export async function setUserActive(
  id: string,
  active: boolean,
): Promise<void> {
  const session = await requireRole(["ADMIN"]);

  if (id === session.userId) return;

  const user = await prisma.adminUser.update({
    where: { id },
    data: { active },
  });

  await writeAuditEvent({
    actorSub: session.sub,
    actorEmail: session.email,
    action: active ? "admin.activate" : "admin.deactivate",
    entity: "AdminUser",
    entityId: user.email,
  });

  revalidatePath("/admin/users");
}
