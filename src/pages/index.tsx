import { useEffect, useState } from "react";
import Link from "next/link";
import BookCard from "~/components/bookCard";
import { getBooksRequest } from "~/lib/api/books";
import { Book } from "~/lib/types/book";

const Index: React.VFC = () => {
  const [books, setBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    (async () => {
      await fetchBooks();
    })();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooksRequest();
      console.log(response);
      const booksData = response.data.data;
      setBooks(booksData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main>
        <div className="flex flex-wrap gap-2 p-4">
          {books.map((book) => (
            <div key={book.id}>
              {
                <Link href={`/books/${book.id}`}>
                  <div>
                    <BookCard book={book} />
                  </div>
                </Link>
              }
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
