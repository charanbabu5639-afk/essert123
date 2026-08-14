import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, PageHero, PendingNote, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/login-placeholder")({
  head: () => ({
    meta: [
      { title: "Login | Essert" },
      { name: "description", content: "Customer login for Essert products." },
      { property: "og:title", content: "Login | Essert" },
      { property: "og:description", content: "Customer login for Essert products." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPlaceholder,
});

function LoginPlaceholder() {
  return (
    <>
      <PageHero
        kicker="Login"
        title="Customer login."
        lede="The shared login destination is configured centrally. Once the final URL is supplied it is set in one place — LOGIN_URL in the site navigation config — and every Login link in the header, mobile drawer, and footer points to it."
      />
      <Section bordered={false}>
        <div className="max-w-3xl space-y-6">
          <PendingNote>Final shared login URL required. No login URL is invented here.</PendingNote>
          <ArrowLink to="/">Back to home</ArrowLink>
        </div>
      </Section>
    </>
  );
}
