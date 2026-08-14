import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, ClosingCta, PageHero, PendingNote, Section } from "@/components/site/primitives";

const TITLE = "Autonomous software production — Essert Insights";
const DESC =
  "Enterprise systems produced under governed autonomy: a defined specification carried through build, validation, security, and deployment.";

export const Route = createFileRoute("/insights/autonomous-software-production")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Topic,
});

function Topic() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Autonomous software production."
        lede="Autonomous software production describes enterprise systems produced under governed autonomy — a defined specification carried through build, validation, security, and deployment without a human performing each step, but with a human defining intent and constraints throughout. It is a different category from AI-assisted development, where a human still performs the engineering work with AI support."
      />
      <Section bordered={false}>
        <div className="max-w-3xl space-y-6">
          <PendingNote>Article index to populate at launch.</PendingNote>
          <ArrowLink to="/platform">See how ZHC operationalizes the category</ArrowLink>
        </div>
      </Section>
      <ClosingCta title="Bring the category question to a briefing." />
    </>
  );
}
