import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "solid";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClass = variant === "solid" ? "btn-luxury-solid" : "btn-luxury";
  const content = (
    <>
      {children}
      {variant === "primary" && (
        <ArrowRight className="h-3.5 w-3.5 text-rose transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`group ${baseClass} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${baseClass} ${className}`}>
      {content}
    </button>
  );
}

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link href={href} className={`text-link group ${className}`}>
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
