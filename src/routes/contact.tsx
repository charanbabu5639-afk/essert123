import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, CtaLink, PageHero, PendingNote, Section, SectionHead } from "@/components/site/primitives";

const TITLE = "Contact Essert | Executive briefing, sales, and security";
const DESC =
  "Route your inquiry directly: an executive briefing for a ZHC use case, sales for CyberGRC, or the security overview for evaluators.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

const PATHS = [
  {
    kicker: "Building or modernizing with ZHC",
    title: "Book an executive briefing.",
    detail: "A direct conversation about one enterprise use case — its scope, constraints, and timeline.",
    to: "/executive-briefing",
    label: "Book an Executive Briefing",
  },
  {
    kicker: "Evaluating a CyberGRC application",
    title: "Contact CyberGRC sales.",
    detail: "Tell us which application or workflow you're evaluating, and the sales team follows up directly.",
    to: "/cybergrc/contact-sales",
    label: "Contact Sales",
  },
  {
    kicker: "Evaluating security or vendor risk",
    title: "Request the security overview.",
    detail: "Security and vendor-risk material, without an executive meeting first.",
    to: "/trust-control/request-security-overview",
    label: "Request the Security Overview",
  },
] as const;

function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Route your inquiry to the right team."
        lede="Essert routes enterprise inquiries by intent rather than a single inbox. Pick the path that matches what you're evaluating."
      />

      <Section bordered={false}>
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {PATHS.map((p) => (
            <div key={p.to} className="bg-background p-8">
              <p className="kicker">{p.kicker}</p>
              <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              <div className="mt-6">
                <CtaLink to={p.to} variant="outline">
                  {p.label}
                </CtaLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          kicker="General contact"
          title="No general inbox is published yet."
          lede="A general contact address is not published on this page. Use one of the paths above, or the Company page for background."
        />
        <div className="mt-6 max-w-2xl">
          <PendingNote>General contact address and mailing details are pending.</PendingNote>
        </div>
        <div className="mt-8">
          <ArrowLink to="/company">Go to Company</ArrowLink>
        </div>
      </Section>
    </>
  );
}
