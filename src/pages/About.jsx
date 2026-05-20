import { Gift, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const values = [
  { title: "Regalos faciles", text: "Productos ordenados por rubro, precio y ocasion para elegir sin vueltas.", icon: Gift },
  { title: "Detalles cuidados", text: "Una seleccion delicada de bazar, moda, belleza, libreria, juegos y tecnologia.", icon: Sparkles },
  { title: "Atencion cercana", text: "Consulta por WhatsApp o redes para resolver dudas antes de comprar.", icon: HeartHandshake }
];

export function About() {
  return (
    <section className="container-page py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">Sobre nosotros</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#3a1427] sm:text-5xl">Xeneize Regalería</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-warm">
            Una regalería pensada para encontrar opciones lindas, útiles y especiales en un solo lugar. La tienda online queda preparada para crecer con más productos, categorías, ofertas y futuras integraciones.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/productos"><Button>Ver productos</Button></Link>
            <Link to="/contacto"><Button variant="secondary">Contacto</Button></Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-blush-50 shadow-sm ring-1 ring-coral/10">
          <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85" alt="Regalos preparados" className="aspect-[4/3] h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {values.map(({ title, text, icon: Icon }) => (
          <article key={title} className="rounded-lg border border-pink-100 bg-white p-5 shadow-sm">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#FFEBF0] text-[#3a1427]">
              <Icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-lg font-black text-[#3a1427]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-warm">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
