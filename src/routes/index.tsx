import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLink,
  Container,
  CtaLink,
  Kicker,
  PendingNote,
  Section,
} from "@/components/site/primitives";
import {
  Annotation,
  DataBlock,
  Measure,
  ProductionLine,
  ProductionSystemDiagram,
  ProofCard,
  SystemLabel,
} from "@/components/site/brand";

const TITLE = "Essert — Software from spec to production. Autonomously.";
const DESC =
  "ZHC takes functional specifications to enterprise production software without humans writing the code. Two human gates. Everything between them is autonomous.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="border-b border-border">
        <Container>
          <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
            <div className="lg:col-span-7">
              <SystemLabel index="01">Autonomous software production</SystemLabel>
              <h1 className="display-xl mt-7">
                Software from spec
                <br />
                to production.
                <br />
                <span className="text-cobalt">Autonomously.</span>
              </h1>
              <p className="lede mt-8">
                ZHC takes functional specifications to enterprise production software without humans
                writing the code.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CtaLink to="/book-a-demo">Book a Demo</CtaLink>
                <CtaLink to="/zhc/how-it-works" variant="outline">
                  See How ZHC Works
                </CtaLink>
              </div>
              <div className="mt-12 max-w-md space-y-3">
                <Measure>12 COL / 10 GUTTER / BASELINE 13PX</Measure>
                <Annotation tone="cobalt">
                  HUMANS APPROVE SPEC · AGENTS PRODUCE · HUMANS APPROVE MERGE
                </Annotation>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProductionSystemDiagram />
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — THE PROBLEM */}
      <Section index="02" label="The constraint" tone="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="display-md">Software production has a constraint.</h2>
            <p className="lede mt-6">
              Software organizations do not become faster by adding more people or asking teams to
              work harder. The constraint must be identified and governed. Essert applies
              constraint-based thinking to business operations: find the limiting step, then remove
              the human labor inside it without removing human control over it.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <DataBlock value="1" label="Constraint" note="Production throughput." />
              <DataBlock value="2" label="Human gates" note="Spec in. Merge out." accent />
              <DataBlock value="0" label="Humans writing code" note="Between the gates." />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="grid gap-px bg-border md:grid-cols-2">
              <div className="bg-background p-6">
                <Annotation>TRADITIONAL</Annotation>
                <ol className="mt-5 divide-y divide-border border-t border-border">
                  {["Requirement", "Planning", "Development", "Testing", "Integration", "Deployment"].map(
                    (s, i) => (
                      <li key={s} className="flex items-center justify-between py-3">
                        <span className="text-sm text-muted-foreground">{s}</span>
                        <Annotation>{String(i + 1).padStart(2, "0")}</Annotation>
                      </li>
                    ),
                  )}
                </ol>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Six handoffs. Each one a queue. Throughput is set by the slowest queue.
                </p>
              </div>
              <div className="bg-background p-6 ring-1 ring-cobalt">
                <Annotation tone="cobalt">ZHC</Annotation>
                <ol className="mt-5 divide-y divide-border border-t border-border">
                  {["Specification", "Autonomous production", "Enterprise software"].map((s, i) => (
                    <li key={s} className="flex items-center justify-between py-3">
                      <span className="text-sm font-medium">{s}</span>
                      <Annotation tone="cobalt">{String(i + 1).padStart(2, "0")}</Annotation>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  One queue. The specification is the unit of work, and the production line is
                  governed end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 03 — HOW ZHC WORKS */}
      <Section index="03" label="How ZHC works" id="how-it-works">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-md lg:sticky lg:top-28">
              Two human gates. Everything between them is autonomous.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ProductionLine
              steps={[
                {
                  index: "01",
                  title: "Functional specification",
                  detail:
                    "The unit of work is a specification, not a ticket. Behavior, constraints, interfaces, and acceptance conditions are stated explicitly.",
                },
                {
                  index: "02",
                  title: "Human approval",
                  detail:
                    "A human approves the specification. This is the first control point, and nothing enters production without it.",
                },
                {
                  index: "03",
                  title: "ZHC autonomous production",
                  detail:
                    "Agents plan, build, test, verify, and integrate. Every meaningful state is recorded as it happens.",
                  sub: ["Plan", "Build", "Test", "Verify", "Integrate"],
                  autonomous: true,
                },
                {
                  index: "04",
                  title: "Human merge approval",
                  detail:
                    "A human approves the merge. The second control point closes the loop before anything reaches a production branch.",
                },
                {
                  index: "05",
                  title: "Enterprise production",
                  detail:
                    "Working software in the enterprise's own environment, with the code and the record of how it was produced.",
                },
              ]}
            />
            <div className="mt-10">
              <ArrowLink to="/zhc/how-it-works">Read the full production model</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 04 — WHAT ZHC IS NOT */}
      <Section index="04" label="Differentiation" tone="surface">
        <h2 className="display-md max-w-3xl">Not a coding assistant.</h2>
        <p className="lede mt-6">
          ZHC does not assist the existing software-production process. It changes the production
          process itself.
        </p>
        <div className="mt-12 grid gap-px bg-border lg:grid-cols-4">
          {[
            { k: "Coding assistant", v: "Developer + AI", n: "The human still produces the code." },
            {
              k: "Low-code platform",
              v: "Human configuration + platform",
              n: "The human still assembles the system.",
            },
            { k: "Dev shop", v: "Human delivery team", n: "The labor is outsourced, not removed." },
          ].map((c) => (
            <div key={c.k} className="bg-background p-6">
              <Annotation>{c.k.toUpperCase()}</Annotation>
              <p className="mt-6 text-lg font-medium leading-snug text-muted-foreground">{c.v}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.n}</p>
            </div>
          ))}
          <div className="bg-cobalt p-6 text-white lg:row-span-1">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em]">ZHC</span>
            <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em]">
              Specification → Production
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              The production process is owned by the system, not assisted by it.
            </p>
          </div>
        </div>
      </Section>

      {/* 05 — ENTERPRISE TRUST */}
      <Section index="05" label="Enterprise trust" tone="paper">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-md">Autonomous does not mean opaque.</h2>
            <p className="lede mt-6">
              No chaos. Not a black box. Secure. Each of those statements is a system property with
              a record behind it.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-border border-y border-border">
              {[
                {
                  k: "Auditability",
                  d: "Every meaningful state is traceable.",
                  a: "LOG: STATE TRANSITIONS RECORDED",
                },
                {
                  k: "Code ownership",
                  d: "The enterprise owns the resulting software.",
                  a: "OWNER: CUSTOMER REPOSITORY",
                },
                {
                  k: "Security",
                  d: "Designed for enterprise environments and security review.",
                  a: "REVIEW: SECURITY OVERVIEW ON REQUEST",
                },
                {
                  k: "Verification",
                  d: "“Done” is not accepted as a fact until verified.",
                  a: "STATE: VERIFIED",
                },
              ].map((p, i) => (
                <div key={p.k} className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4">
                    <Annotation tone="cobalt">{String(i + 1).padStart(2, "0")}</Annotation>
                    <p className="mt-2 text-lg font-semibold tracking-[-0.02em]">{p.k}</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-[0.9375rem] leading-relaxed">{p.d}</p>
                    <p className="mt-3">
                      <Annotation tone="fuchsia">{p.a}</Annotation>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ArrowLink to="/zhc/enterprise">Enterprise controls in detail</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 06 — CHEAPER. FASTER. BETTER. */}
      <Section index="06" label="Business value">
        <h2 className="display-md">Cheaper. Faster. Better.</h2>
        <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
          {[
            {
              t: "Cheaper",
              who: "For the CIO",
              d: "Production cost is no longer a function of headcount. The specification is the spend.",
            },
            {
              t: "Faster",
              who: "For the CTO",
              d: "Throughput is set by the production system, not by queue depth across six handoffs.",
            },
            {
              t: "Better",
              who: "For the Product Leader",
              d: "Behavior is specified explicitly and verified before merge, so intent survives to production.",
            },
          ].map((p) => (
            <div key={p.t} className="bg-background p-7 sm:p-9">
              <Annotation tone="cobalt">{p.who.toUpperCase()}</Annotation>
              <p className="mt-6 text-[clamp(2rem,3.4vw,3rem)] font-bold leading-none tracking-[-0.04em]">
                {p.t}
              </p>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">{p.d}</p>
              <div className="mt-8 border-t border-border pt-5">
                <Annotation>METRIC: AWAITING VERIFIED RECORD</Annotation>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 07 — PROOF */}
      <Section index="07" label="Proof" tone="surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="display-md">Proof, not roadmap.</h2>
            <p className="lede mt-6">
              The differentiator is delivered production software. Each record below follows the same
              structure: specification, production, verification, result.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Annotation tone="cobalt">
              SPECIFICATION → PRODUCTION → VERIFICATION → RESULT
            </Annotation>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ProofCard
            record="RECORD 01 / CYBERGRC"
            spec="Compliance and governance application set, specified as functional requirements."
            production="Produced through ZHC autonomous production."
            verification="Verified before merge under the standard gate model."
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
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PendingNote>
              Benchmarks, migration results, and customer evidence will be published here once each
              record is confirmed with exact dates, what was counted, and live-production versus
              production-accepted status. No numbers are shown until then.
            </PendingNote>
          </div>
          <div className="flex items-end lg:col-span-5">
            <ArrowLink to="/zhc/proof">Open the proof records</ArrowLink>
          </div>
        </div>
      </Section>

      {/* 08 — ZHC VS THE MARKET */}
      <Section index="08" label="Category" tone="paper">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-md">The unit of work is a specification, not a ticket.</h2>
            <p className="lede mt-6">
              ZHC owns the production process rather than assisting the team. That is the
              distinction, and it is a category distinction rather than a feature comparison.
            </p>
          </div>
          <div className="lg:col-span-7">
            <dl className="divide-y divide-border border-t border-border">
              {[
                ["AI coding tools", "Assist developers"],
                ["Agent harnesses", "Coordinate agents"],
                ["Vibecoding", "Generate applications quickly"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-wrap items-baseline justify-between gap-4 py-5">
                  <dt className="mono-label text-muted-foreground">{k}</dt>
                  <dd className="text-lg text-muted-foreground">{v}</dd>
                </div>
              ))}
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-t-2 border-cobalt py-6">
                <dt className="mono-label text-cobalt">ZHC</dt>
                <dd className="text-xl font-semibold tracking-[-0.02em]">
                  Takes specification to enterprise production
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* 09 — THE LARGER ESSERT VISION */}
      <Section index="09" label="Essert vision">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Kicker>Master brand</Kicker>
            <h2 className="display-md mt-5">ZHC is the beginning.</h2>
            <p className="lede mt-6">
              Essert is the company. ZHC is the first autonomous production system. The same
              constraint model extends to the rest of the business.
            </p>
            <div className="mt-8">
              <ArrowLink to="/company">About Essert</ArrowLink>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {[
              { k: "ZHC", v: "Software production", state: "IN PRODUCTION" },
              { k: "ZHB", v: "Brand production", state: "NEXT" },
              { k: "Future systems", v: "Business-function autonomy", state: "PLANNED" },
              {
                k: "Fully autonomous enterprises",
                v: "The end state of the model",
                state: "DIRECTION",
              },
            ].map((s, i, arr) => (
              <li key={s.k}>
                <div className="flex flex-wrap items-baseline justify-between gap-4 border border-border bg-surface px-5 py-5">
                  <div>
                    <p className="text-xl font-semibold tracking-[-0.02em]">{s.k}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                  </div>
                  <Annotation tone={i === 0 ? "cobalt" : "muted"}>{s.state}</Annotation>
                </div>
                {i < arr.length - 1 ? (
                  <div className="flex h-8 justify-start pl-8" aria-hidden>
                    <span className="w-px bg-border-strong" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 10 — FINAL CTA */}
      <Section index="10" label="Start" tone="ink">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="display-lg">Start with the specification.</h2>
            <p className="lede mt-6">
              See what autonomous software production looks like inside your enterprise.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <CtaLink to="/book-a-demo">Book a Demo</CtaLink>
            <CtaLink to="/zhc" variant="outline">
              Explore ZHC
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
