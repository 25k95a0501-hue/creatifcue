import { useState } from "react";
import { budgetOptions, serviceOptions, site } from "@/data/site";
import { ActionButton, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border border-border bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-foreground focus:outline-none";

export function ContactForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setPicked((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <section id="contact" className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="display text-[clamp(2.5rem,8vw,5.5rem)]">
            Let's build
            <br />
            <span className="italic-serif text-accent">something.</span>
          </h2>

          <dl className="mt-14 flex flex-col">
            {[
              { k: "Email", v: site.email, href: `mailto:${site.email}` },
              { k: "WhatsApp", v: site.whatsapp, href: "#contact" },
              { k: "Instagram", v: site.instagram, href: "#contact" },
              { k: "LinkedIn", v: site.linkedin, href: "#contact" },
            ].map((row) => (
              <div key={row.k} className="hairline-t flex items-baseline justify-between gap-6 py-4 last:border-b last:border-border">
                <dt className="label">{row.k}</dt>
                <dd className="min-w-0">
                  <a href={row.href} className="truncate text-sm transition-colors hover:text-accent">
                    {row.v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">Placeholder details — replace with your real contacts.</p>
        </Reveal>

        <Reveal delay={90} className="lg:col-span-6 lg:col-start-7">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={cn(field, "mt-3")} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="company" className="label">
                  Company
                </label>
                <input id="company" name="company" autoComplete="organization" className={cn(field, "mt-3")} placeholder="Company" />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={cn(field, "mt-3")} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="label">
                  Phone / WhatsApp
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={cn(field, "mt-3")} placeholder="+91" />
              </div>
            </div>

            <fieldset className="mt-2">
              <legend className="label">What do you need?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <label
                    key={s}
                    className={cn(
                      "cursor-pointer rounded-full border px-4 py-2 text-xs transition-colors duration-300",
                      picked.includes(s)
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                    )}
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={s}
                      checked={picked.includes(s)}
                      onChange={() => toggle(s)}
                      className="sr-only"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-2">
              <label htmlFor="budget" className="label">
                Budget
              </label>
              <select id="budget" name="budget" className={cn(field, "mt-3")} defaultValue={budgetOptions[4]}>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="brief" className="label">
                Project description
              </label>
              <textarea
                id="brief"
                name="brief"
                rows={5}
                className={cn(field, "mt-3 resize-y")}
                placeholder="Tell us about the brand, the goal and the timeline."
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-5">
              <ActionButton type="submit">Send project request</ActionButton>
              <p aria-live="polite" className="text-sm text-muted-foreground">
                {sent ? "Thanks — we'll be in touch shortly." : ""}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
