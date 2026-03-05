import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ChefStorySection() {
  return (
    <section id="chef" className="bg-white section-padding">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Chef Story"
            title="Chef Martino's Journey from Naples to Mayfair"
            subtitle="Raised in a family trattoria, Chef Martino built his craft through regional kitchens across Naples, Florence, and Milan before opening Martino's in London."
          />
          <p className="mt-6 max-w-xl text-sm leading-8 text-charcoal/75 md:text-base">
            His approach respects Italian tradition while elevating every plate with
            modern precision, seasonal produce, and exacting technique.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="overflow-hidden rounded-3xl">
            <div
              className="h-[460px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
          </article>
        </Reveal>
      </div>
    </section>
  );
}
