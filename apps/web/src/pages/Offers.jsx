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
    <section className="container-page py-6 sm:py-10">
      <div className="mb-6 rounded-[1.75rem] bg-[linear-gradient(135deg,#FC2DAF_0%,#FE72A9_48%,#28A4DC_100%)] p-5 text-white shadow-editorial sm:mb-8 sm:p-8">
        <p className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#18121D]">Ofertas</p>
        <h1 className="brand-title mt-4 text-4xl text-white sm:mt-5 sm:text-6xl">Promos destacadas</h1>
        <p className="mt-3 max-w-2xl text-white/75">Productos seleccionados con descuentos para resolver regalos, útiles y accesorios.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-5 lg:grid-cols-4">
        {offers.map((product) => <ProductCard key={product.id} product={product} onToast={showToast} />)}
      </div>
      <Toast message={toast} />
    </section>
  );
}
