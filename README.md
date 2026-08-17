# Essert Nexus

ESSERT WEBSITE — MASTER LOVABLE DESIGN, LAYOUT & STRUCTURE PROMPT (v2)

Changelog from v1:

CyberGRC mega menu now has three items under the "CyberGRC" column: CyberGRC Overview, How CyberGRC Is Built (anchor), How it works (standalone page).

"About Essert" removed from the Trust & Control mega menu (Evaluation column). Company background now lives only at /company/ and in the footer's Company column — not duplicated as a Trust & Control nav link.

Added /cybergrc/how-it-works/ to the routing requirement; removed /trust/about-essert/ as a standalone route (superseded by /company/).

Mobile accordion example for CyberGRC updated to include "How it works."

Build a premium enterprise technology website for Essert using Lovable.

This prompt defines the design system, branding, visual language, layout architecture, navigation behavior, mega menus, responsive structure, page hierarchy, and interaction rules.

Use the attached files as the implementation source:

Essert-Website-Sitemap-v3.1.md — authoritative information architecture, page hierarchy, labels, routes, and commercial/navigation strategy.

Essert-Website-Page-Content-v1.md (plus the CyberGRC section content update) — authoritative Phase 1 page content and section order.

essert_recommended_mega_menu.html (updated version) — authoritative reference for the navigation order, mega-menu grouping, and dropdown behavior.

The supplied Essert logo image — use this exact logo asset in the website header and footer.

Do not redesign the information architecture. Do not invent additional primary navigation items.

1. BRAND POSITIONING

Design Essert as a serious enterprise technology company, not as:

a generic SaaS startup

an AI tool

a developer-tool website

a digital agency

a consulting agency

a flashy "AI revolution" website

The visual language should communicate:

Enterprise authority + technical depth + control + precision + trust + modern software infrastructure.

The website should feel appropriate for:

CIOs

CTOs

CISOs

enterprise technology leaders

security teams

enterprise procurement

technical decision makers

The central product architecture is:

ESSERT

→ ZHC — Zero Human Coding™

→ Control Plane

→ Governed Agent Fleet

→ MADAM — Agentic Governance

And separately:

CyberGRC

→ Independently purchasable enterprise application portfolio built using ZHC.

Do not create a separate "Essert Platform" product layer. ZHC is the platform.

2. LOGO / BRAND ASSET

Use the supplied Essert logo image as the actual brand asset.

Do not redraw, reinterpret, stylize, or replace the logo.

The logo consists of:

black Essert symbol

black "Essert" wordmark

clean white background

Use the logo primarily in:

header

footer

mobile navigation

favicon/app icon where appropriate

Header logo should link to:

/

Maintain generous whitespace around the logo.

Do not place the logo inside a colored badge.

Do not add gradients, glow effects, neon effects, 3D effects, or animated logo treatments.

3. VISUAL DESIGN SYSTEM

Create a restrained, premium enterprise visual system.

Color philosophy

Use a monochrome-first palette derived from the supplied logo.

Primary

Near Black: #0A0A0A

Pure Black: #000000

White: #FFFFFF

Neutral scale

#F7F7F5

#F2F2F0

#E7E7E4

#D6D6D2

#A3A3A0

#6B6B68

#3A3A38

Use neutral surfaces extensively.

Use black for:

primary typography

primary CTA

navigation emphasis

strong section headings

Use white for:

primary page surfaces

cards where appropriate

navigation surfaces

Use subtle gray backgrounds to separate major sections.

Do not use:

purple AI gradients

blue/purple neon

glowing borders

excessive glassmorphism

colorful SaaS gradients

futuristic robot imagery

decorative AI imagery

If a restrained accent is needed for interaction states, use a very subtle neutral accent rather than introducing a new brand color.

4. TYPOGRAPHY

Use a modern enterprise sans-serif.

Preferred hierarchy:

Display: large, confident, tight tracking

H1: bold but restrained

H2: strong editorial hierarchy

H3: medium/bold

