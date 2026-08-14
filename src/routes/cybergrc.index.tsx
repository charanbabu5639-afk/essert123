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

const TITLE = "CyberGRC — enterprise GRC applications, built using ZHC | Essert";
const DESC =
  "A flat catalog of governance, risk, and compliance applications, available to evaluate and buy today — independent of any broader ZHC platform engagement.";

export const Route = createFileRoute("/cybergrc/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: CyberGrc,
});

function CyberGrc() {
  return (
    <>
      <PageHero
        kicker="CyberGRC"
        title="CyberGRC — enterprise GRC applications, built using ZHC."
        lede="CyberGRC is Essert's application portfolio: a flat catalog of governance, risk, and compliance applications, available to evaluate and buy today — independent of any broader ZHC platform engagement."
        actions={
          <>
            <CtaLink to="/cybergrc/contact-sales">Contact Sales</CtaLink>
            <CtaLink to="/cybergrc/applications" variant="outline">
              View All Applications
            </CtaLink>
          </>
        }
      />

      <Section bordered={false}>
        <SectionHead
          kicker="What is CyberGRC?"
          title="Packaged enterprise applications, not custom specifications."
          lede="CyberGRC is a portfolio of packaged enterprise applications addressing governance, risk, and compliance workflows. Unlike the systems described on What ZHC Builds, CyberGRC applications are not produced to a customer's custom specification — they are pre-built, catalog products you can evaluate and buy directly."
        />
      </Section>

      <Section id="built-with-zhc" tone="surface">
        <SectionHead
          kicker="Built with ZHC — not built by hand"
          title="Every application in the catalog was produced by ZHC."
          lede="Every application in the catalog below was produced by ZHC, the same platform described on How ZHC Works — not engineered by a separate product team using different tools or a different process. That means every CyberGRC application passed through the same seven-stage lifecycle and the same MADAM governance as any custom system ZHC produces."
        />
        <p className="mt-6 max-w-3xl text-[0.9375rem] leading-relaxed">
          Practically, this is why CyberGRC exists as a product line at all: it's evidence of what
          the platform produces, packaged for direct purchase, not a parallel engineering effort
          Essert maintains by hand.
        </p>
        <div className="mt-8">
          <ArrowLink to="/cybergrc/how-it-works">
            Want the full explanation of what that means for reliability, security posture, and how
            the two relate? See how it works
          </ArrowLink>
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="The application catalog"
          title="A flat catalog, filterable by regulation, standard, or domain."
        />
        <div className="mt-8 space-y-6">
          <PendingNote>
            10–15 launch-ready applications, flat catalog, filterable by regulation/standard/domain
            tag. Card fields: application name, one-sentence buyer outcome,
            regulation/standard/domain tags, primary workflow, availability status, deployment
            posture, Contact Sales.
          </PendingNote>
          <PendingNote>
            Authoritative application list required. Until confirmed, this section ships as “View All
            Applications” only — no named featured-application placeholders.
          </PendingNote>
          <PendingNote>Approved customer logos required.</PendingNote>
          <div className="flex flex-wrap gap-3">
            <CtaLink to="/cybergrc/applications">View All Applications</CtaLink>
            <CtaLink to="/cybergrc/contact-sales" variant="outline">
              Contact Sales
            </CtaLink>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Faqs
          items={[
            {
              q: "What is CyberGRC?",
              a: "CyberGRC is Essert's portfolio of enterprise GRC applications, built using ZHC and sold as products.",
            },
            {
              q: "How does CyberGRC relate to ZHC?",
              a: "CyberGRC applications are built using ZHC. CyberGRC is not itself a platform — it's what ZHC has produced, packaged for direct purchase.",
            },
            {
              q: "Can I buy a CyberGRC application without a broader ZHC engagement?",
              a: "Yes. CyberGRC is independently purchasable.",
            },
          ]}
        />
      </Section>

      <ClosingCta
        title="Tell us which application or workflow you're evaluating."
        to="/cybergrc/contact-sales"
        label="Contact Sales"
      />
    </>
  );
}
