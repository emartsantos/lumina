import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "virtual-primary-care",
    title: "Virtual primary care",
    tagline: "A doctor who knows your name",
    summary:
      "A dedicated clinician for you and your family. Same week visits by secure video, ongoing care, and someone who remembers your history.",
    order: 1,
    capabilities: [
      {
        title: "Your own care team",
        detail:
          "Choose a primary care clinician and keep them over time. They follow your history, refills, and referrals instead of starting from scratch each visit.",
      },
      {
        title: "Same week appointments",
        detail:
          "Most patients are seen within the same week, with evening and weekend slots for the people who need them.",
      },
      {
        title: "Whole person visits",
        detail:
          "Unhurried appointments that cover prevention, chronic conditions, medications, and the questions you did not get to ask last time.",
      },
      {
        title: "Care that follows you",
        detail:
          "Visit notes, care plans, and results live in your app, shared with your clinician across every visit and every device.",
      },
    ],
    outcomes: [
      { value: "Same week", label: "Appointments", note: "Often within days" },
      { value: "50 states", label: "Licensed coverage" },
      { value: "4.9/5", label: "Patient rating" },
    ],
    detail: [
      {
        kind: "p",
        text: "Primary care should feel like a relationship, not a transaction. With Lumina, you pick a clinician and stay with them. They learn your history, your medications, and what matters to you, so every visit builds on the last one.",
      },
      { kind: "h2", text: "Care that fits your life" },
      {
        kind: "p",
        text: "You do not need to take a day off work just to check in. Join from your kitchen, your car, or your office. Most visits take about thirty minutes, and you spend that time talking with your clinician rather than sitting in a waiting room.",
      },
      {
        kind: "list",
        items: [
          "Annual wellness visits and preventive screenings.",
          "Management of ongoing conditions like diabetes, blood pressure, and asthma.",
          "Referrals to specialists and coordinated follow up.",
          "Medication reviews and prescription refills.",
          "Clear next steps sent to your app after every visit.",
          "Family plans that cover the people in your household.",
        ],
      },
      {
        kind: "quote",
        text: "The first thing I do in a visit is listen. When people are not rushed, they tell you what is really going on, and that changes the care.",
        attribution: "Dr. Elena Marsh, Medical Director, Lumina",
      },
    ],
  },
  {
    slug: "same-day-urgent-care",
    title: "Same day urgent care",
    tagline: "Care now, from wherever you are",
    summary:
      "Feeling unwell today? Get seen today. Virtual urgent care for common illnesses and injuries, with a clinician on every visit.",
    order: 2,
    capabilities: [
      {
        title: "Seen the same day",
        detail:
          "Book a slot in minutes or walk into the queue. Most patients start their visit in under fifteen minutes.",
      },
      {
        title: "Common concerns, handled",
        detail:
          "Sore throat, flu, urinary symptoms, rashes, minor injuries, and more, assessed and treated by a licensed clinician.",
      },
      {
        title: "Treatment sent where you need it",
        detail:
          "When medication helps, prescriptions are sent to the pharmacy of your choice, often the same day.",
      },
      {
        title: "After hours and weekends",
        detail:
          "Care when clinics are closed, including evenings, weekends, and holidays, across all fifty states.",
      },
    ],
    outcomes: [
      { value: "Avg. 11 min", label: "Wait time" },
      { value: "7 days", label: "A week, including evenings" },
      { value: "No waiting rooms", label: "Join from anywhere" },
    ],
    detail: [
      {
        kind: "p",
        text: "Sometimes you just need to be seen, and soon. Lumina urgent care is built for the day you wake up sick and cannot get an appointment anywhere else. Open the app, tell us what is going on, and a clinician will see you.",
      },
      { kind: "h2", text: "Real care, real fast" },
      {
        kind: "p",
        text: "Every urgent visit is with a licensed clinician, not a script or a chatbot. They ask questions, make an assessment, and explain what they think is happening in plain language. If you need to be seen in person, they will tell you and help you find it.",
      },
      {
        kind: "list",
        items: [
          "Cold, flu, and COVID-19 symptoms.",
          "Sinus and ear infections.",
          "Urinary tract infections.",
          "Skin rashes and minor allergic reactions.",
          "Pink eye and minor eye concerns.",
          "Prescriptions sent to your pharmacy when appropriate.",
        ],
      },
      {
        kind: "quote",
        text: "People come to urgent care worried and often in pain. My job is to take that seriously, move quickly, and leave them knowing exactly what happens next.",
        attribution: "Dr. Marcus Whitfield, Medical Director of Urgent Care, Lumina",
      },
    ],
  },
  {
    slug: "mental-health-therapy",
    title: "Mental health & therapy",
    tagline: "Unhurried visits, whenever you are ready",
    summary:
      "Talk with licensed therapists and psychiatric clinicians by video. Weekly sessions, flexible scheduling, and care that meets you where you are.",
    order: 3,
    capabilities: [
      {
        title: "Licensed therapists and prescribers",
        detail:
          "Work with a licensed therapist for talk therapy, or a psychiatric clinician for medication, based on what you need.",
      },
      {
        title: "Matched to the right clinician",
        detail:
          "Tell us what you are looking for and we help you find a clinician who fits your needs, preferences, and schedule.",
      },
      {
        title: "Consistent, ongoing sessions",
        detail:
          "Weekly or biweekly appointments that build over time, so your care is not starting over every session.",
      },
      {
        title: "Confidential by design",
        detail:
          "Sessions happen over a secure video connection, and your conversations are protected like any other medical record.",
      },
    ],
    outcomes: [
      { value: "Within 1 week", label: "First appointment" },
      { value: "50 states", label: "Licensed clinicians" },
      { value: "Evenings & weekends", label: "Appointments available" },
    ],
    detail: [
      {
        kind: "p",
        text: "Asking for help with your mental health takes courage. We try to make the rest easy. You can choose a therapist, book a time that works around your life, and start talking from the privacy of home.",
      },
      { kind: "h2", text: "Therapy that has room to breathe" },
      {
        kind: "p",
        text: "Sessions are not rushed. Your clinician gets to know you, your goals, and your history, and adjusts your care as things change. If medication might help, we can connect you with a prescriber on the same team.",
      },
      {
        kind: "list",
        items: [
          "Anxiety, depression, and stress.",
          "Grief, loss, and major life changes.",
          "Relationships and family concerns.",
          "Sleep, focus, and burnout.",
          "Medication management with a psychiatric clinician.",
          "Care for teens and adults across the household.",
        ],
      },
      {
        kind: "quote",
        text: "Progress in therapy rarely happens all at once. It happens when someone keeps showing up and feels safe enough to be honest.",
        attribution: "Dr. Priya Raman, Clinical Director of Behavioral Health, Lumina",
      },
    ],
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    tagline: "Answers for your skin, without the wait",
    summary:
      "Send photos and get a licensed dermatology clinician's assessment for acne, rashes, eczema, and more, often within days.",
    order: 4,
    capabilities: [
      {
        title: "Start with a photo",
        detail:
          "Share clear photos and a short description from your phone. No referral and no long wait for a first appointment.",
      },
      {
        title: "Board certified clinicians",
        detail:
          "Your concern is reviewed by a dermatology clinician who diagnoses, treats, and follows your progress over time.",
      },
      {
        title: "Treatment plans that work",
        detail:
          "Prescriptions, skincare routines, and clear plans you can actually follow, adjusted as your skin responds.",
      },
      {
        title: "Ongoing skin care",
        detail:
          "Message your clinician with updates and photos, so your plan keeps improving without a new visit each time.",
      },
    ],
    outcomes: [
      { value: "Within days", label: "Clinician response" },
      { value: "50 states", label: "Dermatology coverage" },
      { value: "4.9/5", label: "Patient rating" },
    ],
    detail: [
      {
        kind: "p",
        text: "Skin problems are common and stubborn, and waiting months to be seen only makes them harder. Lumina dermatology starts with photos you take at home and puts a licensed clinician on your case quickly.",
      },
      { kind: "h2", text: "From photos to a plan" },
      {
        kind: "p",
        text: "Your clinician reviews your photos and history, then explains what they see and what to do about it. You get a clear plan, and you can check in as your skin changes without starting the process over.",
      },
      {
        kind: "list",
        items: [
          "Acne and scarring.",
          "Eczema and psoriasis.",
          "Rashes and allergic skin reactions.",
          "Rosacea and other redness.",
          "Fungal and bacterial skin infections.",
          "Mole and spot checks with guidance on following up in person.",
        ],
      },
      {
        kind: "quote",
        text: "People live with skin conditions for years because they think it is not serious enough to bother a doctor. It is, and it is often very treatable.",
        attribution: "Dr. Sofia Alvarez, Dermatology Lead, Lumina",
      },
    ],
  },
  {
    slug: "prescriptions-refills",
    title: "Prescriptions & refills",
    tagline: "Refills without the runaround",
    summary:
      "Keep your medications on track. Request refills, review your prescriptions with a clinician, and get them sent to your pharmacy.",
    order: 5,
    capabilities: [
      {
        title: "Refills in the app",
        detail:
          "See your active prescriptions in one place and request refills in a few taps, whenever you need them.",
      },
      {
        title: "A clinician reviews every request",
        detail:
          "Refills and changes are reviewed by a licensed clinician who knows your history and can answer your questions.",
      },
      {
        title: "Sent to your pharmacy",
        detail:
          "Approved prescriptions go straight to the pharmacy you choose, so you know exactly when to pick them up.",
      },
      {
        title: "Medication questions answered",
        detail:
          "Ask about side effects, dosing, or interactions and get an answer in plain language from your care team.",
      },
    ],
    outcomes: [
      { value: "Same day", label: "Most refill requests" },
      { value: "1 place", label: "All your prescriptions" },
      { value: "No waiting rooms", label: "Managed from your app" },
    ],
    detail: [
      {
        kind: "p",
        text: "Managing medications should not mean phone tag with a clinic and a pharmacy. With Lumina, your prescriptions and refills live in one place, and a clinician who knows you reviews every request.",
      },
      { kind: "h2", text: "Stay on track, safely" },
      {
        kind: "p",
        text: "Missing a refill can throw off weeks of progress. We make it simple to stay current, and if something about your medication should change, your clinician will tell you before sending it through.",
      },
      {
        kind: "list",
        items: [
          "Routine refills for ongoing conditions.",
          "Dose reviews and adjustments.",
          "Checking for interactions with your other medications.",
          "Questions about side effects answered by your care team.",
          "Automatic reminders so you never run out.",
          "Prescriptions sent to the pharmacy of your choice.",
        ],
      },
      {
        kind: "quote",
        text: "A prescription is only helpful if people can actually get it and take it. Removing the friction is part of the care.",
        attribution: "Dr. Elena Marsh, Medical Director, Lumina",
      },
    ],
  },
  {
    slug: "womens-health",
    title: "Women's health",
    tagline: "Care that listens, at every stage",
    summary:
      "Virtual care for birth control, periods, menopause, UTIs, and more, with clinicians who take your concerns seriously.",
    order: 6,
    capabilities: [
      {
        title: "Everyday and lifelong care",
        detail:
          "From birth control and UTIs to cycle concerns and menopause, get care for the health questions at every stage of life.",
      },
      {
        title: "Clinicians who listen",
        detail:
          "Appointments with clinicians experienced in women's health who take your symptoms and history seriously.",
      },
      {
        title: "Treatment with a clear plan",
        detail:
          "Prescriptions, preventive guidance, and next steps explained in plain language, with follow up when you need it.",
      },
      {
        title: "Private and convenient",
        detail:
          "Talk from home about sensitive topics on a secure connection, and message your care team between visits.",
      },
    ],
    outcomes: [
      { value: "Same week", label: "Appointments" },
      { value: "50 states", label: "Licensed coverage" },
      { value: "No waiting rooms", label: "Private and convenient" },
    ],
    detail: [
      {
        kind: "p",
        text: "Too often, women's health concerns are dismissed or rushed. Lumina is built to do the opposite. You get time, a clinician who listens, and clear answers about what is going on and what can help.",
      },
      { kind: "h2", text: "Care for the whole of your life" },
      {
        kind: "p",
        text: "Your needs change over time, and your care should keep up. Whether it is starting birth control, managing painful periods, or navigating menopause, your clinician is there for the long term.",
      },
      {
        kind: "list",
        items: [
          "Birth control and contraception guidance.",
          "Irregular, heavy, or painful periods.",
          "Urinary tract infections and yeast infections.",
          "Menopause and perimenopause support.",
          "Preventive screenings and routine check ins.",
          "Confidential care from home, on your schedule.",
        ],
      },
      {
        kind: "quote",
        text: "When a patient feels believed, she can finally talk about what has been worrying her. That is where good care begins.",
        attribution: "Dr. Priya Raman, Clinical Director of Behavioral Health, Lumina",
      },
    ],
  },
];

export function getLocalService(slug: string) {
  return services.find((service) => service.slug === slug);
}
