import React, { useState } from "react";
import Button from "~/components/button";
import Input from "~/components/input";
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "~/recoil/userInfo";
import { SignInParams, signInRequest } from "~/lib/api/auth";

const Index: React.VFC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [email, setEmail] = useState<string>("test@example.com");
  const [password, setPassword] = useState<string>("password");

  const router = useRouter();

  const signIn = async () => {
    const signInParams: SignInParams = {
      email: email,
      password: password,
    };
    try {
      const response = await signInRequest(signInParams);
      console.log(response);
      setUserInfo({
        profile: {
          id: response.data.data.id,
          name: response.data.data.name,
          email: response.data.data.email,
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
          <h1 className="text-3xl font-bold text-center">サインイン</h1>
          <div className="flex flex-col space-y-7">
            <Input
              label="メールアドレス"
              placeholder="test@example.com"
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
          </div>
          <Button onClick={signIn}>サインイン</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
