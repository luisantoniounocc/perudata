function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            React + Tailwind + APIPERU
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Consulta <span className="text-lime-400">DNI y RUC</span> en tiempo real
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Proyecto web desarrollado con React, Tailwind CSS y consumo de API.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="rounded-2xl bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Sistema de consulta</p>
            <h3 className="mt-2 text-3xl font-black text-lime-400">
              DNI / RUC
            </h3>
            <p className="mt-3 text-slate-300">
              Datos obtenidos desde APIPERU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;