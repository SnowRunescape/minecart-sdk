import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Store } from "@Minecart/types/Store";

export const store = {
  async get() {
    try {
      return await API.get<RawResponse<Store>>("/shop").then((data) =>
        parseResponseData(data)
      );
    } catch (error: any) {
      console.error("Error fetching store:", error.message);
      return [];
    }
  },
};
