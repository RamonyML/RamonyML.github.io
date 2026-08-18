export function Footer() {
  return (
    <footer className="border-t border-line bg-black py-10 text-chalk">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 px-5 font-mono text-[11px] leading-relaxed tracking-wide text-gray sm:flex-row sm:px-8">
        <div>
          RML — PORTFOLIO / 2026
          <br />© {new Date().getFullYear()} Ramony Lima. Todos os direitos
          reservados.
        </div>
        <div className="sm:text-right">
          REACT · TYPESCRIPT · FIREBASE · NODE
          <br />
          <a href="#topo" className="text-chalk transition-opacity hover:opacity-70">
            VOLTAR AO TOPO ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
