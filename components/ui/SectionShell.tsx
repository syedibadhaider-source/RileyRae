import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  tone?: "black" | "charcoal";
  children: ReactNode;
  atmosphere?: ReactNode;
  className?: string;
  innerClassName?: string;
  fullWidth?: boolean;
}

export function SectionShell({
  id,
  tone = "black",
  children,
  atmosphere,
  className = "",
  innerClassName = "",
  fullWidth = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${
        tone === "charcoal" ? "bg-charcoal" : "bg-black"
      } ${className}`}
    >
      <div className="section-glow pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      {atmosphere}
      <div
        className={
          fullWidth
            ? `relative z-10 ${innerClassName}`
            : `section-container relative z-10 ${innerClassName}`
        }
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-14 md:mb-16 ${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}
    >
      <p className="text-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {description && (
        <p className="mt-5 font-body text-sm leading-relaxed text-ivory-muted md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
