import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import Button from "~/components/button";
import Input from "~/components/input";
import { SignUpParams, signUpRequest } from "~/lib/api/auth";
import { userInfoState } from "~/recoil/userInfo";

const Index: React.VFC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const setUserInfo = useSetRecoilState(userInfoState);

  const router = useRouter();

  const processImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
  };

  const signUp = async () => {
    const signUpParams: SignUpParams = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      image: "",
    };
    try {
      const response = await signUpRequest(signUpParams);
      console.log(response);
      setUserInfo({
        profile: {
          id: response.data.data.id,
          name: response.data.data.name,
          image: response.data.data.image,
        },
        auth: {
          uid: response.headers["uid"],
          "access-token": response.headers["access-token"],
          client: response.headers["client"],
        },
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main>
        <div className="bg-white border rounded px-16 py-10 mx-auto my-7 max-w-3xl flex flex-col space-y-14">
          <h1 className="text-3xl font-bold text-center">新規ユーザー登録</h1>
          <div className="flex flex-col space-y-7">
            <label className="w-52 h-52 mx-auto rounded-full">
              <img
                src={image ? image : "/userNoImage.png"}
                alt="avatar"
                className="w-52 h-52 rounded-full object-cover border"
              />
              <input
                type="file"
                accept="image/*"
                onChange={processImage}
                className="hidden"
              />
            </label>
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
          <Button onClick={signUp}>サインアップ</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
