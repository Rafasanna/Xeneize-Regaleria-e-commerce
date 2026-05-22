import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { InstagramLogo } from "../components/ui/InstagramLogo";

const integrations = [
  "Google Analytics: placeholder listo para agregar measurement id.",
  "Meta Pixel: placeholder listo para agregar pixel id.",
  "Ads: catálogo y rutas preparadas para campañas por categoría y producto."
];

const instagramUrl = "https://www.instagram.com/xeneizeregaleria/";

export function Contact() {
  return (
    <section className="container-page py-10">
      <div className="mb-8">
        <p className="eyebrow">Contacto y redes</p>
        <h1 className="section-title mt-2">Estamos para ayudarte a elegir</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-[#FE72A9]/16">
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={instagramUrl} className="rounded-[1.2rem] border border-[#FE72A9]/16 p-5 transition hover:bg-blush-50">
              <InstagramLogo className="h-6 w-6 text-[#FC2DAF]" />
              <h2 className="mt-4 font-bold">Instagram</h2>
              <p className="mt-1 text-sm text-warm">Seguinos para ver novedades, regalos destacados y promociones.</p>
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="rounded-[1.2rem] border border-[#FE72A9]/16 p-5 transition hover:bg-blush-50">
              <Mail className="h-6 w-6 text-[#28A4DC]" />
              <h2 className="mt-4 font-bold">Email</h2>
              <p className="mt-1 text-sm text-warm">Contacto comercial y consultas generales.</p>
            </a>
            <div className="rounded-[1.2rem] border border-[#FE72A9]/16 p-5">
              <MapPin className="h-6 w-6 text-[#FC2DAF]" />
              <h2 className="mt-4 font-bold">Local</h2>
              <p className="mt-1 text-sm text-warm">Supremos Entrerriano 572, Santa Elena, Entre Rios.</p>
            </div>
          </div>
          <Link to="/productos" className="mt-6 inline-block"><Button>Explorar catálogo</Button></Link>
        </div>

        <aside className="rounded-[1.5rem] bg-[#FDE7F1] p-6">
          <h2 className="text-xl font-bold text-[#18121D]">Preparado para marketing</h2>
          <div className="mt-5 grid gap-3">
            {integrations.map((item) => (
              <p key={item} className="rounded-lg bg-white/70 p-3 text-sm font-semibold text-warm">{item}</p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
