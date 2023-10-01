declare module "minecart-sdk" {
    export type Cart = {
        username: string | null,
        items: Item[],
    }

    export type Item = {
        id: number,
        amount: number,
    }

    export const minecart: {
        categories: {
            all(): Promise<any>;
        };
        products: {
            all(filters?: Record<string, string | number>): Promise<any[]>;
        };
        gateways: {
            all(): Promise<any>;
        };
        cart: {
            getCart(): Cart;
            setUsername(username: string): void;
            addProduct(productId: number, amount?: number): void;
            updateAmountProduct(productId: number, amount: number): void;
            removeProduct(productId: number): void;
            finishOrder(gateway: string): string;
        };
    };
}