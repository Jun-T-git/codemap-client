import Image from "next/image";
import Link from "next/link";
import { BookParams } from "~/lib/api/books";

/**
 * 本表示カードコンポーネント
 * @param title
 * @param author
 * @param image
 * @param url
 */

const BookCard: React.VFC<BookParams> = ({ title, author, image, url }) => {
  return (
    <div className="bg-white border rounded w-[18rem] h-[20rem] p-5 hover:opacity-70">
      <div className="text-center">
        <Image
          src={image ? image : "/favicon.ico"}
          alt="avatar"
          width={170}
          height={170}
          className="object-cover bg-blue-200"
        />
      </div>
      <h2 className={"text-base font-bold"}>{title}</h2>
      <p className="text-sm my-1">著者：{author}</p>
      <a href={url}>リンク</a>
    </div>
  );
};

export default BookCard;
