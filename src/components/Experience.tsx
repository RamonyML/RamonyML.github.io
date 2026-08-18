import { education, experience } from "../data/experience";

/**
 * Experiência tratada como log de sistema: registros cronológicos em
 * linhas com régua, período em mono, cargo em display e descrição em
 * serif. A formação entra como um segundo bloco de arquivo.
 */
export function Experience() {
  return (
    <section id="experiencia" className="bg-black py-24 text-chalk lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-[90px_1fr_1fr] lg:gap-10">
          <span className="mono-label pt-3 text-gray">03 / 06</span>
          <h2 className="headline reveal text-[clamp(3rem,6.5vw,5.5rem)]">
            Log de
            <br />
            operação.
          </h2>
          <p className="serif reveal max-w-md text-lg leading-relaxed text-gray lg:justify-self-end" data-delay="1">
            Registro cronológico: onde operei, o que construí e o que ficou
            rodando depois de mim.
          </p>
        </div>

        <div className="mono-label mb-3 text-[10px] text-gray">REG / EXPERIÊNCIA</div>
        {experience.map((item, i) => (
          <article
            key={item.period}
            className="reveal grid gap-3 border-t border-line py-8 transition-colors hover:bg-panel lg:grid-cols-[210px_1.1fr_1.3fr] lg:gap-8"
            data-delay={String(Math.min(i, 2))}
          >
            <span className="font-mono text-[12px] tracking-wide text-gray">{item.period}</span>
            <div>
              <h3 className="font-display text-xl leading-tight font-bold tracking-tight uppercase">
                {item.title}
              </h3>
              <p className="mono-label mt-2 text-[10px] text-gray">{item.place}</p>
            </div>
            <p className="serif text-[15px] leading-relaxed text-gray">{item.description}</p>
          </article>
        ))}

        <div className="mono-label mt-16 mb-3 text-[10px] text-gray">ARQ / FORMAÇÃO</div>
        {education.map((item) => (
          <article
            key={item.period}
            className="reveal grid gap-3 border-t border-line py-8 transition-colors hover:bg-panel lg:grid-cols-[210px_1.1fr_1.3fr] lg:gap-8"
          >
            <span className="font-mono text-[12px] tracking-wide text-gray">{item.period}</span>
            <div>
              <h3 className="font-display text-xl leading-tight font-bold tracking-tight uppercase">
                {item.title}
              </h3>
              <p className="mono-label mt-2 text-[10px] text-gray">{item.place}</p>
            </div>
            <p className="serif text-[15px] leading-relaxed text-gray">{item.description}</p>
          </article>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
