import {
  ArrowRight,
  BadgePercent,
  BookOpen,
  BriefcaseBusiness,
  Cake,
  Coffee,
  CreditCard,
  Gem,
  Gift,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  MessageCircle,
  Package,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";
import { buildWhatsAppUrl } from "../lib/utils";

const categoryItems = [
  { title: "Regalos personalizados", to: "/productos?q=personalizado", icon: Sparkles, tone: "bg-blush-100 text-coral" },
  { title: "Tazas", to: "/productos?q=taza", icon: Coffee, tone: "bg-gold text-ink" },
  { title: "Boxes de regalo", to: "/productos?q=box", icon: Package, tone: "bg-blush-200 text-ink" },
  { title: "Papeleria", to: "/productos?categoria=Librer%C3%ADa", icon: BookOpen, tone: "bg-steel text-coral" },
  { title: "Deco", to: "/productos?categoria=Bazar%20y%20hogar&subcategoria=Deco", icon: HomeIcon, tone: "bg-blush-100 text-ink" },
  { title: "Accesorios", to: "/productos?q=accesorios", icon: Gem, tone: "bg-blush-200 text-ink" },
  { title: "Cumpleanos", to: "/productos?q=cumpleanos", icon: Cake, tone: "bg-steel text-ink" },
  { title: "Amor y amistad", to: "/productos?q=amor", icon: Heart, tone: "bg-coral text-white" },
  { title: "Ofertas", to: "/ofertas", icon: BadgePercent, tone: "bg-coral text-white" }
];

const benefitItems = [
  { title: "Envios a todo el pais", text: "Compras preparadas para despachar con seguimiento.", icon: Truck },
  { title: "Pagos seguros", text: "Opciones simples para comprar con confianza.", icon: ShieldCheck },
  { title: "Regalos personalizados", text: "Te ayudamos a elegir detalles con sentido.", icon: Gift },
  { title: "Atencion rapida por WhatsApp", text: "Consultas directas antes o despues de comprar.", icon: MessageCircle },
  { title: "Promociones especiales", text: "Ofertas y oportunidades destacadas en tienda.", icon: BadgePercent }
];

const collectionItems = [
  { title: "Personalizados", text: "Detalles pensados para cada ocasion.", icon: Sparkles, to: "/productos?q=personalizado" },
  { title: "Cumpleanos", text: "Ideas listas para sorprender.", icon: Cake, to: "/productos?q=cumpleanos" },
  { title: "Amor y amistad", text: "Regalos para fechas especiales.", icon: HeartHandshake, to: "/productos?q=amor" },
  { title: "Regalos empresariales", text: "Opciones para equipos y clientes.", icon: BriefcaseBusiness, to: "/productos?q=regalos" },
  { title: "Deco", text: "Objetos lindos para el hogar.", icon: HomeIcon, to: "/productos?categoria=Bazar%20y%20hogar&subcategoria=Deco" },
  { title: "Papeleria creativa", text: "Agendas, cuadernos y organizacion.", icon: Palette, to: "/productos?categoria=Librer%C3%ADa" }
];

export function Home() {
  const [toast, setToast] = useState("");
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  const featured = useMemo(() => products.filter((product) => product.featured).slice(0, 8), []);

  return (
    <>
      <section className="bg-gradient-to-b from-blush-50 to-cream">
        <div className="container-page py-5 sm:py-7">
          <div className="overflow-hidden rounded-lg bg-blush-50 shadow-editorial ring-1 ring-coral/15">
            <div className="relative aspect-[16/7] bg-blush-100 sm:aspect-[2172/724]">
              <img
                src="/banner.png"
                alt="Xeneize Regaleria - tienda online de regalos y detalles"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
            </div>
            <div className="grid gap-5 bg-white px-4 py-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
              <div>
                <p className="eyebrow">Regalos y detalles online</p>
                <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  Una tienda clara para encontrar el regalo ideal
                </h1>
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-warm sm:text-base">
                  Productos seleccionados, categorias faciles de recorrer y atencion personalizada para ayudarte a comprar mejor.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/productos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(121,85,72,0.2)] transition hover:-translate-y-0.5 hover:bg-sage">
                  Ir a la tienda
                  <ShoppingBag className="h-4 w-4" />
                </Link>
                <Link to="/ofertas" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-coral ring-1 ring-coral/25 transition hover:-translate-y-0.5 hover:bg-blush-100">
                  Ver ofertas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <SectionHeader
          eyebrow="Compra por categoria"
          title="Categorias principales"
          text="Accesos rapidos para que el usuario encuentre regalos, productos personalizados y ofertas sin recorrer toda la tienda."
          action={{ label: "Ver tienda completa", to: "/productos" }}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map(({ title, to, icon: Icon, tone }) => (
            <Link key={title} to={to} className="group flex min-h-28 items-center gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-coral/10 transition hover:-translate-y-1 hover:shadow-soft hover:ring-coral/25">
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${tone}`}>
                <Icon className="h-6 w-6" />
              </span>
              <span className="flex-1 text-base font-black leading-tight text-ink">{title}</span>
              <ArrowRight className="h-4 w-4 text-coral transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <ProductSection
        eyebrow="Seleccion destacada"
        title="Productos destacados"
        text="Los productos mas importantes aparecen temprano para orientar la compra y mostrar rapidamente que vende la tienda."
        products={featured}
        onToast={showToast}
      />

      <section className="bg-white py-12">
        <div className="container-page">
          <SectionHeader
            eyebrow="Beneficios de compra"
            title="Compra simple, segura y acompanada"
            text="Informacion clave para reducir dudas antes de agregar productos al carrito."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {benefitItems.map(({ title, text, icon: Icon }, index) => (
              <article key={title} className="rounded-lg bg-cream p-5 shadow-sm ring-1 ring-coral/10">
                <span className={`grid h-12 w-12 place-items-center rounded-full ${index % 2 ? "bg-blush-100 text-coral" : "bg-gold text-ink"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-black leading-tight text-ink">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-warm">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeader
          eyebrow="Colecciones"
          title="Ideas para elegir mas rapido"
          text="Agrupaciones comerciales para mostrar la tienda como una propuesta mas ordenada y facil de navegar."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collectionItems.map(({ title, text, icon: Icon, to }) => (
            <Link key={title} to={to} className="group rounded-lg bg-white p-6 shadow-sm ring-1 ring-coral/10 transition hover:-translate-y-1 hover:shadow-soft hover:ring-coral/25">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-blush-100 text-coral">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowRight className="h-5 w-5 text-coral transition group-hover:translate-x-1" />
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-warm">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-4 pt-4">
        <div className="overflow-hidden rounded-lg bg-coral text-white shadow-editorial">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Atencion personalizada</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Buscas un regalo especial?
              </h2>
              <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-white/72">
                Contanos que queres regalar y te ayudamos a armar una opcion personalizada.
              </p>
            </div>
            <a href={buildWhatsAppUrl("Hola, busco un regalo especial y quiero armar una opcion personalizada")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-black text-white shadow-[0_12px_26px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]">
              Consultar por WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Toast message={toast} />
    </>
  );
}

function SectionHeader({ eyebrow, title, text, action }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-2">{title}</h2>
        {text ? <p className="muted mt-2 max-w-2xl">{text}</p> : null}
      </div>
      {action ? (
        <Link to={action.to} className="inline-flex items-center gap-2 text-sm font-black text-coral">
          {action.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

function ProductSection({ eyebrow, title, text, products: items, onToast }) {
  return (
    <section className="container-page py-10">
      <SectionHeader eyebrow={eyebrow} title={title} text={text} action={{ label: "Ver todos", to: "/productos" }} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => <ProductCard key={product.id} product={product} onToast={onToast} />)}
      </div>
    </section>
  );
}
