import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../lib/utils";
import { useShopStore } from "../../store/useShopStore";

export function ProductCard({ product, onToast }) {
  const toggleFavorite = useShopStore((state) => state.toggleFavorite);
  const isFavorite = useShopStore((state) => state.isFavorite(product.id));

  // Simular swatches basados en el id para que parezca Ganga Home
  const hasOptions = product.id % 2 === 0;

  return (
    <article className="group flex flex-col w-full relative mb-6">
      <div className="relative aspect-[4/5] bg-[#F7F7F7] overflow-hidden">
        <Link to={`/producto/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <button
          onClick={() => toggleFavorite(product)}
          className="absolute bottom-3 right-3 bg-white w-8 h-8 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Guardar favorito"
        >
          <Heart className={`h-[18px] w-[18px] transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 stroke-[1.5]"}`} />
        </button>
      </div>

      <div className="mt-4 flex flex-col text-left px-1">
        {hasOptions ? (
          <>
            <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">Otras opciones:</span>
            <div className="flex gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-[#E5E0D8] border-2 border-white outline outline-1 outline-gray-300 cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-[#D1C6BB] border-2 border-white cursor-pointer hover:outline hover:outline-1 hover:outline-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-[#A89F91] border-2 border-white cursor-pointer hover:outline hover:outline-1 hover:outline-gray-300"></div>
            </div>
          </>
        ) : (
          <div className="h-[42px]"></div> /* Placeholder to keep alignment */
        )}

        <Link to={`/producto/${product.id}`} className="text-[13px] text-gray-500 hover:text-black font-light leading-relaxed line-clamp-2 min-h-[38px]">
          {product.name}
        </Link>

        <div className="mt-2 min-h-[16px]">
          {product.oldPrice ? (
            <span className="text-xs text-gray-400 line-through tracking-wide">
              {formatPrice(product.oldPrice)}
            </span>
          ) : null}
        </div>

        <div className="mt-0.5 flex flex-col">
          <span className="text-[15px] font-bold text-red-600 tracking-tight">
            {formatPrice(product.price)} <span className="font-semibold text-[13px]">con Transferencia</span>
          </span>
          <span className="text-[10px] text-gray-400 mt-1 font-medium tracking-wide">
            6 cuotas sin interés de {formatPrice(product.price / 6)}
          </span>
        </div>
      </div>
    </article>
  );
}
