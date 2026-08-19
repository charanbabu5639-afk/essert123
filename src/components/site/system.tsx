import type { ReactNode } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Essert visual system — architectural blocks, technical icons,
 * micro-grid patterns, connectors, timelines, editorial composition.
 * Monochrome foundation; blue = system signal, pink = production.
 * ------------------------------------------------------------------ */

export type IconKind =
  | "specification"
  | "define"
  | "build"
  | "validate"
  | "secure"
  | "deploy"
  | "operate"
  | "transfer"
  | "governance"
  | "audit"
  | "data"
  | "control"
  | "agents"
  | "production";

const S = 24;

/** Geometric, pixel-line conceptual icon language. No pictograms, no gradients. */
export function TechnicalIcon({
  kind,
  className,
  accent,
}: {
  kind: IconKind;
  className?: string;
  accent?: "none" | "signal" | "production";
}) {
  const a = accent === "signal" ? "var(--signal)" : accent === "production" ? "var(--production)" : "currentColor";
  const px = (x: number, y: number, w = 3, h = 3, fill = "currentColor") => (
    <rect key={`${x}-${y}-${fill}`} x={x} y={y} width={w} height={h} fill={fill} />
  );
  const body: Record<IconKind, ReactNode> = {
    specification: (
      <>
        <rect x="4" y="3" width="13" height="18" />
        {px(7, 7, 7, 1.5)}
        {px(7, 11, 7, 1.5)}
        {px(7, 15, 4, 1.5, a)}
      </>
    ),
    define: (
      <>
        <rect x="3" y="4" width="8" height="7" />
        <rect x="13" y="13" width="8" height="7" />
        <path d="M11 7.5H21M3 16.5h10" />
        {px(19.5, 6, 3, 3, a)}
      </>
    ),
    build: (
      <>
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
        <rect x="8" y="3" width="8" height="8" />
        {px(10.5, 5.5, 3, 3, a)}
      </>
    ),
    validate: (
      <>
        <rect x="3" y="3" width="18" height="18" />
        <path d="M7 12.5l3.5 3.5L17 9" stroke={a} />
      </>
    ),
    secure: (
      <>
        <path d="M12 3l7 3v6c0 4-3 6.5-7 9-4-2.5-7-5-7-9V6l7-3z" />
        {px(10.5, 10.5, 3, 3, a)}
      </>
    ),
    deploy: (
      <>
        <rect x="3" y="15" width="18" height="6" />
        <path d="M12 12V3M8.5 6.5L12 3l3.5 3.5" stroke={a} />
      </>
    ),
    operate: (
      <>
        <rect x="3" y="4" width="18" height="5" />
        <rect x="3" y="12" width="18" height="5" />
        {px(6, 5.5, 2, 2, a)}
        {px(6, 13.5, 2, 2)}
        <path d="M3 20h18" />
      </>
    ),
    transfer: (
      <>
        <rect x="3" y="4" width="7" height="16" />
        <rect x="14" y="4" width="7" height="16" />
        <path d="M10 12h4" stroke={a} />
      </>
    ),
    governance: (
      <>
        <rect x="9" y="3" width="6" height="6" />
        <rect x="3" y="15" width="6" height="6" />
        <rect x="15" y="15" width="6" height="6" />
        <path d="M12 9v3H6v3M12 12h6v3" stroke={a} />
      </>
    ),
    audit: (
      <>
        <rect x="4" y="3" width="16" height="18" />
        {px(7, 7, 10, 1.5)}
        {px(7, 11, 10, 1.5)}
        {px(7, 15, 6, 1.5, a)}
      </>
    ),
    data: (
      <>
        <rect x="4" y="4" width="16" height="4" />
        <rect x="4" y="10" width="16" height="4" />
        <rect x="4" y="16" width="16" height="4" />
        {px(16, 17, 2, 2, a)}
      </>
    ),
    control: (
      <>
        <rect x="3" y="3" width="18" height="18" />
        <path d="M3 9h18M9 9v12" />
        {px(4.5, 4.5, 3, 3, a)}
      </>
    ),
    agents: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" stroke={a} />
      </>
    ),
    production: (
      <>
        <rect x="3" y="8" width="18" height="13" />
        <path d="M7 8V4h10v4" />
        {px(10.5, 13, 3, 3, a)}
      </>
    ),
  };
  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      aria-hidden
      className={cn("h-6 w-6 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      shapeRendering="crispEdges"
    >
      {body[kind]}
    </svg>
  );
}

