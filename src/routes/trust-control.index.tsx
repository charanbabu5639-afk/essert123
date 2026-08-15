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
import { DeploymentContinuum } from "@/components/site/diagrams";

const TITLE = "Trust & Control — control it, secure it, own it | Essert";
const DESC =
  "Decide where ZHC runs, what it can access, who owns the system it produces, and how portable that system is. The starting point for enterprise evaluation.";

export const Route = createFileRoute("/trust-control/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: TrustPage,
});

const GROUPS = [
  {
    head: "Control and ownership",
    items: [
      {
        label: "Security Architecture",
        detail: "How ZHC's operation and output are secured.",
        to: "/trust-control/security-architecture",
      },
      {
        label: "Data Handling & Residency",
        detail: "Where data lives and how it's governed.",
        to: "/trust-control/data-handling-residency",
      },
      {
        label: "Code Ownership & Portability",
        detail: "What you own, and what it takes to operate independently.",
        to: "/trust-control/code-ownership-portability",
      },
    ],
  },
  {
    head: "Deployment and sovereignty",
    items: [
      {
        label: "Sovereign Deployment",
        detail: "The full deployment continuum, from Essert-hosted to fully customer-controlled.",
        to: "/trust-control/sovereign-deployment",
      },
      {
        label: "Deployment Architecture",
        detail: "How a ZHC-produced system is deployed in your environment.",
        to: "/trust-control/deployment-architecture",
      },
    ],
  },
  {
    head: "Evaluation",
    items: [
      {
        label: "Request the Security Overview",
        detail: "Security and vendor-risk material, without an executive meeting first.",
        to: "/trust-control/request-security-overview",
      },
      {
        label: "Book an Executive Briefing",
        detail: "Architecture and control-mapping questions answered directly.",
        to: "/executive-briefing",
      },
    ],
  },
] as const;

function TrustPage() {
  return (
    <>
      <PageHero
        kicker="Trust & Control"
        title="Can you control, secure, deploy and own this in your environment?"
        lede="Enterprise control means deciding where ZHC runs, what it can access, who owns the system it produces, and how portable that system is. This page is the starting point for evaluating all four."
        actions={
          <>
            <CtaLink to="/trust-control/request-security-overview">Request the Security Overview</CtaLink>
            <CtaLink to="/executive-briefing" variant="outline">
              Book an Executive Briefing
            </CtaLink>
          </>
        }
      />

      <Section bordered={false}>
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.head} className="bg-background p-8">
              <p className="kicker">{g.head}</p>
              <ul className="mt-6 space-y-6">
                {g.items.map((i) => (
                  <li key={i.label}>
                    <ArrowLink to={i.to}>{i.label}</ArrowLink>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          kicker="Deployment continuum"
          title="From Essert-hosted to infrastructure you fully control."
        />
        <div className="mt-10">
          <DeploymentContinuum />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHead
            kicker="What we don't claim"
            title="No implied certifications."
            lede="Essert does not imply independent certifications, assessments, or validations that are not yet publishable. If a specific certification or attestation matters to your evaluation, ask directly — the answer will be exact, not implied."
          />
          <SectionHead
            kicker="Company background"
            title="About Essert lives on one page."
            lede="Company background, leadership, active markets, and intellectual property posture are published on the Company page rather than repeated here."
          />
        </div>
        <div className="mt-8">
          <ArrowLink to="/company">Go to Company</ArrowLink>
        </div>
      </Section>

      <Section tone="surface">
        <Faqs
          items={[
            {
              q: "Is Essert certified against [a specific framework]?",
              a: "No certifications are implied on this site beyond what is explicitly and currently publishable. Ask directly for current status.",
            },
            {
              q: "Does “sovereignty” mean on-premises?",
              a: "No. Sovereignty is a control posture — customer control of infrastructure, data, models, tools, and code — that includes but is not limited to on-premises deployment.",
            },
            {
              q: "Can we deploy this in our own cloud account?",
              a: "Customer Cloud and Sovereign Deployment are both part of the deployment continuum. See Sovereign Deployment for what's available today versus platform direction.",
            },
          ]}
        />
      </Section>

      <ClosingCta
        title="Evaluate ZHC against your own control requirements."
        to="/trust-control/request-security-overview"
        label="Request the Security Overview"
      />
    </>
  );
}
