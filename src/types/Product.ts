import { Archive } from "@Minecart/types/Archive";

export type Product = {
  id: number,
  category: number,
  name: string,
  description: string,
  value: string,
  archive: Archive,
}