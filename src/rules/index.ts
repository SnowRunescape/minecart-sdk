import { API } from "@Minecart/api";
import { Rule } from "./types";

export const rules = {
    async all() {
        try {
            const products = await API("/shop/rules");

            return products as Rule[];
        } catch (error: any) {
            console.error("Error fetching rules:", error.message);
            return [];
        }
    }
};