Body: highly readable

Navigation: medium weight

Metadata/kicker: compact uppercase or small-cap treatment

Typography should feel closer to:

enterprise infrastructure + premium technical publication

than:

startup landing page + marketing SaaS template.

Recommended characteristics:

large typography

generous line height

controlled text width

short paragraphs

strong visual hierarchy

minimal decorative typography

Hero headlines should be large but never consume the entire viewport.

5. OVERALL DESIGN PRINCIPLE

Use a structured editorial enterprise layout.

The visual rhythm should be:

Statement → Explanation → Evidence → System → Detail → CTA

Avoid:

endless centered sections

repetitive three-card grids

feature-card overload

excessive rounded cards

huge empty hero sections

generic SaaS illustrations

Use:

asymmetric layouts

strong grids

technical diagrams

lifecycle visualizations

restrained cards

thin borders

large section headings

data/evidence blocks

architecture-style visualizations

timeline/process layouts

editorial content blocks

6. GLOBAL HEADER

Create a premium fixed/sticky desktop header.

Structure:

[ ESSERT LOGO + ZHC descriptor ]

Platform

What ZHC Builds

CyberGRC

Trust & Control

Outcomes

Insights

Login

[ Book an Executive Briefing ]

The six primary navigation labels must remain in exactly this order:

Platform

What ZHC Builds

CyberGRC

Trust & Control

Outcomes

Insights

Then:

Login — utility navigation

Book an Executive Briefing — dominant CTA

The six navigation labels are the maximum primary navigation.

Do not add:

Home

Products

Solutions

Resources

Company

Enterprise

Pricing

Documentation

Support

Start Free

to the primary header.

The Essert logo itself is the Home link.

7. CRITICAL NAVIGATION BEHAVIOR

Implement the navigation exactly as follows.

Parent navigation items are REAL LINKS

Every primary navigation item that represents a landing page must redirect to its landing page when clicked.

Examples:

Platform → /platform/

What ZHC Builds → /what-we-build/

CyberGRC → /cybergrc/

Trust & Control → /trust/

Outcomes → /outcomes/

Insights → /insights/

Do NOT use:

href="#"

Do NOT make parent navigation items fake buttons.

Do NOT require the user to click twice.

8. DESKTOP MEGA-MENU BEHAVIOR

Follow the supplied essert_recommended_mega_menu.html structure (updated version, with "How it works" under CyberGRC and no "About Essert" item under Trust & Control).

However, improve the interaction for the production website:

On hover

When the user hovers over:

Platform

CyberGRC

Trust & Control

show the corresponding mega menu.

On click

When the user clicks the parent label itself:

redirect immediately to the parent landing page.

For example:

Hover Platform → show Platform mega menu

Click Platform → navigate to /platform/

The dropdown must not replace the parent page navigation.

Use real anchor elements for the parent navigation.

The mega menu links themselves must also be real links.

9. MEGA-MENU INTERACTION QUALITY

The dropdown should feel deliberate and premium.

Use:

150–200ms entrance animation

subtle opacity + translate transition

no bounce

no exaggerated motion

no large scaling

no floating "marketing card" effect

The dropdown should appear directly underneath the navigation.

Use a large enterprise-style panel approximately:

max-width: 1180–1280px

margin: auto

padding: 28–36px

Use a subtle border.

Use a restrained shadow.

Avoid excessive rounded corners.

Recommended:

border-radius: 0–12px

The mega menu should visually feel like an extension of the header, not a separate popup application.

Keep enough vertical whitespace between menu groups.

10. PLATFORM MEGA MENU

Platform opens a three-column mega menu.

PLATFORM

CORE                    ENGAGEMENT                 CTA

ZHC Overview            Adopt ZHC                  Book an
How ZHC Works           Delivered with ZHC         Executive Briefing
MADAM —
Agentic Governance


Links:

ZHC Overview → /platform/

How ZHC Works → /platform/how-it-works/

MADAM — Agentic Governance → /platform/madam/

