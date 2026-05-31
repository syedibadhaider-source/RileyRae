"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-rose/10 bg-black/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link
            href="#home"
            className="font-display text-xl tracking-[0.15em] text-ivory transition-colors hover:text-rose md:text-2xl"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${link.label === "Home" ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#booking">Book Riley Rae</Button>
          </div>

          <button
            type="button"
            className="relative z-[60] text-ivory lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-opacity duration-500 lg:hidden ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-8"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-body text-sm uppercase tracking-[0.25em] text-ivory-muted transition-colors hover:text-rose"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#booking" className="mt-4" onClick={() => setIsMobileOpen(false)}>
            Book Riley Rae
          </Button>
        </nav>
      </div>
    </>
  );
}
