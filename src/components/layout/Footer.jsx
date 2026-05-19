import { Camera, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "../../lib/utils";
import { Logo } from "../ui/Logo";

const brandLinks = [
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/productos" },
  { label: "Categorias", to: "/categorias" },
  { label: "Ofertas", to: "/ofertas" }
];

const helpItems = ["Como comprar", "Medios de pago", "Envios", "Cambios y devoluciones"];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#FFEBF0] text-[#3a1427]">
      <div className="container-page grid gap-10 border-t border-pink-200 py-12 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo compact />
          <p className="max-w-sm text-sm leading-6 text-[#3a1427]/80">
            Regaleria, papeleria, deco y detalles personalizados para resolver regalos con una experiencia simple y clara.
          </p>
          <p className="text-sm font-semibold text-[#3a1427]">Supremos Entrerriano 572, Santa Elena, Entre Rios</p>
          <div className="flex gap-2">
            <a href={buildWhatsAppUrl("Hola, quiero consultar por Xeneize Regaleria")} className="grid h-10 w-10 place-items-center rounded-full bg-pink-100 text-[#3a1427] transition hover:bg-pink-200" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/" className="grid h-10 w-10 place-items-center rounded-full bg-pink-100 text-[#3a1427] transition hover:bg-pink-200" aria-label="Instagram">
              <Camera className="h-5 w-5" />
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="grid h-10 w-10 place-items-center rounded-full bg-pink-100 text-[#3a1427] transition hover:bg-pink-200" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-[#3a1427]">Xeneize Regaleria</h3>
          <div className="mt-4 grid gap-2 text-sm text-[#3a1427]/80">
            {brandLinks.map((item) => <Link key={item.label} to={item.to} className="hover:text-pink-600 font-medium">{item.label}</Link>)}
            <a href={buildWhatsAppUrl("Hola, quiero contactar a Xeneize Regaleria")} className="hover:text-pink-600 font-medium">Contacto</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-[#3a1427]">Ayuda</h3>
          <div className="mt-4 grid gap-2 text-sm text-[#3a1427]/80">
            {helpItems.map((item) => <span key={item} className="font-medium">{item}</span>)}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-[#3a1427]">Contacto</h3>
          <div className="mt-4 grid gap-2 text-sm text-[#3a1427]/80">
            <a href={buildWhatsAppUrl("Hola, necesito ayuda con una compra")} className="inline-flex items-center gap-2 hover:text-pink-600 font-medium">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="https://www.instagram.com/" className="inline-flex items-center gap-2 hover:text-pink-600 font-medium">
              <Camera className="h-4 w-4" />
              Instagram
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="inline-flex items-center gap-2 hover:text-pink-600 font-medium">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-pink-200 py-5 text-center text-xs text-[#3a1427]/60 font-medium">
        Xeneize Regaleria - Demo ecommerce
      </div>
    </footer>
  );
}
