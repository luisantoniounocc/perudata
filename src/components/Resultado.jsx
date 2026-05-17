function Resultado({ data, tipo }) {
  const camposDni = [
    ["DNI", data.numero],
    ["Nombres", data.nombres],
    ["Apellido paterno", data.apellido_paterno],
    ["Apellido materno", data.apellido_materno],
  ];

  const camposRuc = [
    ["RUC", data.ruc],
    ["Razón social", data.nombre_o_razon_social],
    ["Estado", data.estado],
    ["Condición", data.condicion],
    ["Dirección", data.direccion],
    ["Departamento", data.departamento],
    ["Provincia", data.provincia],
    ["Distrito", data.distrito],
  ];

  const campos = tipo === "dni" ? camposDni : camposRuc;

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="rounded-3xl border border-lime-400/20 bg-slate-900 p-8">
        <h2 className="text-3xl font-black text-lime-400">
          Resultado encontrado
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {campos.map(([titulo, valor]) => (
            <div key={titulo} className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">{titulo}</p>
              <h3 className="mt-2 text-lg font-bold text-white">
                {valor || "No disponible"}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resultado;