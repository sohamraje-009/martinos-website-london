import { testimonials } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Guests Across London"
            subtitle="Selected from verified Google reviews."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.07}>
              <article className="rounded-2xl border border-charcoal/10 bg-soft-beige p-6 shadow-sm">
                <p className="text-accent-gold">{"★".repeat(review.rating)}</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold tracking-wide text-charcoal">
                  {review.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
