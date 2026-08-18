import { stack } from "../data/stack";

const BIO_PARAGRAPH_1 =
  "Sou desenvolvedor full-stack com projetos em produção real, especializado em React, TypeScript e Firebase. Construí sozinho, do zero, uma plataforma operacional usada diariamente pelo suporte técnico de um provedor de fibra óptica, integrada via API ao ERP MK Solutions, e um SaaS com pagamentos via Stripe, também em produção.";

const BIO_PARAGRAPH_2 =
  "Antes de migrar pra desenvolvimento, atuei alguns anos com infraestrutura de redes (GPON/XPON, monitoramento via Zabbix), o que me dá um domínio técnico pouco comum em projetos que envolvem telecom e provedores de internet. Minha formação em Análise e Desenvolvimento de Sistemas tem ênfase em engenharia de software e elaboração de documentação técnica. Gosto de deixar cada decisão registrada o suficiente pra outra pessoa conseguir dar manutenção sem sofrer.";

const PRINCIPLES = [
  { label: "Base", value: "Uberlândia, MG — remoto pra qualquer lugar" },
  { label: "Foco", value: "Produtos web de ponta a ponta" },
  { label: "Formação", value: "ADS · ênfase em engenharia de software" },
  { label: "Disponibilidade", value: "Freelance & vagas CLT/PJ" },
];

/**
 * Seção em papel: a virada editorial do guia. Cabeçalho com contador,
 * bio em serif, princípios em colunas com réguas e a stack como uma
 * tabela técnica — informação tratada como dado, não como enfeite.
 */
export function About() {
  return (
    <section id="sobre" className="bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        {/* cabeçalho no grid do guia: número / título / descrição */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[90px_1fr_1fr] lg:gap-10">
          <span className="mono-label pt-3 text-dust">02 / 06</span>
          <h2 className="headline reveal text-[clamp(3rem,6.5vw,5.5rem)]">Sobre.</h2>
          <p className="serif reveal max-w-md text-lg leading-relaxed text-dust lg:justify-self-end" data-delay="1">
            Código em produção, decisões documentadas e um pé em telecom.
          </p>
        </div>

        {/* bio em duas colunas editoriais */}
        <div className="grid gap-8 border-t border-ink pt-10 lg:grid-cols-2 lg:gap-14">
          <p className="serif reveal text-lg leading-[1.65]">{BIO_PARAGRAPH_1}</p>
          <p className="serif reveal text-lg leading-[1.65] text-dust" data-delay="1">
            {BIO_PARAGRAPH_2}
          </p>
        </div>

        {/* princípios em 4 colunas com réguas, como no guia */}
        <div className="mt-16 grid grid-cols-2 border-t border-ink lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.label}
              className={`min-h-[110px] px-4 pt-4 first:pl-0 ${
                i < PRINCIPLES.length - 1 ? "border-r border-rule" : ""
              } ${i === 1 ? "max-lg:border-r-0" : ""}`}
            >
              <b className="mono-label mb-2 block text-[10px]">{p.label}</b>
              <span className="serif text-[15px] leading-snug text-dust">{p.value}</span>
            </div>
          ))}
        </div>

        {/* stack como tabela de sistema */}
        <div className="mt-20">
          <p className="mono-label mb-4 text-dust">SYS / STACK</p>
          {Object.entries(stack).map(([categoria, itens]) => (
            <div
              key={categoria}
              className="grid gap-2 border-t border-rule py-4 lg:grid-cols-[220px_1fr] lg:gap-8"
            >
              <span className="mono-label pt-0.5 text-[10px] text-dust">{categoria}</span>
              <span className="font-mono text-[13px] leading-relaxed tracking-tight">
                {itens.join("  /  ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
