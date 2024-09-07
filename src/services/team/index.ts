import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Team } from "@Minecart/types/Team";

export const team = {
  async all() {
    try {
      return await API.get<RawResponse<Team[]>>("/shop/team").then((data) =>
        parseResponseData(data)
      );
    } catch (error: any) {
      console.error("Error fetching team:", error.message);
      return [];
    }
  },
};
