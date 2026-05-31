import { HeroSlider } from "@/components/sections/HeroSlider";
import { HeroContent } from "@/components/sections/HeroContent";

export function Hero() {
  return (
    <section id="home" className="relative bg-black lg:min-h-[100svh]">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-2">
        <HeroSlider />
        <div className="relative flex flex-col justify-start px-5 pb-10 pt-7 sm:px-8 sm:pt-8 lg:min-h-[100svh] lg:justify-center lg:px-12 lg:pb-20 lg:pt-32 xl:px-16">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
