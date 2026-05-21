import { BookOpen, Gift, Grid3X3, Headphones, HeartHandshake, Home as HomeIcon, Shirt, Sparkles, Tag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { InstagramLogo } from "../components/ui/InstagramLogo";
import { ProductCard } from "../components/ui/ProductCard";
import { Toast } from "../components/ui/Toast";
import { categories, categoryTiles } from "../data/categories";
import { products } from "../data/products";

const categoryIconByName = {
  Ofertas: Tag,
  "Bazar y hogar": HomeIcon,
  "Marroquinería y moda": Shirt,
  "Belleza y Bijou": Sparkles,
  Librería: BookOpen,
  Juguetería: Gift,
  Tecnología: Headphones,
  "Todas las categorías": Grid3X3
};

const categoryPills = [
  ...categories.map((category) => ({
    label: category.name,
    to: category.path,
    icon: categoryIconByName[category.name] || Sparkles,
    subcategories: category.subcategories || []
  })),
  { label: "Todas las categorías", to: "/categorias", icon: Grid3X3, subcategories: categories.map((category) => category.name) }
];

const heroSlides = [
  { src: "/hero-carousel/slide-1.jpeg", alt: "Cuadernos y agendas de Xeneize Regalería" },
  { src: "/hero-carousel/slide-2.jpeg", alt: "Productos de regalería Xeneize" },
  { src: "/hero-carousel/slide-3.jpeg", alt: "Detalles para regalar de Xeneize Regalería" },
  { src: "/hero-carousel/slide-4.jpeg", alt: "Novedades de Xeneize Regalería" },
  { src: "/hero-carousel/slide-5.jpeg", alt: "Regalos seleccionados en Xeneize Regalería" }
];

const instagramUrl = "https://www.instagram.com/xeneizeregaleria/";

export function Home() {
  const [toast, setToast] = useState("");
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const featured = useMemo(
    () => products
      .filter((product) => product.featured)
      .sort((a, b) => (a.featuredPriority ?? 999) - (b.featuredPriority ?? 999))
      .slice(0, 8),
    []
  );
  const offers = useMemo(() => products.filter((product) => product.oldPrice).slice(0, 4), []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FFF8FC] text-[#18121D]">
      <section className="overflow-hidden bg-[linear-gradient(135deg,#FDE7F1_0%,#FFFFFF_46%,#EAF6FB_100%)]">
        <div className="container-page py-5 sm:py-8 lg:py-10">
          <div className="relative grid gap-6 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/72 p-4 shadow-editorial sm:rounded-[2.25rem] sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-10">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FC2DAF] shadow-sm ring-1 ring-[#FE72A9]/18 sm:px-4 sm:text-xs">
                <Sparkles className="h-4 w-4" /> 17 años en Santa Elena
              </span>
              <h1 className="brand-title mt-4 max-w-2xl text-[3rem] sm:mt-5 sm:text-6xl lg:text-7xl">
                Regalos para cada momento, elegidos con cariño
              </h1>
              <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-[#7B6D82] sm:mt-5 sm:text-lg">
                Somos una regalería familiar, cercana y completa. Encontrá detalles lindos, útiles y especiales para regalar o regalarte.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <Link to="/productos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FC2DAF] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(252,45,175,0.26)] transition hover:bg-[#FE72A9]">
                  <Gift className="h-4 w-4" /> Ver productos
                </Link>
                <a href={instagramUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#18121D] ring-1 ring-[#98C3D6]/45 transition hover:bg-[#EAF6FB] hover:text-[#28A4DC]">
                  <InstagramLogo className="h-4 w-4" /> Seguir en Instagram
                </a>
              </div>
              <div className="mt-7 flex max-w-xl flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-[#18121D] sm:gap-x-7">
                {["Variedad", "Confianza", "Calidez"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#98C3D6]" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#FE72A9_0%,#FFFFFF_48%,#98C3D6_100%)] p-3 shadow-soft ring-1 ring-white sm:min-h-[380px] sm:rounded-[1.9rem] lg:min-h-[500px]">
              <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-[#18121D] sm:inset-x-6 sm:top-6 sm:text-xs">
                <span>Detalles elegidos</span>
                <span>Santa Elena</span>
              </div>
              <div className="relative h-full min-h-[256px] overflow-hidden rounded-[1.25rem] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9)] sm:min-h-[356px] sm:rounded-[1.65rem] lg:min-h-[476px]">
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out ${
                      index === currentHeroSlide ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_28%,rgba(24,18,29,0.14)_100%)]" />
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/78 px-3 py-2 shadow-sm backdrop-blur">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setCurrentHeroSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentHeroSlide ? "w-7 bg-[#FC2DAF]" : "w-2.5 bg-[#98C3D6]"
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-5 sm:py-7">
        <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-4 sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0">
          {categoryPills.map(({ label, to, icon: Icon, subcategories }) => (
            <div key={label} className="group relative shrink-0 snap-start">
              <Link to={to} className="inline-flex h-11 max-w-[76vw] items-center gap-2 rounded-full border border-[#FE72A9]/16 bg-white px-3.5 text-[13px] font-bold text-[#18121D] shadow-sm transition hover:-translate-y-0.5 hover:border-[#FE72A9]/40 hover:text-[#FC2DAF] hover:shadow-soft sm:h-12 sm:max-w-none sm:px-4 sm:text-sm">
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate whitespace-nowrap">{label}</span>
              </Link>
              {subcategories.length ? (
                <div className="invisible absolute left-0 top-full z-30 mt-2 hidden min-w-56 rounded-[1.25rem] border border-[#FE72A9]/16 bg-white p-2 opacity-0 shadow-editorial transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 sm:block">
                  {subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={label === "Todas las categorías" ? `/productos?categoria=${encodeURIComponent(subcategory)}` : `/productos?categoria=${encodeURIComponent(label)}&subcategoria=${encodeURIComponent(subcategory)}`}
                      className="block rounded-full px-4 py-2 text-sm font-semibold text-[#7B6D82] transition hover:bg-[#FDE7F1] hover:text-[#18121D]"
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-7 sm:py-8">
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">
          <div>
            <p className="eyebrow">Elegidos para regalar</p>
            <h2 className="section-title mt-1">Productos destacados</h2>
          </div>
          <Link to="/productos" className="hidden rounded-full border border-[#FE72A9]/18 bg-white px-4 py-2 text-sm font-bold text-[#18121D] transition hover:bg-[#FDE7F1] hover:text-[#FC2DAF] sm:inline-flex">Ver todos</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onToast={showToast} />
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Categorias</p>
            <h2 className="section-title mt-1">Inspiración por rubro</h2>
          </div>
          <Link to="/categorias" className="hidden rounded-full border border-[#FE72A9]/18 bg-white px-4 py-2 text-sm font-bold text-[#18121D] transition hover:bg-[#FDE7F1] hover:text-[#FC2DAF] sm:inline-flex">Todas</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTiles.slice(0, 6).map((category) => (
            <Link key={category.title} to={category.to} className="group overflow-hidden rounded-[1.5rem] border border-[#FE72A9]/16 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
              <div className="aspect-[16/10] overflow-hidden bg-[#FDE7F1]">
                <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-[#EAF6FB] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#28A4DC]">{category.badge}</span>
                <h3 className="mt-3 text-lg font-bold text-[#18121D]">{category.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#7B6D82]">{category.mood}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#FDE7F1_0%,#EAF6FB_100%)] px-5 py-7 shadow-soft ring-1 ring-white sm:px-7 lg:px-9">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Promociones</p>
              <h2 className="section-title mt-1">Ofertas con encanto</h2>
            </div>
            <Link to="/ofertas" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#18121D] shadow-sm transition hover:bg-[#FC2DAF] hover:text-white">
              <Tag className="h-4 w-4" /> Ver ofertas
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-4">
            {offers.map((product) => (
              <ProductCard key={product.id} product={product} onToast={showToast} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-6 rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-[#FE72A9]/16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#FDE7F1]">
            <img src="/fwdlogoxeneizeregaleria/xeneize-pink.png" alt="Logo Xeneize Regalería" className="aspect-[4/3] h-full w-full object-contain p-8" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Sobre nosotros</p>
            <h2 className="section-title mt-2">17 años acompañando a nuestros clientes</h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#7B6D82]">
              Somos una regalería familiar de Santa Elena, cercana, confiable y completa. Nos gusta ayudarte a encontrar ese detalle que resuelve un regalo y también acompaña un momento especial.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/sobre-nosotros" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#18121D] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#FC2DAF]">
                <HeartHandshake className="h-4 w-4" /> Conocenos
              </Link>
              <a href={instagramUrl} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#EAF6FB] px-5 py-2.5 text-sm font-bold text-[#18121D] ring-1 ring-[#98C3D6]/45 transition hover:bg-[#28A4DC] hover:text-white">
                <InstagramLogo className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-3 sm:grid-cols-3">
          <a href={instagramUrl} className="flex items-center gap-3 rounded-[1.25rem] border border-[#FE72A9]/16 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:text-[#FC2DAF] hover:shadow-soft">
            <InstagramLogo className="h-5 w-5 text-[#FC2DAF]" />
            <span className="text-sm font-bold">Seguinos en Instagram</span>
          </a>
          <Link to="/contacto" className="flex items-center gap-3 rounded-[1.25rem] border border-[#FE72A9]/16 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:text-[#FC2DAF] hover:shadow-soft">
            <Sparkles className="h-5 w-5 text-[#FE72A9]" />
            <span className="text-sm font-bold">Contacto y redes</span>
          </Link>
          <Link to="/productos" className="flex items-center gap-3 rounded-[1.25rem] border border-[#FE72A9]/16 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:text-[#FC2DAF] hover:shadow-soft">
            <Gift className="h-5 w-5 text-[#28A4DC]" />
            <span className="text-sm font-bold">Comprar online</span>
          </Link>
        </div>
      </section>

      <a
        href={instagramUrl}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#28A4DC] text-white shadow-[0_16px_34px_rgba(40,164,220,0.28)] transition-transform hover:scale-105 hover:bg-[#FC2DAF] sm:bottom-6 sm:right-6"
        aria-label="Seguir en Instagram"
      >
        <InstagramLogo className="h-6 w-6" />
      </a>

      <Toast message={toast} />
    </div>
  );
}
