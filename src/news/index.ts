import { API } from "@Minecart/api";
import { News } from "./types";

export const news = {
    async all() {
        try {
            const news = await API("/shop/news");

            return news as News[];
        } catch (error: any) {
            console.error("Error fetching news:", error.message);
            return [];
        }
    }
};