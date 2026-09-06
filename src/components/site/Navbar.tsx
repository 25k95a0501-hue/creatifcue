import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { Arrow } from "./primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-3 sm:pt-5">
        <nav
          aria-label="Primary"
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 md:grid-cols-3",
            scrolled ? "border border-border bg-background/85 backdrop-blur-md" : "border border-transparent",
          )}
        >
          <a
            href="#top"
            className="min-w-0 truncate text-sm font-semibold uppercase tracking-[0.32em]"
            aria-label={`${site.name} home`}
          >
            {site.name}
          </a>

          <ul className="hidden justify-center gap-9 md:flex">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-foreground hover:text-background md:inline-flex"
            >
              Start a Project <Arrow />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/20 md:hidden"
            >
              <span className="sr-only">Open menu</span>
              <span aria-hidden className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-4 bg-foreground" />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-400 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="shell flex items-center justify-between pt-6">
          <span className="text-sm font-semibold uppercase tracking-[0.32em]">{site.name}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-foreground/20 text-lg"
          >
            ×
          </button>
        </div>
        <div className="shell mt-14 flex flex-1 flex-col">
          <ul className="flex flex-col gap-6">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block text-[2.75rem] leading-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group mt-auto mb-10 inline-flex items-center justify-between rounded-full bg-foreground px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-background"
          >
            Start a Project <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}
