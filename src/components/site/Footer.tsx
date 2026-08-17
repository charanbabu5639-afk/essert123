import { Link } from "@tanstack/react-router";
import { Container } from "./primitives";
import { Logo } from "./Logo";
import { FOOTER_COLUMNS, LOGIN_URL } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.head} aria-label={col.head}>
              <p className="kicker text-ink-muted">{col.head}</p>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label + item.to + (item.hash ?? "")}>
                    <Link
                      to={item.to}
                      {...(item.hash ? { hash: item.hash } : {})}
                      className="text-sm text-ink-foreground/85 transition-colors hover:text-ink-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-ink-border py-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" aria-label="Essert home">
            <Logo tone="ink" />
          </Link>
          <p className="max-w-xl text-xs leading-relaxed text-ink-muted">
            Essert's technology is patent-pending. ZHC — Zero Human Coding™ has a trademark
            application filed. Neither an issued patent nor a registered trademark is implied by
            this language.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-border py-6 text-xs text-ink-muted">
          <span>© {new Date().getFullYear()} Essert</span>
          <Link to="/executive-briefing" className="hover:text-ink-foreground">
            Contact
          </Link>
          <Link to="/trust/security-overview" className="hover:text-ink-foreground">
            Security overview
          </Link>
          <Link to="/company" className="hover:text-ink-foreground">
            Company
          </Link>
        </div>
      </Container>
    </footer>
  );
}
