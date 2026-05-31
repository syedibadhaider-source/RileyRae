import Link from "next/link";
import { footerLinks, legalLinks, siteConfig } from "@/lib/constants";
import { RileyRaeRoundLogo } from "@/components/ui/RileyRaeRoundLogo";
import { SocialIcons } from "@/components/ui/SocialIcons";

const footerColumns = [
  footerLinks.column1,
  footerLinks.column2,
  footerLinks.column3,
] as const;

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-charcoal">
      <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="pointer-events-auto rounded-full bg-charcoal p-1 ring-[3px] ring-charcoal sm:ring-4">
          <RileyRaeRoundLogo className="h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 md:h-24 md:w-24" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl min-w-0 px-5 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-3 gap-x-3 gap-y-3 sm:gap-x-10 md:gap-x-16">
          {footerColumns.map((column, colIndex) => (
            <nav
              key={colIndex}
              className="flex flex-col items-center gap-2.5 sm:items-start sm:gap-3"
              aria-label={`Footer links ${colIndex + 1}`}
            >
              {column.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-center font-body text-[10px] uppercase tracking-[0.12em] text-ivory-muted transition-colors hover:text-rose sm:text-left sm:text-xs sm:tracking-[0.15em]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <SocialIcons orientation="horizontal" className="justify-center" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-rose/10 pt-8 sm:mt-12 md:flex-row">
          <p className="text-center font-body text-[10px] uppercase tracking-[0.15em] text-ivory-muted md:text-left">
            {siteConfig.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
