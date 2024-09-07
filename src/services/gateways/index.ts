import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Gateway } from "@Minecart/types/Gateway";

export const gateways = {
  async all() {
    try {
      return await API.get<RawResponse<Gateway[]>>("/shop/gateways").then(
        (data) => parseResponseData(data)
      );
    } catch (error: any) {
      console.error("Error fetching gateways:", error.message);
      return [];
    }
  },
};
