import type { Specialty } from "@/lib/types";

export const specialties: Specialty[] = [
  {
    slug: "family-medicine",
    title: "Family medicine",
    tagline: "One care team for the whole household",
    summary:
      "Everyday primary care for adults and families, from checkups and prevention to the small concerns you want to talk through with someone you trust.",
    pressures: [
      "Waits of several months for a first appointment",
      "A different clinician every visit, repeating your history each time",
      "Appointments that last ten minutes when you need more",
      "Care split between clinics that do not talk to each other",
    ],
    approach: [
      "A primary care clinician you choose and keep over time.",
      "Same week visits, with evening and weekend availability.",
      "Thirty minute appointments built around your questions.",
      "One shared record across your whole household.",
    ],
    outcomes: [
      { value: "Same week", label: "Appointments" },
      { value: "4.9/5", label: "Patient rating" },
      { value: "50 states", label: "Licensed coverage" },
    ],
    detail: [
      {
        kind: "p",
        text: "Family medicine is the care you reach for most often, and it should feel familiar. Lumina pairs you with a clinician who learns your history, your medications, and what matters to you, so you are not starting over every time.",
      },
      { kind: "h2", text: "Care that knows your history" },
      {
        kind: "p",
        text: "When your clinician already knows your background, a visit can go straight to the point. Prevention, chronic conditions, refills, and referrals all live with one team that remembers the details you would otherwise repeat.",
      },
      {
        kind: "list",
        items: [
          "Annual wellness visits and screenings by age.",
          "Prevention, vaccines, and healthy living guidance.",
          "Ongoing conditions like blood pressure and diabetes.",
          "Referrals to specialists with coordinated follow up.",
          "Medication reviews and refills.",
          "Family plans that cover the people in your home.",
        ],
      },
      {
        kind: "quote",
        text: "Primary care works best when it is a relationship. When I have known a family for years, I notice the small changes that matter.",
        attribution: "Dr. Elena Marsh, Medical Director, Lumina",
      },
    ],
  },
  {
    slug: "mental-health",
    title: "Mental health",
    tagline: "Support that meets you where you are",
    summary:
      "Therapy and psychiatric care by secure video, with licensed clinicians and appointments that fit around your life.",
    pressures: [
      "Treatment that feels hard to find or afford",
      "Long waits between asking for help and the first session",
      "Schedules that do not fit traditional clinic hours",
      "Worries about privacy and being judged",
    ],
    approach: [
      "Licensed therapists and psychiatric prescribers on one team.",
      "A first appointment typically within one week.",
      "Evening and weekend sessions by secure video.",
      "Confidential care you join from wherever you are.",
    ],
    outcomes: [
      { value: "Within 1 week", label: "First appointment" },
      { value: "Evenings & weekends", label: "Sessions available" },
      { value: "50 states", label: "Licensed clinicians" },
    ],
    detail: [
      {
        kind: "p",
        text: "Mental health care should be easier to start than it is. Lumina makes the first step simple, and the care that follows is steady, private, and yours to shape around your own schedule.",
      },
      { kind: "h2", text: "Therapy with room to be honest" },
      {
        kind: "p",
        text: "Sessions are not rushed. Your clinician gets to know you over time, and if medication could help, a prescriber on the same team can be part of your care.",
      },
      {
        kind: "list",
        items: [
          "Anxiety, depression, and stress.",
          "Grief and major life changes.",
          "Relationships and family concerns.",
          "Sleep, focus, and burnout.",
          "Medication management when it is needed.",
          "Care for teens and adults across the household.",
        ],
      },
      {
        kind: "quote",
        text: "People open up when they feel safe and unhurried. That is when the real work can start.",
        attribution: "Dr. Priya Raman, Clinical Director of Behavioral Health, Lumina",
      },
    ],
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    tagline: "Skin care without the long wait",
    summary:
      "Photos plus a licensed clinician. Get assessed and treated for acne, rashes, eczema, and more, often within days.",
    pressures: [
      "Dermatology waitlists that stretch for months",
      "Conditions that are dismissed as minor or cosmetic",
      "Trips to the clinic just to be seen for a few minutes",
      "Plans that change without anyone following up",
    ],
    approach: [
      "Start with photos taken from your phone, no referral needed.",
      "Board certified clinicians review and treat your concern.",
      "Clear treatment plans adjusted as your skin responds.",
      "Message your clinician with updates between visits.",
    ],
    outcomes: [
      { value: "Within days", label: "Clinician response" },
      { value: "50 states", label: "Dermatology coverage" },
      { value: "4.9/5", label: "Patient rating" },
    ],
    detail: [
      {
        kind: "p",
        text: "Most skin problems are treatable, but only if you can actually get seen. Lumina dermatology skips the long wait and puts a licensed clinician on your case, starting with a few photos you take at home.",
      },
      { kind: "h2", text: "A plan, not just a guess" },
      {
        kind: "p",
        text: "Your clinician explains what they see and what will help, in plain language. As your skin changes, your plan changes with it, and you can check in without starting over.",
      },
      {
        kind: "list",
        items: [
          "Acne and scarring.",
          "Eczema and psoriasis.",
          "Rashes and allergic reactions.",
          "Rosacea and redness.",
          "Fungal and bacterial skin infections.",
          "Spot checks with guidance on following up in person.",
        ],
      },
      {
        kind: "quote",
        text: "No one should have to live with a skin condition for years because they could not get an appointment. It is almost always worth treating.",
        attribution: "Dr. Sofia Alvarez, Dermatology Lead, Lumina",
      },
    ],
  },
  {
    slug: "womens-health",
    title: "Women's health",
    tagline: "Care that takes you seriously",
    summary:
      "Virtual care for birth control, periods, menopause, UTIs, and more, with clinicians who listen at every stage of life.",
    pressures: [
      "Symptoms that are dismissed or downplayed",
      "Appointments too short to cover everything",
      "Sensitive topics that are hard to discuss in a clinic",
      "Care that does not account for how needs change over time",
    ],
    approach: [
      "Clinicians experienced in women's health who take time to listen.",
      "Same week appointments, often the same week you ask.",
      "Explanations in plain language and clear treatment plans.",
      "Private, secure video visits from home.",
    ],
    outcomes: [
      { value: "Same week", label: "Appointments" },
      { value: "50 states", label: "Licensed coverage" },
      { value: "No waiting rooms", label: "Private and convenient" },
    ],
    detail: [
      {
        kind: "p",
        text: "Women's health concerns are too often rushed or set aside. Lumina is built to change that, with time, attention, and clinicians who take your symptoms seriously.",
      },
      { kind: "h2", text: "Care for every stage" },
      {
        kind: "p",
        text: "Your needs change over the years, and your care should keep up. From starting birth control to navigating menopause, your clinician stays with you and adjusts as things change.",
      },
      {
        kind: "list",
        items: [
          "Birth control and contraception guidance.",
          "Irregular, heavy, or painful periods.",
          "Urinary tract and yeast infections.",
          "Menopause and perimenopause support.",
          "Preventive screenings and check ins.",
          "Confidential care, on your schedule.",
        ],
      },
      {
        kind: "quote",
        text: "When someone feels believed, she can finally say what has been worrying her. Good care starts there.",
        attribution: "Dr. Amara Okafor, Women's Health Lead, Lumina",
      },
    ],
  },
  {
    slug: "chronic-care",
    title: "Chronic care",
    tagline: "Steady support for the long haul",
    summary:
      "Ongoing care for conditions like diabetes, high blood pressure, and asthma, with a clinician who tracks your progress over time.",
    pressures: [
      "Conditions that need regular attention, not the occasional visit",
      "Medications that get out of sync or run out",
      "Results that are hard to understand without help",
      "Care that is scattered across clinics and specialists",
    ],
    approach: [
      "A dedicated clinician who follows your condition over time.",
      "Regular check ins and refills managed in one place.",
      "Clear explanations of results and what they mean for you.",
      "Coordinated referrals and follow up across your care.",
    ],
    outcomes: [
      { value: "Same week", label: "Appointments" },
      { value: "1 place", label: "Your whole care plan" },
      { value: "Evenings & weekends", label: "Check ins available" },
    ],
    detail: [
      {
        kind: "p",
        text: "Managing a long term condition takes more than an occasional appointment. Lumina gives you a clinician who knows your history and checks in regularly, so small problems get caught before they grow.",
      },
      { kind: "h2", text: "Small steps, tracked over time" },
      {
        kind: "p",
        text: "Progress with chronic conditions is built visit by visit. Your clinician reviews your medications, results, and how you are feeling, then adjusts your plan to keep it working for you.",
      },
      {
        kind: "list",
        items: [
          "Diabetes and blood sugar management.",
          "High blood pressure and cholesterol.",
          "Asthma and COPD support.",
          "Thyroid and other ongoing conditions.",
          "Medication reviews and refills in one place.",
          "Referrals and follow up coordinated for you.",
        ],
      },
      {
        kind: "quote",
        text: "Chronic care is a marathon, not a sprint. The wins come from showing up regularly and adjusting as life changes.",
        attribution: "Dr. Marcus Whitfield, Medical Director of Urgent Care, Lumina",
      },
    ],
  },
];

export function getLocalSpecialty(slug: string) {
  return specialties.find((specialty) => specialty.slug === slug);
}
