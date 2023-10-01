
declare module "@Minecart/gateways" {
    export const gateways: {
        all(): Promise<any>;
    };
}

declare module "@Minecart/products" {
    export const products: {
        all(filters?: Record<string, string | number>): Promise<any[]>;
    };
}

declare module "@Minecart/cart" {
    export type Cart = {
        username: string | null,
        items: Item[],
    }

    export type Item = {
        id: number,
        amount: number,
    }

    export const cart: {
        getCart(): Cart;
        setUsername(username: string): void;
        addProduct(productId: number, amount?: number): void;
        updateAmountProduct(productId: number, amount: number): void;
        removeProduct(productId: number): void;
        finishOrder(gateway: string): string;
    };
}

declare module "@Minecart/minecart" {
    import { gateways } from "@Minecart/gateways";
    import { products } from "@Minecart/products";
    import { cart } from "@Minecart/cart";

    export const minecart: {
        products: typeof products;
        gateways: typeof gateways;
        cart: typeof cart;
    };
}