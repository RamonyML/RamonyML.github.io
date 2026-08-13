import landingScreenshot from "../assets/project-landing.png";
import studioNovaScreenshot from "../assets/project-studio-nova.png";
import contabilidadeScreenshot from "../assets/project-contabilidade.png";
import fotografiaScreenshot from "../assets/project-fotografia.png";
import belaroidsScreenshot from "../assets/project-belaroids.png";
import oslineImage from "../assets/OS-Line.png";
import jogaeScreenshot from "../assets/project-jogae.png";
import apetiteScreenshot from "../assets/project-apetite.png";
import vigorScreenshot from "../assets/project-vigor.png";
import { TypewriterHeading } from "./TypewriterHeading";
import { FeaturedProject } from "./FeaturedProject";
import { projects } from "../data/projects";

const IMAGES: Record<string, string> = {
  Belaroids: belaroidsScreenshot,
  "Belle Studio": landingScreenshot,
  "Studio Nova": studioNovaScreenshot,
  "Exata Contábil": contabilidadeScreenshot,
  Obscura: fotografiaScreenshot,
  OSLine: oslineImage,
  Jogaê: jogaeScreenshot,
  Apetite: apetiteScreenshot,
  Vigor: vigorScreenshot,
};

const PLACEHOLDER_ICONS: Record<string, React.ReactNode> = {
  "Gerador de O.S.": (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9 6h6M9 10h6M9 14h4" />
    </svg>
  ),
};

export function Projects() {
  return (
    <section id="projetos" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
          Projetos
        </p>
        <TypewriterHeading
          text="Alguns trabalhos recentes"
          className="mb-14 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        />

        <FeaturedProject />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const image = IMAGES[project.title];
            return (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="aspect-video w-full overflow-hidden border-b border-border bg-surface-2">
                  {image ? (
                    <img
                      src={image}
                      alt={`Captura de tela do projeto ${project.title}`}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
                      {PLACEHOLDER_ICONS[project.title]}
                      <span className="text-xs">Case de produto</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-2.5 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-medium text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <span className="mb-3 inline-block w-fit rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-primary">
                    {project.status}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex-1 space-y-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
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
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-soft"
                      >
                        Ver código
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
                    {project.note && (
                      <p className="text-xs text-muted italic">
                        {project.note}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
