import { process } from "@/data/site";
import { Reveal } from "./primitives";

export function Process() {
  return (
    <section className="shell py-24 sm:py-32 lg:py-40">
      <Reveal>
        <span className="label">How we work</span>
      </Reveal>

      <ol className="mt-12 flex flex-col">
        {process.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 50} className="hairline-t group last:border-b last:border-border">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-6 gap-y-3 py-8 transition-[padding] duration-500 group-hover:pl-2 sm:gap-x-12 lg:grid-cols-[6rem_minmax(0,18rem)_minmax(0,1fr)] lg:py-12">
              <span className="italic-serif text-[clamp(2rem,5vw,4rem)] leading-none text-accent">{step.n}</span>
              <h3 className="display text-[clamp(1.5rem,4vw,3rem)]">{step.title}</h3>
              <p className="col-span-2 max-w-[42ch] text-sm text-muted-foreground lg:col-span-1 lg:text-base">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
