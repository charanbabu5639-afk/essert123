export type NavLink = { label: string; to: string; hash?: string };
export type NavColumn = { head: string; items: NavLink[] };

export type PrimaryNav = {
  label: string;
  to: string;
  matchPrefix: string;
  /** Desktop mega-menu columns. Absent = direct link, no dropdown. */
  columns?: NavColumn[];
  /** Reduced mobile essential-link set (§19). */
  mobile?: NavColumn[];
  /** One-line menu description shown above the columns. */
  blurb?: string;
};

/**
 * Login is a blocked item, not a deferred one: no tested production URL exists yet.
 * Header and footer ship with Login absent — never as `#` or a disabled link.
 */
export const LOGIN_URL: string | null = null;

export const PRIMARY_NAV: PrimaryNav[] = [
  {
    label: "Platform",
    to: "/platform",
    matchPrefix: "/platform",
    blurb:
      "ZHC — Zero Human Coding™ is the platform for autonomous enterprise software production.",
    columns: [
      {
        head: "Explore ZHC",
        items: [
          { label: "ZHC Overview", to: "/platform" },
          { label: "How ZHC Works", to: "/platform/how-it-works" },
          { label: "MADAM — Agentic Governance", to: "/platform/madam" },
        ],
      },
      {
        head: "Engage",
        items: [
          { label: "Adopt ZHC", to: "/platform/adopt" },
          { label: "Delivered with ZHC", to: "/what-zhc-builds" },
          { label: "Book an Executive Briefing", to: "/executive-briefing" },
        ],
      },
    ],
    mobile: [
      {
        head: "Explore ZHC",
        items: [
          { label: "ZHC Overview", to: "/platform" },
          { label: "How ZHC Works", to: "/platform/how-it-works" },
          { label: "MADAM — Agentic Governance", to: "/platform/madam" },
        ],
      },
      {
        head: "Engage",
        items: [
          { label: "Adopt ZHC", to: "/platform/adopt" },
          { label: "Delivered with ZHC", to: "/what-zhc-builds" },
          { label: "Book an Executive Briefing", to: "/executive-briefing" },
        ],
      },
    ],
  },
  { label: "What ZHC Builds", to: "/what-zhc-builds", matchPrefix: "/what-zhc-builds" },
  {
    label: "CyberGRC",
    to: "/cybergrc",
    matchPrefix: "/cybergrc",
    blurb: "Independently purchasable enterprise GRC applications built on ZHC.",
    columns: [
      {
        head: "Explore CyberGRC",
        items: [
          { label: "CyberGRC Overview", to: "/cybergrc" },
          { label: "How CyberGRC Works", to: "/cybergrc/how-it-works" },
        ],
      },
      {
        head: "Evaluate",
        items: [
          { label: "Application Catalog", to: "/cybergrc/applications" },
          { label: "CyberGRC Resources", to: "/cybergrc/resources" },
          { label: "Contact Sales", to: "/cybergrc/contact-sales" },
        ],
      },
    ],
    mobile: [
      {
        head: "Explore CyberGRC",
        items: [
          { label: "CyberGRC Overview", to: "/cybergrc" },
          { label: "How CyberGRC Works", to: "/cybergrc/how-it-works" },
        ],
      },
      {
        head: "Evaluate",
        items: [
          { label: "Application Catalog", to: "/cybergrc/applications" },
          { label: "CyberGRC Resources", to: "/cybergrc/resources" },
          { label: "Contact Sales", to: "/cybergrc/contact-sales" },
        ],
      },
    ],
  },
  {
    label: "Trust & Control",
    to: "/trust-control",
    matchPrefix: "/trust-control",
    columns: [
      {
        head: "Control and ownership",
        items: [
          { label: "Trust & Control Overview", to: "/trust-control" },
          { label: "Security Architecture", to: "/trust-control/security-architecture" },
          { label: "Data Handling & Residency", to: "/trust-control/data-handling-residency" },
          {
            label: "Code Ownership & Portability",
            to: "/trust-control/code-ownership-portability",
          },
        ],
      },
      {
        head: "Deployment and sovereignty",
        items: [
          { label: "Sovereign Deployment", to: "/trust-control/sovereign-deployment" },
          { label: "Deployment Architecture", to: "/trust-control/deployment-architecture" },
        ],
      },
      {
        head: "Evaluation",
        items: [
          {
            label: "Request the Security Overview",
            to: "/trust-control/request-security-overview",
          },
          { label: "About Essert", to: "/company" },
          { label: "Book an Executive Briefing", to: "/executive-briefing" },
        ],
      },
    ],
    mobile: [
      {
        head: "Control and ownership",
        items: [
          { label: "Trust & Control Overview", to: "/trust-control" },
          { label: "Security Architecture", to: "/trust-control/security-architecture" },
          { label: "Data Handling & Residency", to: "/trust-control/data-handling-residency" },
        ],
      },
      {
        head: "Deployment and sovereignty",
        items: [{ label: "Sovereign Deployment", to: "/trust-control/sovereign-deployment" }],
      },
      {
        head: "Evaluation",
        items: [
          {
            label: "Request the Security Overview",
            to: "/trust-control/request-security-overview",
          },
        ],
      },
    ],
  },
  { label: "Outcomes", to: "/outcomes", matchPrefix: "/outcomes" },
  { label: "Insights", to: "/insights", matchPrefix: "/insights" },
];

