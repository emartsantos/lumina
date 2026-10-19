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
import { getRole, getRoles } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const roles = await getRoles();
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata(
  props: PageProps<"/roles/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const role = await getRole(slug);
  if (!role)
    return buildMetadata({ title: "Role", description: "", path: "/roles" });
  return buildMetadata({
    title: role.title,
    description: role.summary,
    path: `/roles/${role.slug}`,
  });
}

export default function RolePage(props: PageProps<"/roles/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <RoleDetail params={props.params} />
    </Suspense>
  );
}

async function RoleDetail({
  params,
}: {
  params: PageProps<"/roles/[slug]">["params"];
}) {
  const { slug } = await params;
  const role = await getRole(slug);
  if (!role) notFound();

  const datePosted = role.postedAt;

  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/roles", label: "Roles" },
              { href: `/roles/${role.slug}`, label: role.title },
            ]}
            className="mb-10"
          />
          <div className="flex flex-col gap-6">
            <Eyebrow>{`${role.department} · ${role.location}`}</Eyebrow>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] font-light leading-[1] tracking-tightest text-fg">
              {role.title}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
              {role.summary}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.64rem] uppercase tracking-label text-fg-subtle">
              <span>{role.department}</span>
              <span>{role.location}</span>
              <span>{role.type}</span>
            </div>
            <div>
              <ButtonLink href="/contact" variant="primary" size="lg" arrow>
                Apply for this role
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-6">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-accent-amber">
                What you&apos;ll do
              </h2>
              <ul className="flex flex-col gap-4">
                {role.responsibilities.map((item) => (
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
            <div className="flex flex-col gap-6">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-label text-accent-amber">
                What we&apos;re looking for
              </h2>
              <ul className="flex flex-col gap-4">
                {role.requirements.map((item) => (
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
          <div className="mt-10">
            <Rule quiet />
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-fg-subtle">
            To apply, send your resume and a short note to{" "}
            <a
              href="mailto:careers@lumina-health-wellness.com"
              className="text-fg underline underline-offset-4"
            >
              careers@lumina-health-wellness.com
            </a>
            . Lumina Health & Wellness is an equal opportunity employer.
          </p>
        </Container>
      </section>

      <CtaBand
        eyebrow="Hiring"
        title="Not the right role, but the right mission?"
        intro="Tell us what you do best and we will keep you in mind as the practice grows."
      />

      <JsonLd
        data={jobPostingJsonLd({
          title: role.title,
          description: role.summary,
          datePosted,
          location: role.location,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Roles", path: "/roles" },
          { name: role.title, path: `/roles/${role.slug}` },
        ])}
      />
    </>
  );
}
