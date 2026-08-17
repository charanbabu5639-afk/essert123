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

const TITLE = "Data Handling & Residency — where your data lives | Essert";
const DESC =
  "Data residency and handling are governed by the deployment model chosen for the engagement and by explicit controls, not by default platform behavior.";

export const Route = createFileRoute("/trust-control/data-handling-residency")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: DataResidency,
});

function DataResidency() {
  return (
    <>
      <PageHero
        kicker="Trust & Control → Data Handling & Residency"
        title="Where your data lives is a decision you make, not one we make for you."
        lede="Data residency and handling are governed by the deployment model chosen for the engagement, and by explicit controls, not by default platform behavior."
        actions={<CtaLink to="/trust-control/request-security-overview">Request the Security Overview</CtaLink>}
      />

      <Section bordered={false}>
        <SectionHead kicker="Data flow" title="From entry to post-deployment." />
        <div className="mt-10">
          <FlowSteps
            steps={[
              "What data enters",
              "Where it is processed",
              "Where it is stored",
              "How residency is enforced",
              "What happens after deployment",
            ]}
          />
        </div>
      </Section>

      <Section tone="surface">
        <DefList
          items={[
            {
              term: "Residency and control",
              detail: (
                <>
                  <p>
                    Residency, auditability, and regulatory control are part of a complete sovereign
                    posture.
                  </p>
                  <div className="mt-4">
                    <PendingNote>
                      Specific jurisdiction and residency commitments required.
                    </PendingNote>
                  </div>
                </>
              ),
            },
            {
              term: "What we don't claim",
              detail:
                "No specific regulatory certification or attestation is implied here beyond what is currently publishable.",
            },
          ]}
        />
      </Section>

      <Section>
        <Faqs
          items={[
            {
              q: "Where is our data processed?",
              a: "Depends on the deployment model chosen. Specific jurisdictional detail is confirmed as part of the security overview.",
            },
            {
              q: "Can data stay within a specific jurisdiction?",
              a: "This depends on deployment model and is addressed directly in the security overview or executive briefing.",
            },
          ]}
        />
      </Section>

      <ClosingCta
        title="Confirm residency for your jurisdiction."
        to="/trust-control/request-security-overview"
        label="Request the Security Overview"
      />
    </>
  );
}
