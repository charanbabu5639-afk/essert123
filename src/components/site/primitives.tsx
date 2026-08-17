import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-7 lg:px-8 xl:px-12", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  tone = "default",
  bordered = true,
  className,
}: {
  children: ReactNode;
  id?: string;
  tone?: "default" | "surface" | "ink";
  bordered?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-32 py-14 sm:py-16 lg:py-24",
        bordered && "rule-t",
        tone === "surface" && "bg-surface",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("kicker", className)}>{children}</p>;
}

export function SectionHead({
  kicker,
  title,
  lede,
  className,
  as: As = "h2",
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {kicker ? <Kicker className="mb-4">{kicker}</Kicker> : null}
      <As className={As === "h1" ? "display-lg" : "display-md"}>{title}</As>
      {lede ? <p className="lede mt-5">{lede}</p> : null}
    </div>
  );
}

/** Page hero used across all inner pages. */
export function PageHero({
  kicker,
  title,
  lede,
  actions,
  children,
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-surface">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <Kicker>{kicker}</Kicker>
            <h1 className="display-lg mt-5">{title}</h1>
            {lede ? <p className="lede mt-6">{lede}</p> : null}
            {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {children ? <div className="lg:col-span-4">{children}</div> : null}
        </div>
      </Container>
    </header>
  );
}

const btnBase =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all duration-200";

export function CtaLink({
  to,
  hash,
  variant = "primary",
  children,
  className,
}: {
  to: string;
  hash?: string;
  variant?: "primary" | "outline" | "ink";
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(
        btnBase,
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:-translate-y-px hover:bg-foreground/90",
        variant === "outline" &&
          "border border-border-strong bg-background text-foreground hover:bg-secondary",
        variant === "ink" && "bg-ink-foreground text-ink hover:opacity-90",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function ArrowLink({
  to,
  hash,
  children,
  className,
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(
        "group inline-flex items-center gap-2 border-b border-foreground/25 pb-1 text-sm font-medium transition-colors hover:border-foreground",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

/** Editorial definition block: label + body, separated by thin rules. */
export function DefList({
  items,
  className,
}: {
  items: { term: string; detail: ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={cn("divide-y divide-border border-t border-border", className)}>
      {items.map((i) => (
        <div key={i.term} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8">
          <dt className="kicker md:col-span-4 md:pt-1">{i.term}</dt>
          <dd className="text-[0.9375rem] leading-relaxed md:col-span-8">{i.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Panel({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border p-6 transition-colors duration-200 sm:p-8",
        tone === "surface" ? "bg-surface" : "bg-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Explicit placeholder for content awaiting approval. Never invent data. */
export function PendingNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-border-strong bg-surface px-5 py-4">
      <p className="kicker mb-2">Pending approved content</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function Faqs({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <Kicker>FAQs</Kicker>
      </div>
      <dl className="divide-y divide-border border-t border-border lg:col-span-8">
        {items.map((i) => (
          <div key={i.q} className="py-6">
            <dt className="text-base font-medium">{i.q}</dt>
            <dd className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
              {i.a}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ClosingCta({
  title,
  body,
  to = "/executive-briefing",
  label = "Book an Executive Briefing",
  secondary,
}: {
  title: string;
  body?: string;
  to?: string;
  label?: string;
  secondary?: ReactNode;
}) {
  return (
    <Section tone="ink" bordered={false}>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="display-md">{title}</h2>
          {body ? (
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">{body}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
          <CtaLink to={to} variant="ink">
            {label}
          </CtaLink>
          {secondary}
        </div>
      </div>
    </Section>
  );
}
