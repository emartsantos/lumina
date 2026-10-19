import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db/prisma";
import { requireRole } from "@/lib/auth/session";
import { PageHeader } from "@/components/admin/ui";
import { ProviderForm } from "../../ProviderForm";

export const metadata: Metadata = { title: "Edit provider" };

export default function EditProviderPage(
  props: PageProps<"/admin/providers/[id]/edit">,
) {
  return (
    <Suspense fallback={<EditSkeleton />}>
      <EditProvider params={props.params} />
    </Suspense>
  );
}

async function EditProvider({
  params,
}: {
  params: PageProps<"/admin/providers/[id]/edit">["params"];
}) {
  await requireRole(["ADMIN", "EDITOR"]);
  const { id } = await params;

  const provider = await prisma.provider.findUnique({ where: { id } });
  if (!provider) notFound();

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title={provider.displayName}
        description="Update the public directory record."
      />
      <ProviderForm
        provider={{
          id: provider.id,
          slug: provider.slug,
          displayName: provider.displayName,
          credentials: provider.credentials,
          specialty: provider.specialty,
          languages: provider.languages,
          bio: provider.bio,
          photoUrl: provider.photoUrl,
          location: provider.location,
          acceptingNew: provider.acceptingNew,
          sortOrder: provider.sortOrder,
          status: provider.status,
        }}
      />
    </div>
  );
}

function EditSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="h-3 w-40 animate-pulse bg-ink-2" />
        <div className="h-9 w-72 animate-pulse bg-ink-2" />
      </div>
      <div className="h-96 animate-pulse rounded-sm border border-line bg-ink-raised" />
    </div>
  );
}
