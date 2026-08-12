import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  as?: "p" | "span" | "div";
};

/** Parágrafo que "materializa" com um leve glitch RGB-split ao entrar
 * na tela: duas cópias coloridas do texto (verde + magenta) piscam em
 * fatias aleatórias por cima do texto real e somem, enquanto o texto
 * real faz um fade-in normal por baixo. Roda uma vez só. */
export function GlitchReveal({ text, className = "", as: Tag = "p" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`glitch-reveal ${visible ? "is-visible" : ""}`}>
      <Tag className={className}>{text}</Tag>
      {visible && (
        <>
          <Tag aria-hidden="true" className={`glitch-layer glitch-layer--a ${className}`}>
            {text}
          </Tag>
          <Tag aria-hidden="true" className={`glitch-layer glitch-layer--b ${className}`}>
            {text}
          </Tag>
        </>
      )}
    </div>
  );
}
