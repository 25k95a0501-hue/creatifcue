import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Arrow, Reveal } from "@/components/site/primitives";

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

function BehanceEmbed() {
  return (
    <div className="media relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
      <iframe
        src={site.behanceEmbedUrl}
        title="CREATIF-CUE portfolio on Behance"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        allow="clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

function PortfolioPage() {
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
            A curated selection of branding, digital, social, AI and print projects. View the full collection below or
            open it on Behance.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-5xl">
            <BehanceEmbed />
            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-foreground">
                Embedded from Behance — best viewed in a modern browser.
              </p>
              <a
                href={site.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
              >
                Open on Behance <Arrow className="text-base" />
              </a>
            </div>
          </div>
        </Reveal>

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
