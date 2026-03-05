import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="About Martino's"
          title="Where Italian Heritage Meets Contemporary Elegance"
          subtitle="Founded by the Martino family, our dining room celebrates the warmth of Italy with London's modern sophistication. Each service is orchestrated with precision, from hand-rolled pasta to expertly paired wines."
        />
      </Reveal>
    </section>
  );
}
