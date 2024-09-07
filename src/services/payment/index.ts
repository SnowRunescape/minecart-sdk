import { API } from "@Minecart/services/api";
import { Item, Payment } from "./types";

export const payment = {
  async create(username: string, coupon: string, items: Item[]) {
    try {
      const payment = await API("/shop/payment", "POST", {
        username,
        coupon,
        cart: items,
      });

      return payment as Payment;
    } catch (error: any) {
      console.error("Error create payment:", error.message);
      return [];
    }
  }
};