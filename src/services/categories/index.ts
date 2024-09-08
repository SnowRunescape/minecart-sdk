import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Category } from "@Minecart/types/Category";

export const categories = {
  async all() {
    return API.get<RawResponse<Category[]>>("/shop/categories").then((data) =>
      parseResponseData(data)
    );
  },
};