/** Reusable pixel/micro-grid signature. Subtle technical texture only. */
export function MicroGrid({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "ink";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none",
        tone === "ink" ? "micro-grid-ink opacity-45" : "micro-grid opacity-60",
        className,
      )}
    />
  );
}

/** Large low-opacity architectural blocks behind content. */
export function GeometricBackground({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  const sets = {
    a: [
      "left-[-8%] top-[-14%] h-[380px] w-[420px] bg-lavender/25",
      "right-[-10%] top-[24%] h-[280px] w-[560px] bg-foreground/[0.035]",
      "right-[16%] bottom-[-18%] h-[240px] w-[240px] border border-border",
    ],
    b: [
      "right-[-12%] top-[-10%] h-[420px] w-[480px] bg-foreground/[0.04]",
      "left-[-6%] bottom-[-16%] h-[300px] w-[360px] bg-lavender/20",
    ],
    c: [
      "left-[22%] top-[-20%] h-[360px] w-[300px] bg-lavender/20",
      "right-[-6%] bottom-[-20%] h-[320px] w-[420px] border border-border",
    ],
  } as const;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {sets[variant].map((c) => (
        <div key={c} className={cn("absolute", c)} style={{ borderRadius: 2 }} />
      ))}
    </div>
  );
}

/** Thin vertical/horizontal connector with an optional node. */
export function SystemConnector({
  orientation = "vertical",
  className,
  accent,
}: {
  orientation?: "vertical" | "horizontal";
  className?: string;
  accent?: boolean;
}) {
  if (orientation === "horizontal") {
    return (
      <span
        aria-hidden
        className={cn("h-px flex-1", accent ? "bg-signal/50" : "bg-border-strong", className)}
      />
    );
  }
  return (
    <span aria-hidden className={cn("flex flex-col items-center", className)}>
      <span className={cn("h-6 w-px", accent ? "bg-signal/50" : "bg-border-strong")} />
      <span className={cn("h-1.5 w-1.5", accent ? "bg-signal" : "bg-border-strong")} />
      <span className={cn("h-6 w-px", accent ? "bg-signal/50" : "bg-border-strong")} />
    </span>
  );
}

/** Small technical marker: number + rule, used between sections. */
export function SectionMarker({ from, to }: { from: string; to?: string }) {
  return (
    <div aria-hidden className="flex items-center gap-4 py-2 tech-label text-muted-foreground">
      <span>{from}</span>
      <SystemConnector orientation="horizontal" />
      {to ? <span>{to}</span> : <span className="h-1.5 w-1.5 bg-border-strong" />}
    </div>
  );
}

