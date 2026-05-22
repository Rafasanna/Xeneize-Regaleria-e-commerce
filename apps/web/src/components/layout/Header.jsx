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
    <header className="sticky top-0 z-40 w-full border-b border-[#FE72A9]/16 bg-white/92 font-sans shadow-[0_12px_32px_rgba(24,18,29,0.06)] backdrop-blur-xl">
      <div className="container-page px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[72px] items-center justify-between gap-3 py-2 md:min-h-[82px]">
          <div className="flex flex-1 items-center">
            <button className="grid h-11 w-11 place-items-center rounded-full bg-[#FDE7F1] text-[#18121D] shadow-sm ring-1 ring-[#FE72A9]/20 transition hover:bg-[#FE72A9] hover:text-white" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
              <Menu className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>

          <div className="absolute left-1/2 top-1/2 z-10 shrink-0 -translate-x-1/2 -translate-y-1/2">
            <Logo compact />
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 text-[13px] font-bold tracking-wide text-[#18121D] md:gap-3">
            <Link to="/carrito" className="relative flex items-center gap-1.5 rounded-full bg-[#18121D] px-3 py-2.5 text-white shadow-[0_14px_28px_rgba(24,18,29,0.18)] ring-1 ring-[#18121D] transition hover:bg-[#FC2DAF] hover:ring-[#FC2DAF]">
              <ShoppingBag className="h-6 w-6 md:h-[20px] md:w-[20px] stroke-[1.5]" />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FE72A9] text-[10px] font-bold text-white ring-2 ring-white md:hidden">{cartCount}</span>}
              <span className="hidden md:inline">Carrito ({cartCount})</span>
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[999] animate-menu-backdrop bg-[#18121D]/35 backdrop-blur-sm" onClick={closeMobile}>
          <aside className="fixed left-0 top-0 z-[1000] h-dvh w-[92vw] max-w-sm animate-menu-panel overflow-y-auto rounded-r-[2rem] bg-white p-5 text-[#18121D] shadow-[0_24px_80px_rgba(24,18,29,0.24)] ring-1 ring-[#FE72A9]/20 sm:p-6" onClick={(event) => event.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between">
              <Logo compact />
              <button type="button" onClick={closeMobile} className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF8FC] text-[#7B6D82] shadow-sm ring-1 ring-[#FE72A9]/20 transition-colors hover:text-[#18121D]" aria-label="Cerrar menu">
                <X className="h-6 w-6 stroke-[1.5]" />
              </button>
            </div>

            <p className="mb-4 px-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC2DAF]">Menú</p>

            <form onSubmit={submitSearch} className="mb-6 flex items-center rounded-full border border-[#98C3D6]/45 bg-[#EAF6FB]/60 px-4 py-3 shadow-sm transition-colors focus-within:border-[#28A4DC]/70">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="¿Qué estás buscando?" className="w-full bg-transparent text-[13px] font-semibold text-[#18121D] outline-none placeholder:text-[#7B6D82]" />
              <button type="submit" className="ml-2 text-[#28A4DC] transition-colors hover:text-[#FC2DAF]">
                <Search className="h-4 w-4 stroke-[1.5]" />
              </button>
            </form>

            <div className="flex flex-col gap-1">
              <Link to="/" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#18121D] transition-colors hover:bg-[#FDE7F1] hover:text-[#FC2DAF]">
                Inicio
              </Link>
              <div className="h-px bg-[#FE72A9]/18 my-2 mx-3" />

              {categories.map((category) => (
                <div key={category.name} className="rounded-[1.25rem] border border-[#FE72A9]/16 bg-[#FFF8FC] p-2">
                  <Link to={category.path} onClick={closeMobile} className={`flex items-center justify-between rounded-2xl px-3 py-2.5 text-[14px] font-bold transition-colors hover:bg-white ${category.name === "Ofertas" ? "text-[#FC2DAF]" : "text-[#18121D] hover:text-[#FC2DAF]"}`}>
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
                          className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#7B6D82] ring-1 ring-[#98C3D6]/35 transition hover:bg-[#EAF6FB] hover:text-[#18121D]"
                        >
                          {subcategory}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <Link to="/productos" onClick={closeMobile} className="mt-2 rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#18121D] transition-colors hover:bg-[#FDE7F1] hover:text-[#FC2DAF]">
                Productos
              </Link>
              <Link to="/categorias" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#18121D] transition-colors hover:bg-[#FDE7F1] hover:text-[#FC2DAF]">
                Ver todas las categorías
              </Link>
              <Link to="/favoritos" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#18121D] transition-colors hover:bg-[#FDE7F1] hover:text-[#FC2DAF]">
                Favoritos
              </Link>
              <Link to="/sobre-nosotros" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#18121D] transition-colors hover:bg-[#FDE7F1] hover:text-[#FC2DAF]">
                Sobre nosotros
              </Link>
              <Link to="/contacto" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#18121D] transition-colors hover:bg-[#FDE7F1] hover:text-[#FC2DAF]">
                Contacto
              </Link>
              <Link to="/ayuda" onClick={closeMobile} className="rounded-2xl px-3 py-3 text-[14px] font-semibold text-[#18121D] transition-colors hover:bg-[#FDE7F1] hover:text-[#FC2DAF]">
                Ayuda
              </Link>
              <div className="h-px bg-[#FE72A9]/18 my-2 mx-3" />
              <Link to="/carrito" onClick={closeMobile} className="rounded-2xl bg-[#18121D] px-3 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#FC2DAF]">
                Carrito ({cartCount})
              </Link>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
