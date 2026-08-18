import { Link } from "@tanstack/react-router";
import { Container } from "./primitives";
import { Annotation } from "./brand";
import { Logo } from "./Logo";
import { FOOTER_COLUMNS, FOOTER_LEGAL, LOGIN_URL } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="surface-ink border-t border-border">
      <Container>
        <div className="flex items-center justify-between gap-4 border-b border-border py-4">
          <Annotation tone="cobalt">ESSERT / AUTONOMOUS PRODUCTION SYSTEMS</Annotation>
          <Annotation>SHEET 01 / 01</Annotation>
        </div>

        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {FOOTER_COLUMNS.map((col, i) => (
            <nav key={col.head} aria-label={col.head}>
              <p className="mono-label flex items-center gap-2">
                <span className="text-cobalt">{String(i + 1).padStart(2, "0")}</span>
                <span>{col.head}</span>
              </p>
              <ul className="mt-5 divide-y divide-border border-t border-border">
                {col.items.map((item) => (
                  <li key={item.label + item.to + (item.hash ?? "")}>
                    <Link
                      to={item.to}
                      {...(item.hash ? { hash: item.hash } : {})}
                      className="block py-2.5 text-sm text-foreground/80 transition-colors hover:text-cobalt"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.head === "Company" ? (
                  <li>
                    <a
                      href={LOGIN_URL}
                      className="block py-2.5 text-sm text-foreground/80 transition-colors hover:text-cobalt"
                    >
                      Login
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
        </div>

        <div className="grid gap-6 border-t border-border py-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Link to="/" aria-label="Essert home">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We take software from spec to production autonomously. Humans approve the
              specification. Agents execute the production. Humans approve the merge.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="mono-label text-muted-foreground">Trust statement</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              No chaos. Not a black box. Secure.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border py-6">
          <Annotation>© {new Date().getFullYear()} ESSERT</Annotation>
          {FOOTER_LEGAL.map((l) => (
            <Link key={l.label} to={l.to} className="transition-colors hover:text-cobalt">
              <Annotation>{l.label.toUpperCase()}</Annotation>
            </Link>
          ))}
          <span className="hatch h-3 min-w-16 flex-1 opacity-60" aria-hidden />
        </div>
      </Container>
    </footer>
  );
}
