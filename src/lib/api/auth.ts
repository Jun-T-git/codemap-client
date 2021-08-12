import { AxiosResponse } from "axios";
import { axios } from "~/lib/api/config";

/**
 * サインアップ
 * @param SignUpParams
 */

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string; // パスワード確認
  image?: string; // プロフィール画像
};

export const signUpRequest = async (
  params: SignUpParams
): Promise<AxiosResponse> => {
  const endPoint = "/auth";
  const response = await axios.post(endPoint, params);
  console.log(response);
  return response;
};

/**
 * サインイン
 * @param SignInParams
 */

export type SignInParams = {
  email: string;
  password: string;
};

export const signInRequest = async (
  params: SignInParams
): Promise<AxiosResponse> => {
  const endPoint = "/auth/sign_in";
  const response = await axios.post(endPoint, params);
  console.log(response);
  return response;
};

/**
 * サインアウト
 * @param AuthParams
 */

export type AuthParams = {
  uid: string;
  "access-token": string;
  client: string;
};

export const signOutRequest = async (
  params: AuthParams
): Promise<AxiosResponse> => {
  const endPoint = "/auth/sign_out";
  const response = await axios.delete(endPoint, { data: params });
  console.log(response);
  return response;
};

/**
 * アカウント削除
 * @param AuthParams
 */

export const deleteUserRequest = async (
  params: AuthParams
): Promise<AxiosResponse> => {
  const endPoint = "/auth";
  const response = await axios.delete(endPoint, { data: params });
  console.log(response);
  return response;
};
