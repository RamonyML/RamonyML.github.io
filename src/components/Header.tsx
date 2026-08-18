import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre", num: "02" },
  { href: "#experiencia", label: "Log", num: "03" },
  { href: "#projetos", label: "Projetos", num: "04" },
  { href: "#servicos", label: "Serviços", num: "05" },
  { href: "#contato", label: "Contato", num: "06" },
];

/**
 * Barra de sistema: identificação à esquerda, índice de seções à direita.
 * Tudo mono, tudo caps — a navegação é parte da linguagem técnica.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  // Trava o scroll do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-black/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="mono-label text-chalk">
          RML — SYS.001
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono-label text-gray transition-colors hover:text-chalk"
            >
              <span className="mr-1.5 opacity-50">{link.num}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="mono-label text-chalk md:hidden"
        >
          {open ? "FECHAR ×" : "MENU +"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-black md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-line px-5 py-5"
            >
              <span className="mono-label text-gray">{link.num}</span>
              <span className="headline text-2xl text-chalk">{link.label}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
