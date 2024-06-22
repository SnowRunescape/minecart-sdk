import { cart } from "@Minecart/services/cart";
import { categories } from "@Minecart/services/categories";
import { gateways } from "@Minecart/services/gateways";
import { news } from "@Minecart/services/news";
import { products } from "@Minecart/services/products";
import { rules } from "@Minecart/services/rules";
import { servers } from "@Minecart/services/servers";
import { store } from "@Minecart/services/store";
import { team } from "@Minecart/services/team";

export const minecart = {
  store,
  news,
  rules,
  team,
  categories,
  servers,
  products,
  gateways,
  cart,
}

// Check another way to expose the minecart variable in webpack
// @ts-ignore
window.minecart = minecart;