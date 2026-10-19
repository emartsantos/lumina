import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { DetailSkeleton } from "@/components/site/DetailSkeleton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { RichText } from "@/components/site/RichText";
import { Rule } from "@/components/site/Rule";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getInsight, getInsights, getProvider } from "@/lib/content";
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const insight = await getInsight(slug);
  if (!insight)
    return buildMetadata({
      title: "Article",
      description: "",
      path: "/insights",
    });
  return buildMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    type: "article",
    keywords: [insight.category],
  });
}

export default function InsightArticlePage(
  props: PageProps<"/insights/[slug]">,
) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <InsightArticle params={props.params} />
    </Suspense>
  );
}

async function InsightArticle({
  params,
}: {
  params: PageProps<"/insights/[slug]">["params"];
}) {
  const { slug } = await params;
  const [insight, insights] = await Promise.all([
    getInsight(slug),
    getInsights(),
  ]);
  if (!insight) notFound();

  const author = await getProvider(insight.authorSlug);
  const related = insights
    .filter((item) => item.slug !== insight.slug)
    .slice(0, 2);

  return (
    <>
      <article className="pt-16 lg:pt-24">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/insights", label: "Wellness hub" },
              { href: `/insights/${insight.slug}`, label: insight.title },
            ]}
            className="mb-10"
          />
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
              <span className="text-accent-amber">{insight.category}</span>
              <span aria-hidden="true">/</span>
              <time dateTime={insight.publishedAt}>
                {formatDate(insight.publishedAt)}
              </time>
              <span aria-hidden="true">/</span>
              <span>{insight.readingMinutes} min read</span>
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.02] tracking-tightest text-fg">
              {insight.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-fg-muted">
              {insight.excerpt}
            </p>
            {author ? (
              <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-label text-fg-subtle">
                By {author.displayName}, {author.credentials}
              </p>
            ) : null}
          </div>
        </Container>
      </article>

      <section className="mt-16">
        <Container>
          <Rule />
          <div className="grid gap-16 pt-12 lg:grid-cols-[1fr_2.2fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                Contents
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {insight.detail
                  .filter((b) => b.kind === "h2")
                  .map((block) => (
                    <li key={block.text}>
                      <span className="text-sm text-fg-muted">
                        {block.kind === "h2" ? block.text : null}
                      </span>
                    </li>
                  ))}
              </ul>
            </aside>
            <div className="max-w-2xl">
              <RichText blocks={insight.detail} />
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="mt-24">
          <Container>
            <Rule quiet />
            <h2 className="mt-8 font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
              Keep reading
            </h2>
            <ul className="mt-6 grid gap-x-16 md:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group flex flex-col gap-3 border-t border-line py-8 transition-colors hover:border-line-strong"
                  >
                    <span className="font-mono text-[0.62rem] uppercase tracking-label text-accent-amber">
                      {item.category}
                    </span>
                    <span className="font-display text-xl font-light leading-tight tracking-tight text-fg transition-colors group-hover:text-accent-amber">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="mt-24">
        <Container>
          <p className="max-w-2xl text-xs leading-relaxed text-fg-subtle">
            This article is general wellness information, not individualized
            medical advice. It is not a substitute for diagnosis or treatment from
            a licensed clinician. If you have questions about your own health, talk
            with a clinician who knows your history.
          </p>
        </Container>
      </section>

      <CtaBand />

      <JsonLd
        data={articleJsonLd({
          title: insight.title,
          description: insight.excerpt,
          path: `/insights/${insight.slug}`,
          datePublished: insight.publishedAt,
          authorName: author
            ? `${author.displayName}, ${author.credentials}`
            : "Lumina Health & Wellness",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Wellness hub", path: "/insights" },
          { name: insight.title, path: `/insights/${insight.slug}` },
        ])}
      />
    </>
  );
}
