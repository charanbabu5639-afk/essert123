import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  ClosingCta,
  DefList,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";

export const Route = createFileRoute("/outcomes/$storySlug")({
  head: () => ({
    meta: [
      { title: "Production story | Essert Outcomes" },
      {
        name: "description",
        content:
          "A production story states the business problem, specification size, exact timeline, system scope, production status, controls applied, and measurement definition.",
      },
      { property: "og:title", content: "Production story | Essert Outcomes" },
      {
        property: "og:description",
        content:
          "Specification size, exact timeline, system scope, production status, controls, and measurement definition.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StoryTemplate,
});

const FIELDS = [
  "Business problem and intended outcome",
  "Specification size — exact figure and what was counted",
  "Delivery timeline — exact start and end dates",
  "System scope and major components",
  "Restrained architecture overview — high-level only, no proprietary detail",
  "Exact production or customer-acceptance status — one of the two defined statuses, not a blend",
  "Enterprise controls applied",
  "What the customer received",
  "Date and measurement definition — when this was true, and exactly what was measured",
];

function StoryTemplate() {
  const { storySlug } = Route.useParams();
  return (
    <>
      <PageHero
        kicker={`Outcomes → ${storySlug.replace(/-/g, " ")}`}
        title="Production story"
        lede="Descriptive, non-branded story title — e.g. “34,000 Lines of Specification. Six Weeks. In Production.” This story publishes only once every field below is approved."
      />

      <Section bordered={false}>
        <SectionHead kicker="Story template" title="Nine required fields." />
        <DefList
          className="mt-10"
          items={FIELDS.map((f, i) => ({
            term: `${String(i + 1).padStart(2, "0")} — ${f}`,
            detail: <PendingNote>Required. Awaiting approved content.</PendingNote>,
          }))}
        />
        <div className="mt-8">
          <ArrowLink to="/outcomes">Back to all outcomes</ArrowLink>
        </div>
      </Section>

      <ClosingCta title="Discuss a comparable system for your environment." />
    </>
  );
}
