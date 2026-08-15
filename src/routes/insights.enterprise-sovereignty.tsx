import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, ClosingCta, PageHero, PendingNote, Section } from "@/components/site/primitives";

const TITLE = "Enterprise sovereignty — Essert Insights";
const DESC =
  "Sovereignty is a control posture — over infrastructure, data, models, tools, and code — not a synonym for on-premises deployment.";

export const Route = createFileRoute("/insights/enterprise-sovereignty")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Topic,
});

function Topic() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Enterprise sovereignty."
        lede="Sovereignty, in an enterprise technology context, is a control posture — over infrastructure, data, models, tools, and code — not a synonym for on-premises deployment. See how this applies to ZHC specifically on the Sovereign Deployment page."
      />
      <Section bordered={false}>
        <div className="max-w-3xl space-y-6">
          <PendingNote>Article index to populate at launch.</PendingNote>
          <ArrowLink to="/trust-control/sovereign-deployment">See the deployment continuum</ArrowLink>
        </div>
      </Section>
      <ClosingCta title="Test the sovereignty posture against your requirements." />
    </>
  );
}
