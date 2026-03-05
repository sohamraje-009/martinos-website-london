import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <Reveal>
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
          <SectionHeading
            eyebrow="About Martino's"
            title="Where Italian Heritage Meets Contemporary Elegance"
            subtitle="Founded by the Martino family, our dining room celebrates the warmth of Italy with London's modern sophistication."
          />

          <div className="space-y-6 border-l border-charcoal/15 pl-6">
            <p className="font-heading text-5xl leading-none text-accent-gold">M</p>
            <p className="text-sm leading-8 text-charcoal/75 md:text-base">
              Each service is orchestrated with precision, from hand-rolled pasta
              to expertly paired wines. The room blends warm stone textures,
              candlelit depth, and understated craftsmanship.
            </p>
            <p className="text-sm leading-8 text-charcoal/75 md:text-base">
              Martino&apos;s is designed as an editorial dining experience where
              every detail, from table rhythm to plating, contributes to a
              cinematic evening.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
