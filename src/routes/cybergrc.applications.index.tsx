import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  ClosingCta,
  CtaLink,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const TITLE = "CyberGRC Application Catalog | Essert";
const DESC =
  "A flat catalog of CyberGRC applications, discoverable by regulation, standard, and domain tags, with availability status and deployment posture on every card.";

export const Route = createFileRoute("/cybergrc/applications/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Applications,
});

const CARD_FIELDS = [
  "Application name",
  "One-sentence buyer outcome",
  "Regulation, standard, or domain tags",
  "Primary workflow",
  "Availability status",
  "Deployment posture",
  "Contact Sales",
];

function Applications() {
  return (
    <>
      <PageHero
        kicker="CyberGRC → Applications"
        title="The application catalog."
        lede="A flat catalog — no nested product navigation. Discovery is by regulation, standard, and domain tags, with availability status and deployment posture stated on every application."
        actions={<CtaLink to="/cybergrc/contact-sales">Contact Sales</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="Catalog structure" title="What each application card states." />
        <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CARD_FIELDS.map((f, i) => (
            <li key={f} className="bg-background p-6">
              <span className="font-mono text-[0.6875rem] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-medium leading-snug">{f}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-6">
          <PendingNote>
            Authoritative application list required — 10–15 launch-ready applications, filterable by
            regulation/standard/domain tag. Until the list is confirmed, no named
            featured-application placeholders are shown.
          </PendingNote>
          <ArrowLink to="/cybergrc/how-it-works">How CyberGRC applications are produced</ArrowLink>
        </div>
      </Section>

      <ClosingCta
        title="Tell us which workflow you're evaluating."
        to="/cybergrc/contact-sales"
        label="Contact Sales"
      />
    </>
  );
}
