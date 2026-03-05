import { galleryImages } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse Into Martino's"
          align="center"
        />
      </Reveal>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <Reveal key={image} delay={index * 0.04} className="mb-4 break-inside-avoid">
            <div className="group overflow-hidden rounded-2xl">
              <div
                className="h-72 w-full bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
