import Image from "next/image";
import Link from "next/link";
import { Book } from "~/lib/types/book";

type Props = {
  book: Book;
};

/**
 * 本表示カードコンポーネント
 * @param book
 */

const BookCard: React.VFC<Props> = ({ book }) => {
  return (
    <div className="bg-white border rounded w-[23rem] h-[20rem] p-5 hover:opacity-70">
      <div className="text-center">
        <Image
          src={book.image ? book.image : "/favicon.ico"}
          alt="avatar"
          width={170}
          height={170}
          className="object-cover bg-blue-200"
        />
      </div>
      <h2 className={"text-base font-bold"}>{book.title}</h2>
      <p className="text-sm my-1">著者：{book.author}</p>
      <a href={book.url}>リンク</a>
    </div>
  );
};

export default BookCard;
