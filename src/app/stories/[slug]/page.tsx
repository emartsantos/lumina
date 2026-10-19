import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { DetailSkeleton } from "@/components/site/DetailSkeleton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Rule } from "@/components/site/Rule";
import { RichText } from "@/components/site/RichText";
import { MetricRow } from "@/components/site/Metric";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getStory, getStories } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const stories = await getStories();
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata(
  props: PageProps<"/stories/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const story = await getStory(slug);
  if (!story)
    return buildMetadata({
      title: "Patient story",
      description: "",
      path: "/stories",
    });
  return buildMetadata({
    title: story.title,
    description: story.summary,
    path: `/stories/${story.slug}`,
    type: "article",
  });
}

export default function StoryPage(props: PageProps<"/stories/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <StoryDetail params={props.params} />
    </Suspense>
  );
}

async function StoryDetail({
  params,
}: {
  params: PageProps<"/stories/[slug]">["params"];
}) {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) notFound();

  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/stories", label: "Patient stories" },
              { href: `/stories/${story.slug}`, label: story.client },
            ]}
            className="mb-10"
          />
          <div className="flex flex-col gap-6">
            <Eyebrow>{`${story.sector} · ${story.year}`}</Eyebrow>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] font-light leading-[1] tracking-tightest text-fg">
              {story.title}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
              {story.summary}
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <MetricRow metrics={story.results} />
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-5">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-accent-amber">
                What they were facing
              </h2>
              <p className="text-pretty leading-relaxed text-fg-muted">
                {story.challenge}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-accent-amber">
                How care helped
              </h2>
              <ul className="flex flex-col gap-4">
                {story.approach.map((item) => (
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
          <figure className="max-w-4xl">
            <Rule />
            <blockquote className="py-12">
              <p className="font-display text-[clamp(1.6rem,3.4vw,2.75rem)] font-light leading-[1.15] tracking-tight text-fg">
                “{story.quote.text}”
              </p>
              <figcaption className="mt-8 font-mono text-[0.68rem] uppercase tracking-label text-fg-subtle">
                {story.quote.author} · {story.quote.role}
              </figcaption>
            </blockquote>
            <Rule quiet />
          </figure>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="max-w-2xl">
            <RichText blocks={story.detail} />
          </div>
        </Container>
      </section>

      {story.services.length > 0 ? (
        <section className="mt-24">
          <Container>
            <div className="flex flex-col gap-6 border-t border-line pt-8 lg:flex-row lg:items-start lg:justify-between">
              <p className="font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                Care involved
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {story.services.map((service) => (
                  <li
                    key={service}
                    className="font-mono text-[0.64rem] uppercase tracking-label text-fg-muted"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="mt-16">
        <Container>
          <p className="max-w-2xl text-xs leading-relaxed text-fg-subtle">
            This story is shared with permission and anonymized to protect patient
            privacy. Details have been changed, and individual experiences are not
            a promise that others will see the same results. Names are abbreviated
            or omitted at the patient&apos;s request.
          </p>
        </Container>
      </section>

      <CtaBand />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Patient stories", path: "/stories" },
          { name: story.client, path: `/stories/${story.slug}` },
        ])}
      />
    </>
  );
}
