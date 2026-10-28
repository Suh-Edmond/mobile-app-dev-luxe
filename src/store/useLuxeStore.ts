import { Product } from "@/types/app.types";
import { create } from "zustand";
import { ILuxeStore } from "./luxeStore.types";
export const useLuxeStore = create<ILuxeStore>((set, get) => ({
  cart: [],

  addToCart: (product: Product) => {
    const productInCart = get().cart.find(
      (item) => item.name.toLowerCase() === product.name.toLowerCase(),
    );

    if (productInCart === null || productInCart === undefined) {
      let id = get().cart.length + 1;
      set((state) => ({
        cart: [
          ...state.cart,
          {
            id: id.toString(),
            name: product.name,
            description: product.description,
            image: product.image,
            category: product.category,
            price: product.price,
          },
        ],
      }));
    }
  },

  removeFromCart: (id: string) => {
    console.log(id);

    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    }));
  },
}));
