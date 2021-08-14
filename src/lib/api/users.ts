import { AxiosResponse } from "axios";
import { axios } from "~/lib/api/config";

/**
 * ユーザー情報を取得
 * @param id
 */

export const getUserDetailRequest = async (
  id: string
): Promise<AxiosResponse> => {
  const endPoint = `/users/${id}`;
  const response = await axios.get(endPoint);
  return response;
};
