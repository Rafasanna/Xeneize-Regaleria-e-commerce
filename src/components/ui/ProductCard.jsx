import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatPrice } from "../../lib/utils";
import { useShopStore } from "../../store/useShopStore";
import { Button } from "./Button";

export function ProductCard({ product, onToast }) {
  const addToCart = useShopStore((state) => state.addToCart);
  const toggleFavorite = useShopStore((state) => state.toggleFavorite);
  const isFavorite = useShopStore((state) => state.isFavorite(product.id));

  const handleCart = () => {
    addToCart(product);
    onToast?.(`${product.name} agregado al carrito`);
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/10 transition hover:shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-steel">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge ? (
          <span className={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-xs font-black tracking-wide ${product.oldPrice ? "bg-blush-200 text-ink" : "bg-ink text-white"}`}>
            {product.badge}
          </span>
        ) : null}
        <button
          onClick={() => toggleFavorite(product)}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-ink shadow-sm ring-1 ring-black/10 transition hover:bg-steel hover:text-nude"
          aria-label="Guardar favorito"
        >
          <Heart className={isFavorite ? "h-5 w-5 fill-nude text-nude" : "h-5 w-5"} />
        </button>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-nude">{product.category}</p>
          <Link to={`/producto/${product.id}`} className="mt-1 block min-h-12 text-lg font-black leading-snug tracking-tight hover:text-nude">
            {product.name}
          </Link>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-xl font-black text-ink">{formatPrice(product.price)}</span>
          {product.oldPrice ? <span className="pb-0.5 text-sm text-zinc-400 line-through">{formatPrice(product.oldPrice)}</span> : null}
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <Button onClick={handleCart} className="px-3 font-black">
            <ShoppingBag className="h-4 w-4" />
            Agregar
          </Button>
          <Link to={`/producto/${product.id}`} className="inline-flex min-h-11 items-center justify-center rounded-full bg-steel px-4 text-sm font-black text-ink transition hover:bg-blush-200">
            Ver
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
