import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ButtonLink } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard, StoryCard, InsightCard } from "@/components/site/Cards";
import { MetricRow } from "@/components/site/Metric";
import { CtaBand } from "@/components/site/CtaBand";
import {
  getServices,
  getSpecialties,
  getStories,
  getInsights,
  getSiteSettings,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Care that fits your life",
  description:
    "Lumina Health & Wellness is a nationwide telehealth practice: licensed clinicians, same week virtual visits, and unhurried primary, preventive, and mental health care — from wherever you are.",
  path: "/",
});

const carePanel = [
  { label: "Next available", value: "This week" },
  { label: "Visit type", value: "Video" },
  { label: "Avg. wait", value: "11 min" },
  { label: "Coverage", value: "50 states" },
];

const pillars = [
  {
    title: "Clinicians you'll see again",
    body: "Choose a care team and keep them over time, so they know your history instead of starting over each visit.",
  },
  {
    title: "Time to be heard",
    body: "Unhurried appointments that leave room for the questions you did not get to ask last time.",
  },
  {
    title: "Care across the country",
    body: "Licensed clinicians in all fifty states, by secure video, with evenings and weekends available.",
  },
];

export default async function HomePage() {
  const [services, stories, insights, specialties, settings] = await Promise.all([
    getServices(),
    getStories(),
    getInsights(),
    getSpecialties(),
    getSiteSettings(),
  ]);

  const featured = stories.filter((story) => story.featured).slice(0, 2);
  const latest = insights.slice(0, 3);

  const careMetrics = [
    { value: "4.9/5", label: "Patient rating" },
    { value: "<15 min", label: "Average wait time" },
    { value: "50 states", label: "Licensed coverage" },
    { value: "7 days", label: "A week, evenings included" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 lg:pt-20">
        <div
          aria-hidden="true"
          className="grid-veil pointer-events-none absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(120% 90% at 24% 0%, black 12%, transparent 68%)",
            WebkitMaskImage:
              "radial-gradient(120% 90% at 24% 0%, black 12%, transparent 68%)",
          }}
        />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
            <Reveal className="flex flex-col gap-8">
              <Eyebrow>Telehealth · All fifty states</Eyebrow>
              <h1 className="max-w-[15ch] font-display text-[clamp(2.9rem,7vw,6rem)] leading-[0.92] tracking-tightest text-fg">
                Care that fits your <em className="wonk text-accent">life</em>.
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-fg-muted">
                Licensed clinicians, same week virtual visits, and unhurried
                appointments you can join from home. Primary, preventive, and
                mental health care — across all fifty states.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact" variant="primary" size="lg" arrow>
                  Start a visit
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="outline" size="lg">
                  How it works
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-line bg-ink-raised">
                <div className="horizon-rule" />
                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                  <span className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle">
                    Your next visit
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-label text-accent">
                    <span className="pulse-dot" />
                    Accepting patients
                  </span>
                </div>
                <ul className="divide-y divide-line">
                  {carePanel.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between px-5 py-4"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="h-4 w-px bg-line-strong"
                        />
                        <span className="text-sm text-fg">{row.label}</span>
                      </span>
                      <span className="font-mono text-[0.66rem] tracking-tight text-fg">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16 flex flex-col gap-4">
            <div className="rule-double" />
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 py-2">
              <li className="font-mono text-[0.62rem] uppercase tracking-label text-accent">
                What you can count on
              </li>
              {settings.certifications.map((cert) => (
                <li
                  key={cert}
                  className="font-mono text-[0.66rem] uppercase tracking-label text-fg-muted"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Positioning */}
      <section className="mt-32">
        <Container>
          <Reveal className="grid gap-x-16 gap-y-10 lg:grid-cols-[1.35fr_1fr]">
            <div className="flex flex-col gap-6">
              <span className="index-tab">The practice</span>
              <h2 className="font-display text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.06] text-fg">
                Care should reach you, not the other way around. We built a
                practice around licensed clinicians, honest time, and
                appointments that fit into real life.
              </h2>
            </div>
            <div className="flex flex-col gap-8 lg:pt-16">
              {pillars.map((item) => (
                <div key={item.title} className="border-t border-line pt-5">
                  <h3 className="font-mono text-[0.66rem] uppercase tracking-label text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Metrics */}
      <section className="mt-32">
        <Container>
          <Reveal>
            <MetricRow metrics={careMetrics} />
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="mt-32" aria-labelledby="services-heading">
        <Container>
          <Reveal>
            <SectionHeader
              index="01"
              eyebrow="Care options"
              title="Ways we can help, from everyday to ongoing."
              intro="Each service is delivered by a licensed clinician, and each works better because your records and care team stay connected."
              align="wide"
              action={
                <ButtonLink href="/services" variant="ghost" size="md" arrow>
                  All services
                </ButtonLink>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-x-16 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Patient stories */}
      <section className="mt-32" aria-labelledby="stories-heading">
        <Container>
          <Reveal>
            <SectionHeader
              index="02"
              eyebrow="Patient stories"
              title="Care, in patients' own words."
              intro="Real experiences, shared with permission and anonymized. Individual results vary."
              align="wide"
              action={
                <ButtonLink href="/stories" variant="ghost" size="md" arrow>
                  All patient stories
                </ButtonLink>
              }
            />
          </Reveal>
          <div className="mt-10">
            {featured.map((story) => (
              <Reveal key={story.slug}>
                <StoryCard story={story} featured />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialties */}
      <section className="mt-32" aria-labelledby="specialties-heading">
        <Container>
          <Reveal>
            <SectionHeader
              index="03"
              eyebrow="Specialties"
              title="The right clinician for what you're facing."
            />
          </Reveal>
          <Reveal className="mt-12 flex flex-col border-t border-line">
            {specialties.map((specialty, i) => (
              <Link
                key={specialty.slug}
                href={`/specialties/${specialty.slug}`}
                className="group flex items-center justify-between gap-6 border-b border-line py-6 transition-colors hover:border-accent"
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-[0.62rem] tracking-label text-fg-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(1.4rem,3vw,2.2rem)] leading-none text-fg transition-colors group-hover:text-accent">
                    {specialty.title}
                  </span>
                </span>
                <span className="flex items-center gap-5">
                  <span className="hidden max-w-xs text-right text-sm text-fg-subtle md:block">
                    {specialty.tagline}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-fg-subtle transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Wellness hub */}
      <section className="mt-32" aria-labelledby="insights-heading">
        <Container>
          <Reveal>
            <SectionHeader
              index="04"
              eyebrow="Wellness hub"
              title="Practical reads for everyday health."
              align="wide"
              action={
                <ButtonLink href="/insights" variant="ghost" size="md" arrow>
                  All articles
                </ButtonLink>
              }
            />
          </Reveal>
          <div className="mt-10 grid gap-x-16 md:grid-cols-3">
            {latest.map((insight, i) => (
              <Reveal key={insight.slug} delay={i * 80}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
