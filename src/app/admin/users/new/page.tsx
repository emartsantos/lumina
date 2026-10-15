import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/session";
import { PageHeader } from "@/components/admin/ui";
import { StaffForm } from "../StaffForm";

export const metadata: Metadata = { title: "Add staff" };

export default async function NewStaffPage() {
  await requireRole(["ADMIN"]);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Add staff"
        description="Create an admin account. The person is linked automatically the first time they sign in with this email through Auth0."
      />
      <StaffForm />
    </div>
  );
}
