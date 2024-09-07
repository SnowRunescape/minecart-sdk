import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Product } from "@Minecart/types/Product";

export const products = {
  async all(filters = {}) {
    try {
      return await API.get<RawResponse<Product[]>>("/shop/products", {
        params: filters,
      }).then((data) => parseResponseData(data));
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
      return [];
    }
  },
};
