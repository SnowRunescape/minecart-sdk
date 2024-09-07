import { API } from "@Minecart/services/api";
import { Gateway } from "../gateways/types";
import { Item, Payment } from "./types";

export const payment = {
  async create(
    gateway: Gateway,
    username: string,
    items: Item[],
    coupon?: string
  ) {
    try {
      const payment = await API("/shop/payment", "POST", {
        gateway,
        username,
        coupon,
        cart: items,
      });

      return payment as Payment;
    } catch (error: any) {
      console.error("Error create payment:", error.message);
      return [];
    }
  },
};
