"use client";

import { useActionState } from "react";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { brandButton } from "@/components/ui/button-link";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const initial: ContactState = { status: "idle" };

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-ring/20 aria-invalid:border-destructive";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-3xl bg-accent p-10"
      >
        <CircleCheck className="size-10 text-primary" aria-hidden="true" />
        <h2 className="text-2xl font-bold">Message envoyé</h2>
        <p className="leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form
      action={action}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-10"
    >
      {state.status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
        >
          {state.message}
        </p>
      )}

      <div className="hidden" aria-hidden="true">
        <label>
          Site web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nom complet" htmlFor="name" error={e.name} required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={v.name}
            aria-invalid={!!e.name}
            aria-describedby={e.name ? "name-error" : undefined}
            className={cn(fieldClass, "h-12")}
            placeholder="Votre nom"
          />
        </Field>
        <Field
          label="E-mail professionnel"
          htmlFor="email"
          error={e.email}
          required
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? "email-error" : undefined}
            className={cn(fieldClass, "h-12")}
            placeholder="vous@entreprise.com"
          />
        </Field>
        <Field label="Entreprise" htmlFor="company">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            defaultValue={v.company}
            className={cn(fieldClass, "h-12")}
            placeholder="Nom de l’entreprise"
          />
        </Field>
        <Field label="Service souhaité" htmlFor="service">
          <select
            id="service"
            name="service"
            defaultValue={v.service ?? ""}
            className={cn(fieldClass, "h-12")}
          >
            <option value="">Sélectionner une option</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Autre">Autre / je ne sais pas encore</option>
          </select>
        </Field>
      </div>

      <Field label="Votre projet" htmlFor="message" error={e.message} required>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={v.message}
          aria-invalid={!!e.message}
          aria-describedby={e.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y py-3 leading-relaxed")}
          placeholder="Parlez-nous de vos objectifs, de vos délais et de vos contraintes…"
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 size-4 shrink-0 accent-primary"
            aria-invalid={!!e.consent}
            aria-describedby={e.consent ? "consent-error" : undefined}
          />
          J’accepte qu’Open Futur utilise ces informations pour me recontacter
          au sujet de mon projet.
        </label>
        {e.consent && (
          <p id="consent-error" className="mt-1.5 text-sm text-destructive">
            {e.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className={cn(brandButton({ size: "lg" }), "self-start")}
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer le message
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
