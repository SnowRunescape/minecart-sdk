declare module "minecart-sdk" {
    export type Rule = {
        id: number,
        rule: string,
        description: string,
        punishment: string,
    }

    export type Team = {
        id: number,
        team: string,
        color: string,
        members: Member[],
    }

    export type Member = {
        id: number,
        name: string,
    }

    export type Cart = {
        username: string | null,
        items: Item[],
    }

    export type Item = {
        id: number,
        amount: number,
    }

    export type Product = {
        id: number,
        category: number,
        name: string,
        description: string,
        archive_url: string,
    }

    export const minecart: {
        rules: {
            all(): Promise<Rule[]>;
        };
        team: {
            all(): Promise<Team[]>;
        },
        categories: {
            all(): Promise<any[]>;
        };
        products: {
            all(filters?: Record<string, string | number>): Promise<Product[]>;
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