import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PendingNote, Section, SectionHead } from "@/components/site/primitives";

const TITLE = "Privacy Policy | Essert";
const DESC = "Essert's privacy policy, covering data collection, use, and retention. Final copy is pending legal review.";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy."
        lede="This page is a scaffold for Essert's privacy policy. Final, legally approved copy replaces the placeholders below before this page is treated as authoritative."
      />

      <Section bordered={false}>
        <PendingNote>
          Final approved privacy policy copy is pending. No data-handling claims on this page should
          be relied on until legal review is complete.
        </PendingNote>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Scope" title="Sections this policy will cover." />
        <ul className="mt-8 divide-y divide-border border-t border-border">
          {[
            "What data is collected and why",
            "How data is used and retained",
            "Third parties data may be shared with",
            "Data subject rights and how to exercise them",
            "Contact for privacy inquiries",
          ].map((i) => (
            <li key={i} className="py-4 text-[0.9375rem]">
              {i}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
