import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  Faqs,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const TITLE = "Outcomes — in production. Measured. | Essert";
const DESC =
  "Every outcome states what was specified, what was delivered, over what exact timeline, and whether the system is live in production or production-ready and customer-accepted.";

export const Route = createFileRoute("/outcomes/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Outcomes,
});

function Outcomes() {
  return (
    <>
      <PageHero
        kicker="Outcomes"
        title="In production. Measured."
        lede="Every outcome below states what was specified, what was delivered, over what exact timeline, and whether the system is live in production with real users or production-ready and customer-accepted. We do not collapse these into “production-grade.”"
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="Disclosure standard" title="Production status, defined" />
        <dl className="mt-10 grid gap-px bg-border lg:grid-cols-2">
          <div className="bg-background p-8">
            <dt className="text-lg font-semibold">Live in production</dt>
            <dd className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              The system is deployed and operating with real users today.
            </dd>
          </div>
          <div className="bg-background p-8">
            <dt className="text-lg font-semibold">Production-ready and customer-accepted</dt>
            <dd className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              The system has passed customer acceptance and is ready for production operation.
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm text-muted-foreground">
          We state which one applies to each story below. Neither is described as the other.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Stories" title="Two systems. Exact status. Exact scope." />
        <div className="mt-10 space-y-6">
          <PendingNote>
            Story one — approved production story required. Approved framing pattern: “34,000 lines
            of specification converted into a production system in six weeks.” Not yet cleared for
            publication: exact start/end dates, what was counted as “34,000 lines of
            specification,” what the production system contained, and whether the endpoint was live
            production or customer acceptance.
          </PendingNote>
          <PendingNote>Story two — approved production story required.</PendingNote>
          <PendingNote>
            Approved customer logos required. Displayed only where written permission exists; no logo
            implies endorsement or a specific result beyond what's stated in a linked story.
          </PendingNote>
        </div>
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "What counts as “in production”?",
              a: "A system with real users operating against it today, as distinct from a system that has passed customer acceptance but not yet gone live.",
            },
            {
              q: "How is the specification size measured?",
              a: "Each story defines exactly what was counted before the number is published — see the story page for its specific measurement definition.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Ask for the measurement definition behind any number." />
    </>
  );
}
