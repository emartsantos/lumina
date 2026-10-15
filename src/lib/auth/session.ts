import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getAuth0, isAuth0Configured } from "@/lib/auth0";
import { prisma, isDatabaseConfigured } from "@/lib/db/prisma";

export type AdminRole = "ADMIN" | "EDITOR" | "VIEWER";

export type AdminSession = {
  sub: string;
  email: string;
  name: string;
  role: AdminRole;
  userId: string;
};

export const getAdminSession = cache(async (): Promise<AdminSession | null> => {
  // Always read request-time data so admin routes are never statically
  // prerendered into an auth-redirect shell.
  await connection();

  if (!isAuth0Configured() || !isDatabaseConfigured()) return null;

  const session = await getAuth0().getSession();
  const sub = session?.user?.sub;
  if (!sub) return null;

  let admin = await prisma.adminUser.findUnique({
    where: { auth0Sub: sub },
  });

  // Link a staff account an administrator pre-created by email the first time
  // that person signs in with Auth0.
  const email = session?.user?.email?.trim().toLowerCase();
  if (!admin && email) {
    const invited = await prisma.adminUser.findUnique({ where: { email } });
    if (invited && !invited.auth0Sub) {
      admin = await prisma.adminUser.update({
        where: { id: invited.id },
        data: {
          auth0Sub: sub,
          name: invited.name ?? session?.user?.name ?? null,
        },
      });
    }
  }

  if (!admin || !admin.active) return null;

  return {
    sub,
    email: admin.email,
    name: admin.name ?? admin.email,
    role: admin.role as AdminRole,
    userId: admin.id,
  };
});

export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (session) return session;

  if (!isAuth0Configured() || !isDatabaseConfigured()) {
    redirect("/setup");
  }

  const authSession = await getAuth0().getSession();
  if (!authSession?.user) {
    redirect("/auth/login?returnTo=/admin");
  }

  redirect("/access-denied");
}

export async function requireRole(roles: AdminRole[]): Promise<AdminSession> {
  const session = await requireAdmin();
  if (!roles.includes(session.role)) redirect("/admin?denied=1");
  return session;
}

export function canEdit(role: AdminRole): boolean {
  return role === "ADMIN" || role === "EDITOR";
}

export function canManageUsers(role: AdminRole): boolean {
  return role === "ADMIN";
}
