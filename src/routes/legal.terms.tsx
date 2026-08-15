import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PendingNote, Section, SectionHead } from "@/components/site/primitives";

const TITLE = "Terms of Service | Essert";
const DESC = "Essert's terms of service, governing use of the site and platform. Final copy is pending legal review.";

export const Route = createFileRoute("/legal/terms")({
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
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Service."
        lede="This page is a scaffold for Essert's terms of service. Final, legally approved copy replaces the placeholders below before this page is treated as authoritative."
      />

      <Section bordered={false}>
        <PendingNote>
          Final approved terms of service copy is pending. No contractual claims on this page should
          be relied on until legal review is complete.
        </PendingNote>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Scope" title="Sections these terms will cover." />
        <ul className="mt-8 divide-y divide-border border-t border-border">
          {[
            "Acceptance of terms and eligibility",
            "Permitted use of the site and platform",
            "Ownership, license, and intellectual property",
            "Limitation of liability",
            "Governing law and dispute resolution",
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
