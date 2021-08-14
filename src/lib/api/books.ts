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
export const PostBookRequest = async (
  params: PostBookParams
): Promise<AxiosResponse> => {
  const endPoint = `/books`;
  const response = await axios.post(endPoint, params);
  return response;
};

/**
 * 書籍情報を取得
 */
export const getBooksRequest = async (): Promise<AxiosResponse> => {
  const endPoint = `/books`;
  const response = await axios.get(endPoint);
  return response;
};

/**
 * 書籍の詳細情報を取得
 */
export const getBookDetailRequest = async (
  id: string
): Promise<AxiosResponse> => {
  const endPoint = `/books/${id}`;
  const response = await axios.get(endPoint);
  return response;
};
