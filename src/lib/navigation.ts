export type NavLink = { label: string; to: string; hash?: string; note?: string };
export type NavColumn = { head: string; items: NavLink[] };

export type PrimaryNav = {
  label: string;
  to: string;
  matchPrefix: string;
  emphasis?: boolean;
  columns?: NavColumn[];
};

/** Placeholder until the final shared login URL is supplied. */
export const LOGIN_URL = "/login-placeholder";

export const DEMO_CTA = { label: "Book a Demo", to: "/book-a-demo" };

export const PRIMARY_NAV: PrimaryNav[] = [
  {
    label: "ZHC",
    to: "/zhc",
    matchPrefix: "/zhc",
    emphasis: true,
    columns: [
      {
        head: "01 / System",
        items: [
          { label: "Overview", to: "/zhc", note: "Autonomous software production" },
          { label: "How It Works", to: "/zhc/how-it-works", note: "Two human gates" },
        ],
      },
      {
        head: "02 / Evidence",
        items: [
          { label: "Enterprise", to: "/zhc/enterprise", note: "Audit, ownership, security" },
          { label: "Proof", to: "/zhc/proof", note: "Delivered production records" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    to: "/solutions",
    matchPrefix: "/solutions",
    columns: [
      {
        head: "01 / In production",
        items: [
          { label: "CyberGRC", to: "/cybergrc", note: "Built with ZHC" },
          { label: "Application Catalog", to: "/cybergrc/applications", note: "Full portfolio" },
        ],
      },
      {
        head: "02 / Roadmap",
        items: [
          { label: "Future Solutions", to: "/solutions", note: "Business-function autonomy" },
          { label: "What ZHC Builds", to: "/what-we-build", note: "Production categories" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    to: "/resources",
    matchPrefix: "/resources",
    columns: [
      {
        head: "01 / Library",
        items: [
          { label: "Documentation", to: "/resources", note: "System references" },
          { label: "Research", to: "/insights", note: "Constraint model papers" },
        ],
      },
      {
        head: "02 / Records",
        items: [
          { label: "Case Studies", to: "/outcomes", note: "Production outcomes" },
          { label: "Security Overview", to: "/trust/security-overview", note: "On request" },
        ],
      },
    ],
  },
  { label: "Insights", to: "/insights", matchPrefix: "/insights" },
  {
    label: "Company",
    to: "/company",
    matchPrefix: "/company",
    columns: [
      {
        head: "01 / Essert",
        items: [
          { label: "About", to: "/company", note: "The master brand" },
          { label: "Contact", to: "/contact", note: "Direct line" },
        ],
      },
    ],
  },
];

export const FOOTER_COLUMNS: NavColumn[] = [
  {
    head: "ZHC",
    items: [
      { label: "Overview", to: "/zhc" },
      { label: "How It Works", to: "/zhc/how-it-works" },
      { label: "Enterprise", to: "/zhc/enterprise" },
      { label: "Proof", to: "/zhc/proof" },
    ],
  },
  {
    head: "Solutions",
    items: [
      { label: "CyberGRC", to: "/cybergrc" },
      { label: "Application Catalog", to: "/cybergrc/applications" },
      { label: "Future Solutions", to: "/solutions" },
    ],
  },
  {
    head: "Resources",
    items: [
      { label: "Documentation", to: "/resources" },
      { label: "Research", to: "/insights" },
      { label: "Case Studies", to: "/outcomes" },
    ],
  },
  {
    head: "Insights",
    items: [
      { label: "Articles", to: "/insights" },
      { label: "Perspectives", to: "/insights", hash: "perspectives" },
    ],
  },
  {
    head: "Company",
    items: [
      { label: "About", to: "/company" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Security", to: "/trust/security-architecture" },
];

export function isCyberGrcRoute(pathname: string) {
  return pathname === "/cybergrc" || pathname.startsWith("/cybergrc/");
}

export function primaryCta(pathname: string) {
  return isCyberGrcRoute(pathname)
    ? { label: "Contact Sales", to: "/cybergrc/contact-sales" }
    : DEMO_CTA;
}
