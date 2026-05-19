import { useMemo, useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";
import { buildWhatsAppUrl } from "../lib/utils";
import { MessageCircle } from "lucide-react";

export function Home() {
  const [toast, setToast] = useState("");
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  // We'll use more products to fill the grid like Ganga Home
  const featured = useMemo(() => products.filter((product) => product.featured).slice(0, 12), []);

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="bg-white">
        <div className="container-page py-5 sm:py-7">
          <div className="overflow-hidden rounded-lg shadow-sm border border-pink-100">
            <div className="relative aspect-[16/7] bg-pink-50 sm:aspect-[2172/724]">
              <img
                src="/banner.png"
                alt="Xeneize Regaleria banner"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="container-page px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-[0.15em] text-center text-[#3a1427] mb-10">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-10 sm:gap-x-4 sm:gap-y-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onToast={showToast} />
          ))}
          {/* Duplicating items to show a dense grid, similar to the screenshot */}
          {featured.map((product) => (
            <ProductCard key={`${product.id}-dup`} product={{...product, id: product.id + 100}} onToast={showToast} />
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Button (matches Ganga Home persistent bottom right/left CTA style) */}
      <a
        href={buildWhatsAppUrl("Hola, busco un regalo especial")}
        className="fixed bottom-6 right-6 z-50 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 stroke-[1.5]" />
      </a>

      <Toast message={toast} />
    </div>
  );
}
