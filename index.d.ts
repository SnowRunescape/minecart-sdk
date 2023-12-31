declare module "minecart-sdk" {
    export type Store = {
        name: string,
        server_ip: string,
        customization: Customization,
        widgets: Widgets,
    }

    export type Customization = {
        logo: string,
        background: string,
        background_cash: string,
        description: string,
        colors: {
            '--color0': string,
            '--color1': string,
            '--color2': string,
        }
        menu: {
            home: Menu,
            shop: Menu,
            rules: Menu,
            team: Menu,
        }
    }

    export type Menu = {
        enable: boolean,
        image: string,
    }

    export type Widgets = {
        discord: {
            id: number,
        },
        twitter: {
            name: string,
        },
        purchases: {
            enabled: boolean,
            display_value: boolean,
            listing_type: string,
            listing_quantity: number,
            list: {
                buyer: string,
                amount?: string,
            }
        }
    }

    export type News = {
        id: number,
        title: string,
        description: string,
        news: string,
        posted_by: string,
        created_at: string,
        archive_url: string,
    }

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

    export type Server = {
        id: number,
        server_name: string,
        archive_url: string,
    }

    export type Product = {
        id: number,
        category: number,
        name: string,
        description: string,
        archive_url: string,
    }

    export type Gateway = "MercadoPago" | "PayPal" | "PicPay" | "Pix" | "Stripe";

    export const minecart: {
        store: {
            get(): Promise<Store>;
        },
        news: {
            all(): Promise<News[]>;
        },
        rules: {
            all(): Promise<Rule[]>;
        };
        team: {
            all(): Promise<Team[]>;
        },
        categories: {
            all(): Promise<any[]>;
        };
        servers: {
            all(): Promise<Server[]>;
        };
        products: {
            all(filters?: Record<string, string | number>): Promise<Product[]>;
        };
        gateways: {
            all(): Promise<Gateway[]>;
        };
        cart: {
            getCart(): Cart;
            setUsername(username: string): void;
            addProduct(productId: number, amount?: number): void;
            updateAmountProduct(productId: number, amount: number): void;
            removeProduct(productId: number): void;
            finishOrder(gateway: Gateway): string;
        };
    };
}