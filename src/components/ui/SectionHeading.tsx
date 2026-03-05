type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const subtitleTone =
    tone === "light" ? "text-soft-beige/75" : "text-charcoal/75";
  const titleTone = tone === "light" ? "text-soft-beige" : "text-charcoal";

  return (
    <header className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs tracking-[0.25em] uppercase text-accent-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-heading text-4xl leading-tight md:text-6xl ${titleTone}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-sm leading-relaxed md:text-base ${subtitleTone}`}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
