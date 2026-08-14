import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  DefList,
  Faqs,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { DeploymentContinuum } from "@/components/site/diagrams";

const TITLE = "Deployment Architecture — a governed stage, not a handoff | Essert";
const DESC =
  "Deploy is one of the seven stages in the ZHC lifecycle: a validated, secured system placed into the deployment model the enterprise has chosen.";

export const Route = createFileRoute("/trust/deployment-architecture")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: DeploymentArchitecture,
});

function DeploymentArchitecture() {
  return (
    <>
      <PageHero
        kicker="Trust & Control → Deployment Architecture"
        title="Deployment is a governed stage, not a handoff."
        lede="Deploy is one of the seven stages in the ZHC lifecycle. It places a validated, secured system into the deployment model the enterprise has chosen."
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="Target environments" title="Where a system is placed." />
        <div className="mt-10">
          <DeploymentContinuum />
        </div>
        <DefList
          className="mt-12"
          items={[
            {
              term: "What happens at the Deploy stage",
              detail:
                "A system that has passed Validate and Secure is placed into the chosen environment — Essert Cloud, a Dedicated Managed Environment, Customer Cloud, or a Sovereign Deployment. What happens next depends on the engagement model chosen: the system continues under Essert's operation, or transfers to the customer.",
            },
            {
              term: "Operate and transfer",
              detail:
                "After deployment, a system is either operated under the ongoing engagement or transferred for independent operation. Both paths are defined before deployment, not negotiated after.",
            },
          ]}
        />
      </Section>

      <Section tone="surface">
        <Faqs
          items={[
            {
              q: "Which deployment models are available today?",
              a: "See the full breakdown on the Sovereign Deployment page.",
            },
            {
              q: "Who operates the system after it's deployed?",
              a: "Depends on the engagement model — Build with ZHC vs. Built with ZHC — and on the transfer terms defined under Code Ownership & Portability.",
            },
          ]}
        />
      </Section>

      <ClosingCta title="Map deployment to your environment." />
    </>
  );
}
