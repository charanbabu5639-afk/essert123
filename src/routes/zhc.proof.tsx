import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, ClosingCta, PageHero, PendingNote, Section } from "@/components/site/primitives";
import { Annotation, ProofCard } from "@/components/site/brand";

const TITLE = "ZHC Proof — Delivered production records | Essert";
const DESC =
  "Specification, production, verification, result. Proof records for software produced by ZHC, published only when the record is confirmed.";

export const Route = createFileRoute("/zhc/proof")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Proof,
});

function Proof() {
  return (
    <>
      <PageHero
        kicker="01 / Proof"
        title="Delivered proof, not roadmap."
        lede="Every record uses the same four fields so it can be read as an engineering record rather than a testimonial: specification, production, verification, result."
      />

      <Section index="02" label="Records">
        <div className="grid gap-6 lg:grid-cols-2">
          <ProofCard
            record="RECORD 01 / CYBERGRC"
            spec="Compliance and governance application set, specified as functional requirements."
            production="Produced through ZHC autonomous production."
            verification="Verified against the specification before merge."
            result="In production as the CyberGRC application portfolio."
            state="In production"
          />
          <ProofCard
            record="RECORD 02 / MODERNIZATION"
            spec="Legacy system behavior captured as an explicit specification."
            production="Awaiting approved production record."
            verification="Awaiting approved verification record."
            result="Awaiting approved outcome, including dates and measurement definition."
          />
          <ProofCard
            record="RECORD 03 / NEW APPLICATION"
            spec="Awaiting approved specification summary."
            production="Awaiting approved production record."
            verification="Awaiting approved verification record."
            result="Awaiting approved outcome."
          />
          <ProofCard
            record="RECORD 04 / BENCHMARK"
            spec="Awaiting approved benchmark definition."
            production="Awaiting approved run record."
            verification="Awaiting approved measurement method."
            result="Awaiting approved figures."
          />
        </div>

        <div className="mt-10 max-w-3xl">
          <PendingNote>
            No figure is published here until the exact dates, what was counted, and
            live-production versus production-accepted status are confirmed. Statistics are never
            estimated or illustrated.
          </PendingNote>
        </div>

        <p className="mt-8">
          <Annotation tone="cobalt">SPECIFICATION → PRODUCTION → VERIFICATION → RESULT</Annotation>
        </p>
        <div className="mt-8 flex flex-wrap gap-8">
          <ArrowLink to="/cybergrc">See CyberGRC in production</ArrowLink>
          <ArrowLink to="/outcomes">Case studies</ArrowLink>
        </div>
      </Section>

      <ClosingCta
        title="Ask for the record."
        body="We will walk a production record end to end, including the parts that are still pending."
      />
    </>
  );
}
