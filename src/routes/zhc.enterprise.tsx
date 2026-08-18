import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, ClosingCta, CtaLink, PageHero, Section } from "@/components/site/primitives";
import { Annotation } from "@/components/site/brand";

const TITLE = "ZHC for the Enterprise — Autonomous is not opaque | Essert";
const DESC =
  "Auditability, code ownership, security, and verification: the four controls that make autonomous software production acceptable to an enterprise review.";

export const Route = createFileRoute("/zhc/enterprise")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Enterprise,
});

const PILLARS = [
  {
    k: "Auditability",
    d: "Every meaningful state is traceable. Specification acceptance, plan, build, test execution, verification, and merge approval are each recorded as events with an actor and a timestamp.",
    a: "LOG: STATE TRANSITIONS RECORDED",
  },
  {
    k: "Code ownership",
    d: "The enterprise owns the resulting software. The output is source code in the customer's repository, portable away from Essert.",
    a: "OWNER: CUSTOMER REPOSITORY",
  },
  {
    k: "Security",
    d: "Designed for enterprise environments and security review, including deployment inside the customer's own boundary.",
    a: "REVIEW: SECURITY OVERVIEW ON REQUEST",
  },
  {
    k: "Verification",
    d: "“Done” is not accepted as a fact until verified against the approved specification. An unverified result does not reach a merge gate.",
    a: "STATE: VERIFIED",
  },
];

function Enterprise() {
  return (
    <>
      <PageHero
        kicker="01 / Enterprise"
        title="Autonomous does not mean opaque."
        lede="Autonomy is only acceptable in an enterprise if the record is complete. ZHC treats the record as part of the product."
        actions={
          <>
            <CtaLink to="/book-a-demo">Book a Demo</CtaLink>
            <CtaLink to="/trust/security-overview" variant="outline">
              Request the Security Overview
            </CtaLink>
          </>
        }
      />

      <Section index="02" label="Four controls">
        <div className="divide-y divide-border border-y border-border">
          {PILLARS.map((p, i) => (
            <div key={p.k} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <Annotation tone="cobalt">{String(i + 1).padStart(2, "0")}</Annotation>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{p.k}</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-[0.9375rem] leading-relaxed">{p.d}</p>
                <p className="mt-4">
                  <Annotation tone="fuchsia">{p.a}</Annotation>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" label="Production record" tone="paper">
        <h2 className="display-md max-w-3xl">Trust is a record, not a badge.</h2>
        <div className="mt-10 border border-border bg-card font-mono text-xs">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <Annotation tone="cobalt">SAMPLE / PRODUCTION LOG</Annotation>
            <Annotation>FORMAT: EVENT / ACTOR / STATE</Annotation>
          </div>
          <ul className="divide-y divide-border">
            {[
              ["SPEC.ACCEPTED", "HUMAN", "GATE 01 PASSED"],
              ["PLAN.PRODUCED", "AGENT", "OK"],
              ["BUILD.COMPLETED", "AGENT", "OK"],
              ["TEST.EXECUTED", "AGENT", "OK"],
              ["VERIFY.COMPLETED", "AGENT", "VERIFIED"],
              ["MERGE.APPROVED", "HUMAN", "GATE 02 PASSED"],
            ].map(([e, actor, state]) => (
              <li key={e} className="grid grid-cols-12 gap-3 px-4 py-2.5">
                <span className="col-span-6 sm:col-span-5">{e}</span>
                <span className="col-span-3 text-muted-foreground">{actor}</span>
                <span className="col-span-12 text-cobalt sm:col-span-4">{state}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6">
          <Annotation>
            ILLUSTRATIVE EVENT SHAPE / CUSTOMER-SPECIFIC RECORDS ARE PROVIDED UNDER REVIEW
          </Annotation>
        </p>
        <div className="mt-8 flex flex-wrap gap-8">
          <ArrowLink to="/trust/code-ownership">Code ownership and portability</ArrowLink>
          <ArrowLink to="/trust/data-residency">Data handling and residency</ArrowLink>
        </div>
      </Section>

      <ClosingCta
        title="Bring the security review forward."
        body="We would rather answer the hard questions before the first specification, not after it."
      />
    </>
  );
}
