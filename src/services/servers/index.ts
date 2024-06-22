import { API } from "@Minecart/services/api";
import { Server } from "./types";

export const servers = {
  async all() {
    try {
      const servers = await API("/shop/servers");

      return servers as Server[];
    } catch (error: any) {
      console.error("Error fetching servers:", error.message);
      return [];
    }
  }
};