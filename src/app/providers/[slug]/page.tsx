import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { DetailSkeleton } from "@/components/site/DetailSkeleton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Rule } from "@/components/site/Rule";
import { ButtonLink } from "@/components/site/Button";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getProvider, getProviders } from "@/lib/content";
import { absoluteUrl, buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const providers = await getProviders();
  return providers.map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata(
  props: PageProps<"/providers/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const provider = await getProvider(slug);
  if (!provider)
    return buildMetadata({
      title: "Provider",
      description: "",
      path: "/providers",
    });
  return buildMetadata({
    title: `${provider.displayName}, ${provider.credentials}`,
    description: provider.bio,
    path: `/providers/${provider.slug}`,
  });
}

export default function ProviderPage(props: PageProps<"/providers/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <ProviderDetail params={props.params} />
    </Suspense>
  );
}

async function ProviderDetail({
  params,
}: {
  params: PageProps<"/providers/[slug]">["params"];
}) {
  const { slug } = await params;
  const provider = await getProvider(slug);
  if (!provider) notFound();

  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/providers", label: "Providers" },
              { href: `/providers/${provider.slug}`, label: provider.displayName },
            ]}
            className="mb-10"
          />
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-start">
            <div className="flex flex-col gap-6">
              <Eyebrow>{provider.specialty}</Eyebrow>
              <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] font-light leading-[1] tracking-tightest text-fg">
                {provider.displayName}, {provider.credentials}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
                {provider.bio}
              </p>
              <div>
                <ButtonLink href="/contact" variant="primary" size="lg" arrow>
                  Book with this provider
                </ButtonLink>
              </div>
            </div>

            <aside className="flex flex-col gap-6 rounded-sm border border-line bg-ink-raised p-8">
              <dl className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle">
                    Specialty
                  </dt>
                  <dd className="text-sm text-fg">{provider.specialty}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-line pt-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle">
                    Credentials
                  </dt>
                  <dd className="text-sm text-fg">{provider.credentials}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-line pt-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle">
                    Languages
                  </dt>
                  <dd className="text-sm text-fg">
                    {provider.languages.join(", ")}
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-line pt-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle">
                    Location
                  </dt>
                  <dd className="text-sm text-fg">{provider.location}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-line pt-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-label text-fg-subtle">
                    Availability
                  </dt>
                  <dd
                    className={
                      provider.acceptingNew
                        ? "text-sm text-accent"
                        : "text-sm text-fg-muted"
                    }
                  >
                    {provider.acceptingNew
                      ? "Accepting new patients"
                      : "Currently waitlisted"}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
          <div className="mt-12">
            <Rule quiet />
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-fg-subtle">
            Care is provided by independent, licensed clinicians. Booking a visit
            does not establish a treating relationship until you and the
            clinician have both agreed to care.
          </p>
        </Container>
      </section>

      <CtaBand
        eyebrow="Book a visit"
        title="See this clinician this week."
        intro="Tell us what you need and a care coordinator will help you get your first virtual visit on the calendar."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: `${provider.displayName}, ${provider.credentials}`,
          medicalSpecialty: provider.specialty,
          knowsLanguage: provider.languages,
          description: provider.bio,
          url: absoluteUrl(`/providers/${provider.slug}`),
          employeeOf: {
            "@type": "MedicalOrganization",
            name: "Lumina Health & Wellness",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Providers", path: "/providers" },
          { name: provider.displayName, path: `/providers/${provider.slug}` },
        ])}
      />
    </>
  );
}
