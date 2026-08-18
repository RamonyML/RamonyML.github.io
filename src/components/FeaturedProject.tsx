import { useEffect, useState } from "react";
import eternodiaSlide1 from "../assets/eternodia-slide-1.jpg";
import eternodiaSlide2 from "../assets/eternodia-slide-2.jpg";
import eternodiaSlide3 from "../assets/eternodia-slide-3.jpg";
import eternodiaSlide4 from "../assets/eternodia-slide-4.jpg";
import glowfitSlide1 from "../assets/glowfit-slide1.jpg";
import glowfitSlide2 from "../assets/glowfit-slide2.jpg";
import glowfitSlide3 from "../assets/glowfit-slide3.jpg";
import glowfitSlide4 from "../assets/glowfit-slide4.jpg";
import glowfitSlide5 from "../assets/glowfit-slide5.jpg";
import glowfitSlide6 from "../assets/glowfit-slide6.jpg";
import { featuredProjects, type FeaturedProjectData } from "../data/projects";

// Telas de cada case, na ordem do crossfade.
const SLIDES_BY_TITLE: Record<string, string[]> = {
  "Eterno Dia": [eternodiaSlide1, eternodiaSlide2, eternodiaSlide3, eternodiaSlide4],
  "HT Glow Fit": [
    glowfitSlide1,
    glowfitSlide2,
    glowfitSlide3,
    glowfitSlide4,
    glowfitSlide5,
    glowfitSlide6,
  ],
};

const SLIDE_INTERVAL_MS = 4500;

function rotuloDoUrl(url?: string): string {
  if (!url) return "";
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/**
 * Case em painel preto sobre o papel, como os blocos "tech" do guia.
 * A régua de números do topo é funcional: indica o slide ativo — dado
 * como ornamento, ornamento como dado.
 */
function CaseCard({ data, index }: { data: FeaturedProjectData; index: number }) {
  const slides = SLIDES_BY_TITLE[data.title] ?? [];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  const numeroCase = String(index + 1).padStart(3, "0");

  return (
    <div className="reveal mb-12 border border-ink bg-black text-chalk">
      {/* barra de sistema: endereço + indicador de slide */}
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] tracking-wide text-gray">
          {rotuloDoUrl(data.demoUrl)}
        </span>
        <div className="flex gap-3 font-mono text-[10px]">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === activeSlide ? "text-chalk" : "text-gray/50"}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>
      </div>

      {/* slideshow */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-line">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Interface do ${data.title}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === activeSlide ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <span className="tag text-chalk">CASE / {numeroCase}</span>
          <h3 className="headline mt-6 text-[clamp(2.4rem,5vw,4.2rem)]">{data.title}.</h3>
          <p className="mono-label mt-4 text-[10px] text-gray">{data.status}</p>

          <p className="serif mt-5 max-w-xl text-[15px] leading-relaxed text-gray">
            {data.description}
          </p>

          <blockquote className="serif mt-6 max-w-xl border-l border-gray/40 pl-4 text-[15px] leading-relaxed italic text-chalk/85">
            “{data.quote}”
          </blockquote>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-8">
          {/* dados do case, em linhas de coordenada */}
          <div className="font-mono text-[12px]">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3"
              >
                <span className="mono-label text-[10px] text-gray">{stat.label}</span>
                <span className="text-chalk">{stat.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-tight text-gray">
            {data.tags.join(" / ")}
          </p>

          {data.demoUrl && (
            <a
              href={data.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="mono-label mt-8 inline-block bg-chalk px-6 py-3.5 text-black transition-colors hover:bg-white"
            >
              Ver ao vivo ↗
            </a>
          )}
          {data.note && (
            <p className="serif mt-4 text-[13px] italic text-gray">{data.note}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProject() {
  return (
    <>
      {featuredProjects.map((project, i) => (
        <CaseCard key={project.title} data={project} index={i} />
      ))}
    </>
  );
}
