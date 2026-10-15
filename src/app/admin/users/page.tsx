import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";
import { requireRole } from "@/lib/auth/session";
import { Badge, EmptyState, LinkButton, PageHeader, Panel } from "@/components/admin/ui";
import { formatDateTime } from "@/lib/utils";
import { UserRowActions } from "./UserRowActions";

export const metadata: Metadata = { title: "Users & roles" };

export default async function UsersPage() {
  const session = await requireRole(["ADMIN"]);

  const users = await prisma.adminUser.findMany({
    orderBy: [{ active: "desc" }, { email: "asc" }],
  });

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Users & roles"
        description="Staff access to the admin platform. Add a staff member here, then they are linked automatically the first time they sign in with Auth0. You cannot change your own role or status."
        actions={<LinkButton href="/admin/users/new">Add staff</LinkButton>}
      />

      <Panel title={`${users.length} account${users.length === 1 ? "" : "s"}`}>
        {users.length === 0 ? (
          <EmptyState
            title="No admin accounts"
            description="The first administrator is created by the seed script."
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-line text-left font-mono text-[0.58rem] uppercase tracking-label text-fg-subtle">
                  <th className="px-5 py-3 font-normal">Email</th>
                  <th className="px-5 py-3 font-normal">Name</th>
                  <th className="px-5 py-3 font-normal">Status</th>
                  <th className="px-5 py-3 font-normal">Last seen</th>
                  <th className="px-5 py-3 text-right font-normal">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-line/70 last:border-0">
                    <td className="px-5 py-3 text-fg">
                      {user.email}
                      {user.id === session.userId ? (
                        <span className="ml-2 font-mono text-[0.55rem] uppercase tracking-label text-accent-amber">
                          you
                        </span>
                      ) : null}
                    </td>
                    <td className="px-5 py-3 text-fg-muted">
                      {user.name ?? "—"}
                    </td>
                    <td className="px-5 py-3">
                      <Badge tone={user.active ? "accent" : "danger"}>
                        {user.active ? "Active" : "Disabled"}
                      </Badge>
                      {user.auth0Sub === null ? (
                        <span className="ml-2">
                          <Badge tone="amber">Invited</Badge>
                        </span>
                      ) : null}
                    </td>
                    <td className="px-5 py-3 text-fg-subtle">
                      {formatDateTime(user.updatedAt)}
                    </td>
                    <td className="px-5 py-3">
                      <UserRowActions
                        id={user.id}
                        role={user.role}
                        active={user.active}
                        isSelf={user.id === session.userId}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>
    </div>
  );
}
