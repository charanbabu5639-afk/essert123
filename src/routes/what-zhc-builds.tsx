import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  DefList,
  Faqs,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const TITLE = "What ZHC Builds — categories a specification can produce | Essert";
const DESC =
  "New enterprise applications, modernization, customer-facing portals, security and compliance platforms, and enterprise agents and AI systems — produced under one governed lifecycle.";

export const Route = createFileRoute("/what-zhc-builds")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: WhatWeBuild,
});

const CATEGORIES = [
  {
    id: "new-enterprise-applications",
    num: "01",
    title: "New enterprise applications",
    constraint:
      "New systems are typically constrained by engineering capacity, not idea quality — the backlog outpaces the team.",
    specification:
      "The functional requirements, the data it operates on, and the constraints it must respect.",
    executes:
      "The full build-through-deployment lifecycle against that specification, under MADAM's governance.",
    receives:
      "A production application matching the specification, deployed under the enterprise's chosen posture.",
  },
  {
    id: "application-modernization",
    num: "02",
    title: "Application modernization",
    constraint:
      "Legacy systems carry operational risk and block change, but full rewrites are typically too slow and too risky to schedule.",
    specification:
      "The legacy system's current behavior, the target behavior, and any migration constraints.",
    executes:
      "Production of the modernized system against that specification, validated against the legacy behavior it replaces.",
    receives: "A modernized production system with ownership and portability defined up front.",
  },
  {
    id: "customer-facing-portals",
    num: "03",
    title: "Customer-facing portals",
    constraint:
      "Customer-facing systems carry higher scrutiny — on security, on uptime, and on data handling — than internal tools.",
    specification: "The customer journeys the portal must support and the data it will handle.",
    executes:
      "Production of the portal under the same security and validation stages as any other ZHC output.",
    receives: "A deployed, governed customer-facing system.",
  },
  {
    id: "security-compliance-platforms",
    num: "04",
    title: "Security and compliance platforms",
    constraint:
      "Security and compliance systems must be defensible under audit, which raises the bar on traceability and control, not just functionality.",
    specification:
      "The control framework, evidence requirements, and reporting the platform must support.",
    executes:
      "Production against that control framework, with MADAM's policy enforcement applied to the platform's own operation.",
    receives: "A production compliance platform with a defined, auditable control posture.",
    note: "See also CyberGRC, Essert's own packaged application portfolio in this category.",
  },
  {
    id: "enterprise-agents-ai",
    num: "05",
    title: "Enterprise agents and AI systems",
    constraint:
      "Enterprises want agentic systems in production, but without a governance answer, the risk of ungoverned agent behavior blocks deployment.",
    specification: "What the agent or AI system is permitted to do, access, and decide.",
    executes:
      "Production of the system under MADAM's model, tool, and access controls from the first stage.",
    receives: "A governed agentic system in production, not a prototype.",
  },
];

function WhatWeBuild() {
  return (
    <>
      <PageHero
        kicker="What ZHC builds"
        title="What ZHC builds."
        lede="These are the categories of system a specification can produce through ZHC — not a services menu. Each one is a system a customer specified and ZHC produced, under the same governed lifecycle described in How ZHC Works. This is different from CyberGRC, Essert's own application portfolio, available to buy directly."
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      {CATEGORIES.map((c, i) => (
        <Section key={c.id} id={c.id} tone={i % 2 === 1 ? "surface" : "default"} bordered={i !== 0}>
          <div className={cn("grid gap-10 lg:grid-cols-12", i % 2 === 1 && "lg:[direction:rtl]")}>
            <div className="lg:col-span-5 lg:[direction:ltr]">
              <p className="font-mono text-sm text-muted-foreground">{c.num}</p>
              <h2 className="display-md mt-4">{c.title}</h2>
              <p className="lede mt-6">{c.constraint}</p>
              <div className="mt-8">
                <CtaLink to="/executive-briefing" variant="outline">
                  Book an Executive Briefing
                </CtaLink>
              </div>
            </div>
            <div className="lg:col-span-7 lg:[direction:ltr]">
              <DefList
                items={[
                  { term: "What the specification defines", detail: c.specification },
                  { term: "What ZHC executes", detail: c.executes },
                  { term: "What the customer receives", detail: c.receives },
                ]}
              />
              <div className="mt-6">
                <PendingNote>
                  Closest production outcome: production story link required.
                  {c.note ? ` ${c.note}` : ""}
                </PendingNote>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="surface">
        <Faqs
          items={[
            {
              q: "Is this the same as CyberGRC?",
              a: "No. This page describes systems ZHC produces to a customer's specification. CyberGRC is Essert's own packaged application portfolio, sold as a product.",
            },
            {
              q: "Does Essert build this, or do we build it ourselves?",
              a: "Both models exist. Delivered with ZHC means a defined outcome is delivered using ZHC. Adopt ZHC means the customer operates ZHC directly.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Bring the system you need in production." />
    </>
  );
}
