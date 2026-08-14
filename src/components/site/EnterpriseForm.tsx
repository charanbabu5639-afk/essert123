import { useState } from "react";
import { toast } from "sonner";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
};

export function EnterpriseForm({
  fields,
  submitLabel,
  confirmation,
  note,
}: {
  fields: FieldDef[];
  submitLabel: string;
  confirmation: string;
  note?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8">
        <p className="kicker">Confirmation</p>
        <p className="mt-4 text-lg leading-relaxed">{confirmation}</p>
      </div>
    );
  }

  return (
    <form
      className="rounded-xl border border-border p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        toast.success("Submitted. Our team will follow up.");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div
            key={f.name}
            className={f.type === "textarea" ? "sm:col-span-2" : undefined}
          >
            <label htmlFor={f.name} className="kicker block">
              {f.label}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                name={f.name}
                rows={3}
                required={f.required}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
              />
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
              />
            )}
          </div>
        ))}
      </div>
      {note ? (
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{note}</p>
      ) : null}
      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-px"
      >
        {submitLabel}
      </button>
    </form>
  );
}
