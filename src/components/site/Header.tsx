import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container, CtaLink } from "./primitives";
import { Logo } from "./Logo";
import { PRIMARY_NAV, LOGIN_URL, primaryCta, type NavColumn } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function MegaMenuColumns({ columns, onNavigate }: { columns: NavColumn[]; onNavigate: () => void }) {
  return (
    <div
      className="grid gap-8"
      style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0,1fr))` }}
    >
      {columns.map((col, i) => (
        <div key={col.head || `col-${i}`}>
          {col.head ? <p className="kicker mb-4">{col.head}</p> : <span className="mb-4 block h-4" />}
          <ul className="space-y-1">
            {col.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={onNavigate}
                  className="block rounded-md px-3 py-2 -mx-3 text-sm transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const activeColumns = PRIMARY_NAV.find((n) => n.label === openMenu)?.columns;

  const isActive = (prefix: string) => pathname === prefix || pathname.startsWith(prefix + "/");

  return (
    <>
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpenMenu(null);
      }}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="Essert home" className="shrink-0">
              <Logo />
            </Link>
            <span className="hidden border-l border-border pl-4 text-xs leading-tight text-muted-foreground 2xl:block">
              ZHC — Zero Human Coding™
              <br />
              Autonomous software production
            </span>
          </div>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center">
              {PRIMARY_NAV.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(item.columns ? item.label : null);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <span className="flex items-center">
                    <Link
                      to={item.to}
                      onFocus={() => setOpenMenu(item.columns ? item.label : null)}
                      className={cn(
                        "whitespace-nowrap border-b-2 px-3 py-[26px] text-sm font-medium transition-colors",
                        isActive(item.matchPrefix)
                          ? "border-foreground text-foreground"
                          : "border-transparent text-foreground/75 hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.columns ? (
                      <button
                        type="button"
                        aria-label={`${item.label} menu`}
                        aria-expanded={openMenu === item.label}
                        onClick={() =>
                          setOpenMenu(openMenu === item.label ? null : item.label)
                        }
                        className="-ml-1 py-[26px] pr-1 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-200",
                            openMenu === item.label && "rotate-180",
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
            <a
              href={LOGIN_URL}
              className="hidden text-sm font-medium text-foreground/70 transition-colors hover:text-foreground lg:block"
            >
              Login
            </a>
            <CtaLink to={cta.to} className="hidden whitespace-nowrap px-4 py-2.5 lg:inline-flex">
              {cta.label}
            </CtaLink>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Container>

      {activeColumns ? (
        <div
          className="menu-panel absolute inset-x-0 top-full hidden border-b border-border bg-popover shadow-panel lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto w-full max-w-[1280px] px-8 py-8 xl:px-12">
            <MegaMenuColumns columns={activeColumns} onNavigate={() => setOpenMenu(null)} />
          </div>
        </div>
      ) : null}
    </header>

      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[76px] z-50 flex flex-col bg-background lg:hidden">
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
                    {item.columns ? (
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
                            mobileGroup === item.label && "rotate-180",
                          )}
                        />
                      </button>
                    ) : null}
                  </div>
                  {item.columns && mobileGroup === item.label ? (
                    <div className="space-y-5 pb-5 pl-1">
                      {item.columns.map((col, i) => (
                        <div key={col.head || `m-col-${i}`}>
                          {col.head ? <p className="kicker mb-2">{col.head}</p> : null}
                          <ul className="space-y-1">
                            {col.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  to={sub.to}
                                  {...(sub.hash ? { hash: sub.hash } : {})}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-1.5 text-sm text-muted-foreground"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
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
            </CtaLink>
          </div>
        </div>
      ) : null}
    </>
  );
}
