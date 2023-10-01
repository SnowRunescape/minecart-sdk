import { API } from "@Minecart/api";

export const products = {
    async all(filters = {}) {
        return API("/shop/products", "GET", filters);
    }
};