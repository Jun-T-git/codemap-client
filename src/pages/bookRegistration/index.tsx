import React, { useState } from "react";
import Image from "next/image";
import Button from "~/components/button";
import Input from "~/components/input";
import { useRouter } from "next/dist/client/router";
import { PostBookParams, postBookRequest } from "~/lib/api/books";

const Index: React.VFC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const router = useRouter();

  const postBook = async () => {
    const postBookParams: PostBookParams = {
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

  const processImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
  };

  return (
    <div>
      <main>
        <div className="bg-white border rounded px-16 py-10 mx-auto my-7 max-w-3xl flex flex-col space-y-14">
          <h1 className="text-3xl font-bold text-center">書籍を登録する</h1>
          <div className="flex flex-col space-y-7">
            <label className="w-52 h-52 mx-auto">
              <img
                src={image ? image : "/bookNoImage.png"}
                alt="book"
                className="w-52 h-52 object-cover border"
              />
              <input
                type="file"
                accept="image/*"
                onChange={processImage}
                className="hidden"
              />
            </label>
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
