import { AxiosResponse } from "axios";
import { axios } from "~/lib/api/config";

export type PostReviewParams = {
  title: string;
  content: string;
  recommendation_level: number;
  difficulty_level: number;
};

/**
 * 書籍情報を登録
 * @param title
 * @param content
 * @param recommendation_level
 * @param difficulty_level
 */
export const PostReviewRequest = async (
  params: PostReviewParams
): Promise<AxiosResponse> => {
  const endPoint = `/reviews`;
  const response = await axios.post(endPoint, params);
  return response;
};

/**
 * レビュー情報を取得
 */
// export const getReviewsByBook = async (): Promise<AxiosResponse> => {
//   const endPoint = `/reviews`;
//   const response = await axios.get(endPoint);
//   return response;
// };
