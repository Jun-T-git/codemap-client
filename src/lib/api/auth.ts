// Auth関係

import { AxiosResponse } from "axios";
import { axios } from "~/lib/api/api";

/**
 * サインイン
 * @param signInParams
 */

type signInParams = {
  email: string;
  password: string;
};

export const signIn = async (params: signInParams): Promise<AxiosResponse> => {
  const endPoint = "/auth/sign_in";
  const response = await axios.post(endPoint, params);
  console.log(response);
  return response;
};
