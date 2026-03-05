import { menuItems } from "@/content/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" className="bg-charcoal py-24 text-soft-beige md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Menu Highlights"
            title="Signature Selections"
            subtitle="A curated preview of guest favorites crafted with artisanal produce and refined Italian flavor profiles."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {menuItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="overflow-hidden rounded-2xl border border-soft-beige/10 bg-soft-beige/5">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl">{item.title}</h3>
                    <span className="text-sm text-accent-gold">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-soft-beige/75">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
