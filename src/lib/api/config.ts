import axiosBase, { AxiosResponse } from "axios";

// APIのURL
export const apiBaseUrl = "http://localhost:8000/api/v1";

// axiosの基本設定
export const axios = axiosBase.create({
  baseURL: apiBaseUrl,
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});
