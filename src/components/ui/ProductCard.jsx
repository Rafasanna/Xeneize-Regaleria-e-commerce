import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../lib/utils";
import { useShopStore } from "../../store/useShopStore";

export function ProductCard({ product, onToast }) {
  const toggleFavorite = useShopStore((state) => state.toggleFavorite);
  const isFavorite = useShopStore((state) => state.isFavorite(product.id));
  const addToCart = useShopStore((state) => state.addToCart);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.1rem] border border-[#F2E4E8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial sm:rounded-[1.45rem]">
      <div className="relative m-1.5 overflow-hidden rounded-[0.9rem] bg-[#F7DCE5] sm:m-2 sm:rounded-[1.15rem]">
        <Link to={`/producto/${product.id}`} className="block aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        {product.oldPrice ? (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-[#6B4355] shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-[10px]">
            {product.badge || "Oferta"}
          </span>
        ) : null}
        <button
          onClick={() => toggleFavorite(product)}
          className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#A78D95] shadow-sm transition hover:bg-white hover:text-[#C97A96] sm:right-3 sm:top-3 sm:h-9 sm:w-9"
          aria-label="Guardar favorito"
        >
          <Heart className={`h-[18px] w-[18px] transition-colors ${isFavorite ? "fill-[#C97A96] text-[#C97A96]" : "stroke-[1.5]"}`} />
        </button>
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
        <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#C97A96] sm:text-[10px] sm:tracking-[0.16em]">{product.category}</span>
        <Link to={`/producto/${product.id}`} className="mt-1.5 min-h-[40px] text-[13px] font-semibold leading-5 text-[#4D3A42] transition hover:text-[#C97A96] sm:mt-2 sm:min-h-[42px] sm:text-sm">
          {product.name}
        </Link>
        <p className="mt-1.5 line-clamp-2 min-h-[38px] text-[11px] leading-5 text-[#A78D95] sm:mt-2 sm:min-h-[40px] sm:text-xs">{product.description}</p>

        <div className="mt-3 flex items-end justify-between gap-2 sm:mt-4 sm:gap-3">
          <div className="min-w-0">
            {product.oldPrice ? (
              <span className="block text-xs text-[#A78D95]/70 line-through">{formatPrice(product.oldPrice)}</span>
            ) : null}
            <span className="block truncate text-[14px] font-black tracking-tight text-[#6B4355] sm:text-lg">{formatPrice(product.price)}</span>
            <span className="mt-1 block text-[11px] font-semibold text-[#A78D95]">
              {product.stock > 0 ? `${product.stock} disponibles` : "Sin stock"}
            </span>
          </div>
          <button
            onClick={() => {
              addToCart(product);
              onToast?.("Producto agregado al carrito");
            }}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F7DCE5] text-[#6B4355] shadow-sm ring-1 ring-[#F2E4E8] transition hover:bg-[#6B4355] hover:text-[#FFF9F6] sm:h-11 sm:w-11"
            aria-label="Agregar al carrito"
          >
            <ShoppingBag className="h-[18px] w-[18px] stroke-[1.8]" />
          </button>
        </div>
      </div>
    </article>
  );
}
