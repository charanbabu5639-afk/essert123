import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  Faqs,
  PageHero,
  PendingNote,
  Panel,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { FlowSteps } from "@/components/site/diagrams";

const TITLE = "Code Ownership & Portability — what you get is yours to run | Essert";
const DESC =
  "A ZHC engagement defines ownership and the ability to operate independently up front, as part of the Transfer or continue stage of the lifecycle.";

export const Route = createFileRoute("/trust-control/code-ownership-portability")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: CodeOwnership,
});

function CodeOwnership() {
  return (
    <>
      <PageHero
        kicker="Trust & Control → Code Ownership & Portability"
        title="What you get is yours to run."
        lede="A ZHC engagement defines ownership and the ability to operate independently up front — as part of the Transfer or continue stage of the lifecycle, not as a negotiation after delivery."
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="What transfers" title="Specification, audit trail, code, running system." />
        <div className="mt-10">
          <FlowSteps steps={["Specification", "Audit trail", "Code", "Running system"]} />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Panel tone="surface">
            <p className="kicker">Path one</p>
            <h3 className="mt-3 text-xl font-semibold">Operate independently</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Independent operation is one of the two paths a system takes after deployment.
            </p>
          </Panel>
          <Panel tone="surface">
            <p className="kicker">Path two</p>
            <h3 className="mt-3 text-xl font-semibold">Continue under Essert</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Continued operation under Essert. Both paths are defined before the system reaches
              production.
            </p>
          </Panel>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead kicker="Ownership" title="Defined per engagement." />
        <div className="mt-8 max-w-3xl space-y-5">
          <p className="text-[0.9375rem] leading-relaxed">
            Ownership terms are defined as part of the specific engagement — Built with ZHC or Build
            with ZHC.
          </p>
          <PendingNote>Exact contractual ownership language required.</PendingNote>
        </div>
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "Do we own the code a ZHC engagement produces?",
              a: "Ownership terms are defined per engagement and confirmed before delivery — ask directly in a briefing.",
            },
            {
              q: "Can we operate the system without Essert afterward?",
              a: "Yes, independent operation is one of the two supported paths after deployment.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Define ownership before the build starts." />
    </>
  );
}
