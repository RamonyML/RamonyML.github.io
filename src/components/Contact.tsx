export function Contact() {
  return (
    <section id="contato" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Contato
          </p>
          <h2 className="mx-auto max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Tem um projeto em mente ou uma vaga em aberto?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            Me manda uma mensagem — respondo rápido.
          </p>

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
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
