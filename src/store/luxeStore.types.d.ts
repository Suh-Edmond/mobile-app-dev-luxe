import { Product } from "@/types/app.types";

type ILuxeStore = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};
