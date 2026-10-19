import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Rule } from "@/components/site/Rule";
import { Reveal } from "@/components/site/Reveal";
import { ButtonLink } from "@/components/site/Button";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getSiteSettings } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Trust & safety",
  description:
    "How Lumina Health & Wellness protects your information: licensed clinicians, HIPAA aligned safeguards in the clinical platform, secure video, careful data practices, and accessible care.",
  path: "/trust",
});

const controls = [
  {
    title: "Licensed clinicians",
    detail:
      "Every visit is with a clinician who is licensed and credentialed to practice in your state. No chatbots, no scripts.",
  },
  {
    title: "Secure video",
    detail:
      "Visits happen over encrypted video designed for clinical use, so conversations stay between you and your clinician.",
  },
  {
    title: "Your health information",
    detail:
      "Protected health information is handled in our clinical platform under HIPAA aligned safeguards and a signed patient agreement.",
  },
  {
    title: "This website",
    detail:
      "Our public website does not collect health information. It is for learning about Lumina, not for sharing symptoms or records.",
  },
  {
    title: "Data practices",
    detail:
      "We collect only what we need to run the service, we do not sell your personal information, and we limit how partners may use it.",
  },
  {
    title: "Accessibility",
    detail:
      "We design and test toward WCAG 2.2 AA so reaching a clinician is simpler for everyone, including people with disabilities.",
  },
];

const practices = [
  { label: "Licensure", value: "Licensed clinicians in all 50 states" },
  { label: "Privacy", value: "HIPAA aligned safeguards · CCPA" },
  { label: "Security", value: "SOC 2 Type II" },
  { label: "Accessibility", value: "Designed and tested toward WCAG 2.2 AA" },
];

export default async function TrustPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/trust", label: "Trust & safety" },
        ]}
        eyebrow="Trust & safety"
        title="Care you can trust, safeguards you can understand."
        intro="Good care depends on trust. Here is how we protect your information, who provides your care, and how we keep the experience safe and accessible."
        aside={
          <ButtonLink href="/legal/privacy" variant="outline" size="md" arrow>
            Read our privacy policy
          </ButtonLink>
        }
      />

      <section className="mt-20">
        <Container>
          <Reveal className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <div
                key={control.title}
                className="flex flex-col gap-3 bg-ink-raised p-8"
              >
                <h2 className="font-mono text-[0.68rem] uppercase tracking-label text-accent-amber">
                  {control.title}
                </h2>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {control.detail}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-light leading-tight tracking-tight text-fg">
              Safeguards at a glance.
            </h2>
            <dl className="flex flex-col">
              {settings.certifications.length > 0
                ? practices.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <dt className="font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                        {row.label}
                      </dt>
                      <dd className="text-sm text-fg-muted">{row.value}</dd>
                    </div>
                  ))
                : null}
            </dl>
          </div>

          {settings.certifications.length > 0 ? (
            <div className="mt-12">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                What we hold ourselves to
              </h2>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {settings.certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-label text-fg-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 bg-accent"
                    />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10">
            <Rule quiet />
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-fg-subtle">
            This public website does not collect health information. Protected
            health information is handled within our clinical platform under
            HIPAA aligned safeguards and the patient agreement you sign before care
            begins. The website itself is not claimed to be HIPAA compliant.
            Security documentation and accessibility details are available on
            request. We aim to design and test against WCAG 2.2 AA and do not claim
            formal certification beyond the standards listed above.
          </p>
        </Container>
      </section>

      <CtaBand
        eyebrow="Questions?"
        title="Ask us anything about privacy or safety."
        intro="Our team is happy to walk through how we protect your information and deliver care."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trust & safety", path: "/trust" },
        ])}
      />
    </>
  );
}
