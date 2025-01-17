import { Archive } from "@Minecart/types/Archive";

export type Product = {
  id: number;
  shop_server: number;

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
