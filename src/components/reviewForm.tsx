import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { PostReviewParams, PostReviewRequest } from "~/lib/api/reviews";
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
      const response = await PostReviewRequest(postReviewParams);
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
          placeholder="name1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-evenly items-center">
          <div className="flex space-x-2 items-center">
            <label className="text-gray-700 text-sm md:text-lg font-bold">
              おすすめ度：
            </label>
            <ReactStars
              count={5}
              size={24}
              value={recommendationLevel}
              isHalf={false}
              edit={true}
              onChange={(e) => setRecommendationLevel(Number(e.target.value))}
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="text-gray-700 text-sm md:text-lg font-bold">
              難易度：
            </label>
            <ReactStars
              count={5}
              size={24}
              value={difficultyLevel}
              isHalf={false}
              edit={true}
              onChange={(e) => setDifficultyLevel(Number(e.target.value))}
            />
          </div>
        </div>
        <Input
          label="詳細"
          placeholder="test1@example.com"
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
