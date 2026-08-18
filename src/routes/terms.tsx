import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PendingNote, Section } from "@/components/site/primitives";

const TITLE = "Terms — Essert";
const DESC = "Terms governing use of essert.io and Essert production engagements.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero kicker="01 / Legal" title="Terms." lede={DESC} />
      <Section index="02" label="Notice">
        <div className="max-w-2xl">
          <PendingNote>
            Approved terms pending legal review. Code ownership and portability commitments are
            documented under Trust and Control.
          </PendingNote>
        </div>
      </Section>
    </>
  );
}
