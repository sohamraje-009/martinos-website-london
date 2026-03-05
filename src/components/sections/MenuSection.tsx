"use client";

import { menuCategories, menuItems } from "@/content/site";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type MenuCategory = (typeof menuCategories)[number];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="bg-charcoal py-28 text-soft-beige md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Interactive Menu"
            title="Signature Selections"
            subtitle="Browse animated categories to discover Martino's tasting journey."
            tone="light"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-3">
            {menuCategories.map((category) => {
              const active = category === activeCategory;
              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  whileTap={{ scale: 0.97 }}
                  className={`relative overflow-hidden rounded-full border px-5 py-2 text-xs uppercase tracking-[0.16em] transition ${
                    active
                      ? "border-accent-gold text-charcoal"
                      : "border-soft-beige/35 text-soft-beige/80 hover:border-accent-gold hover:text-accent-gold"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="menu-category-pill"
                      className="absolute inset-0 bg-accent-gold"
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    />
                  ) : null}
                  <span className="relative z-10">{category}</span>
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-soft-beige/10 bg-soft-beige/5"
              >
                <div className="overflow-hidden">
                  <div
                    className="h-56 bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl">{item.title}</h3>
                    <span className="text-sm text-accent-gold">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-soft-beige/75">
                    {item.description}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-accent-gold/80">
                    {item.category}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
