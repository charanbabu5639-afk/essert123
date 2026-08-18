import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PendingNote, Section } from "@/components/site/primitives";

const TITLE = "Privacy — Essert";
const DESC = "How Essert handles personal data submitted through essert.io.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero kicker="01 / Legal" title="Privacy." lede={DESC} />
      <Section index="02" label="Notice">
        <div className="max-w-2xl">
          <PendingNote>
            Approved privacy notice pending legal review. Data handling and residency for production
            systems is documented under Trust and Control.
          </PendingNote>
        </div>
      </Section>
    </>
  );
}
