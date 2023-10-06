import { API } from "@Minecart/api";
import { News } from "./types";

export const news = {
    async all() {
        try {
            const products = await API("/shop/news");

            return products as News[];
        } catch (error: any) {
            console.error("Error fetching news:", error.message);
            return [];
        }
    }
};