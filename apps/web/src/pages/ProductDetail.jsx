import { Heart, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { InstagramLogo } from "../components/ui/InstagramLogo";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";
import { products } from "../data/products";
import { formatPrice } from "../lib/utils";
import { useShopStore } from "../store/useShopStore";

const instagramUrl = "https://www.instagram.com/xeneizeregaleria/";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [toast, setToast] = useState("");
  const addToCart = useShopStore((state) => state.addToCart);
  const toggleFavorite = useShopStore((state) => state.toggleFavorite);
  const isFavorite = useShopStore((state) => product && state.isFavorite(product.id));

  if (!product) {
    return <section className="container-page py-16"><div className="rounded-lg bg-white p-10 ring-1 ring-coral/10">Producto no encontrado.</div></section>;
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <section className="container-page py-6 sm:py-10">
      <div className="grid gap-6 rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-coral/10 sm:p-5 lg:grid-cols-2 lg:gap-8 lg:p-8">
        <div className="overflow-hidden rounded-[1.25rem] bg-steel">
          <img src={product.image} alt={product.name} className="aspect-square h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-wide text-coral">{product.category} / {product.subcategory}</p>
          <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">{product.name}</h1>
          <div className="mt-5 flex items-end gap-3">
            <span className="text-2xl font-black sm:text-3xl">{formatPrice(product.price)}</span>
            {product.oldPrice ? <span className="pb-1 text-lg text-warm/55 line-through">{formatPrice(product.oldPrice)}</span> : null}
          </div>
          <p className="mt-5 max-w-xl leading-7 text-warm">{product.description}</p>
          <div className="mt-5 rounded-lg bg-steel p-4 text-sm text-warm ring-1 ring-coral/10">
            <span>Entrega: retiro en local o envio a domicilio</span>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto" onClick={() => { addToCart(product); showToast("Producto agregado al carrito"); }}>
              <ShoppingBag className="h-4 w-4" /> Agregar al carrito
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto" onClick={() => toggleFavorite(product)}>
              <Heart className={isFavorite ? "h-4 w-4 fill-coral text-coral" : "h-4 w-4"} /> Favorito
            </Button>
            <a href={instagramUrl}>
              <Button variant="blush" className="w-full"><InstagramLogo className="h-4 w-4" /> Instagram</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="section-title">También te puede gustar</h2>
          <Link to="/productos" className="text-sm font-black text-coral">Ver mas</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 sm:gap-5 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onToast={showToast} />)}
        </div>
      </div>
      <Toast message={toast} />
    </section>
  );
}
