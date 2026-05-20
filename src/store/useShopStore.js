import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShopStore = create(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],
      orders: [],
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
      createOrder: (order) =>
        set((state) => ({
          orders: [
            {
              ...order,
              id: order.id ?? `XE-${Date.now().toString().slice(-6)}`,
              status: order.status ?? "pendiente",
              createdAt: order.createdAt ?? new Date().toISOString()
            },
            ...state.orders
          ]
        })),
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
