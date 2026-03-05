"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30,30,30,0.72), rgba(30,30,30,0.35)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(201,168,106,0.25),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-24">
        <header className="flex items-center justify-between py-6 text-soft-beige">
          <p className="font-heading text-2xl">Martino&apos;s</p>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] md:flex">
            <a href="#about" className="text-soft-beige/85 transition hover:text-accent-gold">About</a>
            <a href="#menu" className="text-soft-beige/85 transition hover:text-accent-gold">Menu</a>
            <a href="#gallery" className="text-soft-beige/85 transition hover:text-accent-gold">Gallery</a>
            <a href="#contact" className="text-soft-beige/85 transition hover:text-accent-gold">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-accent-gold px-4 py-2 text-xs uppercase tracking-[0.14em] text-accent-gold transition hover:bg-accent-gold hover:text-charcoal"
          >
            Reserve
          </a>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: contentY, opacity: contentOpacity }}
          className="mt-auto max-w-3xl pb-16 text-soft-beige"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent-gold">
            Luxury Italian Dining • Mayfair London
          </p>
          <h1 className="font-heading text-balance text-5xl leading-tight md:text-7xl">
            Elevated Italian Dining for Exceptional Evenings
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-soft-beige/90 md:text-lg">
            Martino&apos;s brings together artisanal ingredients, elegant plating,
            and attentive hospitality in a setting designed for memorable nights.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent-gold px-7 py-3 text-sm font-semibold tracking-wide text-charcoal transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Reserve Table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-soft-beige/70 px-7 py-3 text-sm font-semibold tracking-wide text-soft-beige transition hover:bg-soft-beige hover:text-charcoal"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
