export const categories = [
  { name: "Ofertas", path: "/ofertas", subcategories: [] },
  {
    name: "Bazar y hogar",
    path: "/productos?categoria=Bazar%20y%20hogar",
    subcategories: ["Mates y termos", "Botellas y vasos", "Lámparas", "Deco"]
  },
  {
    name: "Marroquinería y moda",
    path: "/productos?categoria=Marroquiner%C3%ADa%20y%20moda",
    subcategories: ["Mochilas", "Carteras y bolsos", "Valijas", "Bufandas", "Accesorios para el pelo"]
  },
  {
    name: "Belleza y Bijou",
    path: "/productos?categoria=Belleza%20y%20Bijou",
    subcategories: ["Maquillaje", "Accesorios para uñas", "Aros", "Collares", "Pulseras"]
  },
  {
    name: "Librería",
    path: "/productos?categoria=Librer%C3%ADa",
    subcategories: ["Escolar", "Universitario", "Agendas", "Libros"]
  },
  {
    name: "Juguetería",
    path: "/productos?categoria=Jugueter%C3%ADa",
    subcategories: ["Juguetes", "Peluches", "Juegos de mesa"]
  },
  {
    name: "Tecnología",
    path: "/productos?categoria=Tecnolog%C3%ADa",
    subcategories: ["Auriculares", "Carga y Accesorios", "Parlantes"]
  }
];

export const categoryTiles = [
  {
    title: "Bazar y hogar",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
    to: "/productos?categoria=Bazar%20y%20hogar",
    accent: "bg-blush-200 text-ink",
    badge: "HOGAR",
    mood: "Mates, deco y objetos utiles para todos los dias.",
    subcategories: ["Mates y termos", "Botellas y vasos", "Lámparas", "Deco"]
  },
  {
    title: "Marroquinería y moda",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    to: "/productos?categoria=Marroquiner%C3%ADa%20y%20moda",
    accent: "bg-white text-ink",
    badge: "MODA",
    mood: "Bolsos, mochilas y accesorios de uso diario.",
    subcategories: ["Mochilas", "Carteras", "Valijas", "Bufandas"]
  },
  {
    title: "Belleza y Bijou",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    to: "/productos?categoria=Belleza%20y%20Bijou",
    accent: "bg-nude text-white",
    badge: "BIJOU",
    mood: "Maquillaje, accesorios y detalles para regalar.",
    subcategories: ["Maquillaje", "Aros", "Collares", "Pulseras"]
  },
  {
    title: "Librería",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    to: "/productos?categoria=Librer%C3%ADa",
    accent: "bg-coral text-white",
    badge: "LIBRERIA",
    mood: "Agendas, cuadernos, utiles y organizacion.",
    subcategories: ["Escolar", "Universitario", "Agendas", "Libros"]
  },
  {
    title: "Juguetería",
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=900&q=80",
    to: "/productos?categoria=Jugueter%C3%ADa",
    accent: "bg-blush-200 text-ink",
    badge: "JUEGOS",
    mood: "Juguetes, juegos de mesa y regalos para chicos.",
    subcategories: ["Juguetes", "Peluches", "Juegos de mesa"]
  },
  {
    title: "Tecnología",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    to: "/productos?categoria=Tecnolog%C3%ADa",
    accent: "bg-nude text-white",
    badge: "TECH",
    mood: "Auriculares, carga, parlantes y accesorios utiles.",
    subcategories: ["Auriculares", "Carga y Accesorios", "Parlantes"]
  }
];
