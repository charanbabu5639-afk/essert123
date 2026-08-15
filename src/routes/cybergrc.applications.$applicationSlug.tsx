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

export const Route = createFileRoute("/cybergrc/applications/$applicationSlug")({
  head: () => ({
    meta: [
      { title: "CyberGRC application | Essert" },
      {
        name: "description",
        content:
          "CyberGRC application detail: buyer outcome, primary workflow, regulation and domain tags, availability status, and deployment posture.",
      },
      { property: "og:title", content: "CyberGRC application | Essert" },
      {
        property: "og:description",
        content:
          "Buyer outcome, primary workflow, regulation and domain tags, availability status, and deployment posture.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ApplicationTemplate,
});

function ApplicationTemplate() {
  const { applicationSlug } = Route.useParams();
  return (
    <>
      <PageHero
        kicker={`CyberGRC → ${applicationSlug.replace(/-/g, " ")}`}
        title="{Application Name}"
        lede="{One-sentence buyer outcome.} Application names and detail publish only from the authoritative product list — nothing here is invented."
      />

      <Section bordered={false}>
        <SectionHead kicker="Application record" title="Reusable detail template." />
        <DefList
          className="mt-10"
          items={[
            { term: "Tags", detail: "{Regulation, standard, or domain tags}" },
            { term: "Primary workflow", detail: "{Primary workflow description}" },
            { term: "Availability status", detail: "{Status}" },
            { term: "Deployment posture", detail: "{Deployment posture}" },
            {
              term: "What it does",
              detail: (
                <PendingNote>
                  Functional description required — specific to the application, sourced from the
                  authoritative product interface, not invented.
                </PendingNote>
              ),
            },
            {
              term: "Produced by ZHC",
              detail:
                "This application is part of the CyberGRC portfolio, produced through ZHC's governed lifecycle.",
            },
          ]}
        />
        <div className="mt-8">
          <ArrowLink to="/cybergrc/applications">Back to the catalog</ArrowLink>
        </div>
      </Section>

      <ClosingCta
        title="Talk to sales about this application."
        to="/cybergrc/contact-sales"
        label="Contact Sales"
      />
    </>
  );
}
