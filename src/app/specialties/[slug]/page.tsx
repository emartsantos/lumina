import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { DetailSkeleton } from "@/components/site/DetailSkeleton";
import { PageHero } from "@/components/site/PageHero";
import { RichText } from "@/components/site/RichText";
import { MetricRow } from "@/components/site/Metric";
import { Rule } from "@/components/site/Rule";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getSpecialty, getSpecialties, getStories } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const specialties = await getSpecialties();
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata(
  props: PageProps<"/specialties/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const specialty = await getSpecialty(slug);
  if (!specialty)
    return buildMetadata({
      title: "Specialty",
      description: "",
      path: "/specialties",
    });
  return buildMetadata({
    title: specialty.title,
    description: specialty.summary,
    path: `/specialties/${specialty.slug}`,
  });
}

export default function SpecialtyPage(props: PageProps<"/specialties/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <SpecialtyDetail params={props.params} />
    </Suspense>
  );
}

async function SpecialtyDetail({
  params,
}: {
  params: PageProps<"/specialties/[slug]">["params"];
}) {
  const { slug } = await params;
  const [specialty, stories] = await Promise.all([
    getSpecialty(slug),
    getStories(),
  ]);
  if (!specialty) notFound();

  const related = stories.filter((story) => story.specialtySlug === specialty.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/specialties", label: "Specialties" },
          { href: `/specialties/${specialty.slug}`, label: specialty.title },
        ]}
        eyebrow={specialty.tagline}
        title={specialty.title}
        intro={specialty.summary}
      />

      <section className="mt-16">
        <Container>
          <MetricRow metrics={specialty.outcomes} />
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-8">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-accent-amber">
                What we hear
              </h2>
              <ul className="flex flex-col">
                {specialty.pressures.map((item, i) => (
                  <li key={item} className="flex gap-5 border-t border-line py-5">
                    <span className="font-mono text-[0.62rem] tracking-label text-fg-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-fg-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-accent-amber">
                How we help
              </h2>
              <ul className="flex flex-col gap-4">
                {specialty.approach.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent"
                    />
                    <span className="text-sm leading-relaxed text-fg-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="max-w-2xl">
            <RichText blocks={specialty.detail} />
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="mt-24">
          <Container>
            <Rule quiet />
            <h2 className="mt-8 font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
              Patient stories
            </h2>
            <ul className="mt-6 flex flex-col">
              {related.map((story) => (
                <li key={story.slug}>
                  <Link
                    href={`/stories/${story.slug}`}
                    className="group flex flex-col gap-2 border-t border-line py-6 transition-colors hover:border-line-strong"
                  >
                    <span className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle">
                      {story.client}
                    </span>
                    <span className="font-display text-xl font-light tracking-tight text-fg transition-colors group-hover:text-accent-amber">
                      {story.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaBand />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Specialties", path: "/specialties" },
          { name: specialty.title, path: `/specialties/${specialty.slug}` },
        ])}
      />
    </>
  );
}
