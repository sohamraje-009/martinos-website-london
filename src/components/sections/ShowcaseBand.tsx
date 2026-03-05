"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ShowcaseBand() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -40]);

  return (
    <section ref={ref} className="relative h-[64vh] min-h-[460px] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-charcoal/60" />

      <div className="relative mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-14">
        <div className="max-w-2xl text-soft-beige">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-gold">
            Chef&apos;s Table Experience
          </p>
          <h3 className="mt-4 font-heading text-4xl leading-tight md:text-6xl">
            An Evening Composed Course by Course
          </h3>
        </div>
      </div>
    </section>
  );
}
