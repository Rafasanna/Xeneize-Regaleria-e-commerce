import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductCard } from "../components/ui/ProductCard";
import { Button } from "../components/ui/Button";
import { Toast } from "../components/ui/Toast";
import { useShopStore } from "../store/useShopStore";

export function Favorites() {
  const favorites = useShopStore((state) => state.favorites);
  const [toast, setToast] = useState("");
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <section className="container-page py-10">
      <h1 className="section-title">Favoritos</h1>
      {favorites.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((product) => <ProductCard key={product.id} product={product} onToast={showToast} />)}
        </div>
      ) : (
        <div className="mt-8 rounded-lg bg-white p-10 text-center shadow-sm ring-1 ring-coral/10">
          <Heart className="mx-auto h-10 w-10 text-coral" />
          <h2 className="mt-4 text-xl font-black">Todavia no guardaste favoritos</h2>
          <p className="mt-2 text-sm text-warm">Marca productos para encontrarlos rapido despues.</p>
          <Link to="/productos" className="mt-6 inline-block"><Button>Explorar productos</Button></Link>
        </div>
      )}
      <Toast message={toast} />
    </section>
  );
}