/** Architectural slab. Level 1 (structural) / 2 (information) / 3 (micro). */
export function ArchitecturalBlock({
  level = 2,
  label,
  title,
  items,
  icon,
  accent = "none",
  className,
  children,
}: {
  level?: 1 | 2 | 3;
  label?: string;
  title?: ReactNode;
  items?: string[];
  icon?: IconKind;
  accent?: "none" | "signal" | "production";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "block-hover relative p-5 sm:p-6",
        level === 1
          ? "bg-ink text-ink-foreground border border-ink-border"
          : "border border-border bg-background",
        level === 3 && "p-4",
        accent === "signal" && "border-l-2 border-l-signal",
        accent === "production" && "border-l-2 border-l-production",
        className,
      )}
      style={{ borderRadius: 2 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {label ? (
            <p className={cn("tech-label", level === 1 ? "text-ink-muted" : "text-muted-foreground")}>
              {label}
            </p>
          ) : null}
          {title ? (
            <p className={cn("mt-2 font-medium leading-snug", level === 1 ? "text-lg" : "text-base")}>
              {title}
            </p>
          ) : null}
        </div>
        {icon ? (
          <TechnicalIcon
            kind={icon}
            accent={accent}
            className={cn(level === 1 ? "text-ink-foreground/80" : "text-foreground/70")}
          />
        ) : null}
      </div>
      {items?.length ? (
        <ul
          className={cn(
            "mt-4 space-y-1.5 font-mono text-[0.75rem]",
            level === 1 ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {items.map((i) => (
            <li key={i} className="flex items-center gap-2.5">
              <span aria-hidden className="h-1 w-2.5 bg-current opacity-50" />
              {i.toUpperCase()}
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  );
}

export type StageDef = {
  stage: string;
  label?: string;
  icon?: IconKind;
  items?: string[];
  detail?: string;
};

/** Stepped, offset block stack — specification descending into production. */
export function BlockStack({ stages, className }: { stages: StageDef[]; className?: string }) {
  const offsets = ["ml-0", "ml-[6%]", "ml-[12%]", "ml-[6%]", "ml-[14%]", "ml-[20%]"];
  return (
    <div className={cn("relative", className)}>
      <MicroGrid className="absolute -left-3 top-2 hidden h-16 w-16 sm:block" />
      <ol className="relative">
        {stages.map((s, i) => {
          const last = i === stages.length - 1;
          const first = i === 0;
          return (
            <li key={s.stage} className={cn("sm:mr-[6%]", offsets[i % offsets.length])}>
              <ArchitecturalBlock
                level={last ? 1 : 2}
                label={`${String(i + 1).padStart(2, "0")} / ${(s.label ?? s.stage).toUpperCase()}`}
                title={s.stage}
                {...(s.items ? { items: s.items } : {})}
                {...(s.icon ? { icon: s.icon } : {})}
                accent={last ? "production" : first ? "signal" : "none"}
              />
              {!last ? (
                <div className="flex justify-center py-1">
                  <SystemConnector accent={first} />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Horizontal editorial timeline on desktop, vertical system on mobile. */
export function SystemTimeline({
  stages,
  className,
}: {
  stages: { stage: string; items?: string[]; detail?: string; icon?: IconKind }[];
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="flex items-center gap-3 tech-label text-muted-foreground">
          {stages.map((s, i) => (
            <span key={s.stage} className="flex flex-1 items-center gap-3">
              <span>{String(i + 1).padStart(2, "0")}</span>
              {i < stages.length - 1 ? <SystemConnector orientation="horizontal" /> : null}
            </span>
          ))}
        </div>
        <div className="relative mt-3 h-px bg-border-strong">
          {stages.map((s, i) => (
            <span
              key={s.stage}
              aria-hidden
              className={cn(
                "absolute top-1/2 h-2 w-2 -translate-y-1/2",
                i === stages.length - 1 ? "bg-production" : i === 0 ? "bg-signal" : "bg-foreground",
              )}
              style={{ left: `calc(${(i / (stages.length - 1)) * 100}% - 4px)` }}
            />
          ))}
        </div>
        <div
          className="mt-6 grid gap-6"
          style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0,1fr))` }}
        >
          {stages.map((s) => (
            <div key={s.stage}>
              {s.icon ? <TechnicalIcon kind={s.icon} className="mb-3 text-foreground/70" /> : null}
              <p className="text-sm font-medium">{s.stage}</p>
              {s.detail ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              ) : null}
              {s.items?.length ? (
                <ul className="mt-3 space-y-1 font-mono text-[0.7rem] text-muted-foreground">
                  {s.items.map((i) => (
                    <li key={i}>{i.toUpperCase()}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* mobile: vertical system */}
      <ol className="lg:hidden">
        {stages.map((s, i) => (
          <li key={s.stage} className="grid grid-cols-[auto_1fr] gap-x-4">
            <div className="flex flex-col items-center">
              <span
                aria-hidden
                className={cn(
                  "mt-1.5 h-2 w-2",
                  i === stages.length - 1 ? "bg-production" : i === 0 ? "bg-signal" : "bg-foreground",
                )}
              />
              {i < stages.length - 1 ? <span className="my-1 w-px flex-1 bg-border-strong" /> : null}
            </div>
            <div className="pb-7">
              <p className="tech-label text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-sm font-medium">{s.stage}</p>
              {s.detail ? (
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              ) : null}
              {s.items?.length ? (
                <ul className="mt-2 space-y-1 font-mono text-[0.7rem] text-muted-foreground">
                  {s.items.map((x) => (
                    <li key={x}>{x.toUpperCase()}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Asymmetric editorial split: statement on one side, system on the other. */
export function EditorialSplit({
  statement,
  system,
  reverse,
  className,
}: {
  statement: ReactNode;
  system: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-10 lg:grid-cols-12 lg:gap-14", className)}>
      <div className={cn("lg:col-span-5", reverse && "lg:order-2 lg:col-start-8")}>{statement}</div>
      <div className={cn("lg:col-span-7", reverse && "lg:order-1 lg:row-start-1")}>{system}</div>
    </div>
  );
}

/** Large numbered editorial chapter opener. */
export function NumberedSection({
  num,
  title,
  lede,
  icon,
  children,
  className,
}: {
  num: string;
  title: ReactNode;
  lede?: ReactNode;
  icon?: IconKind;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-start gap-5">
        <span className="num-xl text-border-strong">{num}</span>
        {icon ? <TechnicalIcon kind={icon} className="mt-2 h-7 w-7 text-foreground/70" /> : null}
      </div>
      <h2 className="display-md mt-6">{title}</h2>
      {lede ? <p className="lede mt-5">{lede}</p> : null}
      {children}
    </div>
  );
}

/** Technical annotation callout — thin rule, mono label, no card chrome. */
export function TechnicalCallout({
  label,
  children,
  accent = "signal",
}: {
  label: string;
  children: ReactNode;
  accent?: "signal" | "production" | "none";
}) {
  return (
    <div
      className={cn(
        "border-l-2 pl-5",
        accent === "signal" && "border-signal",
        accent === "production" && "border-production",
        accent === "none" && "border-border-strong",
      )}
    >
      <p className="tech-label text-muted-foreground">{label}</p>
      <div className="mt-2 text-[0.9375rem] leading-relaxed">{children}</div>
    </div>
  );
}

/** Interactive stage selector used for lifecycle storytelling. */
export function ProcessStage({
  stages,
}: {
  stages: { stage: string; detail: string; icon?: IconKind }[];
}) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="hidden border-y border-border lg:block">
        <ol className="grid" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0,1fr))` }}>
          {stages.map((s, i) => (
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
                <span className="tech-label opacity-70">{String(i + 1).padStart(2, "0")}</span>
                {s.icon ? (
                  <TechnicalIcon kind={s.icon} className="mt-3 h-5 w-5 opacity-80" />
                ) : null}
                <span className="mt-3 block text-sm font-medium leading-snug">{s.stage}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="relative border-t border-border px-6 py-8">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-px bg-signal transition-all duration-300"
            style={{ width: `${((active + 1) / stages.length) * 100}%` }}
          />
          <p className="max-w-3xl text-lg leading-relaxed">{stages[active]?.detail}</p>
        </div>
      </div>
      <div className="lg:hidden">
        <SystemTimeline
          stages={stages.map((s) => ({
            stage: s.stage,
            detail: s.detail,
            ...(s.icon ? { icon: s.icon } : {}),
          }))}
        />
      </div>
    </div>
  );
}
