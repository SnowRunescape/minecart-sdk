import { API } from "@Minecart/services/api";
import { Gateway } from "./types";

export const gateways = {
  async all() {
    try {
      const gateways = await API("/shop/gateways");

      return gateways as Gateway[];
    } catch (error: any) {
      console.error("Error fetching gateways:", error.message);
      return [];
    }
  }
};