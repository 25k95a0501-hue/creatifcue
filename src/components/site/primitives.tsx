import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion";

/** Fade + rise on first scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Comp>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]",
        className,
      )}
    >
      ↗
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "accent";
  className?: string;
};

export function ActionButton({ children, href, type = "button", variant = "solid", className }: BtnProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 sm:px-7";
  const styles = {
    solid: "bg-foreground text-background hover:bg-accent",
    outline: "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
    accent: "bg-accent text-accent-foreground hover:bg-foreground",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );

  if (href) {
    return (
      <Magnetic>
        <a href={href} className={cn(base, styles, className)}>
          {content}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic>
      <button type={type} className={cn(base, styles, className)}>
        {content}
      </button>
    </Magnetic>
  );
}

export function SectionHeading({
  label,
  title,
  align = "left",
  className,
}: {
  label: string;
  title: ReactNode;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", align === "right" && "md:items-end md:text-right", className)}>
      <span className="label">{label}</span>
      <h2 className="display text-[clamp(2.25rem,6.5vw,5rem)] max-w-[16ch]">{title}</h2>
    </div>
  );
}
