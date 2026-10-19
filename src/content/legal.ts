import type { LegalDoc } from "@/lib/types";

const updated = "March 2026";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated,
    summary:
      "How Lumina Health & Wellness collects, uses, and protects personal information across our website, apps, and services.",
    detail: [
      {
        kind: "p",
        text: "This Privacy Policy explains how Lumina Health & Wellness handles personal information. It covers our public website, our mobile app, and the services we provide to patients and to employers offering Lumina as a wellness benefit.",
      },
      {
        kind: "p",
        text: "Protected health information you share as a patient is handled in our clinical platform, not on this public website. That information is governed by our HIPAA Notice of Privacy Practices and the patient agreement you sign before care begins.",
      },
      { kind: "h2", text: "Information we collect" },
      {
        kind: "list",
        items: [
          "Information you provide, such as your name, email, phone number, and messages you send us.",
          "Account details for the app, including login credentials and preferences you set.",
          "Employer benefit information, such as the program under which you are eligible for care.",
          "Usage and device information, such as pages viewed, browser type, and approximate location.",
          "Payment and billing details needed to process fees, handled by our payment providers.",
        ],
      },
      { kind: "h2", text: "How we use information" },
      {
        kind: "p",
        text: "We use personal information to provide and improve our services, to schedule and support visits, to communicate with you, to meet legal and regulatory obligations, and to keep our systems secure. We do not sell your personal information.",
      },
      { kind: "h2", text: "Cookies and similar technologies" },
      {
        kind: "p",
        text: "Our website uses cookies and similar technologies to keep you signed in, remember your preferences, and understand how the site is used. You can control cookies through your browser settings. Blocking some cookies may affect how parts of the site work.",
      },
      { kind: "h2", text: "When we share information" },
      {
        kind: "p",
        text: "We share personal information with service providers who help us operate, such as hosting, analytics, and payment partners, under contracts that limit how they may use it. We may also share information when required by law or to protect the safety of our patients and the public.",
      },
      { kind: "h2", text: "Your rights and choices" },
      {
        kind: "p",
        text: "You may request access to, correction of, or deletion of your personal information, and you may opt out of marketing communications. Where you are a patient, additional rights to access and amend your health records are described in our HIPAA Notice of Privacy Practices. To make a request, contact our Privacy Officer at privacy@luminahealth.com.",
      },
      { kind: "h2", text: "Retention" },
      {
        kind: "p",
        text: "We keep personal information only as long as needed for the purposes described here, and as required by law. Health records are retained for the periods required by applicable state and federal rules. When information is no longer needed, we delete or de-identify it.",
      },
      { kind: "h2", text: "Contact us" },
      {
        kind: "p",
        text: "Questions about this policy can be sent to our Privacy Officer at privacy@luminahealth.com or by mail to Lumina Health & Wellness, Attn: Privacy Officer, 240 Harbor Street, Suite 900, Boston, MA 02210.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    updated,
    summary:
      "The terms that govern your use of Lumina Health & Wellness websites, apps, and services.",
    detail: [
      {
        kind: "p",
        text: "These Terms of Service govern your access to and use of Lumina websites, apps, and services. By using them, you agree to these terms. If you do not agree, please do not use the services.",
      },
      { kind: "h2", text: "The services we provide" },
      {
        kind: "p",
        text: "Lumina connects you with licensed clinicians for care delivered by secure video and app. Lumina is not a substitute for emergency care. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department.",
      },
      { kind: "h2", text: "Eligibility and your account" },
      {
        kind: "p",
        text: "You must be at least 18 years old to open an account, or have a parent or guardian manage care for a minor where permitted. You agree to provide accurate information and to keep your login credentials secure. You are responsible for activity that happens under your account.",
      },
      { kind: "h2", text: "Acceptable use" },
      {
        kind: "list",
        items: [
          "Do not use the services to violate any law or the rights of others.",
          "Do not misrepresent your identity or your medical history.",
          "Do not attempt to disrupt or gain unauthorized access to our systems.",
          "Do not share your account with anyone else.",
          "Do not use the services to provide medical care to others.",
        ],
      },
      { kind: "h2", text: "Clinical services and consent" },
      {
        kind: "p",
        text: "Care is provided by independent, licensed clinicians. Before a visit, you will be asked to review and sign consent forms. You may withdraw consent at any time, though some services may no longer be available to you.",
      },
      { kind: "h2", text: "Fees and payment" },
      {
        kind: "p",
        text: "Fees for services are shown before you book. Where your employer offers Lumina as a benefit, coverage is described in your enrollment materials. You are responsible for any amounts not covered.",
      },
      { kind: "h2", text: "Disclaimers and limitation of liability" },
      {
        kind: "p",
        text: "The services are provided as available. To the extent permitted by law, Lumina is not liable for indirect or consequential damages arising from your use of the services. Nothing in these terms limits rights you may have under applicable law.",
      },
      { kind: "h2", text: "Changes to these terms" },
      {
        kind: "p",
        text: "We may update these terms from time to time. When we make material changes, we will notify you through the app or by email. Continuing to use the services after changes take effect means you accept the updated terms.",
      },
    ],
  },
  {
    slug: "hipaa",
    title: "Notice of Privacy Practices",
    updated,
    summary:
      "How Lumina uses and protects your protected health information, and the rights you have over it.",
    detail: [
      {
        kind: "p",
        text: "This Notice of Privacy Practices describes how Lumina Health & Wellness may use and disclose your protected health information, and your rights regarding that information. It applies to care you receive as a Lumina patient.",
      },
      {
        kind: "p",
        text: "Our public website does not collect health information. Protected health information is handled within our clinical platform, which is designed around HIPAA aligned safeguards. Clinicians treat you under a signed agreement that sets out how your information is protected.",
      },
      { kind: "h2", text: "How we may use your health information" },
      {
        kind: "list",
        items: [
          "To provide, coordinate, and manage your care.",
          "To communicate with you and your care team about treatment.",
          "To bill and be paid for the services you receive.",
          "To support our clinical operations, quality, and safety.",
          "To meet legal, licensing, and public health obligations.",
          "As otherwise permitted or required by law.",
        ],
      },
      { kind: "h2", text: "Your rights" },
      {
        kind: "p",
        text: "You have the right to see and get a copy of your health records, and to ask us to correct information you believe is wrong. You may request an accounting of certain disclosures and ask us to limit how we communicate with you or share your information in specific cases.",
      },
      {
        kind: "list",
        items: [
          "Right to access and amend your protected health information.",
          "Right to request restrictions on certain uses and disclosures.",
          "Right to request confidential communications.",
          "Right to an accounting of disclosures.",
          "Right to a paper or electronic copy of this notice.",
        ],
      },
      { kind: "h2", text: "Our responsibilities" },
      {
        kind: "p",
        text: "We are required by law to keep your health information private, to give you this notice of our duties, and to follow the terms of the notice currently in effect. We will tell you if a breach affects your information.",
      },
      { kind: "h2", text: "How to reach the Privacy Officer" },
      {
        kind: "p",
        text: "To exercise your rights or ask questions, contact our Privacy Officer at privacy@luminahealth.com or by mail at Lumina Health & Wellness, Attn: Privacy Officer, 240 Harbor Street, Suite 900, Boston, MA 02210. If you believe your rights have not been respected, you may file a complaint with us or with the U.S. Department of Health and Human Services. We will not retaliate against you for filing a complaint.",
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    updated,
    summary:
      "Our commitment to accessible care and digital experiences, and how to report a barrier.",
    detail: [
      {
        kind: "p",
        text: "Lumina Health & Wellness is committed to making our website, app, and services usable by everyone, including people with disabilities. We want reaching a clinician to feel simple for all of our patients.",
      },
      { kind: "h2", text: "The standard we aim for" },
      {
        kind: "p",
        text: "We design and test against the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as our target standard, and we review our work regularly as our platform changes.",
      },
      { kind: "h2", text: "How we work toward it" },
      {
        kind: "list",
        items: [
          "Semantic, keyboard navigable interfaces.",
          "Support for reduced motion and system preferences.",
          "Colour contrast verified against AA thresholds.",
          "Alternative text for meaningful images.",
          "Periodic manual and automated accessibility assessments.",
        ],
      },
      { kind: "h2", text: "Need help or want to report a barrier?" },
      {
        kind: "p",
        text: "If you encounter an accessibility barrier, or need information in another format, contact our accessibility team at accessibility@luminahealth.com or call 1-800-555-0142. We aim to respond within five business days and to work with you on a way to access the care you need.",
      },
    ],
  },
];

export function getLocalLegal(slug: string) {
  return legalDocs.find((doc) => doc.slug === slug);
}
