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
          const stock = Number(product.stock ?? 999999);
          if (stock <= 0) return state;
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            const nextQuantity = Math.min(stock, existing.quantity + quantity);
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: nextQuantity } : item
              )
            };
          }
          return { cart: [...state.cart, { ...product, quantity: Math.min(stock, quantity) }] };
        }),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => {
          const item = state.cart.find((cartItem) => cartItem.id === id);
          const stock = Number(item?.stock ?? 999999);

          return {
            cart: quantity <= 0
              ? state.cart.filter((cartItem) => cartItem.id !== id)
              : state.cart.map((cartItem) => (
                cartItem.id === id ? { ...cartItem, quantity: Math.min(stock, quantity) } : cartItem
              ))
          };
        }),
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
