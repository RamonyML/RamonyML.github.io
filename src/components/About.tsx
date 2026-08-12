import { TypewriterHeading } from "./TypewriterHeading";
import { stack } from "../data/stack";

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
          Sobre
        </p>
        <TypewriterHeading
          text="Um pouco sobre como eu trabalho"
          className="mb-14 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        />

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              Sou desenvolvedor full-stack com projetos em produção real,
              especializado em React, TypeScript e Firebase. Construí
              sozinho, do zero, uma plataforma operacional usada diariamente
              pelo suporte técnico de um provedor de fibra óptica,
              integrada via API ao ERP MK Solutions, e um SaaS com
              pagamentos via Stripe, também em produção.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Antes de migrar pra desenvolvimento, atuei alguns anos com
              infraestrutura de redes (GPON/XPON, monitoramento via Zabbix),
              o que me dá um domínio técnico pouco comum em projetos que
              envolvem telecom e provedores de internet. Minha formação em
              Análise e Desenvolvimento de Sistemas tem ênfase em engenharia
              de software e elaboração de documentação técnica. Gosto de
              deixar cada decisão registrada o suficiente pra outra pessoa
              conseguir dar manutenção sem sofrer.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-muted">Baseado em</dt>
                <dd className="mt-1 text-ink">Uberlândia, MG</dd>
              </div>
              <div>
                <dt className="text-muted">Disponibilidade</dt>
                <dd className="mt-1 text-ink">Freelance & vagas CLT/PJ</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted">Especialidade</dt>
                <dd className="mt-1 text-ink">
                  Engenharia de software & documentação de sistemas
                </dd>
              </div>
            </dl>

            <a
              href="/cv/Ramony-Menezes-Lima-CV.pdf"
              download
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Baixar CV
            </a>
          </div>

          <div>
            {Object.entries(stack).map(([category, items]) => (
              <div key={category} className="mb-7 last:mb-0">
                <h3 className="mb-3 text-sm font-medium text-ink">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
