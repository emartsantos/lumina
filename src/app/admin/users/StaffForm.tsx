"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Field, inputClass } from "@/components/admin/ui";
import { createStaffUser } from "./actions";
import { initialActionState } from "@/app/admin/action-state";

const submitClass =
  "inline-flex h-10 items-center justify-center rounded-xs bg-paper px-5 font-mono text-[0.66rem] uppercase tracking-label text-ink transition-colors hover:bg-accent disabled:opacity-50";

export function StaffForm() {
  const [state, formAction, pending] = useActionState(
    createStaffUser,
    initialActionState,
  );

  return (
    <form action={formAction} className="flex max-w-2xl flex-col gap-6">
      <Field
        label="Email"
        htmlFor="email"
        hint="Must match the email this person uses to sign in with Auth0."
        error={state.errors?.email}
      >
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          placeholder="name@lumina.example"
        />
      </Field>

      <Field
        label="Name"
        htmlFor="name"
        hint="Optional display name."
        error={state.errors?.name}
      >
        <input
          id="name"
          name="name"
          autoComplete="name"
          className={inputClass}
          placeholder="Dr. Lena Okafor"
        />
      </Field>

      <Field
        label="Role"
        htmlFor="role"
        hint="Admins manage users, editors manage content, viewers are read-only."
        error={state.errors?.role}
      >
        <select
          id="role"
          name="role"
          defaultValue="VIEWER"
          className={inputClass}
        >
          <option value="ADMIN">Admin</option>
          <option value="EDITOR">Editor</option>
          <option value="VIEWER">Viewer</option>
        </select>
      </Field>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={pending} className={submitClass}>
          {pending ? "Adding…" : "Add staff"}
        </button>
        <Link
          href="/admin/users"
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
