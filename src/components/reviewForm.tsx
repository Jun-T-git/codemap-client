import React, { useState } from "react";
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
  const [difficultyLevel, setdifficultyLevel] = useState<number>(5);

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
    <div className="bg-white border rounded px-16 py-10 mx-auto my-7 max-w-3xl flex flex-col space-y-14">
      <h1 className="text-3xl font-bold text-center">レビューを投稿する</h1>
      <div className="flex flex-col space-y-7">
        <Input
          label="タイトル"
          placeholder="name1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="詳細"
          placeholder="test1@example.com"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Input
          label="おすすめ度"
          placeholder="5"
          value={String(recommendationLevel)}
          onChange={(e) => setRecommendationLevel(Number(e.target.value))}
        />
        <Input
          label="難易度"
          placeholder="5"
          value={String(difficultyLevel)}
          onChange={(e) => setdifficultyLevel(Number(e.target.value))}
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
