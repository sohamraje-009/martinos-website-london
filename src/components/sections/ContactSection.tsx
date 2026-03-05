import { siteConfig } from "@/content/site";
import { ReservationForm } from "../ReservationForm";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="bg-charcoal py-28 text-soft-beige md:py-36">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Reserve"
            title="Book Your Table"
            subtitle="Share your preferred date and details. Our team confirms all bookings personally to ensure an exceptional experience."
            tone="light"
          />

          <div className="mt-7 space-y-4 text-sm leading-relaxed text-soft-beige/85">
            <p>
              <span className="text-accent-gold">Address:</span> {siteConfig.address}
            </p>
            <p>
              <span className="text-accent-gold">Phone:</span>{" "}
              <a href={`tel:${siteConfig.phoneHref}`} className="transition hover:text-accent-gold">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="text-accent-gold">Email:</span>{" "}
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-accent-gold">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="text-accent-gold">Opening Hours:</span>{" "}
              {siteConfig.openingHours}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-soft-beige/20">
            <iframe
              title="Martino's London location"
              src="https://www.google.com/maps?q=Mayfair%20London&output=embed"
              className="h-[280px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full border border-accent-gold px-5 py-2 text-xs uppercase tracking-[0.15em] text-accent-gold transition hover:bg-accent-gold hover:text-charcoal"
          >
            Open Exact Location
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <ReservationForm />
        </Reveal>
      </div>
    </section>
  );
}
