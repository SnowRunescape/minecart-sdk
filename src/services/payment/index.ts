import { API } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Gateway } from "@Minecart/types/Gateway";
import { Item, Payment } from "@Minecart/types/Payment";

export const payment = {
  async create(
    gateway: Gateway,
    username: string,
    items: Item[],
    coupon?: string
  ) {
    try {
      return await API.post<RawResponse<Payment>>("/shop/payment", {
        gateway,
        username,
        coupon,
        cart: items,
      });
    } catch (error: any) {
      console.error("Error create payment:", error.message);
      return [];
    }
  },
};
