import Image from "next/image";
import Link from "next/link";
import { Book } from "~/lib/types/book";

type Props = {
  book: Book;
};

/**
 * 本の詳細表示
 * @param book
 */

const BookDetail: React.VFC<Props> = ({ book }) => {
  return (
    <div className="bg-white border rounded min-h-[15rem] p-5 flex space-x-10">
      <Image
        src={book.image ? book.image : "/favicon.ico"}
        alt="avatar"
        width={250}
        height={250}
        className="bg-blue-200"
      />
      <div>
        <h2 className={"text-xl font-bold"}>{book.title}</h2>
        <p className="text-base my-1">著者：{book.author}</p>
        <a href={book.url}>リンク</a>
      </div>
    </div>
  );
};

export default BookDetail;
