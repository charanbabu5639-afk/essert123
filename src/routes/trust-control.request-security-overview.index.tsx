import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/site/primitives";
import { EnterpriseForm } from "@/components/site/EnterpriseForm";

const TITLE = "Request the Security Overview | Essert";
const DESC =
  "Evaluating ZHC from a security or vendor-risk standpoint? Request the current security overview material directly — no executive meeting required.";

export const Route = createFileRoute("/trust-control/request-security-overview/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: SecurityOverview,
});

function SecurityOverview() {
  return (
    <>
      <PageHero
        kicker="Trust & Control → Request the Security Overview"
        title="Request the security overview."
        lede="If you're evaluating ZHC from a security or vendor-risk standpoint, request the current security overview material directly — no executive meeting required to get it."
      />

      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              kicker="What you'll receive"
              title="Current security overview material."
              lede="This is a starting point for security evaluation, not a substitute for a full executive briefing where deeper architecture and control-mapping questions get answered directly."
            />
          </div>
          <div className="lg:col-span-7">
            <EnterpriseForm
              submitLabel="Submit request"
              confirmation="Your request is in. Our team will follow up with the current security overview material and confirm next steps."
              note="Your details are used to route the security overview material and follow up on your evaluation."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Company", required: true },
                { name: "email", label: "Work email", type: "email", required: true },
                { name: "role", label: "Role", required: true },
                {
                  name: "evaluating",
                  label: "What you're evaluating ZHC for",
                  type: "textarea",
                },
                { name: "timeline", label: "Timeline" },
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
