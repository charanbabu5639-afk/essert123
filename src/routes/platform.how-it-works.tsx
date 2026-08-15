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

const TITLE = "How ZHC Works — one lifecycle, continuously governed | Essert";
const DESC =
  "ZHC carries a specification through seven governed stages, from intent to production and beyond, with MADAM running across every stage.";

export const Route = createFileRoute("/platform/how-it-works")({
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
        kicker="Platform → How ZHC works"
        title="One lifecycle. Continuously governed."
        lede="ZHC carries a specification through seven stages, from intent to production and beyond. Every stage runs under MADAM, Essert's agentic governance layer — not just the stages a customer happens to review."
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="The lifecycle" title="Intent to production, stage by stage." />
        <div className="mt-10">
          <LifecycleDiagram />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead
              kicker="MADAM"
              title="The governance and operations layer."
              lede="MADAM runs across every stage above."
            />
            <div className="mt-8">
              <ArrowLink to="/platform/madam">Read the full MADAM entity page</ArrowLink>
            </div>
          </div>
          <ul className="divide-y divide-border border-t border-border lg:col-span-6">
            {[
              "Agent deployment and lifecycle management",
              "Monitoring and observability",
              "Policy enforcement and agentic governance",
              "AI security and posture management",
              "Model, tool, and access controls",
            ].map((i) => (
              <li key={i} className="py-4 text-[0.9375rem]">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="Boundaries"
          title="What stays inside the executive briefing"
          lede="Detailed architecture, control mappings, and security-review materials are not published here. They are shared directly as part of the executive briefing process, matched to the specific enterprise environment under discussion. If you need those materials before a briefing, request them directly."
        />
        <div className="mt-8">
          <ArrowLink to="/trust-control/request-security-overview">Request the Security Overview</ArrowLink>
        </div>
      </Section>

      <Section tone="surface">
        <Faqs
          items={[
            {
              q: "What is MADAM?",
              a: "MADAM — Managed Agentic Deployment and Monitoring — is the governance and operations layer that runs across the ZHC lifecycle.",
            },
            {
              q: "Is the full architecture public?",
              a: "No. Public pages describe the operating model and lifecycle. Architecture, control mappings, and security-review materials are shared in an executive briefing or on request via the security overview.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Walk the lifecycle against your own specification." />
    </>
  );
}
