import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { InstagramLogo } from "../ui/InstagramLogo";

const brandLinks = [
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/productos" },
  { label: "Categorías", to: "/categorias" },
  { label: "Ofertas", to: "/ofertas" },
  { label: "Sobre nosotros", to: "/sobre-nosotros" },
  { label: "Contacto", to: "/contacto" }
];

const helpItems = [
  { label: "Como comprar", to: "/ayuda#como-comprar" },
  { label: "Medios de pago", to: "/ayuda#medios-de-pago" },
  { label: "Envíos", to: "/ayuda#envios" },
  { label: "Cambios y devoluciones", to: "/ayuda#cambios-y-devoluciones" }
];
const instagramUrl = "https://www.instagram.com/xeneizeregaleria/";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#18121D] text-white">
      <div className="container-page grid gap-8 py-10 sm:py-14 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-10">
        <div className="space-y-4">
          <Logo compact />
          <p className="max-w-sm text-sm leading-6 text-white/78">
            Regalería, papelería, deco y detalles personalizados para resolver regalos con una experiencia simple y clara.
          </p>
          <p className="text-sm font-semibold text-white">Supremos Entrerriano 572, Santa Elena, Entre Rios</p>
          <div className="flex gap-2">
            <a href={instagramUrl} className="grid h-10 w-10 place-items-center rounded-full bg-white/12 text-white ring-1 ring-white/15 transition hover:bg-[#FC2DAF] hover:text-white" aria-label="Instagram">
              <InstagramLogo className="h-5 w-5" />
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="grid h-10 w-10 place-items-center rounded-full bg-white/12 text-white ring-1 ring-white/15 transition hover:bg-[#FE72A9] hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#FE72A9]">Xeneize Regalería</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/78">
            {brandLinks.map((item) => <Link key={item.label} to={item.to} className="font-medium transition hover:text-[#FE72A9]">{item.label}</Link>)}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#98C3D6]">Ayuda</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/78">
            {helpItems.map((item) => <Link key={item.to} to={item.to} className="font-medium transition hover:text-[#FE72A9]">{item.label}</Link>)}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#FE72A9]">Contacto</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/78">
            <a href={instagramUrl} className="inline-flex items-center gap-2 font-medium transition hover:text-[#FE72A9]">
              <InstagramLogo className="h-4 w-4" />
              Instagram
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="inline-flex items-center gap-2 font-medium transition hover:text-[#FE72A9]">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12 py-5 text-center text-xs font-medium text-white/60">
        Xeneize Regalería - 17 años acompañando a nuestros clientes
      </div>
    </footer>
  );
}
