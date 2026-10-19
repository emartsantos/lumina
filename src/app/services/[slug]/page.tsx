import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { DetailSkeleton } from "@/components/site/DetailSkeleton";
import { PageHero } from "@/components/site/PageHero";
import { RichText } from "@/components/site/RichText";
import { MetricRow } from "@/components/site/Metric";
import { Rule } from "@/components/site/Rule";
import { ButtonLink } from "@/components/site/Button";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { getService, getServices } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import Link from "next/link";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = await getService(slug);
  if (!service) return buildMetadata({ title: "Service", description: "", path: "/services" });
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage(props: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <ServiceDetail params={props.params} />
    </Suspense>
  );
}

async function ServiceDetail({
  params,
}: {
  params: PageProps<"/services/[slug]">["params"];
}) {
  const { slug } = await params;
  const [service, services] = await Promise.all([
    getService(slug),
    getServices(),
  ]);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: `/services/${service.slug}`, label: service.title },
        ]}
        eyebrow={service.tagline}
        title={service.title}
        intro={service.summary}
      />

      <section className="mt-16">
        <Container>
          <MetricRow metrics={service.outcomes} />
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
            <div className="max-w-2xl">
              <RichText blocks={service.detail} />
            </div>

            <aside className="flex flex-col gap-10 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-sm border border-line bg-ink-raised p-8">
                <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                  What&apos;s included
                </h2>
                <ul className="mt-6 flex flex-col">
                  {service.capabilities.map((cap, i) => (
                    <li
                      key={cap.title}
                      className="flex flex-col gap-1.5 border-t border-line py-5 first:border-t-0 first:pt-0"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[0.6rem] tracking-label text-accent-amber">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-fg">
                          {cap.title}
                        </span>
                      </span>
                      <p className="pl-7 text-xs leading-relaxed text-fg-muted">
                        {cap.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <Rule quiet />
                <p className="font-mono text-[0.66rem] uppercase tracking-label text-fg-subtle">
                  Related
                </p>
                <ul className="flex flex-col">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="group flex items-center justify-between border-t border-line py-3 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {item.title}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-amber"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="w-fit"
                  arrow
                >
                  Start a visit
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CtaBand />

      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.summary,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
    </>
  );
}
