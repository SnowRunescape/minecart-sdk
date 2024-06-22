import { API } from "@Minecart/services/api";
import { Store } from "./types";

export const store = {
  async get() {
    try {
      const store = await API("/shop");

      return store as Store;
    } catch (error: any) {
      console.error("Error fetching store:", error.message);
      return [];
    }
  }
};