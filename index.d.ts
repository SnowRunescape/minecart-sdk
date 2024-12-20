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
    shop_server: number;
    category: number;
    name: string;
    description: string;
    value: string;
    archive: Archive;
  };

  export type Category = {
    id: number;
    name: string;
    archive: Archive;
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
      }): Promise<Payment>;
    };
    setApiKey(key: string): void;
  };
}
