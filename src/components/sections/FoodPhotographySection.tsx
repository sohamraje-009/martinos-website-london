"use client";

import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

const images = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
];

export function FoodPhotographySection() {
  return (
    <section className="bg-charcoal section-padding text-soft-beige">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-accent-gold">Food Photography</p>
          <h3 className="mt-4 max-w-3xl font-heading text-4xl leading-tight md:text-6xl">
            Signature Plates Captured Like Editorial Features
          </h3>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <Reveal key={image} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-2xl border border-soft-beige/15"
              >
                <div
                  className="h-[360px] bg-cover bg-center transition duration-700 ease-out hover:scale-105"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
