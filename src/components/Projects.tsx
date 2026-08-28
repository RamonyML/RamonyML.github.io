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
import jecunhaScreenshot from "../assets/project-jecunha.jpg";
import sailorluScreenshot from "../assets/project-sailorlu.jpg";
import { FeaturedProject } from "./FeaturedProject";
import { Typewriter } from "./Typewriter";
import { projects, type Project } from "../data/projects";

const PROJETOS_COPY =
  "Dois cases em destaque, o índice do que está em produção e os produtos à venda.";

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
  "Studio Jê Cunha": jecunhaScreenshot,
  Ludi: sailorluScreenshot,
};

/**
 * Card de índice: papel com régua, screenshot em P&B que ganha cor no
 * hover. Premium inverte o card pra preto — a hierarquia vem do
 * contraste, não de cor de destaque.
 */
function ProjectCard({ project }: { project: Project }) {
  const image = IMAGES[project.title];
  const premium = project.tier === "premium";

  return (
    <article
      className={`flex flex-col p-6 ${premium ? "bg-black text-chalk" : "bg-card text-ink"}`}
    >
      <div
        className={`aspect-video w-full overflow-hidden border ${
          premium ? "border-line" : "border-rule"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={`Captura de tela do projeto ${project.title}`}
            loading="lazy"
            decoding="async"
            // P&B só do desktop pra cima, onde existe hover pra revelar a
            // cor; no toque a capa já entra colorida, sem depender de gesto.
            className="h-full w-full object-cover object-top transition-[filter,transform] duration-500 hover:scale-[1.02] lg:grayscale lg:hover:grayscale-0"
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-2 ${
              premium ? "text-gray" : "text-dust"
            }`}
          >
            <span className="font-mono text-[11px] tracking-[0.15em]">CASE PRIVADO</span>
            <span className="font-mono text-[10px] tracking-[0.15em] opacity-60">
              ERP / OPERAÇÃO INTERNA
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg leading-tight font-bold tracking-tight uppercase">
          {project.title}
        </h3>
        {premium && <span className="tag shrink-0 text-[9px]">Premium</span>}
      </div>

      <p className={`mono-label mt-2 text-[10px] ${premium ? "text-gray" : "text-dust"}`}>
        {project.status}
      </p>

      <p
        className={`serif mt-4 text-[14px] leading-relaxed ${
          premium ? "text-gray" : "text-dust"
        }`}
      >
        {project.description}
      </p>

      <p
        className={`mt-4 font-mono text-[10px] leading-relaxed tracking-tight ${
          premium ? "text-gray/80" : "text-dust/90"
        }`}
      >
        {project.tags.join(" / ")}
      </p>

      {project.price && (
        <div className={`mt-5 border-t pt-4 ${premium ? "border-line" : "border-rule"}`}>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            {project.price}
            <span className={`mono-label ml-2 text-[9px] ${premium ? "text-gray" : "text-dust"}`}>
              arquivo do template
            </span>
          </p>
          {project.customPrice && (
            <>
              <p className="mt-1.5 font-display text-lg font-bold tracking-tight">
                {project.customPrice}
                <span
                  className={`mono-label ml-2 text-[9px] ${premium ? "text-gray" : "text-dust"}`}
                >
                  sob medida, instalo e publico em sua infraestrutura
                </span>
              </p>
              <p
                className={`serif mt-2 text-[12px] leading-relaxed ${
                  premium ? "text-gray" : "text-dust"
                }`}
              >
                No sob medida eu aplico sua identidade visual e coloco no ar.
                Logo, fotos e textos são enviados por você.
              </p>
            </>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-1 flex-col justify-end gap-2">
        <div className="flex flex-wrap gap-5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="mono-label underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Ver ao vivo ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mono-label underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Código ↗
            </a>
          )}
        </div>
        {project.note && (
          <p className={`serif text-[12px] italic ${premium ? "text-gray" : "text-dust"}`}>
            {project.note}
          </p>
        )}
      </div>
    </article>
  );
}

/** Grade-tabela do guia: gap de 1px sobre fundo tinta vira régua viva. */
function IndexGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-[1px] border border-ink bg-ink md:grid-cols-2 xl:grid-cols-3">
      {items.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

function GroupHead({ code, title, count }: { code: string; title: string; count: number }) {
  return (
    <div className="mb-4 flex items-baseline justify-between border-b border-ink pb-2">
      <p className="mono-label text-dust">
        {code} / <span className="text-ink">{title}</span>
      </p>
      <span className="font-mono text-[11px] text-dust">
        {String(count).padStart(2, "0")} {count === 1 ? "item" : "itens"}
      </span>
    </div>
  );
}

export function Projects() {
  const producao = projects.filter((p) => p.stage === "producao");
  const desenvolvimento = projects.filter((p) => p.stage === "desenvolvimento");
  const vendaGenerico = projects.filter(
    (p) => p.stage === "venda" && p.tier === "generico",
  );
  const vendaPremium = projects.filter(
    (p) => p.stage === "venda" && p.tier === "premium",
  );

  return (
    <section id="projetos" className="bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-[90px_1fr_1fr] lg:gap-10">
          <span className="mono-label pt-3 text-dust">04 / 06</span>
          <h2 className="headline reveal text-[clamp(3rem,6.5vw,5.5rem)]">Projetos.</h2>
          <Typewriter
            text={PROJETOS_COPY}
            className="serif max-w-md text-lg leading-relaxed text-dust lg:justify-self-end"
          />
        </div>

        <FeaturedProject />

        <div className="mt-20">
          <GroupHead code="INDEX" title="EM PRODUÇÃO" count={producao.length} />
          <IndexGrid items={producao} />
        </div>

        {desenvolvimento.length > 0 && (
          <div className="mt-16">
            <GroupHead code="DEV" title="EM DESENVOLVIMENTO" count={desenvolvimento.length} />
            <IndexGrid items={desenvolvimento} />
          </div>
        )}

        <div className="mt-16">
          <GroupHead code="VENDA" title="TEMPLATES GENÉRICOS" count={vendaGenerico.length} />
          <p className="serif mb-5 max-w-2xl text-[15px] leading-relaxed text-dust">
            Estrutura sólida e visual limpo, fáceis de adaptar a qualquer
            nicho. Pra quem precisa de um site bonito no ar rápido, sem
            complicação.
          </p>
          <IndexGrid items={vendaGenerico} />
        </div>

        <div className="mt-16">
          <GroupHead code="VENDA" title="TEMPLATES PREMIUM" count={vendaPremium.length} />
          <p className="serif mb-5 max-w-2xl text-[15px] leading-relaxed text-dust">
            Identidade autoral e interações que a maioria dos templates não
            tem: cursor customizado, scroll horizontal, animações sob medida
            e efeitos sonoros. Pra quem quer um site que chama atenção de
            verdade.
          </p>
          <IndexGrid items={vendaPremium} />
        </div>

        {/* Escopo do sob medida: bloco invertido de alto contraste, pra
            ninguém fechar negócio achando que infra está inclusa. */}
        <div className="reveal mt-16 border border-ink bg-black text-chalk">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-3">
            <span className="mono-label text-[10px] text-gray">
              LEIA ANTES DE COMPRAR
            </span>
            <span className="mono-label text-[10px] text-gray">
              VÁLIDO P/ GENÉRICOS E PREMIUM
            </span>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr_1fr] lg:gap-10">
            <div>
              <span className="tag">Escopo / Sob medida</span>
              <p className="serif mt-5 text-[14px] leading-relaxed text-gray">
                O sob medida é a personalização do template: eu aplico a sua
                identidade visual e coloco o site no ar. Logo, fotos e
                textos são enviados por você.
              </p>
              <p className="serif mt-4 text-[14px] leading-relaxed text-chalk">
                Os valores acima cobrem o desenvolvimento e a entrega do
                site. Depois da entrega, o projeto é seu: você usa, hospeda
                e evolui como preferir.
              </p>
            </div>

            <div>
              <p className="mono-label mb-3 border-b border-line pb-2 text-[10px]">
                ✓ Incluso
              </p>
              <ul className="font-mono text-[12px] leading-[2] text-gray">
                <li>/ Identidade visual aplicada</li>
                <li>/ Textos e fotos posicionados</li>
                <li>/ Ajustes de seções do template</li>
                <li>/ Publicação do site no ar</li>
              </ul>
            </div>

            <div>
              <p className="mono-label mb-3 border-b border-line pb-2 text-[10px]">
                ✕ Não incluso
              </p>
              <ul className="font-mono text-[12px] leading-[2] text-gray">
                <li>/ Banco de dados e infraestrutura</li>
                <li>/ Hospedagem e domínio próprios</li>
                <li>/ Pagamentos (SaaS, e-commerce)</li>
                <li>/ Integrações com APIs externas</li>
              </ul>
            </div>
          </div>

          {/* hover em laranja de sinal: chamariz pro desatento que pularia
              o aviso — passa o mouse em qualquer ponto da faixa e acende */}
          <div className="group flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-4 sm:px-8">
            <p className="serif text-[13px] text-gray transition-colors duration-300 group-hover:text-signal">
              Precisa dessas partes? Eu também desenvolvo. Aí o projeto é
              orçado à parte, com valor a combinar.
            </p>
            <a
              href="#contato"
              className="mono-label bg-chalk px-5 py-3 text-black transition-colors hover:bg-white"
            >
              Pedir orçamento →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
