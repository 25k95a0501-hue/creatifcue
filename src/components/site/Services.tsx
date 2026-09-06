import { services } from "@/data/site";
import { Arrow, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="shell py-24 sm:py-32 lg:py-44">
      <Reveal>
        <SectionHeading
          label="What we create"
          title={
            <>
              Everything your brand needs.{" "}
              <span className="italic-serif text-muted-foreground">Nothing it doesn't.</span>
            </>
          }
        />
      </Reveal>

      <div className="mt-16 flex flex-col gap-20 sm:mt-24 sm:gap-28">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal as="article" key={s.n}>
              <a
                href="#contact"
                className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
                aria-label={`${s.title} — start a project`}
              >
                <div className={cn("lg:col-span-7", flip && "lg:order-2 lg:col-start-6")}>
                  <div
                    className={cn(
                      "media aspect-[16/11]",
                      i % 3 === 0 && "lg:aspect-[16/10]",
                      i % 3 === 2 && "lg:aspect-[4/3]",
                    )}
                  >
                    <img src={s.image} alt={s.alt} loading="lazy" />
                  </div>
                </div>

                <div className={cn("lg:col-span-5", flip && "lg:order-1 lg:col-start-1 lg:row-start-1")}>
                  <div className="flex items-baseline gap-5">
                    <span className="italic-serif text-4xl text-accent sm:text-5xl">{s.n}</span>
                    <h3 className="display text-[clamp(1.6rem,4vw,2.6rem)]">{s.title}</h3>
                  </div>
                  <p className="mt-5 max-w-[38ch] text-base text-muted-foreground sm:text-lg">{s.line}</p>
                  <ul className="mt-7 flex flex-col">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="hairline-t py-2.5 text-sm text-foreground/80 last:border-b last:border-border"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]">
                    Discuss this <Arrow />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
