import { useState } from "react";
import { cn } from "@/lib/utils";

export const LIFECYCLE = [
  { stage: "Intent and controls", detail: "The enterprise defines what it needs and the constraints it must operate within." },
  { stage: "Define", detail: "The specification is structured into what ZHC will build against." },
  { stage: "Build", detail: "The governed agent fleet produces the system against the specification." },
  { stage: "Validate", detail: "Output is checked against the specification and constraints." },
  { stage: "Secure", detail: "The system is evaluated against the enterprise's security posture before deployment." },
  { stage: "Deploy", detail: "The system goes live in the chosen deployment environment." },
  { stage: "Operate", detail: "The system runs in production." },
  { stage: "Transfer or continue", detail: "The customer takes ownership and operates independently, or continues under a ZHC engagement." },
];

/** Vertical specification pipeline used in the homepage hero. */
export function PipelineColumn({ stages }: { stages?: string[] }) {
  const list = stages ?? [
    "Specification",
    "Define",
    "Build",
    "Validate",
    "Secure",
    "Deploy",
    "Operate",
  ];
  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <p className="kicker mb-5">Production pipeline</p>
      <ol className="font-mono text-[0.8125rem]">
        {list.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className="flex w-full items-center justify-between border-b border-border py-2.5">
              <span className={cn(i === 0 && "font-medium")}>{s.toUpperCase()}</span>
              <span className="text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Interactive lifecycle: horizontal on desktop, vertical on mobile. */
export function LifecycleDiagram() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="hidden border-y border-border lg:block">
        <ol className="grid grid-cols-8">
          {LIFECYCLE.map((s, i) => (
            <li key={s.stage} className="border-l border-border first:border-l-0">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn(
                  "h-full w-full px-4 py-6 text-left transition-colors duration-200",
                  active === i ? "bg-foreground text-background" : "hover:bg-surface",
                )}
              >
                <span className="font-mono text-[0.6875rem] opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block text-sm font-medium leading-snug">{s.stage}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="border-t border-border px-6 py-8">
          <p className="max-w-3xl text-lg leading-relaxed">{LIFECYCLE[active]?.detail}</p>
        </div>
      </div>

      <ol className="divide-y divide-border border-y border-border lg:hidden">
        {LIFECYCLE.map((s, i) => (
          <li key={s.stage} className="py-5">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[0.6875rem] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium">{s.stage}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** ZHC architecture: control plane + governed agent fleet, governed by MADAM. */
export function PlatformArchitecture() {
  const columns = [
    { title: "Control plane", items: ["Specification", "Constraints", "Policy", "Audit trail"] },
    { title: "Governed agent fleet", items: ["Execution", "Validation", "Security", "Deployment"] },
  ];
  return (
    <div className="rounded-xl border border-border">
      <div className="border-b border-border px-6 py-5 text-center">
        <p className="font-mono text-sm font-medium tracking-[0.18em]">ZHC</p>
        <p className="mt-1 text-xs text-muted-foreground">One system, two operating parts</p>
      </div>
      <div className="grid divide-border sm:grid-cols-2 sm:divide-x">
        {columns.map((c) => (
          <div key={c.title} className="border-b border-border p-6 sm:border-b-0">
            <p className="kicker">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span aria-hidden className="h-1 w-4 bg-border-strong" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border bg-ink px-6 py-5 text-ink-foreground">
        <p className="kicker text-ink-muted">Governance layer</p>
        <p className="mt-2 text-sm">
          MADAM — agent deployment, monitoring, policy enforcement, AI security posture, and model,
          tool and access controls across every stage.
        </p>
      </div>
    </div>
  );
}

/** Deployment continuum: horizontal on desktop, vertical on mobile. */
export function DeploymentContinuum() {
  const models = [
    { name: "Essert Cloud", detail: "Essert-hosted environment." },
    { name: "Dedicated Managed Environment", detail: "A dedicated environment operated by Essert." },
    { name: "Customer Cloud", detail: "Customer's own cloud account or VPC." },
    {
      name: "Sovereign Deployment",
      detail: "Customer-controlled infrastructure, including supported on-premises configurations.",
    },
  ];
  return (
    <ol className="grid divide-y divide-border border border-border lg:grid-cols-4 lg:divide-x lg:divide-y-0">
      {models.map((m, i) => (
        <li key={m.name} className="p-6">
          <span className="font-mono text-[0.6875rem] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-sm font-medium">{m.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
        </li>
      ))}
    </ol>
  );
}

/** Generic linear flow, used on data residency / code ownership pages. */
export function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s} className="bg-background p-6">
          <span className="font-mono text-[0.6875rem] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-sm font-medium leading-snug">{s}</p>
        </li>
      ))}
    </ol>
  );
}
