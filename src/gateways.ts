import { API } from "./api";

export const gateways = {
    async all() {
        return API("/shop/gateways");
    }
};