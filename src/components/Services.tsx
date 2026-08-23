import { services } from "../data/services";

/**
 * Serviços como linhas numeradas de um índice. O hover inverte a linha
 * inteira (preto → branco): a microinteração com propósito do guia.
 */
export function Services() {
  return (
    <section id="servicos" className="bg-black py-24 text-chalk lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-[90px_1fr_1fr] lg:gap-10">
          <span className="mono-label pt-3 text-gray">05 / 06</span>
          <h2 className="headline reveal text-[clamp(3rem,6.5vw,5.5rem)]">Serviços.</h2>
          <p className="serif reveal max-w-md text-lg leading-relaxed text-gray lg:justify-self-end" data-delay="1">
            O que eu construo, do primeiro rascunho ao deploy.
          </p>
        </div>

        <div className="border-b border-line">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group grid cursor-default gap-3 border-t border-line px-2 py-9 transition-colors duration-300 hover:bg-chalk hover:text-black sm:px-4 lg:grid-cols-[90px_1fr_1.2fr] lg:gap-8"
              data-delay={String(Math.min(i, 2))}
            >
              <span className="font-mono text-[12px] text-gray transition-colors group-hover:text-black/60">
                {String(i + 1).padStart(2, "0")} —
              </span>
              <h3 className="headline text-[clamp(1.6rem,3.2vw,2.6rem)]">{service.title}</h3>
              <p className="serif max-w-xl text-[15px] leading-relaxed text-gray transition-colors group-hover:text-black/70 lg:justify-self-end lg:self-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Convite pro mostruário de estilos: o passo que vem antes de
            qualquer serviço da lista acima. Mesmo idioma de hover-inversão
            das linhas de serviço. */}
        <a
          href="https://ramonyml.github.io/mostruario-estilos/"
          target="_blank"
          rel="noreferrer"
          className="reveal group mt-16 grid gap-4 border border-line px-5 py-10 transition-colors duration-300 hover:bg-chalk hover:text-black sm:px-8 lg:grid-cols-[90px_1fr_auto] lg:items-center lg:gap-8"
        >
          <span className="mono-label text-signal">Comece aqui</span>
          <div>
            <h3 className="headline text-[clamp(1.6rem,3.2vw,2.6rem)]">
              Qual é a cara do seu site?
            </h3>
            <p className="serif mt-3 max-w-2xl text-[15px] leading-relaxed text-gray transition-colors group-hover:text-black/70">
              Antes de pedir orçamento, explore o mostruário: 26 direções
              visuais interativas, de landing page a painel de ERP. Escolha a
              que conversa com o seu negócio, ou misture duas, e me mande o
              número.
            </p>
          </div>
          <span className="mono-label underline underline-offset-4 transition-opacity group-hover:opacity-70">
            Explorar o mostruário ↗
          </span>
        </a>
      </div>
    </section>
  );
}
