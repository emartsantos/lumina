import type { Story } from "@/lib/types";

export const stories: Story[] = [
  {
    slug: "story-amara",
    client: "A. R.",
    sector: "Virtual primary care",
    specialtySlug: "family-medicine",
    title: "Same week care for a persistent cough",
    summary: "A member was able to connect with a clinician the same week and get a clear care plan without taking time off work.",
    year: "2025",
    services: ["Virtual visits", "Prescription support", "Care guidance"],
    featured: true,
    challenge: "Long wait times were making it hard for the member to seek care for a persistent cough.",
    approach: [
      "Booked a secure video visit within days of reaching out.",
      "Clinician reviewed symptoms and history in a focused visit.",
      "Clear follow up steps and home care guidance were provided.",
      "Open pathway to follow up if symptoms changed.",
    ],
    results: [
      { value: "5 days", label: "Time to visit" },
      { value: "12 min", label: "Average wait time" },
      { value: "3", label: "Follow up visits scheduled" },
    ],
    quote: {
      text: "The visit was quick and clear. I knew exactly what to do next and didn't have to miss a full day of work.",
      author: "A. R.",
      role: "Lumina member since 2024",
    },
    detail: [
      {
        kind: "h2",
        text: "Getting care without the wait",
      },
      {
        kind: "p",
        text: "The member reached out when a lingering cough was interfering with daily life. They were able to book a virtual visit in the same week and connect with a clinician from a quiet, private space at home.",
      },
      {
        kind: "p",
        text: "After reviewing symptoms and relevant history, the clinician laid out a clear care plan. The member left the visit knowing the next steps and when to follow up.",
      },
      {
        kind: "list",
        items: [
          "Same week video visit with a licensed clinician",
          "Clear instructions for home care",
          "Easy way to follow up if symptoms changed",
        ],
      },
      {
        kind: "quote",
        text: "The visit was quick and clear. I knew exactly what to do next and didn't have to miss a full day of work.",
        attribution: "A. R., Lumina member since 2024",
      },
    ],
  },
  {
    slug: "story-delgado",
    client: "The Delgado family",
    sector: "Mental health",
    specialtySlug: "mental-health",
    title: "Support for a teen navigating anxiety",
    summary: "The family found timely, compassionate mental health support in a private virtual setting.",
    year: "2025",
    services: ["Mental health visits", "Care coordination", "Ongoing support"],
    featured: true,
    challenge: "The family was concerned about rising anxiety for their teen and didn't know where to start.",
    approach: [
      "Private consultation to understand concerns and preferences.",
      "Matched with a licensed clinician experienced in adolescent care.",
      "Developed coping strategies and a safety plan together.",
      "Scheduled a visit to check in over time.",
    ],
    results: [
      { value: "7 days", label: "Time to first appointment" },
      { value: "4", label: "Visits to reach a care plan" },
      { value: "90%", label: "Attendance at follow up visits" },
    ],
    quote: {
      text: "We felt heard. Our teen was comfortable, and we finally had a plan.",
      author: "The Delgado family",
      role: "Lumina member since 2025",
    },
    detail: [
      {
        kind: "h2",
        text: "A safe place to start",
      },
      {
        kind: "p",
        text: "The family reached out feeling unsure about how to help their teen. Through a secure virtual visit, they were able to speak openly in a calm, supportive environment.",
      },
      {
        kind: "p",
        text: "The clinician worked with the family and teen to build practical coping tools and a clear care plan. Regular check ins helped keep things on track.",
      },
      {
        kind: "list",
        items: [
          "Private, secure video visits",
          "Age appropriate support focused on practical tools",
          "Ongoing follow up with the same care team",
        ],
      },
      {
        kind: "quote",
        text: "We felt heard. Our teen was comfortable, and we finally had a plan.",
        attribution: "The Delgado family, Lumina member since 2025",
      },
    ],
  },
  {
    slug: "story-marcus",
    client: "Marcus T.",
    sector: "Dermatology",
    specialtySlug: "dermatology",
    title: "Timely care for a skin concern",
    summary: "A member got a clear evaluation and plan for a persistent skin issue without a trip to a clinic.",
    year: "2025",
    services: ["Virtual dermatology", "Photo review", "Care guidance"],
    featured: false,
    challenge: "A persistent skin concern was causing discomfort, but the nearest clinic appointment was weeks away.",
    approach: [
      "Submitted photos and a short history before the visit.",
      "Connected with a licensed dermatologist virtually.",
      "Received clear guidance and next steps for care.",
      "A path to follow up if changes occurred.",
    ],
    results: [
      { value: "3 days", label: "Time to appointment" },
      { value: "95%", label: "Member satisfaction" },
      { value: "1", label: "Visit to clarify next steps" },
    ],
    quote: {
      text: "It was easy to upload photos and talk through it. I had a plan the same week.",
      author: "Marcus T.",
      role: "Lumina member since 2024",
    },
    detail: [
      {
        kind: "h2",
        text: "Care from a convenient setting",
      },
      {
        kind: "p",
        text: "By sharing photos and a brief history ahead of time, the dermatologist was able to review the concern before the video visit and use time efficiently.",
      },
      {
        kind: "p",
        text: "The member received clear guidance and knew when to follow up. The visit fit into their schedule without a long trip.",
      },
      {
        kind: "list",
        items: [
          "Photo review before the visit",
          "Licensed dermatology clinician",
          "Clear next steps without an unnecessary trip to a clinic",
        ],
      },
      {
        kind: "quote",
        text: "It was easy to upload photos and talk through it. I had a plan the same week.",
        attribution: "Marcus T., Lumina member since 2024",
      },
    ],
  },
  {
    slug: "story-sue",
    client: "S. M.",
    sector: "Chronic care",
    specialtySlug: "chronic-care",
    title: "Staying on track with chronic care",
    summary: "Regular virtual check ins helped a member stay consistent with their care plan and feel more confident day to day.",
    year: "2026",
    services: ["Chronic care check ins", "Care coordination", "Lifestyle guidance"],
    featured: true,
    challenge: "Managing a chronic condition was feeling overwhelming between busy work and family responsibilities.",
    approach: [
      "Scheduled regular check ins with a consistent clinician.",
      "Reviewed medications, goals, and any changes over time.",
      "Adjusted care plan in small, practical steps.",
      "Connected to helpful resources when needed.",
    ],
    results: [
      { value: "6 months", label: "Consistent follow up" },
      { value: "3", label: "Visits to reach a care plan" },
      { value: "95%", label: "Adherence to follow up visits" },
    ],
    quote: {
      text: "Knowing I can check in regularly gives me peace of mind. I feel more in control of my health.",
      author: "S. M.",
      role: "Lumina member since 2024",
    },
    detail: [
      {
        kind: "h2",
        text: "Small steps over time",
      },
      {
        kind: "p",
        text: "The member built a relationship with the same clinician over a series of virtual visits. Together, they focused on small, realistic goals that fit into a busy life.",
      },
      {
        kind: "p",
        text: "By checking in regularly, they could adjust the plan as needed and catch small changes early. That made managing their condition feel less overwhelming.",
      },
      {
        kind: "list",
        items: [
          "Consistent clinician for continuity of care",
          "Realistic goals tailored to daily life",
          "Regular check ins from the comfort of home",
        ],
      },
      {
        kind: "quote",
        text: "Knowing I can check in regularly gives me peace of mind. I feel more in control of my health.",
        attribution: "S. M., Lumina member since 2024",
      },
    ],
  },
];
