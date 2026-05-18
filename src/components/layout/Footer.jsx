import { Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import { buildWhatsAppUrl } from "../../lib/utils";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="mt-16 bg-ink text-white">
      <div className="container-page grid gap-10 border-t border-white/10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-white/68">
            Regaleria, libreria, bazar, accesorios y tecnologia con una estetica limpia, calida y lista para regalar.
          </p>
          <p className="text-sm font-semibold">Supremos Entrerriano 572, Santa Elena, Entre Rios</p>
          <div className="flex gap-2">
            <a href="https://www.instagram.com/" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20" aria-label="Instagram">
              <Camera className="h-5 w-5" />
            </a>
            <a href={buildWhatsAppUrl("Hola, quiero consultar por Xeneize Regaleria")} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">Categorias</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            {categories.slice(1).map((category) => <Link key={category.name} to={category.path} className="hover:text-blush-300">{category.name}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">Compra</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            <span>Medios de pago</span>
            <span>Envios a todo el pais</span>
            <span>Retiro en local</span>
            <span>Compra protegida</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">Atencion</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/62">
            <Link to="/login" className="hover:text-blush-300">Mi cuenta</Link>
            <Link to="/favoritos" className="hover:text-blush-300">Favoritos</Link>
            <Link to="/carrito" className="hover:text-blush-300">Carrito</Link>
            <a href={buildWhatsAppUrl("Hola, necesito ayuda con una compra")} className="hover:text-blush-300">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        Xeneize Regaleria - Demo ecommerce
      </div>
    </footer>
  );
}
