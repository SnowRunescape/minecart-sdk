import { API } from "@Minecart/api";

export const gateways = {
    async all() {
        return API("/shop/gateways");
    }
};