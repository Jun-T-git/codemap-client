import { AxiosResponse } from "axios";
import { axios } from "~/lib/api/config";

export type PostBookParams = {
  title: string;
  author: string;
  image?: string;
  url?: string;
};

/**
 * 書籍情報を登録
 * @param title
 * @param author
 * @param image
 * @param url
 */
export const postBookRequest = async (
  params: PostBookParams
): Promise<AxiosResponse> => {
  const endPoint = `/books`;
  const response = await axios.post(endPoint, params);
  return response;
};
