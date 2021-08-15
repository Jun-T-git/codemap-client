import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { PostReviewParams, postReviewRequest } from "~/lib/api/reviews";
import Button from "./button";
import Input from "./input";

type Props = {
  userId: string;
  bookId: string;
  onPost?: Function;
};

/**
 * レビューの投稿フォーム
 * @param userId
 * @param bookId
 * @param onPost 投稿後の処理
 */

const ReviewForm: React.VFC<Props> = ({
  userId,
  bookId,
  onPost = () => {},
}) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [recommendationLevel, setRecommendationLevel] = useState<number>(5);
  const [difficultyLevel, setDifficultyLevel] = useState<number>(5);

  const postReview = async () => {
    const postReviewParams: PostReviewParams = {
      title: title,
      content: content,
      recommendation_level: recommendationLevel,
      difficulty_level: difficultyLevel,
      user_id: userId,
      book_id: bookId,
    };
    try {
      const response = await postReviewRequest(postReviewParams);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white border rounded px-5 py-10 mx-auto w-full flex flex-col space-y-14">
      <h1 className="text-2xl font-bold text-center">レビューを投稿する</h1>
      <div className="flex flex-col space-y-7">
        <Input
          label="タイトル"
          placeholder="例：エンジニアの必読書！"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="grid grid-cols-2">
          <div className="flex space-x-3 items-center">
            <label className="text-gray-700 text-sm md:text-lg font-bold">
              おすすめ度
            </label>
            <ReactStars
              count={5}
              size={24}
              value={recommendationLevel}
              isHalf={false}
              edit={true}
              onChange={(value) => setRecommendationLevel(Number(value))}
            />
          </div>
          <div className="flex space-x-3 items-center">
            <label className="text-gray-700 text-sm md:text-lg font-bold">
              難易度
            </label>
            <ReactStars
              count={5}
              size={24}
              value={difficultyLevel}
              isHalf={false}
              edit={true}
              onChange={(value) => setDifficultyLevel(Number(value))}
            />
          </div>
        </div>
        <Input
          label="詳細"
          placeholder={`例：\n「良いコードとは何か」について書かれた本です。\n使用する言語に関係なく、エンジニアとして生きていくなら必ず役に立つと思います。`}
          value={content}
          type={"textarea"}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          onClick={async () => {
            await postReview();
            onPost();
          }}
        >
          投稿
        </Button>
      </div>
    </div>
  );
};

export default ReviewForm;
