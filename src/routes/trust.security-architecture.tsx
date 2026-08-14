import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  DefList,
  Faqs,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";
import { FlowSteps } from "@/components/site/diagrams";

const TITLE = "Security Architecture — security as a lifecycle stage | Essert";
const DESC =
  "Every system ZHC produces passes through a defined Secure stage before deployment, and MADAM manages AI security posture and access controls across the whole lifecycle.";

export const Route = createFileRoute("/trust/security-architecture")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: SecurityArchitecture,
});

function SecurityArchitecture() {
  return (
    <>
      <PageHero
        kicker="Trust & Control → Security Architecture"
        title="Security is a stage in the lifecycle, not an afterthought."
        lede="Every system ZHC produces passes through a defined Secure stage before deployment, and MADAM manages AI security posture and access controls for the whole lifecycle, not just at that stage."
        actions={<CtaLink to="/trust/security-overview">Request the Security Overview</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="Control layers" title="How ZHC secures agent behavior" />
        <p className="lede mt-6">
          MADAM governs which models an agent can call, which tools it can use, and what it can
          access, for every agent in the ZHC fleet. This is enforced policy, not a monitoring
          dashboard applied after the fact.
        </p>
        <div className="mt-10">
          <FlowSteps
            steps={[
              "Policy defined in the control plane",
              "Model access controlled",
              "Tool access controlled",
              "Agent activity monitored",
              "Secure stage before deployment",
            ]}
          />
        </div>
      </Section>

      <Section tone="surface">
        <DefList
          items={[
            {
              term: "The Secure stage",
              detail:
                "Before deployment, every system produced by ZHC is evaluated against the enterprise's security posture. What that evaluation covers for your environment is discussed directly — request the overview or bring it to an executive briefing.",
            },
            {
              term: "What we don't claim",
              detail:
                "No independent certifications or third-party assessments are implied here beyond what is currently publishable.",
            },
          ]}
        />
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "How is agent behavior controlled, not just monitored?",
              a: "MADAM enforces policy over model, tool, and access permissions before an agent acts, in addition to monitoring activity after.",
            },
            {
              q: "What happens during the Secure stage?",
              a: (
                <PendingNote>
                  Detail required — shared as part of the executive briefing or security overview
                  process.
                </PendingNote>
              ),
            },
          ]}
        />
      </Section>

      <ClosingCta
        title="Get the current security overview material."
        to="/trust/security-overview"
        label="Request the Security Overview"
      />
    </>
  );
}
