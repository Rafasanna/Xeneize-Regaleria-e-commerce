import { ChevronDown, Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { useShopStore } from "../../store/useShopStore";
import { Logo } from "../ui/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState("");
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

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-porcelain/95 backdrop-blur">
      <div className="bg-ink text-white">
        <div className="container-page flex h-9 items-center justify-center gap-6 text-center text-xs font-semibold tracking-wide sm:text-sm">
          <span>10% OFF en efectivo</span>
          <span className="hidden sm:inline">Envios a todo el pais</span>
          <span className="hidden md:inline">Atencion personalizada por WhatsApp</span>
        </div>
      </div>

      <div className="container-page flex min-h-20 items-center gap-4 py-3">
        <button className="grid h-11 w-11 place-items-center rounded-full bg-cream lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </button>
        <Logo />
        <form onSubmit={submitSearch} className="hidden flex-1 items-center rounded-full bg-white px-4 ring-1 ring-black/10 focus-within:ring-nude md:flex">
          <Search className="h-5 w-5 text-zinc-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar regalos, bazar, libreria, tecnologia..."
            className="h-12 flex-1 bg-transparent px-3 text-sm outline-none"
          />
        </form>
        <div className="ml-auto flex items-center gap-2">
          <Link to={user ? "/mi-cuenta" : "/login"} className="hidden h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition hover:bg-cream sm:flex">
            <User className="h-5 w-5" />
            {user ? user.name.split(" ")[0] : "Ingresar"}
          </Link>
          <Link to="/favoritos" className="relative grid h-11 w-11 place-items-center rounded-full transition hover:bg-cream" aria-label="Favoritos">
            <Heart className="h-5 w-5" />
            {favorites.length ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-nude px-1 text-xs font-bold text-white">{favorites.length}</span> : null}
          </Link>
          <Link to="/carrito" className="relative grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition hover:bg-black" aria-label="Carrito">
            <ShoppingBag className="h-5 w-5" />
            {cartCount ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-nude px-1 text-xs font-bold text-white">{cartCount}</span> : null}
          </Link>
        </div>
      </div>

      <nav className="hidden border-t border-black/5 bg-white lg:block">
        <div className="container-page flex h-12 items-center gap-1">
          {categories.map((category) => (
            <div key={category.name} className="group relative h-full">
              <NavLink to={category.path} className="flex h-full items-center gap-1 rounded-full px-4 text-sm font-semibold transition hover:bg-cream hover:text-nude">
                {category.name}
                {category.subcategories.length ? <ChevronDown className="h-4 w-4" /> : null}
              </NavLink>
              {category.subcategories.length ? (
                <div className="invisible absolute left-0 top-full min-w-64 translate-y-2 rounded-lg bg-porcelain p-3 opacity-0 shadow-soft ring-1 ring-black/5 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub}
                      to={`/productos?categoria=${encodeURIComponent(category.name)}&subcategoria=${encodeURIComponent(sub)}`}
                      className="block rounded-md px-4 py-3 text-sm font-medium text-warm transition hover:bg-cream hover:text-ink"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </nav>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-ink/40 lg:hidden">
          <aside className="h-full w-[88vw] max-w-sm overflow-y-auto bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <Logo compact />
              <button onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-zinc-50" aria-label="Cerrar menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={submitSearch} className="mt-5 flex items-center rounded-full bg-zinc-50 px-4 ring-1 ring-zinc-200">
              <Search className="h-5 w-5 text-zinc-400" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar productos" className="h-12 flex-1 bg-transparent px-3 text-sm outline-none" />
            </form>
            <div className="mt-6 space-y-2">
              {categories.map((category) => (
                <div key={category.name} className="rounded-lg border border-zinc-100">
                  <button
                    onClick={() => setExpanded(expanded === category.name ? "" : category.name)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold"
                  >
                    {category.name}
                    <ChevronDown className={`h-4 w-4 transition ${expanded === category.name ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === category.name ? (
                    <div className="border-t border-zinc-100 p-2">
                      <Link onClick={() => setMobileOpen(false)} to={category.path} className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700">Ver todo</Link>
                      {category.subcategories.map((sub) => (
                        <Link key={sub} onClick={() => setMobileOpen(false)} to={`/productos?categoria=${encodeURIComponent(category.name)}&subcategoria=${encodeURIComponent(sub)}`} className="block rounded-md px-3 py-2 text-sm text-zinc-600">
                          {sub}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
