const helpSections = [
  {
    id: "como-comprar",
    title: "Como comprar",
    text: "Elegí los productos que te gusten, agregalos al carrito y avanzá al checkout. Allí completás tus datos, elegís entrega y dejás registrado el pedido."
  },
  {
    id: "medios-de-pago",
    title: "Medios de pago",
    text: "Durante el checkout podés seleccionar el método de pago disponible para finalizar tu compra."
  },
  {
    id: "envios",
    title: "Envíos",
    text: "Podés elegir envío a domicilio o retiro en local. El detalle de entrega se completa al finalizar el pedido."
  },
  {
    id: "cambios-y-devoluciones",
    title: "Cambios y devoluciones",
    text: "Conservá el comprobante y verificá que el producto esté en buen estado. Desde el local se coordina el cambio según disponibilidad."
  }
];

export function Help() {
  return (
    <section className="container-page py-10">
      <div className="mb-8">
        <p className="eyebrow">Ayuda</p>
        <h1 className="section-title mt-2">Información para comprar</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {helpSections.map((section) => (
          <article id={section.id} key={section.id} className="rounded-[1.5rem] border border-[#FE72A9]/16 bg-white p-6 shadow-sm scroll-mt-28">
            <h2 className="text-xl font-bold text-[#18121D]">{section.title}</h2>
            <p className="mt-3 text-sm font-medium leading-6 text-[#7B6D82]">{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
