import { gateways } from "./src/gateways";
import { products } from "./src/products";
import { cart } from "./src/cart";

declare module "minecart-sdk" {
    export const minecart: {
        products: typeof products;
        gateways: typeof gateways;
        cart: typeof cart;
    };
}