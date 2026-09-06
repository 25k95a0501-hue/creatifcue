import { useMemo, useState } from "react";
import { projects, workFilters, type WorkFilter } from "@/data/site";
import { Arrow, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const spans: Record<string, string> = {
  large: "lg:col-span-7",
  medium: "lg:col-span-5",
  small: "lg:col-span-4",
};

const ratios: Record<string, string> = {
  large: "aspect-[4/3]",
  medium: "aspect-[3/4]",
  small: "aspect-square",
};

export function Work() {
  const [active, setActive] = useState<WorkFilter>("ALL");
  const list = useMemo(
    () => (active === "ALL" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="work" className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="min-w-0 lg:col-span-7">
          <span className="label">Selected work</span>
          <h2 className="display mt-6 text-[clamp(2.5rem,8vw,6rem)]">
            A few things
            <br />
            <span className="italic-serif text-accent">we've built.</span>
          </h2>
        </Reveal>

        <Reveal delay={80} className="min-w-0 lg:col-span-5">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:justify-end lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:mt-20 lg:grid-cols-12">
        {list.map((p, i) => (
          <Reveal
            as="article"
            key={p.id}
            delay={(i % 3) * 60}
            className={cn(spans[p.size], i % 3 === 1 && "lg:mt-24", i % 3 === 2 && "lg:mt-10 lg:col-start-8")}
          >
            <a href="#contact" className="group block" aria-label={`${p.name} — ${p.category}`}>
              <div className={cn("media", ratios[p.size])}>
                <img src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="label mt-2">
                    {p.category} — {p.year}
                  </p>
                </div>
                <Arrow className="text-lg text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
