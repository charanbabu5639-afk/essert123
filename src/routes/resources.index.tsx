import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, PageHero, Section } from "@/components/site/primitives";
import { Annotation } from "@/components/site/brand";

const TITLE = "Resources — Documentation, research, records | Essert";
const DESC =
  "System documentation, research on the constraint model, and production case records for ZHC.";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Resources,
});

function Resources() {
  return (
    <>
      <PageHero
        kicker="01 / Resources"
        title="The library."
        lede="References for evaluating ZHC: how the system is documented, what has been written about the constraint model, and which production records exist."
      />
      <Section index="02" label="Index">
        <ul className="divide-y divide-border border-y border-border">
          {[
            ["Documentation", "System references and production model", "/zhc/how-it-works", "AVAILABLE"],
            ["Research", "Constraint model and agentic governance", "/insights", "AVAILABLE"],
            ["Case studies", "Production outcomes", "/outcomes", "PARTIAL"],
            ["Security overview", "Provided on request", "/trust/security-overview", "ON REQUEST"],
          ].map(([k, d, to, s]) => (
            <li key={k} className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-8">
              <div className="md:col-span-4">
                <p className="text-lg font-semibold tracking-[-0.02em]">{k}</p>
              </div>
              <p className="text-sm text-muted-foreground md:col-span-5">{d}</p>
              <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                <Annotation tone="cobalt">{s}</Annotation>
                <ArrowLink to={to!}>Open</ArrowLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
