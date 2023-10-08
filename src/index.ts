import { store } from "@Minecart/store";
import { gateways } from "@Minecart/gateways";
import { categories } from "@Minecart/categories";
import { products } from "@Minecart/products";
import { cart } from "@Minecart/cart";
import { news } from "@Minecart/news";
import { rules } from "@Minecart/rules";
import { team } from "@Minecart/team";

export const minecart = {
    store,
    news,
    rules,
    team,
    categories,
    products,
    gateways,
    cart,
}

// Check another way to expose the minecart variable in webpack
// @ts-ignore
window.minecart = minecart;