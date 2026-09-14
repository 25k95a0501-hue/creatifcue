/**
 * All editable site content lives here.
 * Replace placeholder images, project names and contact details with real ones.
 */
import heroMain from "@/assets/hero-main.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workSocial from "@/assets/work-social.jpg";
import workWeb from "@/assets/work-web.jpg";
import workAi from "@/assets/work-ai.jpg";
import workPrint from "@/assets/work-print.jpg";
import ai2 from "@/assets/ai-2.jpg";
import studio from "@/assets/studio.jpg";

export const images = {
  heroMain,
  workBrand,
  workSocial,
  workWeb,
  workAi,
  workPrint,
  ai2,
  studio,
};

export const site = {
  name: "CREATIF-CUE",
  tagline: "CREATIVE × DIGITAL × AI",
  // Replace these placeholders with your real details.
  email: "hello@youragency.com",
  whatsapp: "+91 00000 00000",
  instagram: "@youragency",
  linkedin: "/company/youragency",
  behanceUrl: "https://www.behance.net/gallery/255043449/portfolio",
  behanceEmbedUrl: "https://www.behance.net/embed/project/255043449?ilo0=1",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "/portfolio" },
];

export const heroFilters = ["BRANDING", "SOCIAL", "WEB", "AI", "PRINT"];

export const principles = [
  {
    n: "01",
    title: "STRATEGY",
    body: "Every visual decision starts with a reason — audience, positioning, opportunity.",
  },
  {
    n: "02",
    title: "CREATIVITY",
    body: "Ideas with a point of view. Work that looks like nobody else's.",
  },
  {
    n: "03",
    title: "TECHNOLOGY",
    body: "Fast, considered builds and AI-assisted production at studio quality.",
  },
  {
    n: "04",
    title: "GROWTH",
    body: "Creative systems designed to keep working long after launch.",
  },
];

export type Service = {
  n: string;
  title: string;
  line: string;
  items: string[];
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    n: "01",
    title: "BRAND IDENTITY",
    line: "Build a visual identity people recognize.",
    items: ["Logo", "Brand identity", "Brand guidelines", "Visual systems", "Packaging"],
    image: workBrand,
    alt: "Brand identity system with printed stationery and an embossed logo mark",
  },
  {
    n: "02",
    title: "SOCIAL EXPERIENCES",
    line: "Turn your social presence into a recognizable brand.",
    items: ["Social media design", "Content systems", "Campaign creatives", "Reels", "Social strategy"],
    image: workSocial,
    alt: "Social media content grid layout shown on a phone beside campaign creatives",
  },
  {
    n: "03",
    title: "DIGITAL EXPERIENCES",
    line: "Websites designed to look beautiful and work harder.",
    items: ["Web design", "Web development", "Landing pages", "Business websites", "Conversion-focused experiences"],
    image: workWeb,
    alt: "Minimal editorial website design displayed on a laptop screen",
  },
  {
    n: "04",
    title: "AI CREATIVE",
    line: "Human creativity, amplified by intelligent technology.",
    items: ["AI product visuals", "AI advertising", "AI photography", "Creative concepts", "Content production"],
    image: workAi,
    alt: "AI generated product visual of a sculptural bottle in warm studio light",
  },
  {
    n: "05",
    title: "PRINT & PHYSICAL",
    line: "Take the brand beyond the screen.",
    items: ["Business cards", "Brochures", "Posters", "Packaging", "Marketing materials"],
    image: workPrint,
    alt: "Minimal packaging design boxes with debossed brand mark",
  },
  {
    n: "06",
    title: "GROWTH",
    line: "Creative systems designed to move the business forward.",
    items: ["Creative strategy", "Campaigns", "Content strategy", "Digital marketing", "Growth consulting"],
    image: ai2,
    alt: "Abstract sculptural campaign visual used for creative growth work",
  },
];

export const workFilters = ["ALL", "BRANDING", "SOCIAL", "WEB", "AI", "PRINT"] as const;
export type WorkFilter = (typeof workFilters)[number];

export type Project = {
  id: string;
  name: string;
  category: Exclude<WorkFilter, "ALL">;
  year: string;
  image: string;
  alt: string;
  /** layout weight in the editorial grid */
  size: "large" | "medium" | "small";
  /** external case-study link, e.g. Behance */
  url?: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    name: "Selected Work",
    category: "BRANDING",
    year: "2026",
    image: workBrand,
    alt: "Selected creative work across branding, digital, social, AI and print",
    size: "large",
    url: "https://www.behance.net/gallery/255043449/portfolio",
  },
];

export const aiGallery = [
  { image: workAi, caption: "AI PRODUCT VISUALS", alt: "AI generated product visual" },
  { image: ai2, caption: "CAMPAIGN CONCEPTS", alt: "Abstract AI generated campaign concept" },
  { image: workPrint, caption: "ADVERTISING CREATIVES", alt: "Packaging advertising creative" },
  { image: workBrand, caption: "EXPERIMENTAL VISUALS", alt: "Experimental brand visual study" },
];

export const process = [
  { n: "01", title: "DISCOVER", body: "Understand the brand, audience and opportunity." },
  { n: "02", title: "DEFINE", body: "Build the strategic and creative direction." },
  { n: "03", title: "CREATE", body: "Design, develop and produce." },
  { n: "04", title: "LAUNCH", body: "Bring the idea into the real world." },
  { n: "05", title: "GROW", body: "Improve, adapt and scale." },
];

export const ecosystem = ["BRAND", "CONTENT", "DIGITAL", "CAMPAIGN", "GROWTH"];

export const serviceOptions = [
  "Brand Identity",
  "Social Media",
  "Website",
  "AI Creative",
  "Print Design",
  "Digital Marketing",
  "Content Creation",
  "Other",
];

export const budgetOptions = ["Under ₹25K", "₹25K–₹50K", "₹50K–₹1L", "₹1L+", "Let's Discuss"];
