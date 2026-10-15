import { z } from "zod";

export const publishStatus = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

export const adminRole = z.enum(["ADMIN", "EDITOR", "VIEWER"]);

export const staffSchema = z.object({
  email: z
    .email("Enter a valid email address")
    .max(200, "Email is too long"),
  name: z.string().trim().max(160),
  role: adminRole,
});

export type StaffInput = z.infer<typeof staffSchema>;

export const providerSchema = z.object({
  id: z.string().optional(),
  slug: z
    .string()
    .trim()
    .min(2, "Slug is required")
    .max(96)
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens"),
  displayName: z.string().trim().min(2, "Name is required").max(160),
  credentials: z.string().trim().min(1, "Credentials are required").max(40),
  specialty: z.string().trim().min(2, "Specialty is required").max(80),
  languages: z.string().trim().max(200),
  bio: z.string().trim().min(20, "Add a short biography").max(4000),
  photoUrl: z.string().trim().url().optional().or(z.literal("")),
  location: z.string().trim().min(2, "Location is required").max(120),
  acceptingNew: z.coerce.boolean(),
  sortOrder: z.coerce.number().int().min(0).max(999),
  status: publishStatus,
});

export type ProviderInput = z.infer<typeof providerSchema>;

export const articleSchema = z.object({
  id: z.string().optional(),
  slug: z
    .string()
    .trim()
    .min(2, "Slug is required")
    .max(96)
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens"),
  title: z.string().trim().min(4, "Title is required").max(200),
  category: z.string().trim().min(2, "Category is required").max(60),
  excerpt: z.string().trim().min(20, "Add a short summary").max(400),
  body: z.string().trim().min(50, "Add the article body"),
  authorSlug: z.string().trim().max(96).optional().or(z.literal("")),
  readingMinutes: z.coerce.number().int().min(1).max(60),
  featured: z.coerce.boolean(),
  status: publishStatus,
});

export type ArticleInput = z.infer<typeof articleSchema>;

export function parseBodyBlocks(body: string) {
  return body
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const heading = block.match(/^##\s+(.*)$/);
      if (heading) return { kind: "h2" as const, text: heading[1] };
      if (block.startsWith("- ")) {
        return {
          kind: "list" as const,
          items: block
            .split("\n")
            .map((line) => line.replace(/^-\s+/, "").trim())
            .filter(Boolean),
        };
      }
      return { kind: "p" as const, text: block.replace(/\n/g, " ") };
    });
}
