import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/site/primitives";
import { EnterpriseForm } from "@/components/site/EnterpriseForm";

const TITLE = "Contact CyberGRC Sales | Essert";
const DESC =
  "Tell us which CyberGRC application or workflow you're evaluating, and our team will follow up directly.";

export const Route = createFileRoute("/cybergrc/contact-sales/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ContactSales,
});

function ContactSales() {
  return (
    <>
      <PageHero
        kicker="CyberGRC → Contact Sales"
        title="Talk to sales."
        lede="Tell us which application or workflow you're evaluating, and we'll follow up directly."
      />

      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              kicker="Independently purchasable"
              title="No platform engagement required."
              lede="CyberGRC applications can be evaluated and bought independently of a broader ZHC platform engagement."
            />
          </div>
          <div className="lg:col-span-7">
            <EnterpriseForm
              submitLabel="Submit"
              confirmation="Thanks — our team will follow up shortly."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Company", required: true },
                { name: "email", label: "Work email", type: "email", required: true },
                { name: "applications", label: "Application(s) of interest" },
                { name: "usecase", label: "Use case", type: "textarea" },
                { name: "timeline", label: "Timeline" },
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
