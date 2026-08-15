import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, ClosingCta, PageHero, PendingNote, Section } from "@/components/site/primitives";

const TITLE = "Executive perspectives — Essert Insights";
const DESC =
  "How enterprise leaders evaluate control, ownership, and deployment posture before committing production workloads to ZHC.";

export const Route = createFileRoute("/insights/executive-perspectives")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Topic,
});

function Topic() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Executive perspectives."
        lede="Executive perspectives cover how enterprise leaders evaluate control, ownership, and deployment posture before committing production workloads to ZHC. Trust & Control is the reference for the underlying detail."
      />
      <Section bordered={false}>
        <div className="max-w-3xl space-y-6">
          <PendingNote>Article index to populate at launch.</PendingNote>
          <ArrowLink to="/trust-control">Read Trust & Control</ArrowLink>
        </div>
      </Section>
      <ClosingCta title="Bring your control questions to an executive briefing." />
    </>
  );
}
