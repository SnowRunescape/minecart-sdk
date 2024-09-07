import { AxiosError, AxiosInstance } from "axios";

const onRequest = (config: any) => {
  // @ts-ignore
  const key = window?.minecartApiKey;

  if (key) {
    config.headers["X-MINECART-KEY"] = key;
  }

  return config;
};

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

const onResponse = (response: any) => {
  return response;
};

const onResponseError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const setupInterceptores = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
};
