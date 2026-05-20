import { ChevronRight, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { useShopStore } from "../../store/useShopStore";
import { Logo } from "../ui/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const cart = useShopStore((state) => state.cart);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/productos${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    setMobileOpen(false);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/70 bg-[#FCECF2]/95 font-sans shadow-[0_10px_28px_rgba(107,67,85,0.06)] backdrop-blur-xl">
      <div className="container-page px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[68px] items-center justify-between gap-3 py-2 md:min-h-[78px]">
          <div className="flex flex-1 items-center">
            <button className="mr-2 grid h-10 w-10 place-items-center rounded-full bg-white/75 text-[#6B4355] shadow-sm ring-1 ring-white transition hover:bg-white hover:text-[#C97A96]" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
              <Menu className="h-6 w-6 stroke-[1.5]" />
            </button>
            <form onSubmit={submitSearch} className="hidden w-full max-w-[310px] items-center rounded-full border border-white/80 bg-white/75 px-4 py-2.5 shadow-sm transition focus-within:border-[#C97A96]/40 focus-within:bg-white focus-within:shadow-soft lg:flex">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="¿Qué estás buscando?"
                className="w-full bg-transparent text-[13px] font-medium text-[#4D3A42] outline-none placeholder:text-[#A78D95]"
              />
              <button type="submit" className="ml-2 text-[#6B4355] transition-colors hover:text-[#C97A96]" aria-label="Buscar">
                <Search className="h-4 w-4 stroke-[2]" />
              </button>
            </form>
          </div>

          <div className="flex shrink-0 justify-center">
            <Logo compact />
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 text-[13px] font-medium tracking-wide text-[#4D3A42] md:gap-3">
            <Link to="/carrito" className="relative flex items-center gap-1.5 rounded-full bg-white/75 px-3 py-2 text-[#6B4355] shadow-sm ring-1 ring-white transition hover:bg-white hover:text-[#C97A96]">
              <ShoppingBag className="h-6 w-6 md:h-[20px] md:w-[20px] stroke-[1.5]" />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C97A96] text-[10px] font-bold text-[#FFF9F6] md:hidden">{cartCount}</span>}
              <span className="hidden md:inline">Carrito ({cartCount})</span>
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[999] bg-[#6B4355]/35 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={closeMobile}
            aria-label="Cerrar menu"
          />
          <aside className="fixed left-0 top-0 z-[1000] h-dvh w-[92vw] max-w-sm overflow-y-auto rounded-r-[2rem] bg-[#FFF9F6] p-5 text-[#4D3A42] shadow-[0_24px_80px_rgba(77,58,66,0.28)] ring-1 ring-[#F2E4E8] sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <Logo compact />
              <button type="button" onClick={closeMobile} className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#A78D95] shadow-sm ring-1 ring-[#F2E4E8] transition-colors hover:text-[#6B4355]" aria-label="Cerrar menu">
                <X className="h-6 w-6 stroke-[1.5]" />
              </button>
            </div>

            <p className="mb-4 px-3 text-xs font-black uppercase tracking-[0.18em] text-[#C97A96]">Menú</p>

            <form onSubmit={submitSearch} className="mb-6 flex items-center rounded-full border border-[#F2E4E8] bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-[#C97A96]/40">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="¿Qué estás buscando?" className="w-full bg-transparent text-[13px] font-medium text-[#4D3A42] outline-none placeholder:text-[#A78D95]" />
              <button type="submit" className="ml-2 text-[#6B4355] transition-colors hover:text-[#C97A96]">
                <Search className="h-4 w-4 stroke-[1.5]" />
              </button>
            </form>

            <div className="flex flex-col gap-1">
              <Link to="/" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-medium text-[#4D3A42] transition-colors hover:bg-white hover:text-[#6B4355]">
                Inicio
              </Link>
              <div className="h-px bg-[#F2E4E8] my-2 mx-3" />

              {categories.map((category) => (
                <div key={category.name} className="rounded-[1.25rem] border border-[#F2E4E8] bg-white/65 p-2">
                  <Link to={category.path} onClick={closeMobile} className={`flex items-center justify-between rounded-2xl px-3 py-2.5 text-[14px] font-semibold transition-colors hover:bg-[#FCECF2] ${category.name === "Ofertas" ? "text-[#C97A96]" : "text-[#4D3A42] hover:text-[#6B4355]"}`}>
                    {category.name}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  {category.subcategories?.length ? (
                    <div className="mt-1 flex flex-wrap gap-1.5 px-2 pb-1">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory}
                          to={category.name === "Ofertas" ? `/ofertas?q=${encodeURIComponent(subcategory)}` : `/productos?categoria=${encodeURIComponent(category.name)}&subcategoria=${encodeURIComponent(subcategory)}`}
                          onClick={closeMobile}
                          className="rounded-full bg-[#FFF9F6] px-3 py-1.5 text-xs font-medium text-[#A78D95] ring-1 ring-[#F2E4E8] transition hover:bg-[#F7DCE5] hover:text-[#6B4355]"
                        >
                          {subcategory}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <Link to="/productos" onClick={closeMobile} className="mt-2 rounded-2xl px-3 py-3 text-[14px] font-medium text-[#4D3A42] transition-colors hover:bg-white hover:text-[#6B4355]">
                Productos
              </Link>
              <Link to="/categorias" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-medium text-[#4D3A42] transition-colors hover:bg-white hover:text-[#6B4355]">
                Ver todas las categorías
              </Link>
              <Link to="/sobre-nosotros" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-medium text-[#4D3A42] transition-colors hover:bg-white hover:text-[#6B4355]">
                Sobre nosotros
              </Link>
              <Link to="/contacto" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-medium text-[#4D3A42] transition-colors hover:bg-white hover:text-[#6B4355]">
                Contacto
              </Link>
              <div className="h-px bg-[#F2E4E8] my-2 mx-3" />
              <Link to="/carrito" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#6B4355] transition-colors hover:bg-white">
                Carrito ({cartCount})
              </Link>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
