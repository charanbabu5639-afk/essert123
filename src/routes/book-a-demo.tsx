import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/primitives";
import { Annotation } from "@/components/site/brand";
import { EnterpriseForm } from "@/components/site/EnterpriseForm";

const TITLE = "Book a Demo — ZHC autonomous software production | Essert";
const DESC =
  "Bring one functional specification. We walk the ZHC production line against it, gate by gate.";

export const Route = createFileRoute("/book-a-demo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: BookADemo,
});

function BookADemo() {
  return (
    <>
      <PageHero
        kicker="01 / Book a demo"
        title="Start with the specification."
        lede="Bring one functional specification. We walk the production line against it: spec approval, autonomous production, verification, merge approval."
      />
      <Section index="02" label="Request">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <EnterpriseForm
              fields={[
                { name: "name", label: "Full name", required: true },
                { name: "email", label: "Work email", type: "email", required: true },
                { name: "company", label: "Company", required: true },
                { name: "role", label: "Role" },
                { name: "context", label: "What you want produced", type: "textarea" },
              ]}
              submitLabel="Book a Demo"
              confirmation="Received. Our team will follow up to schedule the session."
              note="We do not share submitted specifications outside the evaluation team."
            />
          </div>
          <div className="lg:col-span-5">
            <div className="border border-border bg-surface p-6">
              <Annotation tone="cobalt">SESSION SHAPE</Annotation>
              <ul className="mt-5 divide-y divide-border border-t border-border">
                {[
                  "Your specification, read as the unit of work",
                  "Gate 01 — specification approval",
                  "Autonomous production walkthrough",
                  "Verification record",
                  "Gate 02 — merge approval",
                ].map((s, i) => (
                  <li key={s} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-sm">{s}</span>
                    <Annotation>{String(i + 1).padStart(2, "0")}</Annotation>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
