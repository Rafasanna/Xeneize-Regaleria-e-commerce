import { Camera, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "../../lib/utils";
import { Logo } from "../ui/Logo";

const brandLinks = [
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/productos" },
  { label: "Categorías", to: "/categorias" },
  { label: "Ofertas", to: "/ofertas" },
  { label: "Sobre nosotros", to: "/sobre-nosotros" },
  { label: "Contacto", to: "/contacto" }
];

const helpItems = ["Como comprar", "Medios de pago", "Envíos", "Cambios y devoluciones"];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#6B4355] text-[#FFF9F6]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo compact />
          <p className="max-w-sm text-sm leading-6 text-[#FFF9F6]/78">
            Regalería, papelería, deco y detalles personalizados para resolver regalos con una experiencia simple y clara.
          </p>
          <p className="text-sm font-semibold text-[#FFF9F6]">Supremos Entrerriano 572, Santa Elena, Entre Rios</p>
          <div className="flex gap-2">
            <a href={buildWhatsAppUrl("Hola, quiero consultar por Xeneize Regalería")} className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF9F6]/12 text-[#FFF9F6] ring-1 ring-[#FFF9F6]/15 transition hover:bg-[#F7DCE5] hover:text-[#6B4355]" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/" className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF9F6]/12 text-[#FFF9F6] ring-1 ring-[#FFF9F6]/15 transition hover:bg-[#F7DCE5] hover:text-[#6B4355]" aria-label="Instagram">
              <Camera className="h-5 w-5" />
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF9F6]/12 text-[#FFF9F6] ring-1 ring-[#FFF9F6]/15 transition hover:bg-[#F7DCE5] hover:text-[#6B4355]" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-[#F7DCE5]">Xeneize Regalería</h3>
          <div className="mt-4 grid gap-2 text-sm text-[#FFF9F6]/78">
            {brandLinks.map((item) => <Link key={item.label} to={item.to} className="font-medium transition hover:text-[#F7DCE5]">{item.label}</Link>)}
            <a href={buildWhatsAppUrl("Hola, quiero contactar a Xeneize Regalería")} className="font-medium transition hover:text-[#F7DCE5]">Contacto</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-[#F7DCE5]">Ayuda</h3>
          <div className="mt-4 grid gap-2 text-sm text-[#FFF9F6]/78">
            {helpItems.map((item) => <span key={item} className="font-medium">{item}</span>)}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-[#F7DCE5]">Contacto</h3>
          <div className="mt-4 grid gap-2 text-sm text-[#FFF9F6]/78">
            <a href={buildWhatsAppUrl("Hola, necesito ayuda con una compra")} className="inline-flex items-center gap-2 font-medium transition hover:text-[#F7DCE5]">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="https://www.instagram.com/" className="inline-flex items-center gap-2 font-medium transition hover:text-[#F7DCE5]">
              <Camera className="h-4 w-4" />
              Instagram
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="inline-flex items-center gap-2 font-medium transition hover:text-[#F7DCE5]">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#FFF9F6]/12 py-5 text-center text-xs font-medium text-[#FFF9F6]/60">
        Xeneize Regalería - Demo ecommerce
      </div>
    </footer>
  );
}
