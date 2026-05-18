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
    <footer className="mt-16 bg-ink text-white">
      <div className="container-page grid gap-10 border-t border-blush-200/10 py-12 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo variant="white" />
          <p className="max-w-sm text-sm leading-6 text-white/68">
            Regaleria, papeleria, deco y detalles personalizados para resolver regalos con una experiencia simple y clara.
          </p>
          <p className="text-sm font-semibold text-white/86">Supremos Entrerriano 572, Santa Elena, Entre Rios</p>
          <div className="flex gap-2">
            <a href={buildWhatsAppUrl("Hola, quiero consultar por Xeneize Regaleria")} className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white transition hover:bg-[#1ebe5d]" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-coral hover:text-white" aria-label="Instagram">
              <Camera className="h-5 w-5" />
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-coral hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-white/90">Xeneize Regaleria</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            {brandLinks.map((item) => <Link key={item.label} to={item.to} className="hover:text-gold">{item.label}</Link>)}
            <a href={buildWhatsAppUrl("Hola, quiero contactar a Xeneize Regaleria")} className="hover:text-gold">Contacto</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-white/90">Ayuda</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            {helpItems.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-white/90">Contacto</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            <a href={buildWhatsAppUrl("Hola, necesito ayuda con una compra")} className="inline-flex items-center gap-2 hover:text-[#25D366]">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="https://www.instagram.com/" className="inline-flex items-center gap-2 hover:text-gold">
              <Camera className="h-4 w-4" />
              Instagram
            </a>
            <a href="mailto:contacto@xeneizeregaleria.com" className="inline-flex items-center gap-2 hover:text-gold">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-blush-200/10 py-5 text-center text-xs text-white/45">
        Xeneize Regaleria - Demo ecommerce
      </div>
    </footer>
  );
}
