"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Field, inputClass, textareaClass } from "@/components/admin/ui";
import { saveProvider } from "./actions";
import { initialActionState } from "@/app/admin/action-state";

type ProviderValue = {
  id?: string;
  slug: string;
  displayName: string;
  credentials: string;
  specialty: string;
  languages: string[];
  bio: string;
  photoUrl: string | null;
  location: string;
  acceptingNew: boolean;
  sortOrder: number;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
};

const empty: ProviderValue = {
  slug: "",
  displayName: "",
  credentials: "",
  specialty: "",
  languages: [],
  bio: "",
  photoUrl: null,
  location: "Virtual — licensed in 32 states",
  acceptingNew: true,
  sortOrder: 0,
  status: "DRAFT",
};

const submitClass =
  "inline-flex h-10 items-center justify-center rounded-xs bg-paper px-5 font-mono text-[0.66rem] uppercase tracking-label text-ink transition-colors hover:bg-accent disabled:opacity-50";

export function ProviderForm({
  provider,
}: {
  provider?: Partial<ProviderValue>;
}) {
  const value = { ...empty, ...provider };
  const [state, formAction, pending] = useActionState(
    saveProvider,
    initialActionState,
  );

  return (
    <form action={formAction} className="flex max-w-3xl flex-col gap-6">
      {value.id ? <input type="hidden" name="id" value={value.id} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Display name"
          htmlFor="displayName"
          error={state.errors?.displayName}
        >
          <input
            id="displayName"
            name="displayName"
            defaultValue={value.displayName}
            className={inputClass}
            placeholder="Dr. Lena Okafor"
          />
        </Field>
        <Field
          label="Credentials"
          htmlFor="credentials"
          hint="e.g. MD, DO, NP-C"
          error={state.errors?.credentials}
        >
          <input
            id="credentials"
            name="credentials"
            defaultValue={value.credentials}
            className={inputClass}
            placeholder="MD"
          />
        </Field>
        <Field label="Slug" htmlFor="slug" error={state.errors?.slug}>
          <input
            id="slug"
            name="slug"
            defaultValue={value.slug}
            className={inputClass}
            placeholder="dr-lena-okafor"
          />
        </Field>
        <Field
          label="Specialty"
          htmlFor="specialty"
          error={state.errors?.specialty}
        >
          <input
            id="specialty"
            name="specialty"
            defaultValue={value.specialty}
            className={inputClass}
            placeholder="Family Medicine"
          />
        </Field>
        <Field
          label="Languages"
          htmlFor="languages"
          hint="Comma separated"
          error={state.errors?.languages}
        >
          <input
            id="languages"
            name="languages"
            defaultValue={value.languages.join(", ")}
            className={inputClass}
            placeholder="English, Spanish"
          />
        </Field>
        <Field
          label="Location"
          htmlFor="location"
          error={state.errors?.location}
        >
          <input
            id="location"
            name="location"
            defaultValue={value.location}
            className={inputClass}
          />
        </Field>
        <Field
          label="Photo URL"
          htmlFor="photoUrl"
          hint="Optional public image URL"
          error={state.errors?.photoUrl}
        >
          <input
            id="photoUrl"
            name="photoUrl"
            defaultValue={value.photoUrl ?? ""}
            className={inputClass}
            placeholder="https://…"
          />
        </Field>
        <Field
          label="Sort order"
          htmlFor="sortOrder"
          error={state.errors?.sortOrder}
        >
          <input
            id="sortOrder"
            name="sortOrder"
            type="number"
            min={0}
            defaultValue={value.sortOrder}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Biography" htmlFor="bio" error={state.errors?.bio}>
        <textarea
          id="bio"
          name="bio"
          rows={6}
          defaultValue={value.bio}
          className={textareaClass}
          placeholder="Biography shown on the public site. Do not include patient information or private contact details."
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Status" htmlFor="status" error={state.errors?.status}>
          <select
            id="status"
            name="status"
            defaultValue={value.status}
            className={inputClass}
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </Field>
        <label className="flex items-end gap-3 pb-2.5 text-sm text-fg-muted">
          <input
            type="checkbox"
            name="acceptingNew"
            defaultChecked={value.acceptingNew}
            className="h-4 w-4 rounded-xs border border-control bg-ink-raised accent-accent"
          />
          Accepting new patients
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={pending} className={submitClass}>
          {pending ? "Saving…" : value.id ? "Save changes" : "Create provider"}
        </button>
        <Link
          href="/admin/providers"
          className="font-mono text-[0.66rem] uppercase tracking-label text-fg-muted hover:text-fg"
        >
          Cancel
        </Link>
        {state.message ? (
          <p
            role="alert"
            className="font-mono text-[0.62rem] uppercase tracking-label text-red-700"
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
