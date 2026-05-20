import { BookOpen, Camera, Gift, Grid3X3, Headphones, Home as HomeIcon, MessageCircle, Shirt, Sparkles, Tag } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";
import { categories, categoryTiles } from "../data/categories";
import { products } from "../data/products";
import { buildWhatsAppUrl } from "../lib/utils";

const categoryIconByName = {
  Ofertas: Tag,
  "Bazar y hogar": HomeIcon,
  "Marroquinería y moda": Shirt,
  "Belleza y Bijou": Sparkles,
  Librería: BookOpen,
  Juguetería: Gift,
  Tecnología: Headphones,
  "Todas las categorías": Grid3X3
};

const categoryPills = [
  ...categories.map((category) => ({
    label: category.name,
    to: category.path,
    icon: categoryIconByName[category.name] || Sparkles,
    subcategories: category.subcategories || []
  })),
  { label: "Todas las categorías", to: "/categorias", icon: Grid3X3, subcategories: categories.map((category) => category.name) }
];

export function Home() {
  const [toast, setToast] = useState("");
  const featured = useMemo(
    () => products
      .filter((product) => product.featured)
      .sort((a, b) => (a.featuredPriority ?? 999) - (b.featuredPriority ?? 999))
      .slice(0, 8),
    []
  );
  const offers = useMemo(() => products.filter((product) => product.oldPrice).slice(0, 4), []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#4D3A42]">
      <section className="overflow-hidden bg-[#FCECF2]">
        <div className="container-page py-4 sm:py-8 lg:py-10">
          <div className="relative grid gap-6 rounded-[1.5rem] border border-white/80 bg-[#FFF9F6] p-4 shadow-editorial sm:rounded-[2rem] sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-10">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#6B4355] shadow-sm sm:px-4 sm:text-xs">
                <Sparkles className="h-4 w-4" /> Boutique de regalos
              </span>
              <h1 className="mt-4 text-[2.45rem] font-black leading-[1.03] tracking-tight text-[#4D3A42] sm:mt-5 sm:text-5xl lg:text-6xl">
                Regalos, deco y detalles para cada momento
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#A78D95] sm:mt-5 sm:text-lg">
                Encontrá opciones lindas, prácticas y especiales para regalar o regalarte.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <Link to="/productos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6B4355] px-6 py-3 text-sm font-semibold text-[#FFF9F6] shadow-[0_14px_30px_rgba(107,67,85,0.22)] transition hover:bg-[#C97A96]">
                  <Gift className="h-4 w-4" /> Ver productos
                </Link>
                <a href={buildWhatsAppUrl("Hola, busco un regalo especial")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/75 px-6 py-3 text-sm font-semibold text-[#4D3A42] ring-1 ring-[#F2E4E8] transition hover:bg-white hover:text-[#C97A96]">
                  <MessageCircle className="h-4 w-4" /> Consultar regalo
                </a>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden rounded-[1.35rem] bg-white shadow-soft ring-1 ring-white sm:min-h-[320px] sm:rounded-[1.75rem] lg:min-h-[430px]">
              <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A78D95] sm:inset-x-6 sm:top-6 sm:text-xs">
                <span>Detalles elegidos</span>
                <span>Santa Elena</span>
              </div>
              <img
                src="/xeneizeregaleria-hero.jpeg"
                alt="Xeneize Regalería"
                className="absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-[45%] object-contain sm:h-[145%] sm:w-[145%] sm:-translate-y-[47%] lg:h-[154%] lg:w-[154%] lg:-translate-y-[47%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-5 sm:py-7">
        <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-4 sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0">
          {categoryPills.map(({ label, to, icon: Icon, subcategories }) => (
            <div key={label} className="group relative shrink-0 snap-start">
              <Link to={to} className="inline-flex h-11 max-w-[76vw] items-center gap-2 rounded-full border border-[#F2E4E8] bg-white px-3.5 text-[13px] font-semibold text-[#4D3A42] shadow-sm transition hover:-translate-y-0.5 hover:border-[#C97A96]/30 hover:text-[#C97A96] hover:shadow-soft sm:h-12 sm:max-w-none sm:px-4 sm:text-sm">
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate whitespace-nowrap">{label}</span>
              </Link>
              {subcategories.length ? (
                <div className="invisible absolute left-0 top-full z-30 mt-2 hidden min-w-56 rounded-[1.25rem] border border-[#F2E4E8] bg-[#FFF9F6] p-2 opacity-0 shadow-editorial transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 sm:block">
                  {subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={label === "Todas las categorías" ? `/productos?categoria=${encodeURIComponent(subcategory)}` : `/productos?categoria=${encodeURIComponent(label)}&subcategoria=${encodeURIComponent(subcategory)}`}
                      className="block rounded-full px-4 py-2 text-sm font-medium text-[#A78D95] transition hover:bg-[#FCECF2] hover:text-[#6B4355]"
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-7 sm:py-8">
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">
          <div>
            <p className="eyebrow">Elegidos para regalar</p>
            <h2 className="section-title mt-1">Productos destacados</h2>
          </div>
          <Link to="/productos" className="hidden rounded-full border border-[#F2E4E8] bg-white px-4 py-2 text-sm font-semibold text-[#6B4355] transition hover:bg-[#FCECF2] hover:text-[#C97A96] sm:inline-flex">Ver todos</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onToast={showToast} />
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Categorias</p>
            <h2 className="section-title mt-1">Inspiracion por rubro</h2>
          </div>
          <Link to="/categorias" className="hidden rounded-full border border-[#F2E4E8] bg-white px-4 py-2 text-sm font-semibold text-[#6B4355] transition hover:bg-[#FCECF2] hover:text-[#C97A96] sm:inline-flex">Todas</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTiles.slice(0, 6).map((category) => (
            <Link key={category.title} to={category.to} className="group overflow-hidden rounded-[1.5rem] border border-[#F2E4E8] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
              <div className="aspect-[16/10] overflow-hidden bg-[#F7DCE5]">
                <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-[#DCCBE8]/60 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#6B4355]">{category.badge}</span>
                <h3 className="mt-3 text-lg font-black text-[#4D3A42]">{category.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#A78D95]">{category.mood}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <div className="rounded-[2rem] bg-[#F7DCE5] px-5 py-7 shadow-soft sm:px-7 lg:px-9">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Promociones</p>
              <h2 className="section-title mt-1">Ofertas con encanto</h2>
            </div>
            <Link to="/ofertas" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6B4355] shadow-sm transition hover:bg-[#F8D4C4] hover:text-[#4D3A42]">
              <Tag className="h-4 w-4" /> Ver ofertas
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-4">
            {offers.map((product) => (
              <ProductCard key={product.id} product={product} onToast={showToast} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-3 sm:grid-cols-3">
          <a href={buildWhatsAppUrl("Hola, busco un regalo especial")} className="flex items-center gap-3 rounded-[1.25rem] border border-[#F2E4E8] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:text-[#C97A96] hover:shadow-soft">
            <MessageCircle className="h-5 w-5 text-[#6B4355]" />
            <span className="text-sm font-bold">WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/" className="flex items-center gap-3 rounded-[1.25rem] border border-[#F2E4E8] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:text-[#C97A96] hover:shadow-soft">
            <Camera className="h-5 w-5 text-[#6B4355]" />
            <span className="text-sm font-bold">Instagram</span>
          </a>
          <Link to="/contacto" className="flex items-center gap-3 rounded-[1.25rem] border border-[#F2E4E8] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:text-[#C97A96] hover:shadow-soft">
            <Sparkles className="h-5 w-5 text-[#6B4355]" />
            <span className="text-sm font-bold">Contacto y redes</span>
          </Link>
        </div>
      </section>

      <a
        href={buildWhatsAppUrl("Hola, busco un regalo especial")}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FCECF2] text-[#6B4355] shadow-[0_16px_34px_rgba(107,67,85,0.18)] ring-1 ring-white/80 transition-transform hover:scale-105 hover:bg-[#F7DCE5] hover:text-[#C97A96] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7 stroke-[1.6] sm:h-8 sm:w-8" />
      </a>

      <Toast message={toast} />
    </div>
  );
}
