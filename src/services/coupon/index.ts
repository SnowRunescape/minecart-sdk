import { API, parseResponseData } from "@Minecart/services/api";
import { RawResponse } from "@Minecart/services/api/types";
import { Coupon } from "@Minecart/types/Coupon";

export const coupons = {
  async get(coupon: string) {
    try {
      return await API.get<RawResponse<Coupon[]>>(`/shop/coupon/${coupon}`).then(
        (data) => parseResponseData(data)
      );
    } catch (error: any) {
      console.error("Error fetching coupon:", error.message);
      return [];
    }
  },
};
