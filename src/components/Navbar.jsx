function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#inicio" className="text-2xl font-black text-lime-400">
          PERUDATA
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="#inicio" className="text-sm font-semibold text-slate-300 hover:text-lime-400">
            Inicio
          </a>

          <a href="#consulta" className="text-sm font-semibold text-slate-300 hover:text-lime-400">
            Consultas
          </a>

          <a href="#api" className="text-sm font-semibold text-slate-300 hover:text-lime-400">
            APIPERU
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;