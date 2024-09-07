import { API, parseResponseData } from "@Minecart/services/api";
import { Rule } from "@Minecart/types/Rule";
import { RawResponse } from "../api/types";

export const rules = {
  async all() {
    try {
      return await API.get<RawResponse<Rule[]>>("/shop/rules").then((data) =>
        parseResponseData(data)
      );
    } catch (error: any) {
      console.error("Error fetching rules:", error.message);
      return [];
    }
  },
};
