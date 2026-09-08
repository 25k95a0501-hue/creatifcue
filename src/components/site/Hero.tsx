import { heroFilters, images } from "@/data/site";
import { ActionButton, Arrow, Reveal } from "./primitives";
import { MaskLines, Parallax } from "./motion";

export function Hero() {
  return (
    <section id="top" className="shell relative pt-32 sm:pt-36 lg:pt-44">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Headline column */}
        <div className="lg:col-span-7 lg:pt-10">
          <Reveal>
            <span className="label">Creative × Digital × AI Studio</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-7 text-[clamp(2.6rem,8.8vw,6.8rem)]">
              We build
              <br />
              brands
              <br />
              <span className="italic-serif text-accent">people</span>
              <br />
              remember.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-9 max-w-[46ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              We build identities, digital experiences and content systems for brands that want to stand out in a
              crowded world.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionButton href="#contact">Start a Project</ActionButton>
              <ActionButton href="#work" variant="outline">
                View our Work
              </ActionButton>
            </div>
          </Reveal>
        </div>

        {/* Image composition */}
        <div className="lg:col-span-5">
          <div className="relative">
            <Reveal className="media aspect-[4/5] w-full sm:aspect-[5/6]">
              <img
                src={images.heroMain}
                alt="Editorial art direction still life of folded printed posters and a blue arch form"
                width={1408}
                height={1712}
                fetchPriority="high"
              />
            </Reveal>

            <Reveal
              delay={140}
              className="media absolute -left-4 bottom-10 hidden aspect-[3/4] w-[36%] border-4 border-background sm:block lg:-left-24"
            >
              <img
                src={images.workSocial}
                alt="Social media campaign design grid"
                width={1008}
                height={1312}
                loading="lazy"
              />
            </Reveal>

            <Reveal
              delay={220}
              className="media absolute -top-10 -right-2 hidden aspect-square w-[30%] border-4 border-background lg:block"
            >
              <img
                src={images.workPrint}
                alt="Minimal packaging and print design"
                width={1408}
                height={1008}
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Floating service bar */}
      <Reveal delay={260} className="relative z-10 mt-14 sm:mt-16">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-full border border-border bg-background/90 backdrop-blur-md">
          <div className="flex items-center gap-1 overflow-x-auto px-2 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {heroFilters.map((f) => (
              <a
                key={f}
                href="#services"
                className="shrink-0 rounded-full px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground sm:px-5"
              >
                {f}
              </a>
            ))}
            <a
              href="#work"
              className="group ml-auto shrink-0 rounded-full bg-foreground px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-background transition-colors duration-300 hover:bg-accent"
            >
              Explore <Arrow />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
