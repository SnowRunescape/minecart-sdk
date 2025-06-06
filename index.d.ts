declare module "minecart-sdk" {
  export type Store = {
    name: string;
    server_ip: string;
    customization: Customization;
    widgets: Widgets;
  };

  export type User = {
    username: string;
  };

  export type Archive = {
    url: string;
  };

  export type Customization = {
    logo: string;
    background: string;
    background_cash: string;
    description: string;
    colors: {
      "--color0": string;
      "--color1": string;
      "--color2": string;
    };
    menu: {
      home: Menu;
      shop: Menu;
      rules: Menu;
      team: Menu;
    };
  };

  export type Menu = {
    enable: boolean;
    archive: Archive;
  };

  export type Widgets = {
    discord: {
      id: number;
    };
    twitter: {
      name: string;
    };
    purchases: {
      enabled: boolean;
      display_value: boolean;
      listing_type: string;
      listing_quantity: number;
      list: {
        buyer: string;
        amount?: string;
      }[];
    };
    goal: {
      enabled: boolean;
      display_value: boolean;
      target_value: number;
      description: string;
    };
  };

  export type News = {
    id: number;
    title: string;
    description: string;
    news: string;
    user: User;
    created_at: string;
    archive: Archive;
  };

  export type Rule = {
    id: number;
    rule: string;
    description: string;
    punishment: string;
  };

  export type Team = {
    id: number;
    team: string;
    color: string;
    members: Member[];
  };

  export type Member = {
    id: number;
    username: string;
  };

  export type Server = {
    id: number;
    server_name: string;
    archive: Archive;
  };

  export type Product = {
    id: number;
    server_id: number;

    /**
     * @deprecated Use `categories` instead.
     */
    category: number;

    categories: number[];
    name: string;
    description: string;
    value: string;
    archive: Archive;
  };

  export type Category = {
    id: number;
    name: string;
    archive: Archive;
    order: number;
  };

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

  export type Gateway = "MercadoPago" | "PayPal" | "PicPay" | "Pix" | "Stripe";

  export type Payment = {
    url: string;
  };

  export type Item = {
    id: number;
    amount: number;
  };

  export const minecart: {
    store: {
      get(): Promise<Store>;
      rum(): Promise<void>;
    };
    news: {
      all(): Promise<News[]>;
    };
    rules: {
      all(): Promise<Rule[]>;
    };
    team: {
      all(): Promise<Team[]>;
    };
    categories: {
      all(): Promise<Category[]>;
    };
    servers: {
      all(): Promise<Server[]>;
    };
    products: {
      all(filters?: Record<string, string | number>): Promise<Product[]>;
    };
    coupons: {
      get(coupon: string): Promise<Coupon[]>;
    };
    gateways: {
      all(): Promise<Gateway[]>;
    };
    payment: {
      create(props: {
        gateway: Gateway;
        username: string;
        items: Item[];
        coupon?: string;
        first_name?: string;
        last_name?: string;
        phone?: string;
        cpf?: string;
        email?: string;
        back_urls?: {
          success?: string;
          failure?: string;
          pending?: string;
          cancel?: string;
        };
      }): Promise<Payment>;
    };
    setApiKey(key: string): void;
  };
}
