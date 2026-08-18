import { useEffect, useRef, useState } from "react";

/**
 * Texto digitado caractere a caractere quando o elemento entra na tela.
 *
 * O parágrafo completo fica invisível por baixo reservando o espaço (zero
 * layout shift) e a versão digitada pinta por cima. O cursor pisca durante
 * a digitação e por mais 5s depois de completar; então some. Leitores de
 * tela recebem o texto inteiro de uma vez; com prefers-reduced-motion o
 * texto aparece pronto, sem animação.
 */
export function Typewriter({
  text,
  speed = 16,
  className = "",
  ...rest
}: {
  text: string;
  speed?: number;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [iniciado, setIniciado] = useState(false);
  const [chars, setChars] = useState(0);
  const [cursor, setCursor] = useState(true);

  const reduzido =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Dispara quando ~30% do parágrafo aparece na tela.
  useEffect(() => {
    if (reduzido) {
      setIniciado(true);
      setChars(text.length);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIniciado(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduzido, text.length]);

  // Digita; ao completar, mantém o cursor piscando por 5s e apaga.
  useEffect(() => {
    if (!iniciado) return;
    if (chars >= text.length) {
      const t = setTimeout(() => setCursor(false), 5000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setChars((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [iniciado, chars, text.length, speed]);

  return (
    <p ref={ref} className={`relative ${className}`} {...rest}>
      {/* reserva o espaço do texto completo */}
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 ${cursor ? "cursor" : ""}`}
      >
        {text.slice(0, chars)}
      </span>
      <span className="sr-only">{text}</span>
    </p>
  );
}
