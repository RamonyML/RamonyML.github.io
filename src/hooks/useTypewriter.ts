import { useEffect, useState } from "react";

/** Efeito de "digitação" — revela o texto caractere a caractere. */
export function useTypewriter(text: string, speed = 22, startDelay = 300) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOutput("");
    setDone(false);

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
  }, [text, speed, startDelay]);

  return { output, done };
}
