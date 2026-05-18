import { ChevronDown, Gift, Heart, Menu, MessageCircle, Search, ShieldCheck, ShoppingBag, Truck, User, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { buildWhatsAppUrl } from "../../lib/utils";
import { useShopStore } from "../../store/useShopStore";
import { Logo } from "../ui/Logo";

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
  const [categoriesOpen, setCategoriesOpen] = useState(false);
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

  return (
    <header className="sticky top-0 z-40 border-b border-coral/15 bg-blush-50/95 backdrop-blur">
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

      <div className="container-page flex min-h-20 items-center gap-4 py-3">
        <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-coral shadow-sm ring-1 ring-coral/15 lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </button>

        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-black transition ${
                  isActive ? "bg-white text-coral shadow-sm ring-1 ring-coral/15" : "text-ink hover:bg-white hover:text-coral"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="relative">
            <button
              onClick={() => setCategoriesOpen((value) => !value)}
              onMouseEnter={() => setCategoriesOpen(true)}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-black text-ink transition hover:bg-white hover:text-coral"
            >
              Categorias
              <ChevronDown className={`h-4 w-4 transition ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>
            {categoriesOpen ? (
              <div onMouseLeave={() => setCategoriesOpen(false)} className="absolute left-0 top-full mt-3 w-[520px] rounded-lg bg-white p-4 shadow-soft ring-1 ring-coral/15">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Explorar categorias</p>
                  <Link to="/categorias" onClick={() => setCategoriesOpen(false)} className="text-xs font-black text-ink hover:text-coral">
                    Ver todas
                  </Link>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {categories.filter((category) => category.name !== "Ofertas").map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      onClick={() => setCategoriesOpen(false)}
                      className="rounded-md px-3 py-2 text-sm font-bold text-warm transition hover:bg-steel hover:text-coral"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <a href={buildWhatsAppUrl("Hola, quiero consultar por Xeneize Regaleria")} className="rounded-full px-4 py-2 text-sm font-black text-ink transition hover:bg-white hover:text-coral">
            Contacto
          </a>
          <NavLink
            to="/carrito"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition ${
                isActive ? "bg-white text-coral shadow-sm ring-1 ring-coral/15" : "text-ink hover:bg-white hover:text-coral"
              }`
            }
          >
            Carrito
            {cartCount ? <span className="grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-xs text-white">{cartCount}</span> : null}
          </NavLink>
        </nav>

        <form onSubmit={submitSearch} className="ml-auto hidden max-w-sm flex-1 items-center rounded-full bg-white px-4 shadow-sm ring-1 ring-coral/15 transition focus-within:ring-2 focus-within:ring-coral/30 md:flex">
          <Search className="h-5 w-5 text-coral/65" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar productos"
            className="h-12 flex-1 bg-transparent px-3 text-sm outline-none"
          />
        </form>

        <div className="flex items-center gap-2">
          <Link to={user ? "/mi-cuenta" : "/login"} className="hidden h-11 items-center gap-2 rounded-full px-3 text-sm font-bold transition hover:bg-white hover:text-coral sm:flex" aria-label="Mi cuenta">
            <User className="h-5 w-5" />
            <span className="hidden xl:inline">{user ? user.name.split(" ")[0] : "Ingresar"}</span>
          </Link>
          <Link to="/favoritos" className="relative grid h-11 w-11 place-items-center rounded-full transition hover:bg-white hover:text-coral" aria-label="Favoritos">
            <Heart className="h-5 w-5" />
            {favorites.length ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-xs font-black text-white">{favorites.length}</span> : null}
          </Link>
          <Link to="/carrito" className="relative grid h-11 w-11 place-items-center rounded-full bg-coral text-white shadow-[0_10px_22px_rgba(223,23,111,0.22)] transition hover:bg-sage lg:hidden" aria-label="Carrito">
            <ShoppingBag className="h-5 w-5" />
            {cartCount ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-black text-ink">{cartCount}</span> : null}
          </Link>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-ink/45 lg:hidden">
          <aside className="h-full w-[88vw] max-w-sm overflow-y-auto bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <Logo compact />
              <button onClick={closeMobile} className="grid h-10 w-10 place-items-center rounded-full bg-steel text-coral" aria-label="Cerrar menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitSearch} className="mt-5 flex items-center rounded-full bg-blush-50 px-4 ring-1 ring-coral/15 focus-within:ring-2 focus-within:ring-coral/30">
              <Search className="h-5 w-5 text-coral/65" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar productos" className="h-12 flex-1 bg-transparent px-3 text-sm outline-none" />
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
