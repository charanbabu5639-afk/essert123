import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  ClosingCta,
  CtaLink,
  DefList,
  Faqs,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { PlatformArchitecture, DeploymentContinuum } from "@/components/site/diagrams";

const TITLE = "Platform — ZHC, the platform for autonomous software production | Essert";
const DESC =
  "ZHC is an enterprise operating model, not a tool a developer opens: specification to production under continuous human intent and control, governed by MADAM.";

export const Route = createFileRoute("/platform/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <>
      <PageHero
        kicker="Platform"
        title="The platform for autonomous software production."
        lede="ZHC is an enterprise operating model, not a tool a developer opens. It takes a specification of what an enterprise needs built and carries it through production under continuous human intent and control — governed the entire way by MADAM, Essert's agentic governance layer."
        actions={
          <>
            <CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>
            <CtaLink to="/platform/how-it-works" variant="outline">
              How ZHC Works
            </CtaLink>
          </>
        }
      />

      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead kicker="Category and operating model" title="Autonomous software production is the category ZHC establishes." />
            <p className="lede mt-6">
              Enterprise systems produced under governed autonomy, not assembled by a development
              team using AI-assisted tools. ZHC is the platform that operationalizes it — not a
              coding assistant, a developer tool, a dev shop, or a low-code system.
            </p>
            <DefList
              className="mt-10"
              items={[
                {
                  term: "Human intent and control; autonomous execution",
                  detail:
                    "Every system ZHC produces starts as a human-defined specification with explicit constraints. Execution — the build, validation, and deployment work — is autonomous. Control is not.",
                },
                {
                  term: "Control plane and governed agent fleet",
                  detail:
                    "ZHC has two operating parts. The control plane holds the specification, the constraints, and the governance policy. The governed agent fleet executes against them. They are one system: the fleet does not act outside what the control plane and MADAM permit.",
                },
                {
                  term: "A complete specification-to-production lifecycle",
                  detail:
                    "Define → Build → Validate → Secure → Deploy → Operate → Transfer or continue. Every stage is governed, not just the ones a customer happens to review.",
                },
                {
                  term: "What the customer receives",
                  detail:
                    "A production system matching the specification, built under the enterprise's chosen deployment and control posture, with ownership and portability defined up front, not negotiated after delivery.",
                },
              ]}
            />
            <div className="mt-8">
              <ArrowLink to="/platform/how-it-works">See the full lifecycle</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PlatformArchitecture />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          kicker="Engagement"
          title="Two ways to engage"
          lede="These are two engagement models on one platform, not two products."
        />
        <div className="mt-10 grid gap-px bg-border lg:grid-cols-2">
          <div className="bg-background p-8">
            <p className="kicker">Delivered with ZHC</p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed">
              Essert, the customer, or a joint team delivers a defined production outcome using ZHC.
              This is the fastest path to a specific system in production.
            </p>
          </div>
          <div className="bg-background p-8">
            <p className="kicker">Adopt ZHC</p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed">
              The customer adopts ZHC as its own enterprise production platform, operating it
              directly.
            </p>
            <div className="mt-5">
              <PendingNote>
                This engagement model's dedicated page and packaging are in development. Ask about it
                in an executive briefing today.
              </PendingNote>
            </div>
            <div className="mt-5">
              <ArrowLink to="/platform/adopt">Adopt ZHC</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="Enterprise deployment continuum"
          title="From an Essert-hosted environment to infrastructure the customer fully controls."
        />
        <div className="mt-10">
          <DeploymentContinuum />
        </div>
        <div className="mt-8">
          <ArrowLink to="/trust-control/sovereign-deployment">See the full continuum</ArrowLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Evidence" title="A quantified production outcome" />
        <div className="mt-8 max-w-3xl space-y-6">
          <PendingNote>Approved metric required.</PendingNote>
          <ArrowLink to="/outcomes">See all production outcomes</ArrowLink>
        </div>
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "What is ZHC?",
              a: "ZHC — Zero Human Coding™ — is Essert's platform for autonomous software production, governing specification-to-production under continuous human control.",
            },
            {
              q: "Is ZHC a coding assistant or developer tool?",
              a: "No. ZHC is an enterprise operating model and production platform. It is not sold or operated as a tool inside a developer's workflow.",
            },
            {
              q: "Can I buy ZHC today?",
              a: "Engagement is discussed in an executive briefing. Packaged pricing for the Adopt ZHC model is in development.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Bring one enterprise use case to the table." />
    </>
  );
}
