import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShopStore = create(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],
      user: null,
      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
              )
            };
          }
          return { cart: [...state.cart, { ...product, quantity }] };
        }),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: quantity <= 0
            ? state.cart.filter((item) => item.id !== id)
            : state.cart.map((item) => (item.id === id ? { ...item, quantity } : item))
        })),
      clearCart: () => set({ cart: [] }),
      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.favorites.some((item) => item.id === product.id);
          return {
            favorites: exists
              ? state.favorites.filter((item) => item.id !== product.id)
              : [...state.favorites, product]
          };
        }),
      isFavorite: (id) => get().favorites.some((item) => item.id === id),
      login: (user) => set({ user }),
      logout: () => set({ user: null })
    }),
    { name: "xeneize-shop" }
  )
);
