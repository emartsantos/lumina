import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { DetailSkeleton } from "@/components/site/DetailSkeleton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { RichText } from "@/components/site/RichText";
import { Rule } from "@/components/site/Rule";
import { JsonLd } from "@/components/site/JsonLd";
import { getLegalDoc, getLegalDocs } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const docs = await getLegalDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata(
  props: PageProps<"/legal/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const doc = await getLegalDoc(slug);
  if (!doc)
    return buildMetadata({ title: "Legal", description: "", path: "/legal/privacy" });
  return buildMetadata({
    title: doc.title,
    description: doc.summary,
    path: `/legal/${doc.slug}`,
  });
}

export default function LegalPage(props: PageProps<"/legal/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <LegalDoc params={props.params} />
    </Suspense>
  );
}

async function LegalDoc({
  params,
}: {
  params: PageProps<"/legal/[slug]">["params"];
}) {
  const { slug } = await params;
  const [doc, docs] = await Promise.all([getLegalDoc(slug), getLegalDocs()]);
  if (!doc) notFound();

  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: `/legal/${doc.slug}`, label: doc.title },
            ]}
            className="mb-10"
          />
          <div className="grid gap-16 lg:grid-cols-[1fr_2.2fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav aria-label="Legal documents">
                <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                  Legal
                </h2>
                <ul className="mt-4 flex flex-col">
                  {docs.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/legal/${item.slug}`}
                        aria-current={item.slug === doc.slug ? "page" : undefined}
                        className={`block border-t border-line py-3 text-sm transition-colors ${
                          item.slug === doc.slug
                            ? "text-fg"
                            : "text-fg-muted hover:text-fg"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="max-w-2xl">
              <h1 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.04] tracking-tightest text-fg">
                {doc.title}
              </h1>
              <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                Last updated {formatDate(doc.updated)}
              </p>
              <p className="mt-8 text-pretty leading-relaxed text-fg-muted">
                {doc.summary}
              </p>
              <div className="my-10">
                <Rule quiet />
              </div>
              <RichText blocks={doc.detail} />
            </article>
          </div>
        </Container>
      </section>

      <div className="mt-24">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: doc.title, path: `/legal/${doc.slug}` },
          ])}
        />
      </div>
    </>
  );
}
