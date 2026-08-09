import { useEffect, useRef, useState } from "react";

const MAX_OFFSET = 70;

/**
 * Desloca um elemento verticalmente conforme a distância do centro da
 * seção até o centro da viewport — dá um efeito de parallax sutil sem
 * depender de "background-attachment: fixed" (que quebra no Safari/iOS).
 */
export function useParallax(speed = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const distanceFromCenter =
        rect.top + rect.height / 2 - window.innerHeight / 2;
      const raw = distanceFromCenter * speed;
      setOffset(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, raw)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return { ref, offset };
}
