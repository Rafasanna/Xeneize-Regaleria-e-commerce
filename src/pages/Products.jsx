import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";

export function Products() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [toast, setToast] = useState("");
  const category = params.get("categoria") || "";
  const subcategory = params.get("subcategoria") || "";
  const q = params.get("q") || "";

  const subcategories = useMemo(() => {
    if (!category) return [];
    return categories.find((item) => item.name === category)?.subcategories || [];
  }, [category]);

  const filtered = useMemo(() => {
    const term = q.toLowerCase();
    const result = products.filter((product) => {
      const matchesSearch = !term || [product.name, product.category, product.subcategory].join(" ").toLowerCase().includes(term);
      return matchesSearch && (!category || product.category === category) && (!subcategory || product.subcategory === subcategory);
    });
    return result.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "offers") return Number(Boolean(b.oldPrice)) - Number(Boolean(a.oldPrice));
      const featuredDiff = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featuredDiff) return featuredDiff;
      return (a.featuredPriority ?? 999) - (b.featuredPriority ?? 999);
    });
  }, [category, q, sort, subcategory]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    if (key === "categoria") next.delete("subcategoria");
    setParams(next);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <section className="container-page py-6 sm:py-10">
      <div className="mb-6 rounded-lg bg-white p-4 shadow-sm ring-1 ring-coral/10 sm:mb-8 sm:p-5">
        <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <p className="text-sm font-black uppercase tracking-wide text-coral">Tienda</p>
            <h1 className="section-title mt-1">Productos</h1>
            <p className="muted mt-2">{filtered.length} productos encontrados</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-sm font-black text-ink">
            <SlidersHorizontal className="h-4 w-4 text-coral" />
            Filtros y orden
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <input
            value={q}
            onChange={(event) => updateParam("q", event.target.value)}
            placeholder="Buscar producto"
            className="h-12 w-full min-w-0 rounded-full border border-coral/15 bg-white px-4 text-sm outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
          />
          <select value={category} onChange={(event) => updateParam("categoria", event.target.value)} className="h-12 w-full min-w-0 rounded-full border border-coral/15 bg-white px-4 text-sm outline-none focus:border-coral focus:ring-2 focus:ring-coral/20">
            <option value="">Todas las categorías</option>
            {categories.filter((item) => item.name !== "Ofertas").map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
          </select>
          <select value={subcategory} onChange={(event) => updateParam("subcategoria", event.target.value)} className="h-12 w-full min-w-0 rounded-full border border-coral/15 bg-white px-4 text-sm outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 disabled:bg-[#FFF9F6] disabled:text-[#A78D95]" disabled={!category}>
            <option value="">Todas las subcategorías</option>
            {subcategories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-12 w-full min-w-0 rounded-full border border-coral/15 bg-white px-4 text-sm outline-none focus:border-coral focus:ring-2 focus:ring-coral/20">
            <option value="featured">Destacados</option>
            <option value="price-asc">Menor precio</option>
            <option value="price-desc">Mayor precio</option>
            <option value="offers">Ofertas primero</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 sm:gap-5 lg:grid-cols-4">
        {filtered.map((product) => <ProductCard key={product.id} product={product} onToast={showToast} />)}
      </div>
      {!filtered.length ? <div className="rounded-lg bg-white p-10 text-center text-warm ring-1 ring-coral/10">No encontramos productos con esos filtros.</div> : null}
      <Toast message={toast} />
    </section>
  );
}
