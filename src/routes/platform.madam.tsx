import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  DefList,
  Faqs,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const TITLE = "MADAM — Agentic Governance inside ZHC | Essert";
const DESC =
  "MADAM — Managed Agentic Deployment and Monitoring — is the governance layer inside ZHC: agent lifecycle, monitoring, policy enforcement, AI security posture, and access controls.";

export const Route = createFileRoute("/platform/madam")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: MadamPage,
});

function MadamPage() {
  return (
    <>
      <PageHero
        kicker="Platform → MADAM"
        title="MADAM — Agentic Governance"
        lede="MADAM — Managed Agentic Deployment and Monitoring — is the governance layer inside ZHC. It is how every agent ZHC runs stays deployed, watched, policed, and secured, from the first specification to a running production system."
        actions={
          <>
            <CtaLink to="/trust/security-overview">Request the Security Overview</CtaLink>
            <CtaLink to="/executive-briefing" variant="outline">
              Book an Executive Briefing
            </CtaLink>
          </>
        }
      />

      <Section bordered={false}>
        <SectionHead
          kicker="What MADAM does"
          title="Across the full ZHC lifecycle, not as a bolt-on audit step at the end of it."
        />
        <DefList
          className="mt-10"
          items={[
            {
              term: "Agent deployment and lifecycle management",
              detail: "Every agent ZHC runs is deployed, versioned, and retired under MADAM's control.",
            },
            {
              term: "Monitoring and observability",
              detail: "Agent activity is visible and reviewable, not opaque.",
            },
            {
              term: "Policy enforcement and agentic governance",
              detail:
                "What an agent is permitted to do is a defined, enforced policy, not an assumption.",
            },
            {
              term: "AI security and posture management",
              detail:
                "The security posture of the models and agents in use is actively managed, not a one-time assessment.",
            },
            {
              term: "Model, tool, and access controls",
              detail:
                "Which models an agent can call, which tools it can use, and what it can access are explicit and controlled.",
            },
          ]}
        />
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Why this matters"
              title="What stops an agent from doing something it shouldn't?"
              lede="An enterprise evaluating any platform that runs autonomous agents against its systems needs a direct answer to one question. MADAM is Essert's answer, and it is not a separate purchase — it is built into how ZHC operates."
            />
          </div>
          <div>
            <SectionHead
              kicker="Is MADAM a product?"
              title="No."
              lede="MADAM is a capability inside ZHC, not an independently purchasable product. It cannot be adopted separately from ZHC."
            />
          </div>
        </div>
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "What is MADAM?",
              a: "MADAM — Managed Agentic Deployment and Monitoring — is the governance layer inside ZHC. It is how every agent ZHC runs stays deployed, watched, policed, and secured, from the first specification to a running production system.",
            },
            { q: "Is MADAM purchasable on its own?", a: "No. MADAM is part of how ZHC operates; it is not sold separately." },
            {
              q: "Does MADAM apply to CyberGRC applications too?",
              a: "Yes — CyberGRC applications are built using ZHC, so MADAM's governance applies to their production the same way it applies to any ZHC-produced system.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Review the governance model against your own controls." />
    </>
  );
}
