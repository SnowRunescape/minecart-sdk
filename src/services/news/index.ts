import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { News } from "@Minecart/types/News";

export const news = {
  async all() {
    try {
      return await API.get<RawResponse<News[]>>("/shop/news").then((data) =>
        parseResponseData(data)
      );
    } catch (error: any) {
      console.error("Error fetching news:", error.message);
      return [];
    }
  },
};
