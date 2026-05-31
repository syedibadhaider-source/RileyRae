import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rileyraemusic.com"),
  title: "Riley Rae | International Vocalist & Event Producer",
  description:
    "Performing and producing elevated live music experiences for luxury events around the world.",
  openGraph: {
    title: "Riley Rae | International Vocalist & Event Producer",
    description:
      "Performing and producing elevated live music experiences for luxury events around the world.",
    images: ["/images/riley-hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
