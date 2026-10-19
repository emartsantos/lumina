import type { SiteSettings } from "@/lib/types";

export const siteSettings: SiteSettings = {
  name: "Lumina Health & Wellness",
  legalName: "Lumina Health & Wellness, PLLC",
  description:
    "A nationwide telehealth practice for primary, preventive, and mental health care — licensed clinicians, same week virtual visits, and unhurried appointments from wherever you are.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumina-health-wellness.com",
  email: "hello@lumina-health-wellness.com",
  phone: "+1 (888) 540-1130",
  hq: "Remote, United States",
  regions: ["All 50 states", "Washington, D.C.", "Puerto Rico"],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
  ],
  nav: [
    {
      label: "Care",
      href: "/services",
      items: [
        {
          label: "Virtual primary care",
          href: "/services/virtual-primary-care",
          description: "A clinician who knows your history",
        },
        {
          label: "Same day urgent care",
          href: "/services/same-day-urgent-care",
          description: "See someone today, not next month",
        },
        {
          label: "Mental health & therapy",
          href: "/services/mental-health-therapy",
          description: "Therapists and psychiatric care",
        },
        {
          label: "Prescriptions & refills",
          href: "/services/prescriptions-refills",
          description: "Manage medications without the drive",
        },
      ],
    },
    {
      label: "Specialties",
      href: "/specialties",
      items: [
        {
          label: "Family medicine",
          href: "/specialties/family-medicine",
          description: "Care for every age under one roof",
        },
        {
          label: "Mental health",
          href: "/specialties/mental-health",
          description: "Anxiety, mood, and more",
        },
        {
          label: "Dermatology",
          href: "/specialties/dermatology",
          description: "Skin, hair, and nail concerns",
        },
        {
          label: "Women's health",
          href: "/specialties/womens-health",
          description: "Reproductive and hormonal care",
        },
        {
          label: "Chronic care",
          href: "/specialties/chronic-care",
          description: "Ongoing support for long term conditions",
        },
      ],
    },
    { label: "Providers", href: "/providers" },
    { label: "Wellness hub", href: "/insights" },
    {
      label: "Company",
      href: "/company",
      items: [
        { label: "About", href: "/company", description: "Mission and clinicians" },
        { label: "Patient stories", href: "/stories", description: "Real outcomes" },
        { label: "Trust & safety", href: "/trust", description: "Privacy and security" },
        { label: "Roles", href: "/roles", description: "Join the practice" },
        { label: "Contact", href: "/contact", description: "Questions and partnerships" },
      ],
    },
  ],
  footer: [
    {
      title: "Care",
      items: [
        { label: "Virtual primary care", href: "/services/virtual-primary-care" },
        { label: "Same day urgent care", href: "/services/same-day-urgent-care" },
        { label: "Mental health & therapy", href: "/services/mental-health-therapy" },
        { label: "Prescriptions & refills", href: "/services/prescriptions-refills" },
        { label: "Women's health", href: "/services/womens-health" },
      ],
    },
    {
      title: "Explore",
      items: [
        { label: "Specialties", href: "/specialties" },
        { label: "Provider directory", href: "/providers" },
        { label: "Wellness hub", href: "/insights" },
        { label: "Patient stories", href: "/stories" },
        { label: "How it works", href: "/how-it-works" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "/company" },
        { label: "Roles", href: "/roles" },
        { label: "Trust & safety", href: "/trust" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Notice of Privacy Practices", href: "/legal/hipaa" },
        { label: "Accessibility", href: "/legal/accessibility" },
      ],
    },
  ],
  certifications: [
    "Licensed clinicians in all 50 states",
    "HIPAA aligned safeguards",
    "SOC 2 Type II",
    "LegitScript certified",
  ],
};
