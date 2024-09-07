import { MINECART_API } from "@Minecart/config";
import axios, { AxiosResponse } from "axios";
import { setupInterceptores } from "./interceptors";
import { RawResponse } from "./types";

const TIMEOUT = 1000 * 10;

export const API = axios.create({
  baseURL: MINECART_API,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptores(API);

export const parseResponseData = <T>(
  response: AxiosResponse<RawResponse<T>> | AxiosResponse<T>
): T => {
  if (
    typeof response.data === "object" &&
    !!response.data &&
    "data" in response.data
  ) {
    return response.data.data;
  }

  return response.data;
};
