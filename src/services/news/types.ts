import { Archive } from "@Minecart/types/Archive";

export type News = {
  id: number,
  title: string,
  description: string,
  news: string,
  posted_by: string,
  created_at: string,
  archive: Archive,
}