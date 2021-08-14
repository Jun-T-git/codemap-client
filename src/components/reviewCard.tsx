import ReactStars from "react-rating-stars-component";
import { Review } from "~/lib/types/review";

type Props = {
  review: Review;
};

/**
 * レビュー表示カード
 * @param review
 */

const ReviewCard: React.VFC<Props> = ({ review }) => {
  return (
    <div className="bg-white border rounded p-5">
      <h2 className={"text-base font-bold"}>{review.title}</h2>
      <div className="flex space-x-10 my-1">
        <div className="flex space-x-2">
          <label className="text-sm">おすすめ度：</label>
          <ReactStars
            count={5}
            value={review.recommendation_level}
            isHalf={false}
            edit={false}
          />
        </div>
        <div className="flex space-x-2">
          <label className="text-sm">難易度：</label>
          <ReactStars
            count={5}
            value={review.difficulty_level}
            isHalf={false}
            edit={false}
          />
        </div>
      </div>
      <p className="text-sm my-1">{review.content}</p>
    </div>
  );
};

export default ReviewCard;
