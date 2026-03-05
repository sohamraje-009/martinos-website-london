import { Reveal } from "../ui/Reveal";

const principles = [
  {
    title: "Ingredient Integrity",
    text: "We source small-batch produce and seafood with traceable provenance.",
  },
  {
    title: "Disciplined Technique",
    text: "Every sauce, pasta, and reduction is built with classic method and modern control.",
  },
  {
    title: "Warm Precision",
    text: "Luxury service should feel personal, attentive, and never performative.",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding bg-soft-beige">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent-gold">Restaurant Philosophy</p>
          <h3 className="mt-4 max-w-4xl font-heading text-4xl leading-tight md:text-6xl">
            Fine Dining Should Feel Intimate, Honest, and Deeply Memorable
          </h3>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="rounded-2xl border border-charcoal/10 bg-white/70 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <h4 className="font-heading text-2xl">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-charcoal/75">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
