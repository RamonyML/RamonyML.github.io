import { GlitchReveal } from "./GlitchReveal";
import { TypewriterHeading } from "./TypewriterHeading";

export function Contact() {
  return (
    <section id="contato" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Contato
          </p>
          <TypewriterHeading
            text="Tem um projeto em mente ou uma vaga em aberto?"
            className="mx-auto max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          />
          <div className="mt-5">
            <GlitchReveal
              text="Me manda uma mensagem, respondo rápido."
              className="mx-auto max-w-md text-muted"
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ramonyml@gmail.com"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              ramonyml@gmail.com
            </a>
            <a
              href="https://t.me/ramonyml"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </svg>
              Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/ramonyml"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
