import { Archive } from "@Minecart/types/Archive";
import { User } from "@Minecart/types/User";

export type News = {
  id: number,
  title: string,
  description: string,
  news: string,
  user: User,
  created_at: string,
  archive: Archive,
}