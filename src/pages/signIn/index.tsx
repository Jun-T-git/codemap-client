import Head from "next/head";
import React, { useState } from "react";
import Button from "~/components/button";
import { signIn, signOut, SignOutParams } from "~/lib/api/auth";
import Input from "~/components/input";
import { useRouter } from "next/dist/client/router";

const Index: React.VFC = () => {
  const [authInfo, setAuthInfo] = useState<SignOutParams | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const onClickHandler = async () => {
    try {
      if (authInfo === null) {
        const response = await signIn({
          email: email,
          password: password,
        });
        setAuthInfo({
          uid: response.headers["uid"],
          "access-token": response.headers["access-token"],
          client: response.headers["client"],
        });
      } else {
        const response = await signOut(authInfo);
        setAuthInfo(null);
      }
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
          <h1 className="text-3xl font-bold text-center">サインイン</h1>
          <div className="flex flex-col space-y-7">
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
          </div>
          <Button onClick={onClickHandler}>
            {authInfo ? "サインアウト" : "サインイン"}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
