import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, ClosingCta, PageHero, PendingNote, Section } from "@/components/site/primitives";

const TITLE = "Agentic governance — Essert Insights";
const DESC =
  "Controlling what autonomous agents are allowed to do, access, and decide — before and while they act, not only in review after the fact.";

export const Route = createFileRoute("/insights/agentic-governance")({
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
        title="Agentic governance."
        lede="Agentic governance is the discipline of controlling what autonomous agents are allowed to do, access, and decide — before and while they act, not only in review after the fact. Essert's approach to this, MADAM, is described in full in the Platform section."
      />
      <Section bordered={false}>
        <div className="max-w-3xl space-y-6">
          <PendingNote>Article index to populate at launch.</PendingNote>
          <ArrowLink to="/platform/madam">Read the MADAM page</ArrowLink>
        </div>
      </Section>
      <ClosingCta title="Review governance against your own policy model." />
    </>
  );
}
