import { Gateway } from "@Minecart/types/Gateway";
import { Item } from "@Minecart/types/Payment";

export type PaymentCreateProps = {
  gateway: Gateway;
  username: string;
  items: Item[];
  coupon?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  cpf?: string;
  email?: string;
};
