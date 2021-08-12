import React, { useState } from "react";
import Image from "next/image";
import Button from "~/components/button";
import Input from "~/components/input";
import { useRouter } from "next/dist/client/router";
import { BookParams, postBookRequest } from "~/lib/api/books";

const Index: React.VFC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [image, setImage] = useState<string>("/favicon.ico");
  const [url, setUrl] = useState<string>("");

  const router = useRouter();

  const postBook = async () => {
    const postBookParams: BookParams = {
      title: title,
      author: author,
      image: image,
      url: url,
    };
    try {
      const response = await postBookRequest(postBookParams);
      console.log(response);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main>
        <div className="bg-white border rounded px-16 py-10 mx-auto my-7 max-w-3xl flex flex-col space-y-14">
          <h1 className="text-3xl font-bold text-center">書籍を登録する</h1>
          <div className="flex flex-col space-y-7">
            <div className="text-center">
              <Image
                src={image}
                alt="avatar"
                width={100}
                height={100}
                className="object-cover bg-blue-200"
              />
            </div>
            <Input
              label="タイトル"
              placeholder="title1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              label="著者"
              placeholder="author1"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <Input
              label="リンク"
              placeholder="https://book.example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <Button onClick={postBook}>登録する</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
