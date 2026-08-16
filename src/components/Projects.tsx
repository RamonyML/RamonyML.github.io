import landingScreenshot from "../assets/project-landing.jpg";
import studioNovaScreenshot from "../assets/project-studio-nova.jpg";
import contabilidadeScreenshot from "../assets/project-contabilidade.jpg";
import fotografiaScreenshot from "../assets/project-fotografia.jpg";
import belaroidsScreenshot from "../assets/project-belaroids.jpg";
import oslineImage from "../assets/OS-Line.jpg";
import jogaeScreenshot from "../assets/project-jogae.jpg";
import apetiteScreenshot from "../assets/project-apetite.jpg";
import vigorScreenshot from "../assets/project-vigor.jpg";
import escalaLouvorScreenshot from "../assets/project-escala-louvor.jpg";
import { TypewriterHeading } from "./TypewriterHeading";
import { FeaturedProject } from "./FeaturedProject";
import { projects, type Project } from "../data/projects";

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
  "Escala de Louvor": escalaLouvorScreenshot,
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

function ProjectCard({ project }: { project: Project }) {
  const image = IMAGES[project.title];
  const premium = project.tier === "premium";

  return (
    <article
      className={
        premium
          ? "flex flex-col overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-b from-surface to-amber-500/[0.06]"
          : "flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
      }
    >
      <div className="aspect-video w-full overflow-hidden border-b border-border bg-surface-2">
        {image ? (
          <img
            src={image}
            alt={`Captura de tela do projeto ${project.title}`}
            loading="lazy"
            decoding="async"
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
          <h3 className="text-lg font-medium text-ink">{project.title}</h3>
          {premium && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-400">
              Premium
            </span>
          )}
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

        {project.price && (
          <div className="mt-6 rounded-xl border border-border bg-bg/40 p-4">
            <p className="text-2xl font-medium text-ink">
              {project.price}
              <span className="ml-2 text-xs font-normal text-muted">
                arquivo do template
              </span>
            </p>
            {project.customPrice && (
              <>
                <p className="mt-2 text-lg font-medium text-primary">
                  {project.customPrice}
                  <span className="ml-2 text-xs font-normal text-muted">
                    sob medida, instalado e publicado
                  </span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  No sob medida eu aplico sua identidade visual e coloco no
                  ar. Logo, fotos e textos são enviados por você.
                </p>
              </>
            )}
          </div>
        )}

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
            <p className="text-xs text-muted italic">{project.note}</p>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectGroup({
  title,
  items,
}: {
  title: string;
  items: Project[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="mt-16 first:mt-0">
      <h3 className="mb-6 text-lg font-medium text-ink">{title}</h3>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const producao = projects.filter((p) => p.stage === "producao");
  const desenvolvimento = projects.filter(
    (p) => p.stage === "desenvolvimento"
  );
  const vendaGenerico = projects.filter(
    (p) => p.stage === "venda" && p.tier === "generico"
  );
  const vendaPremium = projects.filter(
    (p) => p.stage === "venda" && p.tier === "premium"
  );

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

        <ProjectGroup title="Em produção" items={producao} />
        <ProjectGroup title="Em desenvolvimento" items={desenvolvimento} />

        <div className="mt-16">
          <h3 className="mb-6 text-lg font-medium text-ink">À venda</h3>

          <p className="mb-2 text-xs font-medium tracking-widest text-primary uppercase">
            Genéricos
          </p>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
            Estrutura sólida e visual limpo, fáceis de adaptar a qualquer
            nicho. Pra quem precisa de um site bonito no ar rápido, sem
            complicação.
          </p>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {vendaGenerico.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <p className="mt-14 mb-2 text-xs font-medium tracking-widest text-amber-400/80 uppercase">
            Premium
          </p>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
            Identidade autoral e interações que a maioria dos templates não
            tem: cursor customizado, scroll horizontal, animações
            sob medida e efeitos sonoros. Pra quem quer um site que chama
            atenção de verdade.
          </p>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {vendaPremium.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
