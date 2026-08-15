import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  Faqs,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { DeploymentContinuum } from "@/components/site/diagrams";

const TITLE = "Sovereign Deployment — a deployment continuum | Essert";
const DESC =
  "Sovereignty is a control posture, not a synonym for on-premises. ZHC's continuum runs from Essert Cloud to customer-controlled infrastructure.";

export const Route = createFileRoute("/trust/sovereign-deployment")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: SovereignPage,
});

function SovereignPage() {
  return (
    <>
      <PageHero
        kicker="Trust & Control → Sovereign Deployment"
        title="A deployment continuum, not a single option."
        lede="Sovereignty is a control posture, not a synonym for on-premises. ZHC's deployment continuum runs from an Essert-hosted environment to infrastructure the customer fully controls."
        actions={<CtaLink to="/trust/security-overview">Request the Security Overview</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="The deployment continuum" title="Four deployment models." />
        <div className="mt-10">
          <DeploymentContinuum />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              kicker="Complete sovereign posture"
              title="What a complete sovereign posture includes"
            />
          </div>
          <ul className="divide-y divide-border border-t border-border lg:col-span-7">
            {[
              "Customer control of infrastructure and data",
              "Customer control of models, tools, and agent access",
              "Customer ownership of code and the ability to operate independently",
              "Residency, auditability, and regulatory control",
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
          kicker="Status"
          title="Available today vs. platform direction"
          lede="A complete sovereign posture, across all four dimensions above, is the direction of the platform."
        />
        <div className="mt-8 max-w-3xl">
          <PendingNote>
            Exact current-vs-directional breakdown required. This page will state plainly which of
            the four dimensions are available now and which are in development, once that breakdown
            is finalized — not before.
          </PendingNote>
        </div>
      </Section>

      <Section tone="surface">
        <Faqs
          items={[
            {
              q: "What's the difference between Customer Cloud and Sovereign Deployment?",
              a: "Customer Cloud means the system runs in your own cloud account or VPC. Sovereign Deployment means you control the infrastructure directly, including supported on-premises configurations.",
            },
            {
              q: "Is full on-premises deployment available today?",
              a: "Answer required. This page will not claim on-premises availability ahead of confirmation.",
            },
          ]}
        />
      </Section>

      <ClosingCta
        title="Match the continuum to your environment."
        to="/trust/security-overview"
        label="Request the Security Overview"
      />
    </>
  );
}
