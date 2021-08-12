import { useEffect, useState } from "react";
import BookCard from "~/components/bookCard";
import Button from "~/components/button";
import { BookParams, getBooksRequest } from "~/lib/api/books";

const Index: React.VFC = () => {
  const [books, setBooks] = useState<Array<BookParams>>([]);

  useEffect(() => {
    (async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    })();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooksRequest();
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main>
        <div className="flex flex-wrap gap-4 p-4">
          {books.map((book, bi) => (
            <div>
              {
                <BookCard
                  title={book.title}
                  author={book.author}
                  image={book.image}
                  url={book.url}
                />
              }
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
