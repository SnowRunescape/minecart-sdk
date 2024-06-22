import { MINECART_LOCALSTORAGE_KEY } from "@Minecart/config";
import { API } from "@Minecart/services/api";
import { Gateway } from "@Minecart/services/gateways/types";
import { storage } from "@Minecart/storage";
import { Cart } from "./types";

export const cart = {
  getCart(): Cart {
    return storage.get(MINECART_LOCALSTORAGE_KEY) || { username: null, items: [] };
  },

  setUsername(username: string) {
    const cart = this.getCart();
    cart.username = username;
    storage.set(MINECART_LOCALSTORAGE_KEY, cart);
  },

  addProduct(productId: number, amount = 1) {
    const cart = this.getCart();
    const existingProduct = cart.items.find((product) => product.id === productId);

    if (existingProduct) {
      existingProduct.amount = amount;
    } else {
      cart.items.push({
        id: productId,
        amount
      });
    }

    storage.set(MINECART_LOCALSTORAGE_KEY, cart);
  },

  updateAmountProduct(productId: number, amount: number) {
    const cart = this.getCart();
    const existingProduct = cart.items.find((product) => product.id === productId);

    if (!existingProduct) {
      console.error(`Product with ID ${productId} not found.`);
      return;
    }

    existingProduct.amount = amount;
    storage.set(MINECART_LOCALSTORAGE_KEY, cart);
  },

  removeProduct(productId: number) {
    const cart = this.getCart();
    cart.items = cart.items.filter((product) => product.id !== productId);

    storage.set(MINECART_LOCALSTORAGE_KEY, cart);
  },

  finishOrder(gateway: Gateway) {
    const cart = this.getCart();

    const result = API("/shop/goToPayment", "POST", {
      gateway,
      username: cart.username,
      items: cart.items,
    });

    // @ts-ignore
    return result.redirect;
  },
};