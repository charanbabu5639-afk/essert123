import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/primitives";
import { EnterpriseForm } from "@/components/site/EnterpriseForm";

const TITLE = "Contact Essert";
const DESC = "Direct line to Essert for enterprise evaluation, security review, and partnerships.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        kicker="01 / Contact"
        title="Direct line."
        lede="Enterprise evaluation, security review, partnerships, or press. One form, routed by subject."
      />
      <Section index="02" label="Message">
        <div className="max-w-2xl">
          <EnterpriseForm
            fields={[
              { name: "name", label: "Full name", required: true },
              { name: "email", label: "Work email", type: "email", required: true },
              { name: "company", label: "Company" },
              { name: "message", label: "Message", type: "textarea", required: true },
            ]}
            submitLabel="Send"
            confirmation="Received. Our team will respond directly."
          />
        </div>
      </Section>
    </>
  );
}
