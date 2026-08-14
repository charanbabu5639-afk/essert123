import { cn } from "@/lib/utils";

/**
 * Typographic Essert mark.
 * NOTE: the supplied logo image was not provided with this build. Drop the real
 * asset in and swap the <span> mark for an <img> when it is available.
 */
export function Logo({ tone = "default" }: { tone?: "default" | "ink" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className={cn(
          "grid h-7 w-7 place-items-center border",
          tone === "ink"
            ? "border-ink-foreground/40 text-ink-foreground"
            : "border-foreground text-foreground",
        )}
      >
        <span className="font-mono text-[0.8125rem] font-semibold leading-none">E</span>
      </span>
      <span
        className={cn(
          "text-[1.0625rem] font-semibold tracking-[-0.03em]",
          tone === "ink" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        Essert
      </span>
    </span>
  );
}
