import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "~/components/button";
import ReviewForm from "~/components/reviewForm";
import { getBookDetailRequest } from "~/lib/api/books";
import { Book } from "~/lib/types/book";

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
      const bookData = response.data.data;
      setBook(bookData);
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
      <ReviewForm />
    </>
  );
};

export default Post;
