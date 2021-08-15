import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import BookDetail from "~/components/bookDetail";
import Button from "~/components/button";
import ReviewCard from "~/components/reviewCard";
import ReviewForm from "~/components/reviewForm";
import { getBookDetailRequest } from "~/lib/api/books";
import { Book } from "~/lib/types/book";
import { Review } from "~/lib/types/review";
import { userInfoState } from "~/recoil/userInfo";

const Post = () => {
  const initialBook: Book = {
    id: "",
    title: "",
    author: "",
    image: "",
    url: "",
    created_at: "",
    updated_at: "",
  };

  const userInfo = useRecoilValue(userInfoState);
  const [book, setBook] = useState<Book>(initialBook);
  const [reviews, setReviews] = useState<Array<Review>>([]);
  const router = useRouter();
  const query = router.query;
  const bid = query.bid ? String(query.bid) : "";

  useEffect(() => {
    (async () => {
      if (bid) {
        await fetchBook();
      }
    })();
  }, [bid]);

  const fetchBook = async () => {
    try {
      const response = await getBookDetailRequest(bid);
      console.log(response);
      const bookData = response.data.data.book;
      const reviewsData = response.data.data.reviews.slice(
        0,
        response.data.data.reviews.length
      );
      setBook(bookData);
      setReviews(reviewsData);
      console.log(reviewsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-3 py-3 flex flex-col space-y-4">
      <BookDetail book={book} />
      <div>
        {reviews.length !== 0 ? (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <p>この書籍のレビューはまだ投稿されていません。</p>
        )}
      </div>
      {userInfo.auth.uid ? (
        // サインインしている場合
        <ReviewForm
          userId={userInfo.userId}
          bookId={bid}
          onPost={async () => await fetchBook()}
        />
      ) : (
        // サインインしていない場合
        <div className="bg-white border rounded px-5 py-10 mx-auto w-full flex flex-col space-y-7">
          <h1 className="text-2xl font-bold text-center">レビューを投稿する</h1>
          <p className="text-center">
            レビューの投稿は登録済みのユーザーのみご利用いただけます。
          </p>
          <div className="flex space-x-4">
            <Button
              onClick={() => router.push("/signUp")}
              buttonStyle="black-outlined"
            >
              新規登録
            </Button>
            <Button onClick={() => router.push("/signIn")}>サインイン</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
