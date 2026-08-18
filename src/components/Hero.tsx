import { useState } from "react";
import photo from "../assets/ramonyml.jpg";
import { Typewriter } from "./Typewriter";

const HERO_COPY =
  "Construo produtos web de ponta a ponta, de SaaS com pagamentos a plataformas operacionais com integrações complexas, usando React, TypeScript, Node.js e Firebase.";

/** Coordenadas reais de Uberlândia — dado como ornamento, à la guia. */
const COORDS = [
  "LAT 18°55' S",
  "LONG 48°17' W",
  "",
  "SYS. / 001",
  "NODE / ACTIVE",
  "BASE / UDI · MG",
  "GRID / 12 COL",
];

const STRIP = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

export function Hero() {
  // Clique trava a foto revelada (colorida, sem véu); outro clique desfaz.
  const [fotoFixada, setFotoFixada] = useState(false);

  return (
    <section
      id="topo"
      className="relative flex min-h-screen flex-col bg-black px-5 pt-28 pb-8 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col">
        {/* régua de números do guia, canto superior direito */}
        <div className="mono-label hidden justify-end gap-4 pb-10 text-[10px] text-gray/60 sm:flex">
          {STRIP.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[190px_1fr_340px] lg:gap-14 xl:grid-cols-[190px_1fr_430px]">
          {/* coluna de dados */}
          <div className="mono-label hidden leading-[2.1] text-gray lg:block lg:self-start lg:border-r lg:border-line lg:pt-2 lg:pr-6">
            {COORDS.map((linha, i) =>
              linha === "" ? (
                <br key={i} />
              ) : (
                <div key={i} className={linha.includes("ACTIVE") ? "cursor" : undefined}>
                  {linha}
                </div>
              ),
            )}
          </div>

          {/* bloco principal */}
          <div>
            <span className="tag reveal text-chalk">Desenvolvedor Full-Stack</span>

            <h1 className="headline reveal mt-8 text-[clamp(4rem,12vw,11.5rem)] text-chalk" data-delay="1">
              Ramony
              <br />
              Lima.
            </h1>

            <p className="mono-label reveal mt-7 text-gray" data-delay="2">
              Interfaces / Código / Pagamentos / Sistemas
            </p>

            {/* Sem .reveal aqui: a própria digitação já é a revelação —
                combinar os dois criaria uma corrida entre observers. */}
            <Typewriter
              text={HERO_COPY}
              className="serif mt-6 max-w-md text-lg leading-relaxed text-gray"
            />

            <div className="reveal mt-10 flex flex-wrap items-center gap-4" data-delay="3">
              <a
                href="#projetos"
                className="mono-label bg-chalk px-7 py-4 text-black transition-colors hover:bg-white"
              >
                Ver projetos →
              </a>
              <a
                href="#contato"
                className="mono-label border border-line px-7 py-4 text-chalk transition-colors hover:border-chalk"
              >
                Contato
              </a>
            </div>

            <div className="mono-label reveal mt-9 flex gap-7 text-gray" data-delay="3">
              <a
                href="https://github.com/RamonyML"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-chalk"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ramonyml"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-chalk"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:ramonyml@gmail.com" className="transition-colors hover:text-chalk">
                E-mail ↗
              </a>
            </div>
          </div>

          {/* retrato tratado como registro técnico: véu que recolhe no
              hover; clique trava o revelado */}
          <figure className="reveal hidden lg:block" data-delay="2">
            {/* o padding precisa caber a foto ampliada (scale) + a moldura
                afastada, senão o estado de hover invade a legenda */}
            <div className="p-7">
              <img
                src={photo}
                alt="Foto de Ramony Lima"
                className={`retrato ${fotoFixada ? "fixada" : ""}`}
                onClick={() => setFotoFixada((f) => !f)}
                title={fotoFixada ? "Clique pra voltar ao P&B" : "Clique pra fixar em cores"}
              />
            </div>
            <figcaption className="mono-label flex justify-between px-7 text-[10px] text-gray">
              <span>DEVELOPER / RML</span>
              <span className={fotoFixada ? "text-chalk" : undefined}>
                {fotoFixada ? "SINAL / COR_" : "UBERLÂNDIA · MG"}
              </span>
            </figcaption>
          </figure>
        </div>

        {/* régua de rodapé do hero */}
        <div className="mono-label mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[10px] text-gray">
          <span>PORTFOLIO / 2026</span>
          <span className="hidden sm:inline">REACT · TYPESCRIPT · FIREBASE · NODE</span>
          <span className="cursor">SCROLL ↓</span>
        </div>
      </div>
    </section>
  );
}
