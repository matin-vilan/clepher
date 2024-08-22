import { RequestOptions } from "../types/req";
import { APIKEY, BASE_URL } from "../constants/global";

// ==================================== request with Authorization header =====================================
export const authRequest = async (
  url: string,
  { method = "GET", headers, body, ...restOptions }: RequestOptions
) => {
  const baseURL = BASE_URL ?? "";
  const reqHeaders = new Headers();

  if (body && !(body instanceof FormData)) {
    reqHeaders.set("Content-Type", "application/json");
  }
  if (headers) {
    Object.entries(headers).forEach((el) => reqHeaders.set(el[0], el[1]));
  }

  const newOptions = {
    method,
    headers: reqHeaders,
    body,
    ...restOptions,
  };

  const response = await fetch(baseURL + `${url}&apikey=${APIKEY}`, newOptions)
    .then((res) => res.json())
    .then((res) => res);

  if (!response.success) {
    const error = new Error(
      JSON.stringify({ message: response.data, status: response?.status })
    );
    throw error;
  }
  return response;
};
