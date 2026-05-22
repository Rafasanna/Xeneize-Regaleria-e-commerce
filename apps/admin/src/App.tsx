const adminAreas = [
  {
    title: "Productos",
    description: "Catalogo, stock, precios e imagenes."
  },
  {
    title: "Pedidos",
    description: "Seguimiento y estados de compra."
  },
  {
    title: "Cupones",
    description: "Promociones y descuentos."
  },
  {
    title: "Configuracion",
    description: "Datos del negocio e integraciones."
  }
];

export function App() {
  return (
    <main className="admin-shell">
      <section className="admin-intro">
        <p className="admin-kicker">Sprint 0</p>
        <h1>Panel de administracion - Xeneize Regaleria</h1>
        <p>
          Base inicial para administrar la tienda sin agregar todavia login,
          persistencia ni operaciones de catalogo.
        </p>
      </section>

      <section className="admin-grid" aria-label="Modulos preparados">
        {adminAreas.map((area) => (
          <article className="admin-card" key={area.title}>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
