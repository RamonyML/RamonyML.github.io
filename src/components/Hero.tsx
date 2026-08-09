import heroBg from "../assets/fundo01.jpeg";
import photo from "../assets/ramonyml.png";
import { useParallax } from "../hooks/useParallax";

export function Hero() {
  const { ref: bgRef, offset } = useParallax(0.15);

  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Imagem de fundo — duotone (preto + verde) via grayscale + camada
          de cor com mix-blend-mode, parallax sutil ao rolar, e um degradê
          no final que funde com o fundo sólido bem em cima da borda que já
          separa do "Sobre". */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_25%] [filter:grayscale(1)_brightness(0.6)_contrast(1.15)]"
          style={{
            opacity: "var(--hero-bg-opacity)",
            transform: `scale(1.25) translateY(${offset}px)`,
          }}
        />
        <div
          className="absolute inset-0 bg-primary mix-blend-color"
          style={{ opacity: "var(--hero-bg-tint)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 35%, var(--color-bg) 92%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 px-5 lg:flex-row lg:justify-between">
        <div className="text-center lg:flex-1 lg:text-left">
          <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
            Desenvolvedor Full-Stack
          </p>

          <h1 className="text-5xl font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Ramony <span className="text-primary">Lima</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            Construo produtos web de ponta a ponta — de SaaS com pagamentos a
            plataformas operacionais com integrações complexas — usando
            React, TypeScript, Node.js e Firebase.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projetos"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Vamos conversar
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-5 text-muted lg:justify-start">
            <a
              href="https://github.com/RamonyML"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-primary"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ramonyml"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-primary"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="mailto:ramonyml@gmail.com"
              aria-label="E-mail"
              className="transition-colors hover:text-primary"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Foto — em tons de cinza por padrão (ecoa o duotone do fundo) e
            revela cor + leve zoom no hover, com um glow verde suave em
            vez de um contorno grosso fixo. */}
        <div className="group relative shrink-0">
          <div className="absolute -inset-4 rounded-full bg-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-border sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
            <img
              src={photo}
              alt="Foto de Ramony Lima"
              className="h-full w-full scale-100 object-cover object-[50%_15%] grayscale transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
