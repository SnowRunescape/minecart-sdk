import { API } from "@Minecart/services/api";
import { Product } from "./types";

export const products = {
  async all(filters = {}) {
    try {
      const products = await API("/shop/products", "GET", filters);

      return products as Product[];
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
      return [];
    }
  }
};