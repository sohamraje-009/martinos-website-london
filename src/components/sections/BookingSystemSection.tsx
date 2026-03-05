"use client";

import { siteConfig } from "@/content/site";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReservationForm } from "../ReservationForm";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type BookingProvider = "OpenTable" | "Resy" | "Direct";

export function BookingSystemSection() {
  const [active, setActive] = useState<BookingProvider>("OpenTable");

  const providerCopy: Record<BookingProvider, { title: string; href?: string }> = {
    OpenTable: {
      title: "Real-time OpenTable booking",
      href: siteConfig.openTableUrl,
    },
    Resy: {
      title: "Priority seating on Resy",
      href: siteConfig.resyUrl,
    },
    Direct: {
      title: "Direct reservation request",
    },
  };

  return (
    <section id="booking" className="bg-charcoal section-padding text-soft-beige">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Real Booking System"
            title="Turn Website Traffic into Paid Reservations"
            subtitle="Book directly via OpenTable, Resy, or Martino's concierge reservation flow."
            tone="light"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-3">
            {(["OpenTable", "Resy", "Direct"] as BookingProvider[]).map((provider) => {
              const isActive = provider === active;
              return (
                <motion.button
                  key={provider}
                  type="button"
                  onClick={() => setActive(provider)}
                  whileTap={{ scale: 0.97 }}
                  className={`relative rounded-full border px-5 py-2 text-xs uppercase tracking-[0.16em] transition ${
                    isActive
                      ? "border-accent-gold text-charcoal"
                      : "border-soft-beige/35 text-soft-beige/80 hover:border-accent-gold hover:text-accent-gold"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="booking-provider-pill"
                      className="absolute inset-0 rounded-full bg-accent-gold"
                    />
                  ) : null}
                  <span className="relative z-10">{provider}</span>
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <article className="rounded-3xl border border-soft-beige/15 bg-soft-beige/5 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-gold">{active}</p>
              <h4 className="mt-3 font-heading text-3xl">{providerCopy[active].title}</h4>

              <AnimatePresence mode="wait">
                {active === "Direct" ? (
                  <motion.div
                    key="direct"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-5"
                  >
                    <ReservationForm />
                  </motion.div>
                ) : (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-5"
                  >
                    <div className="overflow-hidden rounded-2xl border border-soft-beige/20 bg-charcoal/60">
                      <iframe
                        title={`${active} booking`}
                        src={providerCopy[active].href}
                        className="h-[420px] w-full"
                        loading="lazy"
                      />
                    </div>
                    <a
                      href={providerCopy[active].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex rounded-full bg-accent-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal"
                    >
                      Open {active} Booking
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="rounded-3xl border border-soft-beige/15 bg-soft-beige/5 p-6 md:p-8">
              <h4 className="font-heading text-3xl">Reservation Conversion Stack</h4>
              <ul className="mt-6 space-y-3 text-sm text-soft-beige/80">
                <li>- OpenTable and Resy links for live inventory booking</li>
                <li>- Concierge direct form for high-value private requests</li>
                <li>- Mobile-first CTA placement for reservation intent capture</li>
                <li>- Premium service framing to increase booking confidence</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
