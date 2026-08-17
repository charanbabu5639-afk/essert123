import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, DefList, PageHero, Section } from "@/components/site/primitives";

const TITLE = "Request received | CyberGRC | Essert";
const DESC = "Your CyberGRC sales request is confirmed. Here's what happens next.";

export const Route = createFileRoute("/cybergrc/contact-sales/confirmed")({
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
  component: CyberGrcContactConfirmed,
});

function CyberGrcContactConfirmed() {
  return (
    <>
      <PageHero
        kicker="CyberGRC → Contact Sales → Confirmed"
        title="Your request is in."
        lede="A member of the CyberGRC sales team will follow up on the application or workflow you specified."
      />
      <Section bordered={false}>
        <DefList
          items={[
            {
              term: "Who reaches out",
              detail: "A member of the CyberGRC sales team.",
            },
            {
              term: "What to expect",
              detail: "Follow-up on the application and use case you submitted, and next steps for evaluation.",
            },
            {
              term: "Timing",
              detail: "Follow-up is by email, using the address you submitted.",
            },
          ]}
        />
        <div className="mt-8">
          <ArrowLink to="/cybergrc">Back to CyberGRC</ArrowLink>
        </div>
      </Section>
    </>
  );
}
