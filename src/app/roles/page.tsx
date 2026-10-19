import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Rule } from "@/components/site/Rule";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getRoles } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Roles",
  description:
    "Join Lumina Health & Wellness. We hire clinicians, care coordinators, and engineers who want to make virtual care feel human, accessible, and trustworthy.",
  path: "/roles",
});

const reasons = [
  {
    title: "Care comes first",
    body: "Every decision we make starts with what is best for the patient in front of us, not the metric behind them.",
  },
  {
    title: "Room to do good work",
    body: "Unhurried visits, reasonable panels, and time to listen are built into how we practice.",
  },
  {
    title: "Remote by design",
    body: "A distributed team across the country, with flexible collaboration that starts in writing.",
  },
];

export default async function RolesPage() {
  const roles = await getRoles();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/roles", label: "Roles" },
        ]}
        eyebrow="Roles"
        title="Do the best work of your career, for patients."
        intro="We are a nationwide virtual practice, and we are always looking for people who believe care can be both excellent and easy to reach."
      />

      <section className="mt-20">
        <Container>
          <Reveal className="grid gap-x-16 gap-y-10 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-t border-line pt-5">
                <h2 className="font-mono text-[0.68rem] uppercase tracking-label text-accent-amber">
                  {reason.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {reason.body}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <Reveal>
            <SectionHeader
              index="01"
              eyebrow="Open roles"
              title={`${roles.length} positions open.`}
            />
          </Reveal>
          <ul className="mt-10 flex flex-col">
            {roles.map((role) => (
              <li key={role.slug}>
                <Link
                  href={`/roles/${role.slug}`}
                  className="group flex flex-col gap-3 border-t border-line py-8 transition-colors hover:border-line-strong lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-xl font-light tracking-tight text-fg transition-colors group-hover:text-accent-amber">
                      {role.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed text-fg-muted">
                      {role.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.64rem] uppercase tracking-label text-fg-subtle">
                    <span>{role.department}</span>
                    <span>{role.location}</span>
                    <span>{role.type}</span>
                    <span
                      aria-hidden="true"
                      className="text-fg-subtle transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent-amber"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Rule quiet />
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-fg-subtle">
            Don&apos;t see your role? Send a short note and a link to something you
            are proud of to{" "}
            <a
              href="mailto:careers@lumina-health-wellness.com"
              className="text-fg underline underline-offset-4"
            >
              careers@lumina-health-wellness.com
            </a>
            .
          </p>
        </Container>
      </section>

      <CtaBand
        eyebrow="Hiring"
        title="Think you belong on this team?"
        intro="We read every application ourselves and respond to the ones we can act on."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Roles", path: "/roles" },
        ])}
      />
    </>
  );
}
