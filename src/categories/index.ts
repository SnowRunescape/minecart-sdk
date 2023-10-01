import { API } from "@Minecart/api";

export const categories = {
    async all() {
        return API("/shop/categories", "GET");
    }
};