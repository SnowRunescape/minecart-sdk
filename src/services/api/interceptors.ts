import { AxiosError, AxiosInstance } from "axios";

const onRequest = (config: any) => {
  const authorization = localStorage.getItem("authorization");

  if (authorization) {
    config.headers.Authorization = `Bearer ${authorization}`;
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
