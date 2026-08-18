import { useEffect } from "react";

/**
 * Ativa o efeito .reveal (fade + subida) quando o elemento entra na tela.
 *
 * Além dos elementos presentes na montagem, um MutationObserver captura
 * .reveal adicionados depois (HMR em dev, conteúdo condicional): sem isso,
 * um elemento novo ficaria invisível pra sempre, já que o estado inicial
 * do efeito é opacity 0.
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    const observar = (raiz: ParentNode) => {
      raiz
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };

    observar(document.body);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList.contains("reveal")) io.observe(node);
          observar(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
