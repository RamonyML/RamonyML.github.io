import servicesBg from "../assets/fundo002.jpeg";
import { TypewriterHeading } from "./TypewriterHeading";
import { services } from "../data/services";
import { useParallax } from "../hooks/useParallax";

export function Services() {
  const { ref: bgRef, offset } = useParallax(0.15);

  return (
    <section
      id="servicos"
      className="relative overflow-hidden border-t border-border py-24"
    >
      {/* Mesmo tratamento duotone (preto + verde) do fundo do Hero, com
          fade nas bordas pra fundir com o sólido acima e abaixo, e o mesmo
          parallax sutil ao rolar. */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0">
        <img
          src={servicesBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover [filter:grayscale(1)_brightness(0.6)_contrast(1.15)]"
          style={{
            opacity: "var(--hero-bg-opacity)",
            transform: `scale(1.25) translateY(${offset}px)`,
          }}
        />
        <div
          className="absolute inset-0 bg-primary mix-blend-color"
          style={{ opacity: "var(--hero-bg-tint)" }}
        />
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
          Serviços
        </p>
        <TypewriterHeading
          text="Como posso ajudar no seu projeto"
          className="mb-14 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50"
            >
              <h3 className="text-lg font-medium text-ink">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
