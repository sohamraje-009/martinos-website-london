import { getRestaurantJsonLd } from "@/lib/seo";
import { ScrollProgress } from "./ui/ScrollProgress";
import { AboutSection } from "./sections/AboutSection";
import { BookingSystemSection } from "./sections/BookingSystemSection";
import { ChefStorySection } from "./sections/ChefStorySection";
import { CinematicSection } from "./sections/CinematicSection";
import { ContactSection } from "./sections/ContactSection";
import { FoodPhotographySection } from "./sections/FoodPhotographySection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { MenuSection } from "./sections/MenuSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { PrivateDiningSection } from "./sections/PrivateDiningSection";
import { ShowcaseBand } from "./sections/ShowcaseBand";
import { StickyReservationButton } from "./sections/StickyReservationButton";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";

export function MartinosPage() {
  const jsonLd = getRestaurantJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-soft-beige text-charcoal">
        <ScrollProgress />
        <HeroSection />
        <main>
          <AboutSection />
          <ChefStorySection />
          <CinematicSection />
          <PhilosophySection />
          <FoodPhotographySection />
          <MenuSection />
          <WhyChooseSection />
          <PrivateDiningSection />
          <BookingSystemSection />
          <ShowcaseBand />
          <TestimonialsSection />
          <GallerySection />
          <ContactSection />
        </main>
        <StickyReservationButton />
      </div>
    </>
  );
}
