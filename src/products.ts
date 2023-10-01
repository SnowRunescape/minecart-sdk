import { API } from "./api";

export const products = {
    async all(filters = {}) {
        return API("/shop/products", filters);
    }
};