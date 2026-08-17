import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  ClosingCta,
  CtaLink,
  Faqs,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const TITLE = "Adopt ZHC — Build with ZHC engagement model | Essert";
const DESC =
  "Build with ZHC: the customer adopts ZHC as its own enterprise production platform and operates it directly. Packaging is in development.";

export const Route = createFileRoute("/platform/adopt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: AdoptPage,
});

function AdoptPage() {
  return (
    <>
      <PageHero
        kicker="Platform → Adopt ZHC"
        title="Build with ZHC — operate the platform directly."
        lede="The customer adopts ZHC as its own enterprise production platform, operating it directly. Built with ZHC and Build with ZHC are two engagement models on one platform, not two products."
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="Status" title="Packaging in development." />
        <div className="mt-8 max-w-3xl space-y-6">
          <PendingNote>
            This engagement model's dedicated page and packaging are in development. Ask about it in
            an executive briefing today.
          </PendingNote>
          <ArrowLink to="/platform">Back to the platform overview</ArrowLink>
        </div>
      </Section>

      <Section tone="surface">
        <Faqs
          items={[
            {
              q: "What is the difference between Built with ZHC and Build with ZHC?",
              a: "Built with ZHC means a defined production outcome is delivered using ZHC. Build with ZHC means the customer operates ZHC directly as its own production platform.",
            },
            {
              q: "Can I buy ZHC today?",
              a: "Engagement is discussed in an executive briefing. Packaged pricing for the Build with ZHC model is in development.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Discuss adopting ZHC as your production platform." />
    </>
  );
}
