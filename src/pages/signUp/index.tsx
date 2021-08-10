import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Button from "~/components/button";
import Input from "~/components/input";
import { signUp } from "~/lib/api/auth";

const Index: React.VFC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [image, setImage] = useState<string>("/favicon.ico");

  const router = useRouter();

  const processImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    console.log(imageUrl.replace("blob:", ""));
    setImage(imageUrl.replace("blob:", ""));
  };

  const onClickHandler = async () => {
    try {
      await signUp({
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        image: "",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-white border rounded px-16 py-10 mx-auto my-7 max-w-3xl flex flex-col space-y-14">
          <h1 className="text-3xl font-bold text-center">新規ユーザー登録</h1>
          <div className="flex flex-col space-y-7">
            <div className="text-center">
              <Image
                src={image}
                alt="avatar"
                width={100}
                height={100}
                className="rounded-full object-cover bg-gray-100"
              />
            </div>
            {/* <input type="file" accept="image/*" onChange={processImage} /> */}
            <Input
              label="名前"
              placeholder="name1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="メールアドレス"
              placeholder="test1@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="パスワード"
              placeholder="********"
              value={password}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="パスワード（再入力）"
              placeholder="********"
              value={passwordConfirmation}
              type={"password"}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <Button onClick={onClickHandler}>サインアップ</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
