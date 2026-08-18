import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, CtaLink, PageHero, Section } from "@/components/site/primitives";
import { Annotation, ProductionLine } from "@/components/site/brand";

const TITLE = "How ZHC Works — Two human gates | Essert";
const DESC =
  "The ZHC production model: functional specification, human approval, autonomous production, human merge approval, enterprise production.";

export const Route = createFileRoute("/zhc/how-it-works")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHero
        kicker="01 / Production model"
        title="Two human gates. Everything between them is autonomous."
        lede="Humans approve the specification. Agents execute the production. Humans approve the merge. The model is deliberately narrow: control at the boundaries, autonomy inside."
        actions={<CtaLink to="/book-a-demo">Book a Demo</CtaLink>}
      />

      <Section index="02" label="The line">
        <ProductionLine
          steps={[
            {
              index: "01",
              title: "Functional specification",
              detail:
                "Behavior, constraints, interfaces, and acceptance conditions are stated explicitly. The specification is the unit of work.",
            },
            {
              index: "02",
              title: "Human approval",
              detail:
                "Control point one. Nothing enters production until a human accepts the specification as the definition of what will be built.",
            },
            {
              index: "03",
              title: "ZHC autonomous production",
              detail:
                "Agents plan the work, build the system, test it, verify against the specification, and integrate. No human writes the code.",
              sub: ["Plan", "Build", "Test", "Verify", "Integrate"],
              autonomous: true,
            },
            {
              index: "04",
              title: "Human merge approval",
              detail:
                "Control point two. A human reviews the verified result and approves the merge into the production branch.",
            },
            {
              index: "05",
              title: "Enterprise production",
              detail:
                "Working software in the enterprise's own environment, delivered with the code and the production record.",
            },
          ]}
        />
      </Section>

      <Section index="03" label="What each state records" tone="paper">
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {[
            ["Specification accepted", "WHO / WHEN / VERSION"],
            ["Plan produced", "SCOPE / SEQUENCE"],
            ["Build completed", "ARTIFACTS / COMMITS"],
            ["Tests executed", "PASS / FAIL COUNTS"],
            ["Verification result", "STATE: VERIFIED"],
            ["Merge approved", "WHO / WHEN / TARGET"],
          ].map(([k, a]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 bg-background px-5 py-4">
              <span className="text-sm font-medium">{k}</span>
              <Annotation tone="cobalt">{a}</Annotation>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Start with the specification."
        body="Bring one functional specification. We will walk the production line against it."
      />
    </>
  );
}