/** Seven published Phase 1 footer columns. */
export const FOOTER_COLUMNS: NavColumn[] = [
  {
    head: "Platform",
    items: [
      { label: "ZHC Overview", to: "/platform" },
      { label: "How ZHC Works", to: "/platform/how-it-works" },
      { label: "MADAM", to: "/platform/madam" },
      { label: "Adopt ZHC", to: "/platform/adopt" },
      { label: "Executive Briefing", to: "/executive-briefing" },
    ],
  },
  {
    head: "What ZHC Builds",
    items: [{ label: "What ZHC Builds", to: "/what-zhc-builds" }],
  },
  {
    head: "CyberGRC",
    items: [
      { label: "CyberGRC Overview", to: "/cybergrc" },
      { label: "Application Catalog", to: "/cybergrc/applications" },
      { label: "How CyberGRC Works", to: "/cybergrc/how-it-works" },
      { label: "CyberGRC Resources", to: "/cybergrc/resources" },
      { label: "Contact Sales", to: "/cybergrc/contact-sales" },
    ],
  },
  {
    head: "Trust & Control",
    items: [
      { label: "Trust & Control Overview", to: "/trust-control" },
      { label: "Security Architecture", to: "/trust-control/security-architecture" },
      { label: "Sovereign Deployment", to: "/trust-control/sovereign-deployment" },
      { label: "Deployment Architecture", to: "/trust-control/deployment-architecture" },
      { label: "Data Handling & Residency", to: "/trust-control/data-handling-residency" },
      { label: "Code Ownership & Portability", to: "/trust-control/code-ownership-portability" },
      { label: "Request Security Overview", to: "/trust-control/request-security-overview" },
    ],
  },
  {
    head: "Outcomes",
    items: [{ label: "Outcomes", to: "/outcomes" }],
  },
  {
    head: "Insights",
    items: [
      { label: "Insights", to: "/insights" },
      { label: "Autonomous Software Production", to: "/insights/autonomous-software-production" },
      { label: "Agentic Governance", to: "/insights/agentic-governance" },
      { label: "Enterprise Sovereignty", to: "/insights/enterprise-sovereignty" },
      { label: "Executive Perspectives", to: "/insights/executive-perspectives" },
    ],
  },
  {
    head: "Company",
    items: [
      { label: "About Essert", to: "/company" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy", to: "/legal/privacy" },
      { label: "Terms", to: "/legal/terms" },
    ],
  },
];

/**
 * Production story slugs are pending approved, measured stories. The footer shows
 * story rows only once the authoritative list is supplied — never placeholder rows.
 */
export const PRODUCTION_STORY_LINKS: NavLink[] = [];

export function isCyberGrcRoute(pathname: string) {
  return pathname === "/cybergrc" || pathname.startsWith("/cybergrc/");
}

export function primaryCta(pathname: string) {
  return isCyberGrcRoute(pathname)
    ? { label: "Contact Sales", to: "/cybergrc/contact-sales" }
    : { label: "Book an Executive Briefing", to: "/executive-briefing" };
}
