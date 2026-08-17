import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { EnterpriseForm } from "@/components/site/EnterpriseForm";

const TITLE = "Book an executive briefing | Essert";
const DESC =
  "A direct conversation about one enterprise use case — what you need in production, at what scale, on what timeline. Not a sales pitch, and not a demo.";

export const Route = createFileRoute("/executive-briefing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ExecutiveBriefing,
});

function ExecutiveBriefing() {
  return (
    <>
      <PageHero
        kicker="Executive briefing"
        title="Book an executive briefing."
        lede="A briefing is a direct conversation about one enterprise use case — what you need in production, at what scale, on what timeline. Not a sales pitch, and not a demo of unrelated features."
      />

      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              kicker="What to bring"
              title="One use case, its scope, and its timeline."
              lede="We don't ask for architecture, deployment configuration, or security-review detail before this first conversation — that comes after, matched to your environment. If you need security material before a briefing, request it directly."
            />
            <div className="mt-8">
              <ArrowLink to="/trust/security-overview">Request the Security Overview</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <EnterpriseForm
              submitLabel="Schedule the briefing"
              confirmation="Your briefing is scheduled. Here's what to expect: a direct conversation about one enterprise use case — its scope, constraints, and timeline."
              note="Booking flow placeholder — the live scheduling integration connects here once the calendar destination is supplied."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Company", required: true },
                { name: "email", label: "Work email", type: "email", required: true },
                { name: "role", label: "Executive role", required: true },
                { name: "usecase", label: "Use-case category" },
                { name: "outcome", label: "Desired business outcome", type: "textarea" },
                { name: "timeline", label: "Target timeline" },
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
