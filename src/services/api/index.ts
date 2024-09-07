import { MINECART_API } from "@Minecart/config";

interface Filters {
  [key: string]: any;
}

export const API = async (uri: string, method = "GET", filters: Filters = {}) => {
  const url = new URL(`${MINECART_API}${uri}`);

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "GET") {
    Object.entries(filters).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  } else if (method === "POST") {
    options.body = JSON.stringify(filters);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch. Status: ${response.status}`);
  }

  const result = await response.json();

  return result;
}