Adopt ZHC → /platform/adopt/

Delivered with ZHC → /what-we-build/

Book an Executive Briefing → /executive-briefing/

Do not add Phase 2 items to this menu.

Do not add:

Architecture

Pricing

Enterprise Assurance

Production Outcomes

Build with ZHC

Built with ZHC

to the Phase 1 mega menu.

MADAM has its own page but remains inside the Platform hierarchy rather than becoming a primary navigation tab.

11. WHAT ZHC BUILDS NAVIGATION

"What ZHC Builds" is a direct landing-page navigation item.

Click:

What ZHC Builds → /what-we-build/

Hovering it may optionally reveal a compact dropdown only if required by the implementation, but the supplied navigation architecture treats it as a direct landing page.

Do not turn it into a large primary mega menu.

The landing page should present the five categories:

New enterprise applications

Application modernization

Customer-facing portals

Security and compliance platforms

Enterprise agents and AI systems

Each category should visually behave like a substantial content section rather than five generic SaaS cards.

12. CYBERGRC MEGA MENU

Hover:

CyberGRC

Show three columns:

CyberGRC                 Application catalog       Commercial path

CyberGRC Overview        View All Applications     Contact Sales
How CyberGRC Is Built
How it works


The CyberGRC column now has three items, not two. "How CyberGRC Is Built" and "How it works" are intentionally two different destinations, not duplicate links to the same explanation:

