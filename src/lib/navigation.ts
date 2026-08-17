export type NavLink = { label: string; to: string; hash?: string };
export type NavColumn = { head: string; items: NavLink[] };

export type PrimaryNav = {
  label: string;
  to: string;
  matchPrefix: string;
  columns?: NavColumn[];
};

/** Placeholder until the final shared login URL is supplied. */
export const LOGIN_URL = "/login-placeholder";

export const PRIMARY_NAV: PrimaryNav[] = [
  {
    label: "Platform",
    to: "/platform",
    matchPrefix: "/platform",
    columns: [
      {
        head: "ZHC Platform",
        items: [
          { label: "ZHC Overview", to: "/platform" },
          { label: "How ZHC Works", to: "/platform/how-it-works" },
        ],
      },
      {
        head: "MADAM",
        items: [{ label: "Agentic Governance", to: "/platform/madam" }],
      },

      {
        head: "Engagement",
        items: [
          { label: "Adopt ZHC", to: "/platform/adopt" },
          { label: "Delivered with ZHC", to: "/what-we-build" },
        ],
      },
      {
        head: "",
        items: [{ label: "Book an Executive Briefing", to: "/executive-briefing" }],
      },
    ],
  },
  { label: "What ZHC Builds", to: "/what-we-build", matchPrefix: "/what-we-build" },
  {
    label: "CyberGRC",
    to: "/cybergrc",
    matchPrefix: "/cybergrc",
    columns: [
      {
        head: "CyberGRC",
        items: [
          { label: "CyberGRC Overview", to: "/cybergrc" },
          { label: "How CyberGRC Is Built", to: "/cybergrc", hash: "built-with-zhc" },
          { label: "How it works", to: "/cybergrc/how-it-works" },
        ],
      },
      {
        head: "Application catalog",
        items: [{ label: "View All Applications", to: "/cybergrc/applications" }],
      },
      {
        head: "Commercial path",
        items: [{ label: "Contact Sales", to: "/cybergrc/contact-sales" }],
      },
    ],
  },
  {
    label: "Trust & Control",
    to: "/trust",
    matchPrefix: "/trust",
    columns: [
      {
        head: "Control and ownership",
        items: [
          { label: "Security Architecture", to: "/trust/security-architecture" },
          { label: "Data Handling & Residency", to: "/trust/data-residency" },
          { label: "Code Ownership & Portability", to: "/trust/code-ownership" },
        ],
      },
      {
        head: "Deployment and sovereignty",
        items: [
          { label: "Deployment Architecture", to: "/trust/deployment-architecture" },
          { label: "Sovereign Deployment", to: "/trust/sovereign-deployment" },
        ],
      },
      {
        head: "Evaluation",
        items: [
          { label: "Request the Security Overview", to: "/trust/security-overview" },
          { label: "Book an Executive Briefing", to: "/executive-briefing" },
        ],
      },
    ],
  },
  { label: "Outcomes", to: "/outcomes", matchPrefix: "/outcomes" },
  { label: "Insights", to: "/insights", matchPrefix: "/insights" },
];

export const FOOTER_COLUMNS: NavColumn[] = [
  {
    head: "Platform",
    items: [
      { label: "ZHC Overview", to: "/platform" },
      { label: "How ZHC Works", to: "/platform/how-it-works" },
      { label: "MADAM — Agentic Governance", to: "/platform/madam" },
      { label: "Adopt ZHC", to: "/platform/adopt" },
      { label: "Outcomes", to: "/outcomes" },
      { label: "Executive Briefing", to: "/executive-briefing" },
    ],
  },
  {
    head: "What ZHC Builds",
    items: [
      { label: "New Applications", to: "/what-we-build", hash: "new-enterprise-applications" },
      { label: "Modernization", to: "/what-we-build", hash: "application-modernization" },
      { label: "Customer Portals", to: "/what-we-build", hash: "customer-facing-portals" },
      { label: "Security & Compliance", to: "/what-we-build", hash: "security-compliance-platforms" },
      { label: "Enterprise Agents & AI", to: "/what-we-build", hash: "enterprise-agents-ai" },
    ],
  },
  {
    head: "CyberGRC",
    items: [
      { label: "Application Catalog", to: "/cybergrc/applications" },
      { label: "How CyberGRC Is Built", to: "/cybergrc", hash: "built-with-zhc" },
      { label: "How it works", to: "/cybergrc/how-it-works" },
      { label: "Contact Sales", to: "/cybergrc/contact-sales" },
    ],
  },
  {
    head: "Trust & Control",
    items: [
      { label: "Sovereign Deployment", to: "/trust/sovereign-deployment" },
      { label: "Security Architecture", to: "/trust/security-architecture" },
      { label: "Data & Residency", to: "/trust/data-residency" },
      { label: "Code Ownership", to: "/trust/code-ownership" },
      { label: "Deployment Architecture", to: "/trust/deployment-architecture" },
      { label: "Request the Security Overview", to: "/trust/security-overview" },
    ],
  },
  {
    head: "Company",
    items: [
      { label: "About Essert", to: "/company" },
      { label: "Leadership", to: "/company", hash: "leadership" },
      { label: "Customers & Markets", to: "/company", hash: "markets" },
      { label: "Intellectual Property", to: "/company", hash: "intellectual-property" },
      { label: "Partners", to: "/company", hash: "partnerships" },
    ],
  },
];

export function isCyberGrcRoute(pathname: string) {
  return pathname === "/cybergrc" || pathname.startsWith("/cybergrc/");
}

export function primaryCta(pathname: string) {
  return isCyberGrcRoute(pathname)
    ? { label: "Contact Sales", to: "/cybergrc/contact-sales" }
    : { label: "Book an Executive Briefing", to: "/executive-briefing" };
}
