import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db/prisma";
import { requireRole } from "@/lib/auth/session";
import { PageHeader } from "@/components/admin/ui";
import type { RichBlock } from "@/lib/types";
import { ArticleForm } from "../../ArticleForm";

export const metadata: Metadata = { title: "Edit article" };

export default function EditArticlePage(
  props: PageProps<"/admin/articles/[id]/edit">,
) {
  return (
    <Suspense fallback={<EditSkeleton />}>
      <EditArticle params={props.params} />
    </Suspense>
  );
}

async function EditArticle({
  params,
}: {
  params: PageProps<"/admin/articles/[id]/edit">["params"];
}) {
  await requireRole(["ADMIN", "EDITOR"]);
  const { id } = await params;

  const article = await prisma.article.findUnique({ where: { id } });
  if (!article) notFound();

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title={article.title}
        description="Update the wellness hub article."
      />
      <ArticleForm
        article={{
          id: article.id,
          slug: article.slug,
          title: article.title,
          category: article.category,
            excerpt: article.excerpt,
          bodyJson: article.bodyJson as RichBlock[],
          authorSlug: article.authorSlug,
          readingMinutes: article.readingMinutes,
          featured: article.featured,
          status: article.status,
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
