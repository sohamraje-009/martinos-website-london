"use client";

import { galleryImages } from "@/content/site";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse Into Martino's"
          align="center"
          subtitle="Editorial compositions from the dining room, bar, and seasonal tasting moments."
        />
      </Reveal>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <Reveal key={image} delay={index * 0.04} className="mb-5 break-inside-avoid">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div
                className="h-72 w-full bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
