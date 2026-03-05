"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../ui/Reveal";

export function CinematicSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -30]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal py-28 text-soft-beige md:py-36">
      <motion.div style={{ scale, y }} className="absolute inset-0 opacity-35">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-couple-enjoying-dinner-1579/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/80 to-charcoal" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-soft-beige/15 bg-soft-beige/5 p-8 backdrop-blur-sm md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-gold">Cinematic Dining</p>
              <h3 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
                Atmosphere That Feels Like a Film Scene
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-8 text-soft-beige/75 md:text-base">
                Long table compositions, warm candlelight, and deliberate service cadence create a cinematic rhythm around every course.
              </p>
            </article>

            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-3xl border border-soft-beige/15"
            >
              <div
                className="h-[360px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1800&q=80')",
                }}
              />
            </motion.article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
