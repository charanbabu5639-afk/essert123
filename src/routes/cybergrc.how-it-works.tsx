import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  ClosingCta,
  CtaLink,
  Faqs,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { LifecycleDiagram } from "@/components/site/diagrams";

const TITLE = "How CyberGRC works — the ZHC lifecycle behind the catalog | Essert";
const DESC =
  "Every CyberGRC application is produced through ZHC, under the same governed lifecycle stages and the same MADAM governance as any system ZHC produces.";

export const Route = createFileRoute("/cybergrc/how-it-works")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: CyberGrcHowItWorks,
});

function CyberGrcHowItWorks() {
  return (
    <>
      <PageHero
        kicker="CyberGRC → How it works"
        title="How CyberGRC works."
        lede="Every application in the CyberGRC portfolio is produced through ZHC, Essert's platform for autonomous software production — the same governed lifecycle described in How ZHC Works."
        actions={<CtaLink to="/cybergrc/contact-sales">Contact Sales</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead
          kicker="What this means in practice"
          title="The same lifecycle. The same governance."
          lede="CyberGRC applications are specified, built, validated, secured, and deployed under the same lifecycle stages and the same MADAM governance as any system ZHC produces. CyberGRC is evidence of what the platform produces, not a separately engineered product line."
        />
        <div className="mt-10">
          <LifecycleDiagram />
        </div>
        <div className="mt-8">
          <ArrowLink to="/platform/how-it-works">See the platform lifecycle in full</ArrowLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          kicker="Why this matters to you as a buyer"
          title="The posture is the platform's, applied consistently."
          lede="The reliability and security posture behind a CyberGRC application isn't a claim specific to that application — it's the platform's operating model, applied consistently."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink to="/cybergrc/contact-sales">Contact Sales</CtaLink>
          <CtaLink to="/platform/madam" variant="outline">
            What MADAM governs
          </CtaLink>
        </div>
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "What does “built using ZHC” mean for reliability?",
              a: "It means every CyberGRC application passes through the same governed build, validation, and security stages as any ZHC-produced system.",
            },
            {
              q: "Does MADAM govern CyberGRC applications?",
              a: "Yes — MADAM's governance applies to every agent and system ZHC produces, including CyberGRC applications.",
            },
          ]}
        />
      </Section>

      <ClosingCta
        title="Evaluate a CyberGRC application against your controls."
        to="/cybergrc/contact-sales"
        label="Contact Sales"
      />
    </>
  );
}
