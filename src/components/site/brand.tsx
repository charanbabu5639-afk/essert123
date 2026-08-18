import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** 01 / AUTONOMOUS PRODUCTION */
export function SystemLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mono-label flex items-center gap-2", className)}>
      {index ? <span className="text-cobalt">{index} /</span> : null}
      <span className="text-muted-foreground">{children}</span>
    </p>
  );
}

/** STATE: VERIFIED */
export function Annotation({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  tone?: "muted" | "cobalt" | "fuchsia";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[0.625rem] uppercase tracking-[0.18em]",
        tone === "muted" && "text-muted-foreground",
        tone === "cobalt" && "text-cobalt",
        tone === "fuchsia" && "text-fuchsia",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** 6 COL / 10 GUTTER / 13 PX BASELINE */
export function Measure({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-6 bg-border-strong" aria-hidden />
      <Annotation>{children}</Annotation>
      <span className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}

export function DataBlock({
  value,
  label,
  note,
  accent = false,
}: {
  value: string;
  label: string;
  note?: string;
  accent?: boolean;
}) {
  return (
    <div className="border-t border-border pt-5">
      <p
        className={cn(
          "text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.04em]",
          accent && "text-fuchsia",
        )}
      >
        {value}
      </p>
      <p className="mono-label mt-4 text-foreground/80">{label}</p>
      {note ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p> : null}
    </div>
  );
}

export function ProofCard({
  record,
  spec,
  production,
  verification,
  result,
  state = "Pending record",
}: {
  record: string;
  spec: string;
  production: string;
  verification: string;
  result: string;
  state?: string;
}) {
  const rows = [
    ["Specification", spec],
    ["Production", production],
    ["Verification", verification],
    ["Result", result],
  ];
  return (
    <article className="border border-border bg-surface">
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
        <Annotation tone="cobalt">{record}</Annotation>
        <Annotation tone="fuchsia">STATE: {state.toUpperCase()}</Annotation>
      </header>
      <dl className="divide-y divide-border">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-12 gap-4 px-5 py-4">
            <dt className="mono-label col-span-12 text-muted-foreground sm:col-span-4">{k}</dt>
            <dd className="col-span-12 text-sm leading-relaxed sm:col-span-8">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

/** Architectural production diagram: spec → gate → ZHC → production → gate. */
export function ProductionSystemDiagram() {
  const stages = ["Plan", "Build", "Test", "Verify", "Integrate"];
  return (
    <div className="border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <Annotation tone="cobalt">FIG. 01 / PRODUCTION SYSTEM</Annotation>
        <Annotation>12 COL / BASELINE 13PX</Annotation>
      </div>

      <div className="grid-rule p-5 sm:p-7">
        <Node label="Specification" note="INPUT" />
        <Connector />
        <Node label="Human Gate" note="APPROVE SPEC" gate />
        <Connector />

        <div className="border border-cobalt/60 bg-background">
          <div className="flex items-center justify-between border-b border-cobalt/40 px-4 py-2">
            <span className="mono-label text-cobalt">ZHC</span>
            <Annotation tone="cobalt">AUTONOMOUS SYSTEM</Annotation>
          </div>
          <ul className="divide-y divide-border">
            {stages.map((s, i) => (
              <li key={s} className="flex items-center justify-between px-4 py-2.5">
                <span className="text-sm font-medium">{s}</span>
                <Annotation>{String(i + 1).padStart(2, "0")}</Annotation>
              </li>
            ))}
          </ul>
        </div>

        <Connector />
        <Node label="Production" note="OUTPUT" />
        <Connector />
        <Node label="Human Gate" note="APPROVE MERGE" gate />
      </div>
    </div>
  );
}

function Node({ label, note, gate = false }: { label: string; note: string; gate?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border px-4 py-3",
        gate ? "border-border-strong bg-background" : "border-border bg-background",
      )}
    >
      <span className="text-sm font-medium uppercase tracking-[0.02em]">{label}</span>
      <Annotation tone={gate ? "fuchsia" : "muted"}>{note}</Annotation>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-8 items-center justify-center" aria-hidden>
      <span className="h-full w-px bg-border-strong" />
    </div>
  );
}

/** Progressive scroll reveal for the production line. */
export function ProductionLine({
  steps,
}: {
  steps: { index: string; title: string; detail: string; sub?: string[]; autonomous?: boolean }[];
}) {
  const [visible, setVisible] = useState<number>(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i);
            setVisible((v) => Math.max(v, i + 1));
          }
        });
      },
      { rootMargin: "-15% 0px -25% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ol className="relative border-l border-border pl-6 sm:pl-10">
      {steps.map((s, i) => {
        const on = i < visible;
        return (
          <li
            key={s.index}
            data-i={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="relative pb-12 last:pb-0"
          >
            <span
              aria-hidden
              className={cn(
                "absolute -left-[calc(1.5rem+1px)] top-2 h-2 w-2 transition-colors duration-500 sm:-left-[calc(2.5rem+1px)]",
                on ? (s.autonomous ? "bg-cobalt" : "bg-fuchsia") : "bg-border-strong",
              )}
              style={{ transform: "translateX(-3px)" }}
            />
            <div
              className={cn(
                "transition-all duration-500",
                on ? "opacity-100 translate-y-0" : "opacity-35 translate-y-1.5",
              )}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className={cn(
                    "font-mono text-xs tracking-[0.18em]",
                    on ? "text-cobalt" : "text-muted-foreground",
                  )}
                >
                  {s.index}
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{s.title}</h3>
                {s.autonomous ? <Annotation tone="cobalt">AUTONOMOUS</Annotation> : null}
              </div>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
              {s.sub ? (
                <ul className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-5">
                  {s.sub.map((x) => (
                    <li key={x} className="bg-background px-3 py-3 text-center">
                      <span className="mono-label">{x}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
