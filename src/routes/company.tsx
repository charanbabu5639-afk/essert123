import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  CtaLink,
  PageHero,
  PendingNote,
  Section,
  SectionHead,
} from "@/components/site/primitives";

const TITLE = "Company — About Essert";
const DESC =
  "Essert operates ZHC, the platform for autonomous software production, and CyberGRC, the application portfolio built on it. Active in the US, Middle East, and India.";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Company,
});

function Company() {
  return (
    <>
      <PageHero
        kicker="Company"
        title="About Essert."
        lede="Essert operates ZHC, the platform for autonomous software production, and CyberGRC, the application portfolio built on it."
        actions={<CtaLink to="/executive-briefing">Book an Executive Briefing</CtaLink>}
      />

      <Section id="leadership" bordered={false}>
        <SectionHead kicker="Leadership" title="Founders and leadership." />
        <div className="mt-8 max-w-3xl">
          <PendingNote>Founder and leadership background required.</PendingNote>
        </div>
      </Section>

      <Section id="markets" tone="surface">
        <SectionHead kicker="Markets" title="Active in three regions." />
        <ul className="mt-10 grid gap-px bg-border sm:grid-cols-3">
          {["United States", "Middle East", "India"].map((m) => (
            <li key={m} className="bg-background p-8 text-xl font-semibold">
              {m}
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-3xl space-y-6">
          <SectionHead kicker="Customers" title="Customer references" as="h3" />
          <PendingNote>Approved customer logos required.</PendingNote>
        </div>
      </Section>

      <Section id="partnerships">
        <SectionHead kicker="Partnerships" title="Delivery ecosystem." />
        <div className="mt-8 max-w-3xl">
          <PendingNote>Partnership and delivery-ecosystem detail required.</PendingNote>
        </div>
      </Section>

      <Section id="intellectual-property" tone="surface">
        <SectionHead
          kicker="Intellectual property"
          title="Patent-pending; trademark application filed."
          lede="Essert's technology is patent-pending. ZHC — Zero Human Coding™ has a trademark application filed. Neither an issued patent nor a registered trademark is implied by this language."
        />
      </Section>

      <ClosingCta title="Talk to the team behind ZHC." />
    </>
  );
}
