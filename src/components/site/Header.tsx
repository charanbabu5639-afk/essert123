import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container, CtaLink } from "./primitives";
import { Logo } from "./Logo";
import { PRIMARY_NAV, LOGIN_URL, primaryCta, type NavColumn } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function MenuColumns({ columns, onNavigate }: { columns: NavColumn[]; onNavigate: () => void }) {
  return (
    <div className="grid gap-px bg-border sm:grid-cols-2">
      {columns.map((col, i) => (
        <div key={col.head || `col-${i}`} className="bg-popover p-6">
          <p className="mono-label mb-5 text-cobalt">{col.head}</p>
          <ul className="divide-y divide-border">
            {col.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={onNavigate}
                  className="group flex items-baseline justify-between gap-6 py-3 transition-colors hover:text-cobalt"
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.note ? (
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {item.note}
                    </span>
                  ) : null}
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
        className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpenMenu(null);
        }}
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between gap-6">
            <Link to="/" aria-label="Essert home" className="shrink-0">
              <Logo />
            </Link>

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
                          "flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-[25px] font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors",
                          isActive(item.matchPrefix)
                            ? "border-cobalt text-foreground"
                            : "border-transparent text-foreground/70 hover:text-foreground",
                        )}
                      >
                        {item.emphasis ? (
                          <span
                            aria-hidden
                            className={cn(
                              "h-1.5 w-1.5",
                              isActive(item.matchPrefix) ? "bg-cobalt" : "bg-cobalt/70",
                            )}
                          />
                        ) : null}
                        {item.label}
                      </Link>
                      {item.columns ? (
                        <button
                          type="button"
                          aria-label={`${item.label} menu`}
                          aria-expanded={openMenu === item.label}
                          onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                          className="-ml-2 py-[25px] pr-1 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <ChevronDown
                            className={cn(
                              "h-3 w-3 transition-transform duration-150",
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

            <div className="flex items-center gap-4">
              <a
                href={LOGIN_URL}
                className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-foreground/60 transition-colors hover:text-foreground lg:block"
              >
                Login
              </a>
              <CtaLink to={cta.to} className="hidden whitespace-nowrap px-5 py-3 lg:inline-flex">
                {cta.label}
              </CtaLink>
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center border border-border lg:hidden"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </Container>

        {activeColumns ? (
          <div
            className="menu-panel absolute inset-x-0 top-full hidden border-b border-border bg-popover lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <Container>
              <div className="py-px">
                <MenuColumns columns={activeColumns} onNavigate={() => setOpenMenu(null)} />
              </div>
            </Container>
          </div>
        ) : null}
      </header>

      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-50 flex flex-col bg-background lg:hidden">
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-6">
            <ul className="divide-y divide-border">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex flex-1 items-center gap-3 py-4 text-lg font-semibold tracking-[-0.02em]"
                    >
                      {item.emphasis ? (
                        <span aria-hidden className="h-1.5 w-1.5 bg-cobalt" />
                      ) : null}
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
                            "h-4 w-4 transition-transform duration-150",
                            mobileGroup === item.label && "rotate-180",
                          )}
                        />
                      </button>
                    ) : null}
                  </div>
                  {item.columns && mobileGroup === item.label ? (
                    <div className="space-y-6 pb-6">
                      {item.columns.map((col, i) => (
                        <div key={col.head || `m-col-${i}`}>
                          <p className="mono-label mb-2 text-cobalt">{col.head}</p>
                          <ul className="divide-y divide-border border-t border-border">
                            {col.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  to={sub.to}
                                  {...(sub.hash ? { hash: sub.hash } : {})}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-baseline justify-between gap-4 py-3"
                                >
                                  <span className="text-sm">{sub.label}</span>
                                  {sub.note ? (
                                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground">
                                      {sub.note}
                                    </span>
                                  ) : null}
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
              <li>
                <a
                  href={LOGIN_URL}
                  className="block py-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em]"
                >
                  Login
                </a>
              </li>
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
