import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  ClosingCta,
  CtaLink,
  PageHero,
  Section,
} from "@/components/site/primitives";
import {
  Annotation,
  DataBlock,
  ProductionSystemDiagram,
  SystemLabel,
} from "@/components/site/brand";

const TITLE = "ZHC — Autonomous software production | Essert";
const DESC =
  "ZHC takes a functional specification to enterprise production software with no humans writing code. Humans approve the spec. Agents produce. Humans approve the merge.";

export const Route = createFileRoute("/zhc/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ZhcOverview,
});

function ZhcOverview() {
  return (
    <>
      <PageHero
        kicker="01 / ZHC"
        title="Autonomous software production."
        lede="Take a functional specification to enterprise production software with no humans writing code. Two human control points bound the system; everything between them is autonomous."
        actions={
          <>
            <CtaLink to="/book-a-demo">Book a Demo</CtaLink>
            <CtaLink to="/zhc/how-it-works" variant="outline">
              How ZHC Works
            </CtaLink>
          </>
        }
      >
        <ProductionSystemDiagram />
      </PageHero>

      <Section index="02" label="The claim">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="display-md">We take software from spec to production autonomously.</h2>
            <p className="lede mt-6">
              ZHC is not a tool inside the software delivery process. It is the software delivery
              process, expressed as a governed production system with explicit inputs, states, and
              outputs.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-6">
            <DataBlock value="01" label="Input" note="Approved functional specification." />
            <DataBlock value="05" label="Stages" note="Plan, build, test, verify, integrate." accent />
            <DataBlock value="02" label="Human gates" note="Spec approval and merge approval." />
          </div>
        </div>
      </Section>

      <Section index="03" label="System properties" tone="paper">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["No chaos", "The production line is governed, not improvised.", "MODEL: CONSTRAINED"],
            ["Not a black box", "Every meaningful state is traceable.", "LOG: RECORDED"],
            ["Secure", "Built for enterprise environments and security review.", "REVIEW: AVAILABLE"],
            ["Verified", "“Done” is a verified state, not a claim.", "STATE: VERIFIED"],
          ].map(([k, d, a]) => (
            <div key={k} className="bg-background p-6">
              <p className="text-lg font-semibold tracking-[-0.02em]">{k}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              <p className="mt-6">
                <Annotation tone="cobalt">{a}</Annotation>
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="04" label="Where to go next">
        <SystemLabel index="04">Continue</SystemLabel>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <ArrowLink to="/zhc/how-it-works">Two human gates</ArrowLink>
          <ArrowLink to="/zhc/enterprise">Enterprise controls</ArrowLink>
          <ArrowLink to="/zhc/proof">Proof records</ArrowLink>
        </div>
      </Section>

      <ClosingCta
        title="Start with the specification."
        body="See what autonomous software production looks like inside your enterprise."
      />
    </>
  );
}
