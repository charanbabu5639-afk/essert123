import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, DefList, PageHero, Section } from "@/components/site/primitives";

const TITLE = "Security overview request confirmed | Essert";
const DESC = "Your security overview request is confirmed. Here's what happens next.";

export const Route = createFileRoute("/trust-control/request-security-overview/confirmed")({
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
  component: SecurityOverviewConfirmed,
});

function SecurityOverviewConfirmed() {
  return (
    <>
      <PageHero
        kicker="Trust & Control → Request the Security Overview → Confirmed"
        title="Your request is in."
        lede="The current security overview material and confirmation of next steps follow directly."
      />
      <Section bordered={false}>
        <DefList
          items={[
            {
              term: "Who reaches out",
              detail: "A member of the Essert team responsible for security and vendor-risk evaluation.",
            },
            {
              term: "What to expect",
              detail: "The current security overview material, plus confirmation of any evaluation next steps.",
            },
            {
              term: "Timing",
              detail: "Follow-up is by email, using the address you submitted.",
            },
          ]}
        />
        <div className="mt-8">
          <ArrowLink to="/trust-control">Back to Trust &amp; Control</ArrowLink>
        </div>
      </Section>
    </>
  );
}
