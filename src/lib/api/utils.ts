import { convertErrors, ApiError } from "./error";
import type { CustomConfigMeta } from "./type";
import { AxiosResponse } from "axios";
const defaultErrorResolver = (error: any) => {
  if (error.response && error.response.data) {
    const message = error.response.data?.data?.message?.[0];
    return new ApiError(
      error.response.data.status,
      message || error.response.data.message
    );
  } else {
    return new ApiError(503, "INTERNAL_ERROR");
  }
};

const defaultResponseResolver = (
  response: AxiosResponse,
  meta: CustomConfigMeta
) => {
  if (meta.shouldResolve) {
    return response.data;
  }
  return response;
};

export const defaultMeta: CustomConfigMeta = {
  appendSlash: true,
  shouldResolve: true,
  errorResolver: defaultErrorResolver,
  responseResolver: defaultResponseResolver,
};
