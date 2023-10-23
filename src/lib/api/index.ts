import { appConfig } from "@lib/appConfig";
import { AxiosWrapperConfig } from "./type";
import { createAxiosInstance } from "./client";
import { getToken } from "@lib/cookies";

const request = createAxiosInstance({
  meta: {
    getAuthHeader: () =>
      getToken() ? { "Authorization	": `Bearer ${getToken()}` } : {},
  },
});

request.defaults.baseURL = appConfig.apiUrl;

export const api = {
  request: <Response = any>(config: AxiosWrapperConfig): Promise<Response> =>
    request(config),
  get: <Response = any>(
    url: string,
    config: AxiosWrapperConfig = {}
  ): Promise<Response> =>
    request({
      url,
      method: "get",
      ...config,
    }),
  post: <Response = any>(
    url: string,
    data: any,
    config: AxiosWrapperConfig = {}
  ): Promise<Response> =>
    request({
      url,
      method: "post",
      data,
      ...config,
    }),
  put: <Response = any>(
    url: string,
    data: any,
    config: AxiosWrapperConfig = {}
  ): Promise<Response> =>
    request({
      url,
      method: "put",
      data,
      ...config,
    }),
};

export { endpoints } from "./endpoints";
