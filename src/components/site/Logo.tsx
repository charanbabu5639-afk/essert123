import { cn } from "@/lib/utils";
import logoAsset from "@/assets/essert-logo.png.asset.json";

/** Essert brand mark. */
export function Logo({ tone = "default" }: { tone?: "default" | "ink" }) {
  return (
    <img
      src={logoAsset.url}
      alt="Essert"
      className={cn("h-9 w-auto", tone === "ink" && "invert")}
    />
  );
}
