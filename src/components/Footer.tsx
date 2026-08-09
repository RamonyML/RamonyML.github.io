export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Ramony Lima. Todos os direitos reservados.</p>
        <a href="#topo" className="transition-colors hover:text-primary">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
