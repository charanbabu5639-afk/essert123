import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const TITLE = "Essert Insights — autonomous software production, governance, sovereignty";
const DESC =
  "Essert's point of view on autonomous software production, agentic governance, and what enterprise sovereignty actually requires.";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Insights,
});

const TOPICS = [
  {
    to: "/insights/autonomous-software-production" as const,
    label: "Autonomous Software Production",
    detail: "The category, and why it's distinct from AI-assisted development.",
  },
  {
    to: "/insights/agentic-governance" as const,
    label: "Agentic Governance",
    detail: "How MADAM's approach generalizes beyond ZHC.",
  },
  {
    to: "/insights/enterprise-sovereignty" as const,
    label: "Enterprise Sovereignty",
    detail: "What real control over deployment, data, and code requires.",
  },
];

function Insights() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Essert's point of view."
        lede="Autonomous software production is a category Essert is defining, not one it's capturing existing demand for. These are our perspectives on what it means for enterprise software delivery, how agentic governance works in practice, and what enterprise sovereignty actually requires."
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="Featured insight" title="Autonomous software production." />
        <div className="mt-8 grid gap-10 border-t border-border pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-xl leading-relaxed">
              Autonomous software production describes enterprise systems produced under governed
              autonomy — a defined specification carried through build, validation, security, and
              deployment without a human performing each step, but with a human defining intent and
              constraints throughout.
            </p>
            <div className="mt-8">
              <CtaLink to="/insights/autonomous-software-production" variant="outline">
                Read the topic
              </CtaLink>
            </div>
          </div>
          <dl className="space-y-4 text-sm lg:col-span-4">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="kicker">Topic</dt>
              <dd>Category definition</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="kicker">Reading time</dt>
              <dd>2 min</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="kicker">Audience</dt>
              <dd>CIO / CTO / CISO</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Topics" title="Three editorial streams." />
        <div className="mt-10 grid gap-px bg-border lg:grid-cols-3">
          {TOPICS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group bg-background p-8 transition-colors hover:bg-secondary"
            >
              <p className="kicker">Topic</p>
              <h3 className="mt-4 text-xl font-semibold">{t.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              <span className="mt-6 inline-block text-sm font-medium">
                Read{" "}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Note: CyberGRC regulatory and compliance guidance lives with CyberGRC, kept separate so
          this section stays focused on the platform and category story.
        </p>
      </Section>

      <Section>
        <SectionHead kicker="Article index" title="Publishing at launch." />
        <div className="mt-8 max-w-3xl">
          <PendingNote>Article index to populate at launch.</PendingNote>
        </div>
      </Section>

      <ClosingCta title="Discuss the category with the team defining it." />
    </>
  );
}
