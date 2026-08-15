import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  ClosingCta,
  Container,
  CtaLink,
  DefList,
  Faqs,
  Kicker,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { PipelineColumn, PlatformArchitecture, LifecycleDiagram } from "@/components/site/diagrams";

const TITLE = "Essert — Your specification becomes your production system";
const DESC =
  "ZHC — Zero Human Coding™ is Essert's platform for autonomous software production: specification to production under continuous human control.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container>
          <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-28">
            <div className="lg:col-span-7">
              <Kicker>ZHC — Zero Human Coding™ · Autonomous software production</Kicker>
              <h1 className="display-xl mt-6">
                Your specification becomes your production system.
              </h1>
              <p className="lede mt-7">
                ZHC is Essert's platform for autonomous software production. It governs the full
                lifecycle — from a defined specification through build, validation, security, and
                deployment — with human intent and control at every stage, not human coding at every
                step.
              </p>
              <p className="mt-5 font-mono text-sm text-foreground">
                Human control. Autonomous execution.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>
                <CtaLink to="/what-zhc-builds" variant="outline">
                  See What ZHC Builds
                </CtaLink>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-8">
              <PipelineColumn />
            </div>
          </div>
        </Container>
      </section>

      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Kicker>One constraint</Kicker>
            <h2 className="display-md mt-5">
              Enterprise software delivery has one constraint wearing four names.
            </h2>
            <p className="lede mt-6">
              Speed, cost, engineering capacity, and governance read as four separate problems
              inside most enterprises. They are one problem: the distance between a specification
              and a production system is too long, too expensive, and too hard to govern. ZHC is
              built to shorten that distance without removing the control an enterprise requires
              over what gets built and how.
            </p>
          </div>
          <ol className="divide-y divide-border border-t border-border lg:col-span-5 lg:border-t-0">
            {["Speed", "Cost", "Capacity", "Governance"].map((n, i) => (
              <li key={n} className="flex items-baseline justify-between py-6">
                <span className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{n}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Section 3" title="In production. Measured." />
        <div className="mt-8 max-w-3xl space-y-6">
          <PendingNote>
            Approved metric required — pending confirmation of one production story, including exact
            dates, what was counted, and live-production vs. production-ready/accepted status. One
            approved framing pattern: “34,000 lines of specification converted into a production
            system in six weeks.” This framing is not yet cleared for publication until the
            surrounding measurement definition is finalized.
          </PendingNote>
          <ArrowLink to="/outcomes">See the full story</ArrowLink>
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="Section 4"
          title="What ZHC builds"
          lede="New enterprise applications. Modernized systems replacing legacy platforms. Customer-facing portals. Security and compliance platforms. Enterprise agents and AI systems. Every category is a system a customer specified and ZHC produced — not a service Essert performed."
        />
        <div className="mt-10">
          <DefList
            items={[
              { term: "01 — New enterprise applications", detail: "Systems constrained by engineering capacity, not idea quality." },
              { term: "02 — Application modernization", detail: "Legacy behavior specified, modernized, and validated against what it replaces." },
              { term: "03 — Customer-facing portals", detail: "Higher scrutiny on security, uptime, and data handling than internal tools." },
              { term: "04 — Security and compliance platforms", detail: "Defensible under audit: traceability and control, not just functionality." },
              { term: "05 — Enterprise agents and AI systems", detail: "Governed agentic systems in production, not prototypes." },
            ]}
          />
          <div className="mt-8">
            <ArrowLink to="/what-zhc-builds">See what ZHC builds in detail</ArrowLink>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead
              kicker="Section 5"
              title="A control plane and a governed agent fleet — operating as one system."
              lede="ZHC is not a single model and not a single tool. It is a control plane that holds the specification, the constraints, and the intent, paired with a governed fleet of agents that execute against them. The two operate as one system, not as a chain of disconnected tools a team assembles by hand."
            />
            <div className="mt-8">
              <ArrowLink to="/platform/how-it-works">How ZHC works</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <PlatformArchitecture />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="Section 6"
          title="One lifecycle, continuously governed."
          lede="Intent and controls → Define → Build → Validate → Secure → Deploy → Operate → Transfer or continue. MADAM — Essert's agentic governance layer — runs across every stage: deploying and monitoring agents, enforcing policy, and managing AI security posture, model access, and tool access."
        />
        <div className="mt-10">
          <LifecycleDiagram />
        </div>
        <div className="mt-8">
          <ArrowLink to="/platform/madam">What is MADAM?</ArrowLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          kicker="Section 7"
          title="You control where it runs, what it touches, and who owns it."
          lede="Security architecture, data handling and residency, code ownership and portability, and a deployment path that runs from an Essert-hosted environment to infrastructure you fully control. No capability here is described as available before it is available."
        />
        <div className="mt-8">
          <ArrowLink to="/trust">Review enterprise control</ArrowLink>
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="Section 8"
          title="CyberGRC — an application portfolio built using ZHC."
          lede="CyberGRC is a flat catalog of enterprise governance, risk, and compliance applications, available to evaluate today. It is independently purchasable — it does not require a ZHC platform engagement."
        />
        <div className="mt-8 max-w-3xl space-y-6">
          <PendingNote>Approved customer logos required.</PendingNote>
          <div className="flex flex-wrap gap-3">
            <CtaLink to="/cybergrc/contact-sales">Contact Sales</CtaLink>
            <CtaLink to="/cybergrc" variant="outline">
              Browse the catalog
            </CtaLink>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Section 9" title="Two systems. Exact status. Exact scope." />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <PendingNote>
            Production-story summary card one — specification size, timeline, and exact production
            status. Never “production-grade” alone.
          </PendingNote>
          <PendingNote>
            Production-story summary card two — specification size, timeline, and exact production
            status.
          </PendingNote>
        </div>
        <div className="mt-8">
          <ArrowLink to="/outcomes">See all outcomes</ArrowLink>
        </div>
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "What is ZHC?",
              a: "ZHC — Zero Human Coding™ — is Essert's platform for autonomous software production. It carries an enterprise specification through build, validation, security, and deployment under continuous human control.",
            },
            {
              q: "What is CyberGRC?",
              a: "CyberGRC is Essert's portfolio of enterprise GRC applications, built using ZHC and available to buy independently of a ZHC engagement.",
            },
            {
              q: "How does CyberGRC relate to ZHC?",
              a: "CyberGRC applications are built using ZHC. CyberGRC is not a separate platform — it is evidence of what ZHC produces, packaged and sold as a product.",
            },
          ]}
        />
      </Section>

      <ClosingCta
        title="Tell us the system you need in production."
        body="A briefing is a conversation about one enterprise use case — its scope, its constraints, and its timeline — not a sales pitch."
      />
    </>
  );
}
