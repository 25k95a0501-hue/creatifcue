import { aiGallery } from "@/data/site";
import { Reveal } from "./primitives";

export function AIStudio() {
  return (
    <section className="border-y border-border bg-secondary/60 py-24 sm:py-32">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <h2 className="display text-[clamp(2.25rem,7vw,5rem)]">
            Creative,
            <br />
            amplified <span className="italic-serif text-accent">by AI.</span>
          </h2>
        </Reveal>
        <Reveal delay={90} className="lg:col-span-5 lg:col-start-8 lg:pt-4">
          <p className="max-w-[44ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            We combine human creative direction with AI-powered production to explore more ideas, create faster and
            build visual worlds that traditional workflows can't.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-14 sm:mt-20">
        <div className="flex gap-5 overflow-x-auto px-5 pb-4 sm:gap-8 md:px-10 xl:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {aiGallery.map((item, i) => (
            <figure
              key={item.caption}
              className={`w-[76vw] shrink-0 sm:w-[46vw] lg:w-[32vw] ${i % 2 === 1 ? "lg:mt-14" : ""}`}
            >
              <div className={`media ${i % 2 === 1 ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
                <img src={item.image} alt={item.alt} loading="lazy" />
              </div>
              <figcaption className="label mt-4">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
