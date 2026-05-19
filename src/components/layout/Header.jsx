import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { useShopStore } from "../../store/useShopStore";
import { Logo } from "../ui/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const cart = useShopStore((state) => state.cart);
  const user = useShopStore((state) => state.user);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/productos${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    setMobileOpen(false);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFEBF0] font-sans w-full border-b border-pink-200">
      <div className="container-page px-4 sm:px-6 lg:px-8">
        {/* Top Row: Search, Logo, Actions */}
        <div className="flex items-center justify-between pt-4 md:pt-6 pb-3 md:pb-4 relative">
          {/* Left: Search */}
          <div className="flex flex-1 items-center">
            <button className="lg:hidden text-black mr-3" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
              <Menu className="h-6 w-6 stroke-[1.5]" />
            </button>
            <form onSubmit={submitSearch} className="hidden lg:flex w-full max-w-[280px] items-center border border-black/30 bg-white/50 px-3 py-1.5 transition-colors focus-within:border-black focus-within:bg-white rounded">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="¿Qué estás buscando?"
                className="w-full bg-transparent text-[13px] outline-none text-black placeholder:text-black/60 font-medium"
              />
              <button type="submit" className="text-black transition-colors ml-2">
                <Search className="h-4 w-4 stroke-[2]" />
              </button>
            </form>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center shrink-0 mx-2 md:mx-4 max-w-[50%]">
            <div className="block lg:hidden w-full"><Logo compact /></div>
            <div className="hidden lg:block w-full"><Logo /></div>
          </div>

          {/* Right: User & Cart */}
          <div className="flex flex-1 items-center justify-end gap-4 lg:gap-8 text-[13px] text-black font-medium tracking-wide">
            <Link to={user ? "/mi-cuenta" : "/login"} className="hidden md:flex items-center gap-1.5 hover:text-black/70 transition-colors">
              <User className="h-[20px] w-[20px] stroke-[1.5]" />
              <span>{user ? user.name.split(" ")[0] : "Ingresá / Registráte"}</span>
            </Link>
            <Link to="/carrito" className="flex items-center gap-1.5 hover:text-black/70 transition-colors relative">
              <ShoppingBag className="h-6 w-6 md:h-[20px] md:w-[20px] stroke-[1.5]" />
              {cartCount > 0 && <span className="absolute -top-1.5 -right-1.5 md:hidden bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
              <span className="hidden md:inline">Carrito ({cartCount})</span>
            </Link>
          </div>
        </div>

        {/* Bottom Row: Categories */}
        <nav className="hidden lg:flex justify-center items-center gap-8 xl:gap-10 pb-5 pt-2">
          <NavLink
            to="/ofertas"
            className="text-[13px] tracking-wide font-light transition-colors text-red-600 hover:text-red-700"
          >
            Ofertas
          </NavLink>
          {categories.slice(1, 7).map((category) => (
            <div key={category.name} className="group relative">
              <Link
                to={category.path}
                className="flex items-center gap-1 text-[13px] tracking-wide font-light text-gray-500 hover:text-black transition-colors py-2"
              >
                {category.name}
                {category.subcategories && category.subcategories.length > 0 && (
                  <ChevronDown className="h-3 w-3 text-gray-400 transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white border border-gray-100 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {category.subcategories.map(sub => (
                      <Link key={sub} to={`/productos?q=${sub}`} className="block px-5 py-2 text-[13px] font-light text-gray-500 hover:bg-gray-50 hover:text-black transition-colors">
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="group relative">
            <Link to="/categorias" className="flex items-center gap-1 text-[13px] tracking-wide font-light text-gray-500 hover:text-black transition-colors py-2">
              Todas las categorías
              <ChevronDown className="h-3 w-3 text-gray-400 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-100 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2 grid gap-1">
                {categories.map(category => (
                  <Link key={category.name} to={category.path} className="block px-5 py-2 text-[13px] font-light text-gray-500 hover:bg-gray-50 hover:text-black transition-colors">
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <aside className="absolute top-0 left-0 h-full w-[85vw] max-w-sm overflow-y-auto bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Logo compact />
              <button onClick={closeMobile} className="text-gray-500 hover:text-black transition-colors">
                <X className="h-6 w-6 stroke-[1.5]" />
              </button>
            </div>

            <form onSubmit={submitSearch} className="flex items-center border border-gray-300 px-3 py-2 mb-6 focus-within:border-gray-500 transition-colors">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="¿Qué estás buscando?" className="w-full bg-transparent text-[13px] font-light outline-none text-gray-800 placeholder:text-gray-400" />
              <button type="submit" className="text-gray-400 hover:text-black transition-colors ml-2">
                <Search className="h-4 w-4 stroke-[1.5]" />
              </button>
            </form>

            <div className="flex flex-col gap-1">
              <Link to={user ? "/mi-cuenta" : "/login"} onClick={closeMobile} className="flex items-center gap-3 text-[14px] font-light text-gray-600 hover:bg-gray-50 px-3 py-3 transition-colors">
                <User className="h-5 w-5 stroke-[1.5]" />
                {user ? user.name : "Ingresá / Registráte"}
              </Link>
              <div className="h-px bg-gray-100 my-2 mx-3" />

              <Link to="/ofertas" onClick={closeMobile} className="text-[14px] font-light px-3 py-3 transition-colors text-red-600 hover:bg-red-50">
                Ofertas
              </Link>

              {categories.slice(1).map((category) => (
                <Link key={category.name} to={category.path} onClick={closeMobile} className="text-[14px] font-light text-gray-600 hover:bg-gray-50 px-3 py-3 transition-colors">
                  {category.name}
                </Link>
              ))}

              <Link to="/categorias" onClick={closeMobile} className="text-[14px] font-light text-gray-600 hover:bg-gray-50 px-3 py-3 transition-colors mt-2">
                Ver todas las categorías
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
