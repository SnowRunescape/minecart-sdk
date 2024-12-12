export type Coupon = {
  type: CouponType;
  discount: number;
  min_cart_amount: number;
  products_with_discount: number[];
};

export enum CouponType {
  PERCENTAGEM = 0,
  FIXED = 1,
}
