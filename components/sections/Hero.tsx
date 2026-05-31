import { HeroSlider } from "@/components/sections/HeroSlider";
import { HeroContent } from "@/components/sections/HeroContent";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] bg-black">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <HeroSlider />
        <div className="relative flex flex-col justify-center px-6 pb-14 pt-28 sm:px-8 lg:min-h-[100svh] lg:px-12 lg:pb-20 lg:pt-32 xl:px-16">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
