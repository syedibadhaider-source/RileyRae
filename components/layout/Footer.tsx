import Link from "next/link";
import { footerLinks, legalLinks, siteConfig } from "@/lib/constants";
import { SocialIcons } from "@/components/ui/SocialIcons";

function Monogram() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute inset-0 rotate-45 border border-rose/40" />
      <div className="absolute inset-2 rotate-45 border border-champagne/25" />
      <div className="absolute inset-4 rotate-45 border border-rose/15" />
      <span className="relative font-display text-lg tracking-[0.2em] text-rose">RR</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-rose/10 bg-charcoal">
      <div className="mx-auto max-w-7xl min-w-0 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Monogram />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            {[footerLinks.column1, footerLinks.column2, footerLinks.column3].map(
              (column, colIndex) => (
                <nav key={colIndex} className="flex flex-col gap-3" aria-label={`Footer links ${colIndex + 1}`}>
                  {column.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-body text-xs uppercase tracking-[0.15em] text-ivory-muted transition-colors hover:text-rose"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              )
            )}
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SocialIcons orientation="horizontal" />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-rose/10 pt-8 md:flex-row">
          <p className="font-body text-[10px] uppercase tracking-[0.15em] text-ivory-muted">
            {siteConfig.copyright}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[10px] uppercase tracking-[0.15em] text-ivory-muted transition-colors hover:text-rose"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
