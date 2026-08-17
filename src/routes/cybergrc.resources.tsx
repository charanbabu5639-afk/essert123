import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const TITLE = "CyberGRC Resources — regulatory & compliance guidance | Essert";
const DESC =
  "Regulatory and compliance guidance for CyberGRC buyers, organized by category, without the evaluation depth of the Trust & Control register.";

export const Route = createFileRoute("/cybergrc/resources")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CyberGrcResources,
});

const GROUPS = [
  {
    head: "Regulatory guidance",
    detail: "Framework-by-framework notes on what a CyberGRC application covers today.",
  },
  {
    head: "Buyer FAQs",
    detail: "Answers to common procurement and evaluation questions, organized by topic.",
  },
  {
    head: "Deployment & data handling",
    detail: "Where a CyberGRC application runs and how it handles customer data.",
  },
  {
    head: "Release notes",
    detail: "Changes to application scope, coverage, and availability by application.",
  },
] as const;

function CyberGrcResources() {
  return (
    <>
      <PageHero
        kicker="CyberGRC → Resources"
        title="Resources for evaluating a CyberGRC application."
        lede="This is a lighter, lower-friction register than Trust & Control — regulatory and compliance guidance for buyers evaluating a specific application, not the full platform control register."
        actions={<CtaLink to="/cybergrc/contact-sales">Contact Sales</CtaLink>}
      />

      <Section bordered={false}>
        <div className="grid gap-px bg-border lg:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.head} className="bg-background p-8">
              <p className="kicker">{g.head}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.detail}</p>
              <div className="mt-6">
                <PendingNote>Content for this category is pending publication.</PendingNote>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          kicker="Deeper evaluation"
          title="Need the full platform control register instead?"
          lede="Trust & Control covers security architecture, data handling, deployment, and ownership for the ZHC platform. Use it if your evaluation extends beyond a single CyberGRC application."
        />
        <div className="mt-6">
          <CtaLink to="/trust-control" variant="outline">
            Go to Trust &amp; Control
          </CtaLink>
        </div>
      </Section>

      <ClosingCta
        title="Talk to sales about a specific application."
        to="/cybergrc/contact-sales"
        label="Contact Sales"
      />
    </>
  );
}
