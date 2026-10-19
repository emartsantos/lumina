import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { CopyButton } from "@/components/site/CopyButton";
import { getAuth0, isAuth0Configured } from "@/lib/auth0";

export const metadata: Metadata = {
  title: "Access denied",
  robots: { index: false, follow: false },
};

export default function AccessDeniedPage() {
  return (
    <Container className="py-32">
      <p className="font-mono text-[0.66rem] uppercase tracking-label text-accent-amber">
        Access denied
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-tight tracking-tight text-fg">
        Your account is not provisioned for the Lumina admin platform.
      </h1>
      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-fg-muted">
        You signed in successfully, but no active administrator record is
        associated with your identity. Ask a Lumina administrator to grant you a
        role, then try again.
      </p>

      {/* Reads the session cookie, so it streams in behind a boundary. */}
      <Suspense
        fallback={
          <div className="mt-10 h-56 max-w-2xl animate-pulse bg-ink-2" />
        }
      >
        <IdentityPanel />
      </Suspense>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/auth/logout"
          className="rounded-none bg-paper px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-label text-ink transition-colors hover:bg-accent"
        >
          Sign out
        </Link>
        <Link
          href="/"
          className="rounded-none border border-line-strong px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-label text-fg-muted transition-colors hover:border-fg hover:text-fg"
        >
          Back to website
        </Link>
      </div>
    </Container>
  );
}

async function IdentityPanel() {
  if (!isAuth0Configured()) return null;

  const session = await getAuth0().getSession();
  const sub = session?.user?.sub;
  if (!sub) return null;

  const email = session.user.email ?? null;

  return (
    <section className="mt-10 max-w-2xl border border-line-strong bg-ink-raised p-6">
      <p className="font-mono text-[0.66rem] uppercase tracking-label text-accent">
        Your identity
      </p>
      <p className="mt-3 text-sm leading-relaxed text-fg-muted">
        Use these values to create the first administrator: put the{" "}
        <span className="font-mono text-[0.78rem] text-fg">sub</span> in{" "}
        <span className="font-mono text-[0.78rem] text-fg">
          BOOTSTRAP_ADMIN_AUTH0_SUB
        </span>{" "}
        and the email in{" "}
        <span className="font-mono text-[0.78rem] text-fg">
          BOOTSTRAP_ADMIN_EMAIL
        </span>{" "}
        inside <span className="font-mono text-[0.78rem] text-fg">.env</span>,
        then run{" "}
        <span className="font-mono text-[0.78rem] text-fg">npm run db:seed</span>
        .
      </p>

      <dl className="mt-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <dt className="font-mono text-[0.6rem] uppercase tracking-label text-fg-subtle">
            Sub
          </dt>
          <dd className="flex items-center gap-3 border border-control bg-ink px-4 py-3">
            <code className="min-w-0 flex-1 break-all font-mono text-[0.82rem] leading-relaxed text-fg">
              {sub}
            </code>
            <CopyButton value={sub} label="Copy sub" />
          </dd>
        </div>

        {email ? (
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[0.6rem] uppercase tracking-label text-fg-subtle">
              Email
            </dt>
            <dd className="flex items-center gap-3 border border-control bg-ink px-4 py-3">
              <code className="min-w-0 flex-1 break-all font-mono text-[0.82rem] leading-relaxed text-fg">
                {email}
              </code>
              <CopyButton value={email} label="Copy email" />
            </dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
