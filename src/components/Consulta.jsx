import { useState } from "react";

function Consulta({ setResultado, setCargando, setTipoResultado }) {
  const [documento, setDocumento] = useState("");
  const [error, setError] = useState("");

  const consultarDocumento = async () => {
    setError("");
    setResultado(null);

    if (documento.length !== 8 && documento.length !== 11) {
      setError("Ingrese un DNI de 8 dígitos o un RUC de 11 dígitos.");
      return;
    }

    const token = import.meta.env.VITE_APIPERU_TOKEN;

    if (!token) {
      setError("Falta configurar el token en el archivo .env");
      return;
    }

    const tipo = documento.length === 8 ? "dni" : "ruc";

    try {
      setCargando(true);

      const respuesta = await fetch(
        `https://apiperu.dev/api/${tipo}/${documento}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      const data = await respuesta.json();

      if (!data.success) {
        setError(data.message || "No se encontraron resultados.");
        return;
      }

      setTipoResultado(tipo);
      setResultado(data.data);
    } catch {
      setError("Error al conectar con APIPERU.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-black">
          Consultar documento
        </h2>

        <p className="mt-3 text-slate-300">
          Ingresa un DNI o RUC para consultar información.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto]">
          <input
            type="text"
            value={documento}
            maxLength={11}
            onChange={(e) =>
              setDocumento(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Ejemplo: 12345678 o 20123456789"
            className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-lime-400"
          />

          <button
            onClick={consultarDocumento}
            className="rounded-2xl bg-lime-400 px-8 py-4 font-black text-slate-950 hover:bg-lime-300"
          >
            Consultar
          </button>
        </div>

        {error && (
          <div className="mt-5 rounded-2xl bg-red-500/10 px-5 py-4 text-red-300">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}

export default Consulta;