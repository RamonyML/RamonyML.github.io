import { Typewriter } from "./Typewriter";

const WHATSAPP_URL = `https://wa.me/5534999886329?text=${encodeURIComponent(
  "Olá, Ramony! Vi seu portfólio e quero conversar sobre um projeto.",
)}`;

const CONTACT_COPY =
  "Freelance, produto próprio ou vaga: me chama no canal que preferir e eu respondo rápido.";

const CANAIS = [
  { label: "Telegram", href: "https://t.me/ramonyml_bot", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ramonyml", external: true },
  { label: "E-mail", href: "mailto:ramonyml@gmail.com", external: false },
];

/**
 * Fechamento em display gigante. WhatsApp é o CTA primário (bloco
 * sólido); os demais canais seguem em linha, bordados.
 */
export function Contact() {
  return (
    <section id="contato" className="bg-black py-24 text-chalk lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[90px_1fr]">
          <span className="mono-label pt-4 text-gray">06 / 06</span>
          <div>
            <h2 className="headline reveal text-[clamp(3.2rem,9vw,8.5rem)]">
              Vamos
              <br />
              construir
              <br />
              algo real.
            </h2>
            <Typewriter
              text={CONTACT_COPY}
              className="serif mt-8 max-w-md text-lg leading-relaxed text-gray"
            />

            <div className="reveal mt-10 flex flex-wrap items-center gap-4" data-delay="2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mono-label bg-chalk px-8 py-4 text-black transition-colors hover:bg-white"
              >
                WhatsApp →
              </a>
              {CANAIS.map((canal) => (
                <a
                  key={canal.label}
                  href={canal.href}
                  {...(canal.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="mono-label border border-line px-8 py-4 text-chalk transition-colors hover:border-chalk"
                >
                  {canal.label} ↗
                </a>
              ))}
            </div>

            <p className="mono-label reveal mt-12 text-[10px] text-gray" data-delay="3">
              UBERLÂNDIA · MG — REMOTO PRA QUALQUER LUGAR / RESPOSTA EM ATÉ 24H
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
