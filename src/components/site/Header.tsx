import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Container, CtaLink } from "./primitives";
import { Logo } from "./Logo";
import { PRIMARY_NAV, primaryCta, type MegaMenu, type NavGroup, type NavLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function MenuLink({
  item,
  onNavigate,
  size = "base",
}: {
  item: NavLink;
  onNavigate: () => void;
  size?: "base" | "sm";
}) {
  return (
    <Link
      to={item.to}
      {...(item.hash ? { hash: item.hash } : {})}
      onClick={onNavigate}
      className="group block py-2"
    >
      <span
        className={cn(
          "flex items-center gap-1.5 font-semibold text-foreground transition-colors group-hover:text-brand",
          size === "base" ? "text-[16px]" : "text-[15px]",
        )}
      >
        {item.label}
        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
      {item.desc ? (
        <span className="mt-0.5 block text-[12.5px] leading-snug text-muted-foreground">
          {item.desc}
        </span>
      ) : null}
    </Link>
  );
}

function MegaGroup({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  return (
    <div>
      <p className="kicker mb-5">{group.head}</p>
      <div className="space-y-3">
        {group.items.map((item) => (
          <MenuLink key={item.label + item.to + (item.hash ?? "")} item={item} onNavigate={onNavigate} />
        ))}
      </div>
      {group.sub ? (
        <div className="mt-7 border-t border-border pt-5">
          <p className="kicker mb-3 text-foreground/70">{group.sub.head}</p>
          <div className="space-y-3 pl-4 border-l border-brand/40">
            {group.sub.items.map((item) => (
              <MenuLink key={item.label} item={item} onNavigate={onNavigate} size="sm" />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MegaPanel({ mega, onNavigate }: { mega: MegaMenu; onNavigate: () => void }) {
  return (
    <div className="mx-auto w-full max-w-[1360px] px-10 py-11 xl:px-14">
      <div className="flex flex-col gap-2">
        <p className="kicker">{mega.kicker}</p>
        <h2 className="text-2xl font-semibold tracking-tight">{mega.title}</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">{mega.lede}</p>
      </div>

      <div className="mt-9 grid gap-x-16 gap-y-10 border-t border-border pt-9 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr]">
        {mega.groups.map((group, i) => (
          <div
            key={group.head}
            className={cn(i > 0 && "lg:border-l lg:border-border lg:pl-12")}
          >
            <MegaGroup group={group} onNavigate={onNavigate} />
            {mega.cta && i === mega.groups.length - 1 ? (
              <CtaLink
                to={mega.cta.to}
                className="mt-7 inline-flex"
                onClick={onNavigate}
              >
                {mega.cta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </CtaLink>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const cta = primaryCta(pathname);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [openMenu]);

  const activeMega = PRIMARY_NAV.find((n) => n.label === openMenu)?.mega;
  const isActive = (prefix: string) => pathname === prefix || pathname.startsWith(prefix + "/");

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpenMenu(null);
        }}
      >
        <Container>
          <div className="flex h-[68px] items-center justify-between gap-6">
            <Link to="/" aria-label="Essert home" className="shrink-0">
              <Logo />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.label} className="relative">
                    <span className="flex items-center">
                      <Link
                        to={item.to}
                        className={cn(
                          "whitespace-nowrap border-b-2 px-3 py-[22px] text-sm transition-colors",
                          isActive(item.matchPrefix)
                            ? "border-brand font-semibold text-foreground"
                            : "border-transparent font-medium text-foreground/75 hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.mega ? (
                        <button
                          type="button"
                          aria-label={`${item.label} menu`}
                          aria-expanded={openMenu === item.label}
                          onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                          className="-ml-1 py-[22px] pr-1 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-200",
                              openMenu === item.label && "rotate-180 text-brand",
                            )}
                          />
                        </button>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <CtaLink to={cta.to} className="hidden whitespace-nowrap lg:inline-flex">
                {cta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </CtaLink>
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-sm border border-border lg:hidden"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </Container>

        {activeMega ? (
          <div className="menu-panel absolute inset-x-0 top-full hidden border-y border-border bg-popover lg:block">
            <MegaPanel mega={activeMega} onNavigate={() => setOpenMenu(null)} />
          </div>
        ) : null}
      </header>

      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[68px] z-50 flex flex-col bg-background lg:hidden">
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-6">
            <ul className="divide-y divide-border">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 py-4 text-base font-medium"
                    >
                      {item.label}
                    </Link>
                    {item.mega ? (
                      <button
                        type="button"
                        aria-label={`Expand ${item.label}`}
                        aria-expanded={mobileGroup === item.label}
                        onClick={() =>
                          setMobileGroup(mobileGroup === item.label ? null : item.label)
                        }
                        className="grid h-10 w-10 place-items-center text-muted-foreground"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileGroup === item.label && "rotate-180 text-brand",
                          )}
                        />
                      </button>
                    ) : null}
                  </div>
                  {item.mega && mobileGroup === item.label ? (
                    <div className="space-y-7 pb-6">
                      {item.mega.groups.map((group) => (
                        <div key={group.head}>
                          <p className="kicker mb-3">{group.head}</p>
                          <div className="space-y-2">
                            {group.items.map((sub) => (
                              <MenuLink
                                key={sub.label + sub.to + (sub.hash ?? "")}
                                item={sub}
                                onNavigate={() => setMobileOpen(false)}
                                size="sm"
                              />
                            ))}
                          </div>
                          {group.sub ? (
                            <div className="mt-4">
                              <p className="kicker mb-2 text-foreground/70">{group.sub.head}</p>
                              <div className="space-y-2 border-l border-brand/40 pl-4">
                                {group.sub.items.map((sub) => (
                                  <MenuLink
                                    key={sub.label}
                                    item={sub}
                                    onNavigate={() => setMobileOpen(false)}
                                    size="sm"
                                  />
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-border p-5">
            <CtaLink to={cta.to} className="w-full">
              {cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CtaLink>
          </div>
        </div>
      ) : null}
    </>
  );
}
