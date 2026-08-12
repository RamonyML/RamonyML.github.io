import { useTypewriterOnView } from "../hooks/useTypewriterOnView";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

/** Título de seção que "digita" sozinho quando entra na tela. Reserva
 * a altura final (texto invisível) pra não empurrar o layout enquanto
 * digita, e expõe o texto completo pra leitor de tela via sr-only. */
export function TypewriterHeading({ text, className = "", as = "h2" }: Props) {
  const { ref, output, done } = useTypewriterOnView(text);
  const Tag = as;

  return (
    <div ref={ref} className="relative">
      <Tag aria-hidden="true" className={`invisible ${className}`}>
        {text}
      </Tag>
      <Tag className={`absolute inset-0 ${className}`}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          {output}
          <span
            className={`-mb-[0.1em] ml-0.5 inline-block h-[0.9em] w-[2px] bg-primary ${
              done ? "opacity-0 transition-opacity duration-500" : "animate-pulse"
            }`}
          />
        </span>
      </Tag>
    </div>
  );
}
