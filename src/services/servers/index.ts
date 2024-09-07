import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Server } from "@Minecart/types/Server";

export const servers = {
  async all() {
    try {
      return await API.get<RawResponse<Server[]>>("/shop/servers").then(
        (data) => parseResponseData(data)
      );
    } catch (error: any) {
      console.error("Error fetching servers:", error.message);
      return [];
    }
  },
};
