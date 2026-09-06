import { images } from "@/data/site";
import { ActionButton, Reveal } from "./primitives";

/** Replace with a real featured project when ready. */
export const featured = {
  label: "Featured project",
  title: "Project 06 — Brand Campaign",
  description:
    "A full identity rebuild taken from strategy to packaging, social system and a conversion-focused website — one connected creative system.",
  services: ["Brand Identity", "Packaging", "Web Design", "Campaign Creatives"],
  image: images.workPrint,
  alt: "Featured project placeholder — minimal packaging system in warm neutral tones",
};

export function CaseStudy() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <span className="label">{featured.label}</span>
      </Reveal>

      <Reveal delay={80} className="mt-8">
        <div className="media aspect-[16/10] lg:aspect-[21/9]">
          <img src={featured.image} alt={featured.alt} width={1408} height={1008} loading="lazy" />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <Reveal delay={60} className="lg:col-span-6">
          <h3 className="display text-[clamp(1.9rem,5vw,3.25rem)]">{featured.title}</h3>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
          <p className="text-base leading-relaxed text-muted-foreground">{featured.description}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {featured.services.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <ActionButton href="#contact" variant="outline">
              View case study
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
