import { featureItems } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function WhyChooseSection() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Crafted for Memorable Evenings"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {featureItems.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.05}>
            <article className="rounded-2xl border border-charcoal/10 bg-white/60 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-2xl">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{feature.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
