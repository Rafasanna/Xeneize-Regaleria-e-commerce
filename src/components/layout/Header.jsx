import { ChevronDown, Gift, Heart, Menu, MessageCircle, Search, ShieldCheck, ShoppingBag, Truck, User, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { buildWhatsAppUrl } from "../../lib/utils";
import { useShopStore } from "../../store/useShopStore";

const topBenefits = [
  { label: "Envios a todo el pais", icon: Truck },
  { label: "Pagos seguros", icon: ShieldCheck },
  { label: "Regalos personalizados", icon: Gift },
  { label: "Atencion por WhatsApp", icon: MessageCircle }
];

const mainLinks = [
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/productos" },
  { label: "Ofertas", to: "/ofertas" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const cart = useShopStore((state) => state.cart);
  const favorites = useShopStore((state) => state.favorites);
  const user = useShopStore((state) => state.user);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/productos${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    setMobileOpen(false);
  };

  const closeMobile = () => setMobileOpen(false);
  const buildSubcategoryPath = (category, subcategory) => `${category.path}&subcategoria=${encodeURIComponent(subcategory)}`;

  return (
    <header className="sticky top-0 z-40 border-b border-coral/15 bg-blush-100/95 text-ink backdrop-blur">
      <div className="bg-coral text-white">
        <div className="container-page grid min-h-10 grid-cols-2 gap-2 py-2 text-xs font-bold sm:grid-cols-4">
          {topBenefits.map(({ label, icon: Icon }) => (
            <span key={label} className="flex items-center justify-center gap-2 text-center text-white/90">
              <Icon className="h-4 w-4 shrink-0 text-gold" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="container-page flex min-h-16 items-center gap-4 py-2">
        <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-coral shadow-sm ring-1 ring-coral/15 lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-coral/15" aria-label="Xeneize Regaleria">
          <img src="/logoxeneize-header.png" alt="Xeneize Regaleria" className="h-full w-full scale-125 object-cover" />
        </Link>

        <nav className="hidden min-w-0 flex-1 flex-nowrap items-center justify-start gap-0.5 lg:flex">
          {categories.map((category) => (
            <div key={category.name} className="relative" onMouseEnter={() => setActiveCategory(category.name)} onMouseLeave={() => setActiveCategory(null)}>
              <Link
                to={category.path}
                className="flex whitespace-nowrap items-center gap-1 rounded-full px-2 py-2 text-[11px] font-black text-ink transition hover:bg-white hover:text-coral xl:px-3 xl:text-xs 2xl:px-4 2xl:text-sm"
              >
                {category.name}
                {category.subcategories.length ? <ChevronDown className={`h-4 w-4 transition ${activeCategory === category.name ? "rotate-180" : ""}`} /> : null}
              </Link>
              {activeCategory === category.name && category.subcategories.length ? (
                <div className="absolute left-0 top-full w-64 pt-3">
                  <div className="rounded-lg bg-white p-2 shadow-soft ring-1 ring-coral/15">
                    <Link to={category.path} className="block rounded-md px-3 py-2 text-sm font-black text-coral transition hover:bg-steel">
                      Ver todo
                    </Link>
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to={buildSubcategoryPath(category, subcategory)}
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-warm transition hover:bg-steel hover:text-coral"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <form onSubmit={submitSearch} className="hidden">
          <Search className="h-5 w-5 text-black/65" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="¿Qué estás buscando?"
            className="h-12 flex-1 bg-transparent px-3 text-sm text-black placeholder:text-black/60 outline-none"
          />
        </form>

        <div className="flex items-center gap-2">
          <Link to={user ? "/mi-cuenta" : "/login"} className="hidden h-11 items-center gap-2 rounded-full px-3 text-sm font-bold text-ink transition hover:bg-white hover:text-coral sm:flex" aria-label="Mi cuenta">
            <User className="h-5 w-5" />
            <span className="hidden xl:inline">{user ? user.name.split(" ")[0] : "Ingresar"}</span>
          </Link>
          <Link to="/favoritos" className="relative grid h-11 w-11 place-items-center rounded-full text-ink transition hover:bg-white hover:text-coral" aria-label="Favoritos">
            <Heart className="h-5 w-5" />
            {favorites.length ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-xs font-black text-white">{favorites.length}</span> : null}
          </Link>
          <Link to="/carrito" className="relative hidden h-11 w-11 place-items-center rounded-full text-ink transition hover:bg-white hover:text-coral lg:grid" aria-label="Carrito">
            <ShoppingBag className="h-5 w-5" />
            {cartCount ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-xs font-black text-white">{cartCount}</span> : null}
          </Link>
          <Link to="/carrito" className="relative grid h-11 w-11 place-items-center rounded-full bg-coral text-white shadow-[0_10px_22px_rgba(121,85,72,0.2)] transition hover:bg-sage lg:hidden" aria-label="Carrito">
            <ShoppingBag className="h-5 w-5" />
            {cartCount ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-black text-ink">{cartCount}</span> : null}
          </Link>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-ink/45 lg:hidden">
          <aside className="h-full w-[88vw] max-w-sm overflow-y-auto bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={closeMobile} className="text-base font-black uppercase tracking-wide text-ink">
                Xeneize Regaleria
              </Link>
              <button onClick={closeMobile} className="grid h-10 w-10 place-items-center rounded-full bg-steel text-coral" aria-label="Cerrar menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitSearch} className="mt-5 flex items-center rounded-full bg-blush-50 px-4 ring-1 ring-black/15 focus-within:ring-2 focus-within:ring-black/30">
              <Search className="h-5 w-5 text-black/65" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="¿Qué estás buscando?" className="h-12 flex-1 bg-transparent px-3 text-sm text-black placeholder:text-black/60 outline-none" />
            </form>

            <div className="mt-6 grid gap-2">
              {mainLinks.map((item) => (
                <Link key={item.label} to={item.to} onClick={closeMobile} className="rounded-lg border border-coral/15 px-4 py-3 text-sm font-black text-ink transition hover:bg-steel hover:text-coral">
                  {item.label}
                </Link>
              ))}

              <button onClick={() => setExpanded((value) => !value)} className="flex items-center justify-between rounded-lg border border-coral/15 px-4 py-3 text-left text-sm font-black text-ink transition hover:bg-steel hover:text-coral">
                Categorias
                <ChevronDown className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`} />
              </button>
              {expanded ? (
                <div className="rounded-lg border border-coral/15 bg-blush-50 p-2">
                  <Link onClick={closeMobile} to="/categorias" className="block rounded-md px-3 py-2 text-sm font-black text-ink transition hover:bg-steel hover:text-coral">Ver todas</Link>
                  {categories.filter((category) => category.name !== "Ofertas").map((category) => (
                    <Link key={category.name} onClick={closeMobile} to={category.path} className="block rounded-md px-3 py-2 text-sm font-medium text-ink transition hover:bg-steel hover:text-coral">
                      {category.name}
                    </Link>
                  ))}
                </div>
              ) : null}

              <a href={buildWhatsAppUrl("Hola, quiero consultar por Xeneize Regaleria")} onClick={closeMobile} className="rounded-lg border border-coral/15 px-4 py-3 text-sm font-black text-ink transition hover:bg-steel hover:text-coral">
                Contacto
              </a>
              <Link to="/carrito" onClick={closeMobile} className="flex items-center justify-between rounded-lg bg-coral px-4 py-3 text-sm font-black text-white transition hover:bg-sage">
                Carrito
                {cartCount ? <span className="grid h-6 min-w-6 place-items-center rounded-full bg-gold px-2 text-xs text-ink">{cartCount}</span> : null}
              </Link>
            </div>

            <div className="mt-6 grid gap-2 rounded-lg bg-blush-50 p-3">
              {topBenefits.map(({ label, icon: Icon }) => (
                <span key={label} className="flex items-center gap-2 text-sm font-bold text-ink">
                  <Icon className="h-4 w-4 text-coral" />
                  {label}
                </span>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
