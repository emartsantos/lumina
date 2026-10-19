import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { InsightCard } from "@/components/site/Cards";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getInsights } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Wellness hub",
  description:
    "Practical, clearly written articles on prevention, mental health, nutrition, sleep, and family care — general wellness information from the clinicians of Lumina Health & Wellness.",
  path: "/insights",
});

export default async function InsightsPage() {
  const insights = await getInsights();
  const categories = Array.from(new Set(insights.map((i) => i.category)));

  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/insights", label: "Wellness hub" },
        ]}
        eyebrow="Wellness hub"
        title="Practical reads for everyday health."
        intro="Warm, straightforward guidance on prevention, mental health, sleep, nutrition, and family care. Written to be useful, not overwhelming."
        aside={
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle"
              >
                {category}
              </li>
            ))}
          </ul>
        }
      />

      <section className="mt-16">
        <Container>
          <div className="grid gap-x-16 md:grid-cols-2">
            {insights.map((insight, i) => (
              <Reveal key={insight.slug} delay={(i % 2) * 80}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <p className="max-w-2xl text-xs leading-relaxed text-fg-subtle">
            Articles in the wellness hub are general wellness information. They are
            not a substitute for individualized medical advice, diagnosis, or
            treatment. Please talk with a licensed clinician about your own health.
          </p>
        </Container>
      </section>

      <CtaBand />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Wellness hub", path: "/insights" },
        ])}
      />
    </>
  );
}
