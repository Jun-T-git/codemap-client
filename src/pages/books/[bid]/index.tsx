import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "~/components/button";
import ReviewForm from "~/components/reviewForm";
import { getBookDetailRequest } from "~/lib/api/books";
import { Book } from "~/lib/types/book";
import { Review } from "~/lib/types/review";

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
    <>
      <div className="bg-gray-300">
        <h1>Book Detail</h1>
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
      <div className="bg-gray-300">
        <h1>Review Detail</h1>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>{review.title}</p>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      <ReviewForm
        userId={"3"}
        bookId={bid}
        onPost={async () => await fetchBook()}
      />
    </>
  );
};

export default Post;