"How CyberGRC Is Built" jumps to a short, anchored claim on the overview page itself (#built-with-zhc) — it states that CyberGRC is built with ZHC, right where the visitor is already reading about CyberGRC.

"How it works" goes to a standalone page with the full explanation: lifecycle, governance, and why it matters to a buyer.

Links:

CyberGRC Overview → /cybergrc/

How CyberGRC Is Built → /cybergrc/#built-with-zhc

How it works → /cybergrc/how-it-works/

View All Applications → /cybergrc/applications/

Contact Sales → /cybergrc/contact-sales/

Do not place individual applications into the primary mega menu at launch.

Do not create placeholder application links.

Do not show:

Featured Application 01

Featured Application 02

Featured Application 03

Customer Portfolio

Customer Login

Start Free

The application catalog should be flat and use filters/tags for discovery.

13. TRUST & CONTROL MEGA MENU

Hover:

Trust & Control

Show three columns:

CONTROL AND OWNERSHIP       DEPLOYMENT AND SOVEREIGNTY       EVALUATION

Security Architecture       Deployment Architecture          Request the Security Overview
Data Handling & Residency                                    Book an Executive Briefing
Code Ownership & Portability


Links:

Security Architecture → /trust/security-architecture/

Data Handling & Residency → /trust/data-residency/

Code Ownership & Portability → /trust/code-ownership/

Deployment Architecture → /trust/deployment-architecture/

Request the Security Overview → /trust/security-overview/

Book an Executive Briefing → /executive-briefing/

Do not add "About Essert" to this mega menu. Company background, leadership, active markets, and intellectual property posture live on the dedicated /company/ page (see Section 44 footer) — do not duplicate that link inside the Trust & Control dropdown.

Do not create a seventh primary navigation item called Company.

14. OUTCOMES

Outcomes is a direct navigation link.

Outcomes → /outcomes/

No mega menu.

The page should feel like an evidence/proof environment.

Recommended visual language:

IN PRODUCTION. MEASURED.

[large production metric]

context

timeline

system scope

production status

controls

customer outcome

Use large numbers only when the supplied content contains approved measurements.

Never invent metrics.

Do not create fake statistics.

15. INSIGHTS

Insights is a direct navigation link.

Insights → /insights/

No mega menu.

Design it like a premium technology publication rather than a generic blog.

Use:

featured article

editorial cards

topic/category navigation

article metadata

reading time

publication date

topic labels

Core topic areas include:

Autonomous Software Production

Agentic Governance

Enterprise Sovereignty

CyberGRC

16. LOGIN

Login is a quiet utility action.

Place it visually apart from the primary navigation.

It should be:

text link

medium weight

no large button treatment

Destination:

FINAL SHARED LOGIN URL — TO BE PROVIDED

Do not invent a login URL.

Use a configurable placeholder in the application until the real URL is supplied.

17. PRIMARY CTA

The main site-wide CTA is:

Book an Executive Briefing

Destination:

/executive-briefing/

Make this visually dominant but restrained.

Recommended treatment:

black background

white text

medium radius

strong typography

subtle hover inversion or elevation

no gradients

Do not add:

Start Free

Free Trial

Get Started

Pricing

18. CYBERGRC CTA EXCEPTION

When the user is inside:

/cybergrc/*

change the primary header CTA from:

Book an Executive Briefing

to:

Contact Sales

Destination:

/cybergrc/contact-sales/

This must happen automatically based on the current route. This includes /cybergrc/how-it-works/.

Outside CyberGRC, restore:

Book an Executive Briefing

19. HEADER LAYOUT

Desktop:

┌──────────────────────────────────────────────────────────────────────┐
│ ESSERT   ZHC descriptor   Platform  What ZHC Builds  CyberGRC ...   │
│                                                   Login  [Briefing]  │
└──────────────────────────────────────────────────────────────────────┘


Use a max-width content container.

Recommended:

max-width: 1280px

padding-inline: 28–40px

Header height:

72–84px

Do not make the header excessively tall.

The logo should have enough breathing room.

20. MOBILE NAVIGATION

Create a clean mobile navigation drawer.

The same six labels must remain in the same order:

Platform

What ZHC Builds

CyberGRC

Trust & Control

Outcomes

Insights

Then:

Login

Then persistent bottom CTA:

Book an Executive Briefing

Inside /cybergrc/*, change it to:

Contact Sales

Mega menus become accordion groups.

Example:

Platform
  Core
    ZHC Overview
    How ZHC Works
    MADAM — Agentic Governance
  Engagement
    Adopt ZHC
    Delivered with ZHC

CyberGRC
  CyberGRC
    CyberGRC Overview
    How CyberGRC Is Built
    How it works
  Application catalog
    View All Applications
  Commercial path
    Contact Sales

Trust & Control
  Control and ownership
    Security Architecture
    Data Handling & Residency
    Code Ownership & Portability
  Deployment and sovereignty
    Deployment Architecture
  Evaluation
    Request the Security Overview
    Book an Executive Briefing


Do not flatten the group headings.

21. MOBILE PARENT LINK BEHAVIOR

Because parent items must redirect to their landing pages, make the parent label itself a navigation link.

Use a separate visual chevron/interaction affordance for opening the mobile submenu.

For example:

Platform >

Clicking:

Platform text → /platform/

Clicking:

→ expands the submenu.

Do not make the entire parent row an accordion if that prevents navigation.

22. PAGE CONTAINER SYSTEM

Use a consistent global container:

max-width: 1280px

margin: 0 auto

padding: 0 32px

Large desktop:

padding: 0 48px

Tablet:

padding: 0 28px

Mobile:

padding: 0 20px

Use a 12-column desktop grid.

Example:

12-column grid

gap: 24px

Use 6-column or 4-column structures where appropriate.

23. SPACING SYSTEM

Use an intentional spacing scale.

Primary spacing:

8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 120px

Major sections should generally have:

80–120px vertical spacing on desktop.

Mobile:

56–80px

Do not create excessive vertical whitespace.

24. BORDER SYSTEM

Use thin, subtle borders.

Primary: 1px solid #E7E7E4

Dark surfaces: 1px solid rgba(255,255,255,0.12)

Borders should establish structure rather than become decoration.

25. CARD SYSTEM

Cards should be used selectively.

Use:

thin borders, moderate radius, generous padding, strong typography, minimal shadows

Avoid:

giant floating cards, glassmorphism, excessive shadows, gradient cards, icon-heavy cards

Recommended radius: 8px, 12px, 16px maximum

The site should feel architectural rather than "card-based SaaS."

26. HOMEPAGE STRUCTURE

Build the homepage according to the supplied content deck and sitemap.

Do not change the sequence.

Structure:

HEADER

ZHC HERO

THE PRODUCTION CONSTRAINT

QUANTIFIED PRODUCTION OUTCOME

WHAT ZHC BUILDS

ZHC PLATFORM

HOW ZHC WORKS

TRUST & CONTROL

CYBERGRC APPLICATION PORTFOLIO

PRODUCTION STORIES

EXECUTIVE CLOSE

FOOTER

The homepage must be ZHC-led.

Do not split the hero between ZHC and CyberGRC.

27. HOMEPAGE HERO DESIGN

Hero should be highly confident and minimal.

Structure:

small kicker: ZHC — Zero Human Coding™

category: Autonomous software production

large headline: Your specification becomes your production system.

supporting paragraph: Human control. Autonomous execution.

[ Book an Executive Briefing ] [ See What ZHC Builds ]

Use an understated technical visual beside or beneath the content.

Preferred visual:

SPECIFICATION
      ↓
   DEFINE
      ↓
    BUILD
      ↓
  VALIDATE
      ↓
   SECURE
      ↓
   DEPLOY
      ↓
  OPERATE


This should look like an enterprise production pipeline, not an AI illustration.

28. PRODUCTION CONSTRAINT SECTION

Present the four constraints:

Speed, Cost, Capacity, Governance

Do not make this a generic four-card marketing grid.

Instead, use a strong editorial composition.

Example:

ONE CONSTRAINT

Enterprise software delivery is limited
by the same underlying constraint.

          SPEED
          COST
          CAPACITY
          GOVERNANCE


Use large typography and thin dividing lines.

29. ZHC PLATFORM VISUAL

Create a visual representation of:

                 ZHC
                  │
        ┌─────────┴─────────┐
        │                   │
  CONTROL PLANE       GOVERNED AGENT FLEET
        │                   │
 Specification          Execution
 Policy                 Validation
 Audit trail             Security
                         Deployment


Below this introduce MADAM as the governance layer.

Do not use robot illustrations.

Do not use generic AI brain graphics.

30. HOW ZHC WORKS VISUAL

Create an interactive horizontal lifecycle.

Intent & Controls
       ↓
    Define
       ↓
     Build
       ↓
   Validate
       ↓
    Secure
       ↓
    Deploy
       ↓
   Operate
       ↓
Transfer or Continue


On desktop: horizontal sequence.

On mobile: vertical sequence.

Each stage can expand or reveal supporting information.

Use subtle transitions only.

31. MADAM PAGE DESIGN

Route: /platform/madam/

MADAM should look like a deep technical capability page.

Structure:

Hero → MADAM definition → What MADAM governs → Agent lifecycle → Monitoring and observability → Policy enforcement → AI security posture → Model / tool / access controls → Executive CTA

Do not position MADAM as a separately purchasable product.

32. WHAT ZHC BUILDS PAGE

Route: /what-we-build/

Create five large sections:

01 New enterprise applications

02 Application modernization

03 Customer-facing portals

04 Security and compliance platforms

05 Enterprise agents and AI systems

Each section should use:

Constraint → Specification → What ZHC executes → Customer receives → Control posture → Production outcome

Use alternating layouts rather than five identical cards.

33. TRUST & CONTROL PAGE

Route: /trust/

Hero:

Can you control, secure, deploy and own this in your environment?

Use an assurance-oriented layout.

Sections:

Control and ownership

Security Architecture

Data Handling & Residency

Code Ownership & Portability

Deployment and sovereignty

Deployment Architecture

Evaluation

Request the Security Overview

Book an Executive Briefing

For company background, leadership, active markets, and intellectual property posture, direct the visitor to the dedicated /company/ page rather than repeating it as a Trust & Control section — this avoids showing the same "About Essert" content in two different places on the site.

Use technical diagrams and architecture visualizations where useful.

Avoid security-stock imagery.

Do not use padlock illustrations everywhere.

34. SECURITY ARCHITECTURE PAGE

Route: /trust/security-architecture/

Design as a technical architecture document presented as a premium web experience.

Use:

architecture diagrams, control layers, pipeline stages, governance boundaries, explanatory callouts

Do not make unsupported certification claims.

35. DEPLOYMENT ARCHITECTURE PAGE

Route: /trust/deployment-architecture/

Visualize deployment as a continuum:

Essert Cloud
     ↓
Dedicated Managed Environment
     ↓
Customer Cloud
     ↓
Sovereign Deployment


Use a horizontal architecture diagram on desktop and vertical progression on mobile.

Clearly distinguish current availability from future/platform direction wherever the supplied content requires it.

36. DATA HANDLING & RESIDENCY PAGE

Route: /trust/data-residency/

Use an information architecture centered around:

What data enters
        ↓
Where it is processed
        ↓
Where it is stored
        ↓
How residency is enforced
        ↓
What happens after deployment


Use data-flow diagrams rather than generic security imagery.

37. CODE OWNERSHIP & PORTABILITY PAGE

Route: /trust/code-ownership/

Visually communicate:

Specification + Audit trail + Code + Running system

Then show:

Operate independently OR Continue under Essert

Use strong typography and technical diagrams.

38. SECURITY OVERVIEW PAGE

Route: /trust/security-overview/

Create a concise gated conversion experience.

Design:

Hero → What you'll receive → Short form → Privacy / trust note → Submit

Fields:

Name, Company, Work email, Role, What you're evaluating ZHC for

Do not make this look like a generic SaaS lead form.

39. OUTCOMES PAGE

Route: /outcomes/

Hero: In production. Measured.

Use large quantified outcome storytelling.

Each story should visually expose:

Business problem → Specification size → Timeline → System scope → Architecture → Production status → Controls → Customer received → Measurement definition

Use exact supplied measurements only.

40. CYBERGRC PAGE

Route: /cybergrc/

CyberGRC should have its own visual identity within the Essert system while remaining clearly part of Essert.

Structure:

CyberGRC overview → Application portfolio → Built with ZHC (anchored claim, #built-with-zhc, links out to "How it works") → Application catalog → Commercial CTA

The application catalog should be flat.

Use:

application cards, tags, filters, domain/regulation filters, availability status, deployment posture, Contact Sales

Do not create nested product navigation.

40a. CYBERGRC — HOW IT WORKS PAGE

Route: /cybergrc/how-it-works/

This is the full explanation that the overview page's "Built with ZHC" anchor links out to. It should not repeat the overview page verbatim — it carries the fuller lifecycle/governance explanation.

Structure:

Hero (How CyberGRC works) → What this means in practice → Why this matters to you as a buyer → Contact Sales → FAQs

41. CYBERGRC APPLICATION DETAIL TEMPLATE

Use one reusable template.

Structure:

Application name → Buyer outcome → Problem → Primary workflow → Capabilities → Regulation / domain → Deployment posture → Availability → Contact Sales

Do not invent application names.

Use placeholders until the authoritative application list is supplied.

42. INSIGHTS PAGE

Route: /insights/

Design as an editorial publication.

Hero: Essert Insights

Then: Featured insight

Follow with:

Executive Perspectives, Research & Guides, Production Lessons, CIO Briefings, Agentic Governance Analysis, CyberGRC Regulatory Guidance

Use a strong editorial grid.

Avoid a generic WordPress blog appearance.

43. EXECUTIVE BRIEFING PAGE

Route: /executive-briefing/

This is a premium conversion page.

Structure:

Headline → Why the conversation matters → What to bring → What will be discussed → Short enterprise form → Calendly / booking flow

Form fields:

Name, Company, Work email, Executive role, Use-case category, Desired business outcome, Target timeline

Do not ask for detailed architecture or security configuration before the first conversation.

44. FOOTER

Use a large enterprise footer.

Five columns:

Platform

ZHC Overview

How ZHC Works

MADAM — Agentic Governance

Outcomes

Executive Briefing

What ZHC Builds

New Applications

Modernization

Customer Portals

Security & Compliance

Enterprise Agents & AI

CyberGRC

Application Catalog

How CyberGRC Is Built

How it works

Contact Sales

Login

Trust & Control

Sovereign Deployment

Security Architecture

Data & Residency

Code Ownership

Deployment Architecture

Request the Security Overview

Company

About Essert (→ /company/)

Leadership

Customers & Markets

Intellectual Property

Partners

Footer utilities:

Contact, Privacy, Terms, Security / Report a Vulnerability, Status

Only show operational links when they are actually available.

45. FOOTER VISUAL STYLE

Footer should be substantial but restrained.

Use:

black or near-black surface, white primary typography, muted gray secondary typography, thin separators, large Essert logo, small legal/navigation area

Do not use a huge colorful footer.

46. INTERACTION DESIGN

Use subtle premium interactions.

Navigation:

hover underline or bottom border, active page indicator, mega menu fade/slide, no excessive motion

Buttons:

subtle color inversion, slight translate/elevation, 150–200ms transition

Cards:

subtle border change, small elevation, no dramatic movement

Lifecycle diagrams:

stage highlight, controlled transitions

Respect:

prefers-reduced-motion

47. ACTIVE NAVIGATION

The active primary navigation item should remain visually identifiable.

Examples:

On /platform/: Platform (underline)

On /what-we-build/: What ZHC Builds (underline)

On /cybergrc/*: CyberGRC (underline) — this includes /cybergrc/how-it-works/

On /trust/*: Trust & Control (underline)

On /outcomes/*: Outcomes (underline)

On /insights/*: Insights (underline)

The active state should be subtle and premium.

48. ROUTING REQUIREMENT

Implement real client-side routing for every Phase 1 destination.

At minimum:

/
/platform/
/platform/how-it-works/
/platform/madam/
/platform/adopt/
/what-we-build/
/trust/
/trust/sovereign-deployment/
/trust/security-architecture/
/trust/deployment-architecture/
/trust/data-residency/
/trust/code-ownership/
/trust/security-overview/
/outcomes/
/outcomes/{story-slug}
/cybergrc/
/cybergrc/#built-with-zhc
/cybergrc/how-it-works/
/cybergrc/applications/
/cybergrc/applications/{application-slug}
/cybergrc/contact-sales/
/insights/
/company/
/executive-briefing/


/trust/about-essert/ is no longer a standalone route — company background lives at /company/ only, avoiding a duplicate destination for the same content.

Do not create dead routes.

Do not use # placeholder navigation for actual pages.

Where the supplied HTML and sitemap have a route naming discrepancy, use the sitemap's Phase 1 route as the canonical production route, while preserving the HTML's navigation grouping and ordering.

49. PAGE TRANSITIONS

Use lightweight page transitions.

Recommended: fade + very small upward movement

Duration: 150–250ms

Do not use:

page zoom, full-screen transitions, excessive parallax, cinematic loading screens

The website should feel fast.

50. RESPONSIVE BREAKPOINTS

Optimize for: 1440px+, 1280px, 1024px, 768px, 480px, 390px

Desktop: full mega menus, 12-column grid, large hero typography

Tablet: compressed navigation, reduced spacing, simplified grids

Mobile: drawer navigation, accordion mega menus, one-column content, persistent CTA, vertical lifecycle, simplified diagrams

Nothing should overflow horizontally.

51. ACCESSIBILITY

Implement:

semantic HTML, real <a> elements for navigation, keyboard-accessible menus, visible focus states, ARIA labels where necessary, accessible dropdown behavior, sufficient contrast, reduced-motion support, logical heading hierarchy

The navigation must work without relying solely on hover.

Desktop hover is an enhancement.

Keyboard users must be able to navigate the menus.

52. NAVIGATION IMPLEMENTATION RULE

Do not copy the supplied HTML literally as static HTML.

Use its navigation architecture and menu grouping as the reference.

Build the production implementation using clean reusable React components:

Header
├── Logo
├── PrimaryNavigation
│   ├── PlatformMenu
│   ├── WhatZHCBuilds
│   ├── CyberGRCMenu
│   ├── TrustControlMenu
│   ├── Outcomes
│   └── Insights
├── Login
└── PrimaryCTA


Create reusable:

MegaMenu, MegaMenuColumn, MegaMenuItem, MobileNavigation, MobileAccordion

Use route-aware state to control:

active navigation, CyberGRC CTA replacement, mobile menu, dropdown state

53. IMPORTANT PARENT NAVIGATION LOGIC

Implement this exact logic:

USER HOVERS PLATFORM        → SHOW PLATFORM MEGA MENU
USER CLICKS PLATFORM        → GO TO /platform/
USER CLICKS "HOW ZHC WORKS" → GO TO /platform/how-it-works/

USER HOVERS CYBERGRC        → SHOW CYBERGRC MEGA MENU
USER CLICKS CYBERGRC        → GO TO /cybergrc/
USER CLICKS "HOW IT WORKS"  → GO TO /cybergrc/how-it-works/

USER HOVERS TRUST & CONTROL → SHOW TRUST MEGA MENU
USER CLICKS TRUST & CONTROL → GO TO /trust/

USER CLICKS OUTCOMES        → GO TO /outcomes/
USER CLICKS INSIGHTS        → GO TO /insights/


This behavior is mandatory.

Do not implement parent navigation as: click = open dropdown only

The dropdown is triggered by hover; the parent itself remains a navigable landing page.

54. DESIGN LANGUAGE TO AVOID

Do NOT create:

generic blue SaaS template, purple AI gradients, glowing AI interfaces, robot imagery, stock-photo enterprise executives, excessive rounded cards, giant icon grids, "AI magic" animations, fake dashboards, fake statistics, fake customer logos, fake testimonials, fake certifications, fake awards, fake product screenshots, pricing tables, free trial CTA, "Start Free", "Book a Demo" as replacement for Executive Briefing, "Solutions" navigation, "Products" navigation, "Enterprise" navigation, "Resources" navigation

55. CONTENT IMPLEMENTATION RULE

Use the supplied:

Essert-Website-Page-Content-v1.md (plus the CyberGRC content update covering /cybergrc/ and /cybergrc/how-it-works/)

as the page-content source.

Preserve the specified:

page titles, section sequence, terminology, CTA language, routes, distinctions between ZHC and CyberGRC, production-status language, trust/control language

Do not invent claims.

Do not invent numbers.

Do not invent certifications.

Do not invent application names.

Do not invent customer logos.

Use clear placeholders for missing approved assets/data.

56. FINAL EXPERIENCE GOAL

The finished website should feel like:

A new category-defining enterprise software company with the seriousness of infrastructure software, the clarity of a premium technology publication, and the confidence of a production platform.

The user should immediately understand:

ESSERT → Company

ZHC → Platform

MADAM → Governance capability inside ZHC

CyberGRC → Applications built using ZHC

The navigation should communicate the CIO journey:

What is it? → Platform

What can it produce? → What ZHC Builds

What can I buy now? → CyberGRC

Can I trust/control/own it? → Trust & Control

Has it actually worked? → Outcomes

What does Essert believe? → Insights

The website's dominant commercial journey should be:

Enterprise problem → ZHC → Production evidence → Trust & control → Executive Briefing

Build the website around this hierarchy.

Do not alter the approved information architecture. Do not add navigation items. Do not create dead links. Do not substitute generic SaaS design patterns for the specified enterprise architecture.use the prompt and and use the content and and follow the navigation and implement this

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://essert123.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f3c4831-1377-459f-87f4-64db98695b16).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
