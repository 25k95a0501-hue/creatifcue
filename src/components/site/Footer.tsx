import { nav, site } from "@/data/site";
import { Arrow } from "./primitives";

const socials = [
  { label: "Instagram", href: "#contact" },
  { label: "LinkedIn", href: "#contact" },
  { label: "WhatsApp", href: "#contact" },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-10">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="display text-[clamp(3rem,12vw,9rem)] leading-none">{site.name}</p>
            <p className="label mt-6">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-9">
            <ul className="flex flex-col gap-3">
              {[...nav, { label: "Contact", href: "#contact" }].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label} <Arrow className="text-xs" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-t mt-16 flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="text-xs text-muted-foreground">© 2026 {site.name}</p>
          <p className="text-xs text-muted-foreground">Independent creative studio</p>
        </div>
      </div>
    </footer>
  );
}
