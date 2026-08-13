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
            text="Quer tirar aquele projeto do papel?"
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
              href={`https://wa.me/5534999886329?text=${encodeURIComponent(
                "Olá, Ramony! Vim pelo seu portfólio e quero conversar sobre um projeto."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.51 1.36 5.03L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.14c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.36-.14-.19-1.19-1.58-1.19-3.02 0-1.43.75-2.14 1.02-2.43.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.81 2.01.88 2.16.07.15.12.32.02.51-.1.19-.15.31-.3.48-.14.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.29.75 1.24 1.61 2 1.11.99 2.04 1.3 2.33 1.44.29.15.46.13.63-.05.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.94.92.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://t.me/ramonyml_bot"
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
            <a
              href="mailto:ramonyml@gmail.com"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              ramonyml@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
