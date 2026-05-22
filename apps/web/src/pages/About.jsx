import { Gift, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const values = [
  { title: "Regalos fáciles", text: "Productos ordenados por rubro, precio y ocasión para elegir sin vueltas.", icon: Gift },
  { title: "Variedad completa", text: "Una selección delicada de bazar, moda, belleza, librería, juegos y tecnología.", icon: Sparkles },
  { title: "Atención cercana", text: "Una regalería familiar de Santa Elena, confiable y presente antes de comprar.", icon: HeartHandshake }
];

export function About() {
  return (
    <section className="container-page py-10">
      <div className="grid gap-8 rounded-[2rem] bg-[linear-gradient(135deg,#FDE7F1_0%,#FFFFFF_52%,#EAF6FB_100%)] p-5 shadow-soft ring-1 ring-white lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-8">
        <div>
          <p className="eyebrow">Sobre nosotros</p>
          <h1 className="brand-title mt-3 text-5xl sm:text-6xl">17 años acompañando a nuestros clientes</h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-warm">
            Somos una regalería familiar de Santa Elena, cercana, confiable y completa. Elegimos productos lindos, útiles y especiales para que cada cliente encuentre un detalle con sentido.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/productos"><Button>Ver productos</Button></Link>
            <Link to="/contacto"><Button variant="secondary">Contacto</Button></Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-[#FE72A9]/18">
          <img src="/banner.png" alt="Xeneize Regalería" className="aspect-[4/3] h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {values.map(({ title, text, icon: Icon }) => (
          <article key={title} className="rounded-[1.35rem] border border-[#FE72A9]/16 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#FDE7F1] text-[#FC2DAF]">
              <Icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-lg font-bold text-[#18121D]">{title}</h2>
            <p className="mt-2 text-sm font-medium leading-6 text-warm">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
