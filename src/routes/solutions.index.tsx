import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, ClosingCta, PageHero, Section } from "@/components/site/primitives";
import { Annotation } from "@/components/site/brand";

const TITLE = "Solutions — Systems produced by ZHC | Essert";
const DESC =
  "CyberGRC is in production today. Future solutions extend the same constraint model to other business functions.";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <PageHero
        kicker="01 / Solutions"
        title="Systems produced by ZHC."
        lede="Each solution is a production output of the same system, not a separate product line built by a separate team."
      />

      <Section index="02" label="In production">
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {[
            {
              k: "CyberGRC",
              d: "Compliance and governance applications, produced with ZHC and running in production.",
              to: "/cybergrc",
              state: "IN PRODUCTION",
            },
            {
              k: "Application catalog",
              d: "The full CyberGRC application portfolio, application by application.",
              to: "/cybergrc/applications",
              state: "IN PRODUCTION",
            },
          ].map((c) => (
            <div key={c.k} className="bg-background p-7">
              <Annotation tone="cobalt">{c.state}</Annotation>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{c.k}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <div className="mt-7">
                <ArrowLink to={c.to}>Open</ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" label="Future solutions" tone="paper">
        <h2 className="display-md max-w-3xl">Business-function autonomy.</h2>
        <p className="lede mt-6">
          ZHC governs software production. ZHB extends the model to brand production. Further systems
          follow the same rule: identify the constraint, place the human gates, automate what sits
          between them.
        </p>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {[
            ["ZHB — Brand production", "NEXT"],
            ["Business-function systems", "PLANNED"],
            ["Fully autonomous enterprises", "DIRECTION"],
          ].map(([k, s]) => (
            <li key={k} className="flex flex-wrap items-baseline justify-between gap-4 py-5">
              <span className="text-lg font-medium">{k}</span>
              <Annotation>{s}</Annotation>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ArrowLink to="/what-we-build">What ZHC builds</ArrowLink>
        </div>
      </Section>

      <ClosingCta title="Start with the specification." />
    </>
  );
}
