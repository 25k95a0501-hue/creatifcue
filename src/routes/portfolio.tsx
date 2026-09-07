import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, workFilters, site, type WorkFilter } from "@/data/site";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Arrow, Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const title = "Portfolio — CREATIF-CUE";
const description =
  "Selected branding, web, social, AI and print work by CREATIF-CUE, an independent creative, digital and AI studio.";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const ratios: Record<string, string> = {
  large: "aspect-[4/3]",
  medium: "aspect-[3/4]",
  small: "aspect-square",
};

function PortfolioPage() {
  const [active, setActive] = useState<WorkFilter>("ALL");
  const list = useMemo(
    () => (active === "ALL" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="shell pt-36 pb-24 sm:pt-44 sm:pb-32">
        <Reveal>
          <span className="label">Portfolio</span>
          <h1 className="display mt-6 text-[clamp(2.5rem,8vw,6rem)]">
            All work,
            <br />
            <span className="italic-serif text-accent">in one place.</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            A growing archive of brand, digital, social, AI and print projects. Replace these placeholders with your
            own case imagery in <code className="text-foreground">src/data/site.ts</code>.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {workFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                  active === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal as="article" key={p.id} delay={(i % 3) * 60}>
              <div className="group">
                <div className={cn("media", ratios[p.size])}>
                  <img src={p.image} alt={p.alt} loading="lazy" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-accent">
                      {p.name}
                    </h2>
                    <p className="label mt-2">
                      {p.category} — {p.year}
                    </p>
                  </div>
                  <Arrow className="text-lg text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 border-t border-border pt-12 text-center sm:mt-32">
          <h2 className="display text-[clamp(1.8rem,4.5vw,3rem)]">
            Want work like this for <span className="italic-serif text-accent">your brand?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-muted-foreground">
            Tell us about your project — we usually reply within one business day.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-background transition-colors duration-300 hover:bg-accent"
          >
            Start a Project <Arrow />
          </a>
          <p className="mt-8 text-sm text-muted-foreground">
            <Link to="/" className="underline underline-offset-4 hover:text-foreground">
              ← Back to home
            </Link>
          </p>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
