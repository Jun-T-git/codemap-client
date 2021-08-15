import { AxiosResponse } from "axios";
import { axios } from "~/lib/api/config";

export type PostReviewParams = {
  title: string;
  content: string;
  recommendation_level: number;
  difficulty_level: number;
  user_id: string;
  book_id: string;
};

/**
 * 書籍情報を登録
 * @param title
 * @param content
 * @param recommendation_level
 * @param difficulty_level
 */
export const postReviewRequest = async (
  params: PostReviewParams
): Promise<AxiosResponse> => {
  const endPoint = `/reviews`;
  const response = await axios.post(endPoint, params);
  return response;
};
