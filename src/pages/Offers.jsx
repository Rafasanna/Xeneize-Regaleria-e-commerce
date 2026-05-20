import { useState } from "react";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";
import { products } from "../data/products";

export function Offers() {
  const [toast, setToast] = useState("");
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };
  const offers = products.filter((product) => product.oldPrice);
  return (
    <section className="container-page py-10">
      <div className="mb-8 rounded-lg bg-coral p-8 text-white shadow-editorial">
        <p className="inline-flex rounded-full bg-gold px-3 py-1.5 text-xs font-black uppercase tracking-wide text-ink">Ofertas</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight">Promos destacadas</h1>
        <p className="mt-3 max-w-2xl text-white/75">Productos seleccionados con descuentos para resolver regalos, útiles y accesorios.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {offers.map((product) => <ProductCard key={product.id} product={product} onToast={showToast} />)}
      </div>
      <Toast message={toast} />
    </section>
  );
}
