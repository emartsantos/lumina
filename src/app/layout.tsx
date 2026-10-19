import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteHeaderFallback } from "@/components/site/SiteHeaderFallback";
import { SiteFooter } from "@/components/site/SiteFooter";
import { JsonLd } from "@/components/site/JsonLd";
import { getSiteSettings } from "@/lib/content";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumina-health-wellness.com",
  ),
  title: {
    default: "Lumina Health & Wellness — Telehealth, thoughtfully delivered",
    template: "%s · Lumina Health & Wellness",
  },
  description:
    "Lumina Health & Wellness is a nationwide telehealth practice: licensed clinicians, same week virtual visits, and unhurried primary and preventive care — from wherever you are.",
  applicationName: "Lumina Health & Wellness",
  keywords: [
    "telehealth",
    "virtual primary care",
    "online doctor",
    "telemedicine",
    "wellness",
    "preventive care",
    "mental health",
    "prescription refills",
  ],
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f3eee3",
  colorScheme: "light",
};

export default async function RootLayout(props: LayoutProps<"/">) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${instrument.variable} ${plex.variable}`}
    >
      <body className="min-h-dvh bg-ink text-fg antialiased">
        <a href="#main" className="skip-link">
          <span className="inline-flex h-10 items-center rounded-xs bg-paper px-4 font-mono text-[0.7rem] uppercase tracking-label text-ink">
            Skip to content
          </span>
        </a>
        <Suspense fallback={<SiteHeaderFallback />}>
          <SiteHeader nav={settings.nav} />
        </Suspense>
        <main id="main">{props.children}</main>
        <SiteFooter settings={settings} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
