import { MINECART_API } from "@Minecart/config";

interface Filters {
    [key: string]: any;
}

export const API = async (uri: string, method = "GET", filters: Filters = {}) => {
    const url = new URL(`${MINECART_API}${uri}`);

    Object.entries(filters).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
    });

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
    }

    const result = await response.json();

    return result;
}