export type NavLink = { label: string; to: string; hash?: string; desc?: string };
export type NavColumn = { head: string; items: NavLink[] };

/** A group inside a mega menu. `sub` renders as a nested technical sub-label. */
export type NavGroup = {
  head: string;
  items: NavLink[];
  sub?: { head: string; items: NavLink[] };
};

export type MegaMenu = {
  kicker: string;
  title: string;
  lede: string;
  groups: NavGroup[];
  cta?: NavLink;
};

export type PrimaryNav = {
  label: string;
  to: string;
  matchPrefix: string;
  mega?: MegaMenu;
};

/** Placeholder until the final shared login URL is supplied. Not shown in the UI. */
export const LOGIN_URL = "/login-placeholder";

const BRIEFING: NavLink = { label: "Book an Executive Briefing", to: "/executive-briefing" };

export const PRIMARY_NAV: PrimaryNav[] = [
  {
    label: "Platform",
    to: "/platform",
    matchPrefix: "/platform",
    mega: {
      kicker: "Platform",
      title: "ZHC — Zero Human Coding™",
      lede: "The platform for autonomous enterprise software production.",
      groups: [
        {
          head: "ZHC Platform",
          items: [
            {
              label: "ZHC Overview",
              to: "/platform",
              desc: "The platform and operating model",
            },
            {
              label: "How ZHC Works",
              to: "/platform/how-it-works",
              desc: "One lifecycle, continuously governed",
            },
          ],
          sub: {
            head: "MADAM",
            items: [
              {
                label: "Agentic Governance",
                to: "/platform/madam",
                desc: "The governance layer inside ZHC",
              },
            ],
          },
        },
        {
          head: "What ZHC Enables",
          items: [
            {
              label: "Enterprise Applications",
              to: "/what-we-build",
              hash: "new-enterprise-applications",
            },
            {
              label: "Application Modernization",
              to: "/what-we-build",
              hash: "application-modernization",
            },
            { label: "Enterprise Agents & AI", to: "/what-we-build", hash: "enterprise-agents-ai" },
            {
              label: "Customer-Facing Portals",
              to: "/what-we-build",
              hash: "customer-facing-portals",
            },
          ],
        },
        {
          head: "Engage",
          items: [
            {
              label: "Adopt ZHC",
              to: "/platform/adopt",
              desc: "Buy and operate ZHC as your platform",
            },
            {
              label: "Delivered with ZHC",
              to: "/what-we-build",
              desc: "A defined production outcome, delivered",
            },
          ],
        },
      ],
      cta: BRIEFING,
    },
  },
  {
    label: "What ZHC Builds",
    to: "/what-we-build",
    matchPrefix: "/what-we-build",
    mega: {
      kicker: "What ZHC Builds",
      title: "Enterprise software, engineered for production.",
      lede: "Defined production outcomes across applications, modernization, portals, and governed AI systems.",
      groups: [
        {
          head: "Applications",
          items: [
            {
              label: "New Enterprise Applications",
              to: "/what-we-build",
              hash: "new-enterprise-applications",
            },
            {
              label: "Application Modernization",
              to: "/what-we-build",
              hash: "application-modernization",
            },
            {
              label: "Customer-Facing Portals",
              to: "/what-we-build",
              hash: "customer-facing-portals",
            },
          ],
        },
        {
          head: "Systems",
          items: [
            {
              label: "Security & Compliance Platforms",
              to: "/what-we-build",
              hash: "security-compliance-platforms",
            },
            {
              label: "Enterprise Agents & AI Systems",
              to: "/what-we-build",
              hash: "enterprise-agents-ai",
            },
          ],
        },
        {
          head: "Engage",
          items: [
            { label: "View What We Build", to: "/what-we-build" },
            { label: "Outcomes in production", to: "/outcomes" },
          ],
        },
      ],
      cta: BRIEFING,
    },
  },
  {
    label: "CyberGRC",
    to: "/cybergrc",
    matchPrefix: "/cybergrc",
    mega: {
      kicker: "CyberGRC",
      title: "Enterprise AI governance and cyber risk management.",
      lede: "An application suite built with ZHC and governed by the same production lifecycle.",
      groups: [
        {
          head: "Explore CyberGRC",
          items: [
            { label: "CyberGRC Overview", to: "/cybergrc", desc: "The suite and its scope" },
            {
              label: "How CyberGRC Works",
              to: "/cybergrc/how-it-works",
              desc: "Operating model and controls",
            },
          ],
        },
        {
          head: "Resources",
          items: [
            {
              label: "Application Catalog",
              to: "/cybergrc/applications",
              desc: "Every application in the suite",
            },
            {
              label: "How CyberGRC Is Built",
              to: "/cybergrc",
              hash: "built-with-zhc",
              desc: "Built with ZHC",
            },
          ],
        },
        {
          head: "Engage",
          items: [
            { label: "Explore CyberGRC", to: "/cybergrc" },
            { label: "Contact Sales", to: "/cybergrc/contact-sales" },
          ],
        },
      ],
      cta: BRIEFING,
    },
  },
  {
    label: "Trust & Control",
    to: "/trust",
    matchPrefix: "/trust",
    mega: {
      kicker: "Trust & Control",
      title: "Governance, security, ownership, and deployment designed for enterprise control.",
      lede: "Control is a decision you make, not a default we make for you.",
      groups: [
        {
          head: "Control & Ownership",
          items: [
            { label: "Trust & Control Overview", to: "/trust" },
            { label: "Security Architecture", to: "/trust/security-architecture" },
            { label: "Data Handling", to: "/trust/data-residency" },
            { label: "Code Ownership & Portability", to: "/trust/code-ownership" },
          ],
        },
        {
          head: "Deployment & Sovereignty",
          items: [
            { label: "Sovereign Deployment", to: "/trust/sovereign-deployment" },
            { label: "Deployment Architecture", to: "/trust/deployment-architecture" },
          ],
        },
        {
          head: "Evaluation",
          items: [
            { label: "Security Overview", to: "/trust/security-overview" },
            { label: "About Essert", to: "/company" },
          ],
        },
      ],
      cta: BRIEFING,
    },
  },
  {
    label: "Outcomes",
    to: "/outcomes",
    matchPrefix: "/outcomes",
    mega: {
      kicker: "Outcomes",
      title: "Enterprise outcomes delivered through ZHC.",
      lede: "Production systems, measured results, and the thinking behind them.",
      groups: [
        {
          head: "Explore",
          items: [
            { label: "Outcomes Overview", to: "/outcomes" },
            { label: "Production Stories", to: "/outcomes" },
            { label: "Enterprise Results", to: "/outcomes" },
          ],
        },
        {
          head: "Insights",
          items: [
            { label: "Insights & Analysis", to: "/insights" },
            {
              label: "Technology Perspectives",
              to: "/insights/autonomous-software-production",
            },
          ],
        },
        {
          head: "Engage",
          items: [{ label: "View Outcomes", to: "/outcomes" }],
        },
      ],
      cta: BRIEFING,
    },
  },
  {
    label: "Insights",
    to: "/insights",
    matchPrefix: "/insights",
    mega: {
      kicker: "Insights",
      title: "Thinking on enterprise software, AI, governance, and production.",
      lede: "Perspectives for technology leaders evaluating autonomous production.",
      groups: [
        {
          head: "Explore",
          items: [
            { label: "All Insights", to: "/insights" },
            {
              label: "Autonomous Software Production",
              to: "/insights/autonomous-software-production",
            },
            { label: "Agentic Governance", to: "/insights/agentic-governance" },
            { label: "Enterprise Sovereignty", to: "/insights/enterprise-sovereignty" },
          ],
        },
        {
          head: "Resources",
          items: [
            { label: "Security Overview", to: "/trust/security-overview" },
            { label: "Outcomes", to: "/outcomes" },
          ],
        },
      ],
      cta: BRIEFING,
    },
  },
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
      { label: "Data Handling", to: "/trust/data-residency" },
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
