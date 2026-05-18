import { ArrowRight, Gift, PackageCheck, Ribbon, Sparkles, Store, Tags, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { categoryTiles } from "../data/categories";
import { products } from "../data/products";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";
import { useState } from "react";

export function Home() {
  const [toast, setToast] = useState("");
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };
  const featured = products.filter((product) => product.featured).slice(0, 8);
  const offers = products.filter((product) => product.oldPrice).slice(0, 4);

  return (
    <>
      <section className="bg-white pt-4">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-lg bg-cream shadow-editorial ring-1 ring-black/5">
            <picture>
              <img
                src="/banner-xeneize.png"
                alt="Encontrá el regalo perfecto en Xeneize Regaleria"
                className="h-[390px] w-full object-cover object-left sm:h-[500px] lg:h-[650px]"
              />
            </picture>
            <Link
              to="/productos"
              className="absolute bottom-6 left-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-black sm:bottom-10 sm:left-10"
            >
              Ver productos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-3 rounded-lg bg-porcelain p-3 shadow-sm ring-1 ring-black/5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Envios a todo el pais", Truck],
            ["Retiro en local", Store],
            ["Atencion personalizada", Sparkles],
            ["Miles de productos", PackageCheck]
          ].map(([label, Icon]) => (
            <div key={label} className="flex items-center gap-3 rounded-md bg-cream/70 p-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm"><Icon className="h-5 w-5" /></span>
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg bg-ink p-7 text-white shadow-soft sm:p-9">
            <p className="eyebrow text-blush-300">Identidad Xeneize</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Una marca para encontrar cosas lindas, no solo productos.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72">
              Regalos, deco, libreria, bazar y accesorios conviven con una estetica limpia:
              fondos claros, tonos calidos, detalles salvia y una experiencia pensada para mirar, elegir y sorprender.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Detalles que hacen feliz", "Regalos faciles para resolver en pocos clicks."],
              ["Para regalar o regalarte", "Productos elegidos con criterio estetico y funcional."],
              ["Un lugar lleno de ideas", "Categorias ordenadas para inspirar compras lindas."],
              ["Packaging con encanto", "Bolsitas kraft, stickers, tarjetas y cintas suaves."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg bg-porcelain p-6 shadow-sm ring-1 ring-black/5">
                <span className="mb-5 block h-1.5 w-12 rounded-full bg-nude" />
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-warm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Categorias visuales</p>
            <h2 className="section-title">Comprá por categoría</h2>
            <p className="muted mt-2">Cada rubro tiene su propio clima visual para que todo se vea ordenado.</p>
          </div>
          <Link to="/productos" className="hidden text-sm font-semibold text-blush-500 sm:block">Ver todo</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTiles.map((tile) => (
            <article key={tile.title} className="group relative min-h-[300px] overflow-hidden rounded-lg bg-ink shadow-sm ring-1 ring-black/5">
              <img src={tile.image} alt={tile.title} className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-45" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent transition group-hover:from-ink/95 group-hover:via-ink/60" />
              <span className={`absolute left-5 top-5 h-2 w-16 rounded-full ${tile.accent}`} />
              <div className="absolute inset-x-5 bottom-5 text-white transition duration-300 group-hover:bottom-7">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-white/65">Xeneize seleccion</p>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif text-3xl font-semibold">{tile.title}</h3>
                  <Link to={tile.to} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink transition hover:bg-blush-100" aria-label={`Ver ${tile.title}`}>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">{tile.mood}</p>
                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {tile.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to={`${tile.to}&subcategoria=${encodeURIComponent(subcategory)}`}
                        className="rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur transition hover:bg-blush-100"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProductSection title="Productos mas vendidos" products={featured} onToast={showToast} />

      <section className="container-page py-12">
        <div className="mb-6">
          <p className="eyebrow">Promos uniformes</p>
          <h2 className="section-title">Ideas listas para comprar</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["10% OFF en efectivo", "En productos seleccionados", Tags, "bg-blush-100"],
            ["Combos regalo listos", "Para resolver detalles en minutos", Gift, "bg-sage/20"],
            ["Packaging con encanto", "Sticker, tarjeta y bolsita kraft", Ribbon, "bg-sand/25"]
          ].map(([title, text, Icon, tone]) => (
            <Link key={title} to="/productos" className={`rounded-lg ${tone} p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-soft`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-ink/50">Xeneize promo</p>
                  <h3 className="mt-4 font-serif text-3xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-warm">{text}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ink shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">Ver seleccion <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-porcelain py-14">
        <div className="container-page grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-cream shadow-soft ring-1 ring-black/5">
            <img src="/banner-xeneize.png" alt="Packaging Xeneize" className="absolute inset-0 h-full w-full object-cover object-right" />
          </div>
          <div>
            <p className="eyebrow">Experiencia de regalo</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Que comprar en Xeneize se sienta especial desde el primer vistazo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-warm">
              La identidad se apoya en fotos con luz natural, productos ordenados, fondos claros,
              plantas, kraft, telas suaves y acentos nude o salvia. Todo comunica una tienda cercana,
              limpia y con criterio.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Bolsitas kraft", "Stickers redondos", "Tarjeta de gracias", "Cintitas nude"].map((item) => (
                <div key={item} className="rounded-md bg-white px-4 py-3 text-sm font-semibold shadow-sm ring-1 ring-black/5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductSection title="Ofertas destacadas" products={offers} onToast={showToast} />
      <ProductSection title="Novedades" products={products.slice(-8).reverse()} onToast={showToast} />
      <Toast message={toast} />
    </>
  );
}

function ProductSection({ title, products: items, onToast }) {
  return (
    <section className="container-page py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Xeneize tienda</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <Link to="/productos" className="text-sm font-semibold text-blush-500">Ver productos</Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => <ProductCard key={product.id} product={product} onToast={onToast} />)}
      </div>
    </section>
  );
}
