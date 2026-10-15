import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { Logomark } from "@/components/site/Logo";
import { requireAdmin } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s · Lumina Admin",
  },
  robots: { index: false, follow: false },
};

export const instant = false;

export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <Suspense fallback={<AdminSkeleton />}>
      <AdminGate>{props.children}</AdminGate>
    </Suspense>
  );
}

async function AdminGate({ children }: { children: ReactNode }) {
  const session = await requireAdmin();

  return (
    <div className="min-h-dvh bg-ink text-fg">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row">
        <AdminNav role={session.role} />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-line bg-ink/90 px-5 py-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <Logomark className="h-6 w-6" />
                <span className="font-mono text-[0.62rem] uppercase tracking-label text-fg-muted">
                  Admin Console
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden text-right sm:block">
                <p className="text-xs text-fg">{session.name}</p>
                <p className="font-mono text-[0.56rem] uppercase tracking-label text-fg-subtle">
                  {session.role}
                </p>
              </div>
              <Link
                href="/auth/logout"
                className="rounded-xs border border-line-strong px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-label text-fg-muted transition-colors hover:text-fg"
              >
                Sign out
              </Link>
            </div>
          </header>

          <main className="flex-1 px-5 py-8 lg:px-10 lg:py-10">
            <Suspense fallback={<AdminSkeleton />}>{children}</Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}

function AdminSkeleton() {
  return (
    <div className="min-h-dvh bg-ink">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-5 py-10 lg:px-10">
        <div className="h-3 w-40 animate-pulse bg-ink-2" />
        <div className="h-9 w-72 animate-pulse bg-ink-2" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-sm border border-line bg-ink-raised"
            />
          ))}
        </div>
        <div className="h-64 animate-pulse rounded-sm border border-line bg-ink-raised" />
      </div>
    </div>
  );
}
