import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Rule } from "@/components/site/Rule";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MetricRow } from "@/components/site/Metric";
import { ButtonLink } from "@/components/site/Button";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getServices } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How it works",
  description:
    "Getting care with Lumina is simple: sign up, get matched with a licensed clinician, have a secure video visit, and leave with a follow up plan and prescriptions where needed.",
  path: "/how-it-works",
});

const steps = [
  {
    name: "Sign up",
    detail:
      "Create your account in a few minutes. Share what you need help with and how you would like to be seen.",
  },
  {
    name: "Match with a clinician",
    detail:
      "We connect you with a licensed clinician who fits your needs, your preferences, and your schedule.",
  },
  {
    name: "Secure video visit",
    detail:
      "Meet by encrypted video from wherever you are. Unhurried appointments, usually about thirty minutes.",
  },
  {
    name: "Follow up plan & prescriptions",
    detail:
      "Leave with clear next steps in your app, plus prescriptions sent to your pharmacy when they help.",
  },
];

const expectations = [
  {
    title: "Before your visit",
    body: "Tell us what is going on and anything we should know. Your clinician reviews your history ahead of time so the visit starts with you, not paperwork.",
  },
  {
    title: "During your visit",
    body: "A real conversation with a licensed clinician, not a script. Ask anything. They will explain what they think and what your options are, in plain language.",
  },
  {
    title: "After your visit",
    body: "Your notes, care plan, and any prescriptions live in your app. Follow up any time with the same care team if something changes.",
  },
];

export default async function HowItWorksPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/how-it-works", label: "How it works" },
        ]}
        eyebrow="How it works"
        title="Good care, without the waiting room."
        intro="Lumina is a nationwide virtual practice. From creating your account to the care plan you leave with, everything is designed to be simple, respectful, and easy to reach."
        aside={
          <ButtonLink href="/contact" variant="primary" size="md" arrow>
            Start a visit
          </ButtonLink>
        }
      />

      <section className="mt-24">
        <Container>
          <MetricRow
            metrics={[
              { value: "Same week", label: "Most first appointments" },
              { value: "11 min", label: "Average wait time" },
              { value: "50 states", label: "Licensed coverage" },
              { value: "7 days", label: "A week, evenings included" },
            ]}
          />
        </Container>
      </section>

      {/* Step by step */}
      <section className="mt-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="01"
              eyebrow="Your visit"
              title="Four simple steps, from sign up to your care plan."
              intro="No referrals to chase for most concerns, no long forms, and no months of waiting for a first appointment."
            />
          </Reveal>
          <div className="mt-14 grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <Reveal className="flex flex-col">
              {steps.map((step, i) => (
                <div
                  key={step.name}
                  className="flex gap-6 border-t border-line py-6"
                >
                  <span className="font-mono text-[0.62rem] tracking-label text-accent-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-medium uppercase tracking-label text-fg">
                      {step.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-fg-muted">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={120}>
              <div className="grid-veil rounded-sm border border-line-strong bg-ink-raised p-8">
                <div className="horizon-rule" />
                <div className="mt-6 flex flex-col gap-3">
                  {steps.map((step, i) => (
                    <div
                      key={step.name}
                      className="flex items-center justify-between rounded-xs border border-line bg-ink px-4 py-3"
                    >
                      <span className="font-mono text-[0.62rem] uppercase tracking-label text-fg-muted">
                        {step.name}
                      </span>
                      <span className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-label text-accent-amber">
                        <span
                          className={
                            i === 0
                              ? "pulse-dot"
                              : "inline-block h-1.5 w-1.5 bg-accent"
                          }
                        />
                        {i === 0 ? "Start here" : "Ready"}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-label text-fg-subtle">
                  From sign up to care plan · no waiting room · from anywhere
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we can help with */}
      <section className="mt-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="02"
              eyebrow="Care options"
              title="What you can get care for."
              align="wide"
            />
          </Reveal>
          <div className="mt-12 grid gap-x-16 md:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-4 border-t border-line py-8 transition-colors hover:border-line-strong"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-light tracking-tight text-fg">
                      {service.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-fg-subtle transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent-amber"
                    >
                      →
                    </span>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-fg-muted">
                    {service.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What to expect */}
      <section className="mt-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="03"
              eyebrow="What to expect"
              title="A visit that works around your life."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
            {expectations.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-4 bg-ink-raised p-8">
                <Eyebrow index={String(i + 1).padStart(2, "0")}>
                  {step.title}
                </Eyebrow>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Rule quiet />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Start with a visit this week."
        intro="Tell us what you need and a Lumina care coordinator will help you find the right clinician and get your first virtual visit on the calendar."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />
    </>
  );
}
