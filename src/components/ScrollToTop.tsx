import { useEffect, useState } from "react";

/**
 * Botão fixo "voltar ao topo": some no carregamento e aparece assim que
 * a página começa a rolar (limiar baixo, de propósito — é pra ficar
 * disponível cedo, não só depois de rolar bastante).
 */
export function ScrollToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 80);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <a
      href="#topo"
      aria-label="Voltar ao topo"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center border border-chalk bg-black text-chalk transition-all duration-300 hover:bg-chalk hover:text-black sm:right-8 sm:bottom-8 ${
        visivel
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="font-mono text-lg leading-none">↑</span>
    </a>
  );
}
