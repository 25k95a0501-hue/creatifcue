import { ecosystem, images, principles } from "@/data/site";
import { ActionButton, Reveal } from "./primitives";

export function Intro() {
  return (
    <section className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <span className="label">About the studio</span>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-8 lg:col-start-5">
          <p className="text-[clamp(1.5rem,3.4vw,2.75rem)] leading-[1.18] tracking-[-0.03em]">
            We create brands, content and digital experiences that don't just{" "}
            <span className="italic-serif text-muted-foreground">look good</span> — they make businesses easier to{" "}
            <span className="italic-serif text-accent">notice, remember and choose.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section id="studio" className="shell py-16 sm:py-24">
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 70} className="hairline-t pt-6">
            <span className="italic-serif text-3xl text-accent">{p.n}</span>
            <h3 className="display mt-5 text-2xl">{p.title}</h3>
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <h2 className="display text-[clamp(2.25rem,7vw,5rem)]">
            Designers.
            <br />
            Strategists.
            <br />
            <span className="italic-serif text-accent">Creators.</span>
            <br />
            Builders.
          </h2>
          <p className="mt-8 max-w-[42ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            We bring together strategy, design, technology and AI to create brands and digital experiences built for
            the real world.
          </p>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-7 lg:pt-16">
          <div className="media aspect-[16/10]">
            <img
              src={images.studio}
              alt="Creative studio interior with pinned design prints and a long working desk"
              width={1600}
              height={1008}
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="shell py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <span className="label">Why us</span>
          <h2 className="display mt-6 text-[clamp(1.9rem,5vw,3.5rem)]">
            Strategy <span className="italic-serif text-accent">×</span> Creativity{" "}
            <span className="italic-serif text-accent">×</span> Technology
          </h2>
          <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-muted-foreground">
            We don't treat branding, content, websites and marketing as separate pieces. We build connected creative
            systems where everything works together.
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
          <ul className="flex flex-col">
            {ecosystem.map((step, i) => (
              <li key={step} className="hairline-t py-6 last:border-b last:border-border">
                <div className="flex items-baseline justify-between gap-6">
                  <span className="display text-[clamp(1.6rem,4vw,2.4rem)]">{step}</span>
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <span className="label">Clients</span>
      </Reveal>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 80} className="hairline-t pt-8">
            <p className="italic-serif text-[1.6rem] leading-snug text-muted-foreground">
              “Client testimonial will appear here.”
            </p>
            <p className="label mt-8">Client name — Company</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="shell py-32 sm:py-44 lg:py-56">
      <Reveal className="max-w-5xl">
        <h2 className="display text-[clamp(2.75rem,10vw,7.5rem)]">
          Have a brand
          <br />
          <span className="italic-serif text-accent">worth building?</span>
        </h2>
        <p className="mt-10 max-w-[40ch] text-base text-muted-foreground sm:text-lg">
          Tell us what you're working on. We'll figure out the rest.
        </p>
        <div className="mt-12">
          <ActionButton href="#contact">Start a Project</ActionButton>
        </div>
      </Reveal>
    </section>
  );
}
