import { useEffect, useState } from "react";
import eternodiaSlide1 from "../assets/eternodia-slide-1.png";
import eternodiaSlide2 from "../assets/eternodia-slide-2.png";
import eternodiaSlide3 from "../assets/eternodia-slide-3.png";
import eternodiaSlide4 from "../assets/eternodia-slide-4.png";
import { featuredProject } from "../data/projects";

// Novas telas: solte os arquivos em src/assets/ e adicione o import + a
// entrada aqui. O crossfade já roda sozinho com quantas imagens houver.
const SLIDES = [eternodiaSlide1, eternodiaSlide2, eternodiaSlide3, eternodiaSlide4];

const SLIDE_INTERVAL_MS = 4500;

export function FeaturedProject() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const id = setInterval(() => {
      setActiveSlide((current) => (current + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-surface md:mb-12">
      <div className="flex flex-col bg-surface-2">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 max-w-56 flex-1 truncate rounded-full bg-surface px-3 py-1 text-center text-[11px] text-muted">
            eternodia.com
          </span>
        </div>
        <div className="relative aspect-video w-full overflow-hidden border-b border-border">
          {SLIDES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Interface do Eterno Dia"
              className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === activeSlide ? 1 : 0 }}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-8 p-7 sm:p-9 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
            Projeto favorito
          </span>

          <h3 className="text-2xl font-medium text-ink sm:text-3xl">
            {featuredProject.title}
          </h3>
          <span className="mt-2.5 inline-block w-fit rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-primary">
            {featuredProject.status}
          </span>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {featuredProject.description}
          </p>

          <blockquote className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-ink/90 italic">
            “{featuredProject.quote}”
          </blockquote>
        </div>

        <div className="flex flex-col md:justify-center">
          <div className="grid grid-cols-3 gap-3">
            {featuredProject.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border px-3 py-2.5"
              >
                <p className="text-sm font-medium text-ink">{stat.value}</p>
                <p className="text-[11px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            {featuredProject.demoUrl && (
              <a
                href={featuredProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-soft"
              >
                Ver site ao vivo
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            )}
            {featuredProject.note && (
              <p className="text-xs text-muted italic">
                {featuredProject.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
