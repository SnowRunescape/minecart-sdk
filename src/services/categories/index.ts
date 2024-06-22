import { API } from "@Minecart/services/api";

export const categories = {
  async all() {
    return API("/shop/categories", "GET");
  }
};