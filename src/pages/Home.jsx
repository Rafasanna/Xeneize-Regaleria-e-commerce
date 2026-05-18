import { ArrowRight, Gift, PackageCheck, Percent, ShoppingBag, Sparkles, Store, Truck, Zap } from "lucide-react";
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
      <section className="relative overflow-hidden bg-blush-100">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-steel lg:block" />
        <div className="container-page relative grid min-h-[560px] items-center gap-8 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
          <div className="max-w-2xl">
            <div className="mb-7 flex flex-wrap gap-2">
              {["REGALOS", "LIBRERIA", "MARROQUINERIA"].map((item) => (
                <span key={item} className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-black tracking-wide text-ink ring-1 ring-black/10">
                  {item}
                </span>
              ))}
            </div>
            <p className="eyebrow text-sage">Regaleria & bazar</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Encontrá el regalo perfecto
            </h1>
            <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-warm sm:text-lg">
              Regalería, bazar, librería, tecnología, moda y mucho más.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/productos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(47,36,31,0.16)] transition hover:bg-sage">
                Comprar ahora
                <ShoppingBag className="h-4 w-4" />
              </Link>
              <Link to="/ofertas" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-ink ring-1 ring-black/10 transition hover:bg-blush-200">
                Ver ofertas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-3 text-sm font-bold sm:grid-cols-3">
              {["Retiro en local", "Envios a todo el pais", "Atencion por WhatsApp"].map((item) => (
                <span key={item} className="rounded-md bg-white/60 px-4 py-3 ring-1 ring-black/10">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-lg bg-white/55 p-4 shadow-editorial ring-1 ring-black/10 sm:p-5">
            <div className="grid h-full grid-cols-[0.95fr_1.05fr] gap-4">
              <Link to={`/producto/${products[6].id}`} className="group relative overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-black/10">
                <img src={products[6].image} alt={products[6].name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-ink">MARROQUINERIA</span>
              </Link>
              <div className="grid gap-4">
                {[products[2], products[15], products[19]].map((product) => (
                  <Link key={product.id} to={`/producto/${product.id}`} className="group grid grid-cols-[112px_1fr] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/10">
                    <img src={product.image} alt={product.name} className="h-full min-h-32 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="flex flex-col justify-center p-4">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-sage">{product.category}</p>
                      <h2 className="mt-1 text-sm font-black leading-tight">{product.name}</h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/94 p-4 shadow-soft ring-1 ring-black/10 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sage">Promo activa</p>
                  <h2 className="mt-1 text-2xl font-black tracking-tight">10% OFF en efectivo</h2>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blush-200 text-ink">
                  <Percent className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Envios a todo el pais", Truck],
            ["Retiro en local", Store],
            ["Atencion personalizada", Sparkles],
            ["Miles de productos", PackageCheck]
          ].map(([label, Icon]) => (
            <div key={label} className="flex items-center gap-3 rounded-md bg-steel p-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-nude shadow-sm"><Icon className="h-5 w-5" /></span>
              <span className="text-sm font-black">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["OFERTAS", "10% OFF en efectivo", "En productos seleccionados", Percent, "bg-blush-200 text-ink"],
            ["NUEVOS INGRESOS", "Llegó lo último", "Regalos, bazar, moda y tecnología", Zap, "bg-sage text-white"],
            ["COMBOS", "Listos para regalar", "Ideas resueltas para comprar rápido", Gift, "bg-ink text-white"]
          ].map(([badge, title, text, Icon, tone]) => (
            <Link key={title} to="/productos" className="group overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-black tracking-wide ${tone}`}>{badge}</span>
                  <h2 className="mt-5 text-3xl font-black tracking-tight">{title}</h2>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">{text}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-steel text-ink transition group-hover:bg-sage group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-nude">Ver seleccion <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Categorias destacadas</p>
            <h2 className="section-title">Comprá por categoría</h2>
            <p className="muted mt-2">Rubros claros, visuales y fáciles de explorar.</p>
          </div>
          <Link to="/productos" className="hidden text-sm font-black text-nude sm:block">Ver todo</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTiles.map((tile) => (
            <article key={tile.title} className="group relative min-h-[310px] overflow-hidden rounded-lg bg-ink shadow-sm ring-1 ring-black/10">
              <img src={tile.image} alt={tile.title} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-55" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent transition group-hover:from-ink/95 group-hover:via-ink/65" />
              <span className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-xs font-black tracking-wide ${tile.accent}`}>{tile.badge}</span>
              <div className="absolute inset-x-5 bottom-5 text-white transition duration-300 group-hover:bottom-7">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-white/65">Xeneize seleccion</p>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-3xl font-black tracking-tight">{tile.title}</h3>
                  <Link to={tile.to} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink transition hover:bg-blush-200" aria-label={`Ver ${tile.title}`}>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
                <p className="mt-2 text-sm font-medium leading-6 text-white/75">{tile.mood}</p>
                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {tile.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to={`${tile.to}&subcategoria=${encodeURIComponent(subcategory)}`}
                        className="rounded-full bg-white/92 px-3 py-1.5 text-xs font-bold text-ink backdrop-blur transition hover:bg-blush-200"
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

      <section className="bg-ink py-14 text-white">
        <div className="container-page grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-blush-200">Experiencia de compra</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Una tienda moderna para resolver regalos sin vueltas.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/70">
              Categorias ordenadas, promos claras, productos faciles de comparar y una identidad mas fuerte alrededor del logo Xeneize sin caer en estetica deportiva.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Regaleria", "Bazar", "Libreria", "Tecnologia", "Moda", "Ofertas"].map((item) => (
              <Link key={item} to="/productos" className="rounded-md border border-white/10 bg-white/8 px-5 py-4 text-sm font-black transition hover:border-nude hover:bg-white hover:text-ink">
                {item}
              </Link>
            ))}
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
        <Link to="/productos" className="text-sm font-black text-nude">Ver productos</Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => <ProductCard key={product.id} product={product} onToast={onToast} />)}
      </div>
    </section>
  );
}
