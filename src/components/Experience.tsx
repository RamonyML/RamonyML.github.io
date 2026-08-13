import experienceBg from "../assets/fundo003.jpeg";
import { TypewriterHeading } from "./TypewriterHeading";
import { education, experience } from "../data/experience";
import { useParallax } from "../hooks/useParallax";

function Timeline({
  items,
}: {
  items: { period: string; title: string; place: string; description: string }[];
}) {
  return (
    <ol className="space-y-10 border-l border-border pl-8">
      {items.map((item) => (
        <li key={item.title + item.period} className="relative">
          <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-primary" />
          <p className="text-sm text-muted">{item.period}</p>
          <h4 className="mt-1 text-lg font-medium text-ink">{item.title}</h4>
          <p className="text-sm text-primary">{item.place}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  const { ref: bgRef, offset } = useParallax(0.15);

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden border-t border-border py-24"
    >
      {/* Mesmo duotone + parallax das outras seções. Aqui tem bastante
          texto pra ler, então soma um blur e uma camada escura extra pra
          garantir contraste. */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0">
        <img
          src={experienceBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover [filter:grayscale(1)_brightness(0.5)_contrast(1.1)_blur(6px)]"
          style={{
            opacity: "var(--hero-bg-opacity)",
            transform: `scale(1.25) translateY(${offset}px)`,
          }}
        />
        <div
          className="absolute inset-0 bg-primary mix-blend-color"
          style={{ opacity: "var(--hero-bg-tint)" }}
        />
        <div className="absolute inset-0 bg-bg/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-bg) 0%, transparent 18%, transparent 82%, var(--color-bg) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
          Trajetória
        </p>
        <TypewriterHeading
          text="Experiência e formação"
          className="mb-14 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-sm font-medium tracking-widest text-muted uppercase">
              Experiência
            </h3>
            <Timeline items={experience} />
          </div>
          <div>
            <h3 className="mb-8 text-sm font-medium tracking-widest text-muted uppercase">
              Formação
            </h3>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
