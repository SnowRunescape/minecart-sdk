import { Archive } from "@Minecart/types/Archive";

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
