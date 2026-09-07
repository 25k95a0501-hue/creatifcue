import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Intro, Principles, About, WhyUs, Testimonials, FinalCTA } from "@/components/site/Editorial";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { CaseStudy } from "@/components/site/CaseStudy";
import { AIStudio } from "@/components/site/AIStudio";
import { Process } from "@/components/site/Process";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

const title = "CREATIF-CUE — Creative, Digital & AI Studio";
const description =
  "CREATIF-CUE is an independent studio building brand identities, websites, social systems and AI-powered visuals for brands that want to stand out.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CREATIF-CUE",
          url: "https://creatifcue.lovable.app/",
          description,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Principles />
        <Services />
        <Work />
        <CaseStudy />
        <AIStudio />
        <Process />
        <About />
        <WhyUs />
        <Testimonials />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
