import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedPerformances } from "@/components/sections/FeaturedPerformances";
import { LiveAudioSection } from "@/components/sections/LiveAudioSection";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { ServicesPackages } from "@/components/sections/ServicesPackages";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { BookingSection } from "@/components/sections/BookingSection";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { PressKitSection } from "@/components/sections/PressKitSection";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedPerformances />
        <LiveAudioSection />
        <PhotoGallery />
        <ServicesPackages />
        <TrustedBy />
        <BookingSection />
        <InquiryForm />
        <PressKitSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
