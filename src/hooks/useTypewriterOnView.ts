import { useEffect, useRef, useState } from "react";

/** Como useTypewriter, mas só começa a "digitar" quando o elemento
 * entra na tela (em vez de disparar direto na montagem). */
export function useTypewriterOnView(text: string, speed = 30, startDelay = 100) {
  const ref = useRef<HTMLDivElement>(null);
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    let interval: number;

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i++;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [started, text, speed, startDelay]);

  return { ref, output, done };
}
