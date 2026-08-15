import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, DefList, PageHero, Section } from "@/components/site/primitives";

const TITLE = "Briefing confirmed | Essert";
const DESC = "Your executive briefing request is confirmed. Here's what happens next.";

export const Route = createFileRoute("/executive-briefing/confirmed")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ExecutiveBriefingConfirmed,
});

function ExecutiveBriefingConfirmed() {
  return (
    <>
      <PageHero
        kicker="Executive briefing → Confirmed"
        title="Your briefing request is in."
        lede="A member of the Essert team will confirm a time directly with you."
      />
      <Section bordered={false}>
        <DefList
          items={[
            {
              term: "Who reaches out",
              detail: "A member of the Essert executive team, matched to the use case you submitted.",
            },
            {
              term: "What to expect",
              detail:
                "A direct conversation about the use case, its scope, and its timeline — not a sales pitch or a general product demo.",
            },
            {
              term: "Timing",
              detail: "Confirmation of a specific time follows separately, by email.",
            },
          ]}
        />
        <div className="mt-8">
          <ArrowLink to="/">Back to home</ArrowLink>
        </div>
      </Section>
    </>
  );
}
