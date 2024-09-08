import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Payment } from "@Minecart/types/Payment";
import { PaymentCreateProps } from "./types";

export const payment = {
  async create({ items, ...props }: PaymentCreateProps) {
    try {
      return await API.post<RawResponse<Payment>>("/shop/payment", {
        cart: items,
        ...props,
      }).then((data) => parseResponseData(data));
    } catch (error: any) {
      console.error("Error create payment:", error.message);
      return [];
    }
  },
};
