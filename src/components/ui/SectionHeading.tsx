type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs tracking-[0.25em] uppercase text-accent-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-sm leading-relaxed text-charcoal/75 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
