"use client";

import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

export function PrivateDiningSection() {
  return (
    <section id="private-dining" className="section-padding bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent-gold">Private Dining</p>
          <h3 className="mt-4 font-heading text-4xl leading-tight md:text-6xl">
            Exclusive Rooms for Celebrations and Executive Dinners
          </h3>
          <p className="mt-6 max-w-xl text-sm leading-8 text-charcoal/75 md:text-base">
            Choose from intimate chef&apos;s table experiences, family celebration rooms,
            or fully private dining suites with dedicated service teams.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-soft-beige transition hover:-translate-y-0.5 hover:bg-charcoal/90"
          >
            Plan Private Event
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-3xl"
          >
            <div
              className="h-[460px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
