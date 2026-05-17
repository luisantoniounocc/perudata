import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Consulta from "./components/Consulta";
import Resultado from "./components/Resultado";
import Loader from "./components/Loader";

function App() {
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [tipoResultado, setTipoResultado] = useState("");

  return (
    <main className="min-h-screen scroll-smooth bg-slate-950 text-white">
      <Navbar />

      <section id="inicio">
        <Hero />
      </section>

      <section id="consulta">
        <Consulta
          setResultado={setResultado}
          setCargando={setCargando}
          setTipoResultado={setTipoResultado}
        />
      </section>

      {cargando && <Loader />}

      {resultado && (
        <Resultado data={resultado} tipo={tipoResultado} />
      )}

      <section id="api" className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black text-lime-400">
            APIPERU
          </h2>

          <p className="mt-4 text-slate-300">
            APIPERU permite consultar datos de DNI y RUC mediante una API.
            En este proyecto se consume directamente desde React usando Tailwind.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;