import React, { useState } from "react";
import Button from "./button";
import Input from "./input";

/**
 * レビューの投稿フォーム
 * @param children 内容
 */

const ReviewForm: React.VFC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [recommendationLevel, setRecommendationLevel] = useState<number>(5);
  const [difficultyLevel, setdifficultyLevel] = useState<number>(5);

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
        <Button onClick={() => {}}>投稿</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
