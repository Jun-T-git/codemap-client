import Head from "next/head";
import React, { useState } from "react";
import Title from "~/components/title";
import { signIn, signOut, SignOutParams } from "~/lib/api/auth";

const Index: React.VFC = () => {
  const [authInfo, setAuthInfo] = useState<SignOutParams | null>(null);

  const onClickHandler = async () => {
    try {
      if (authInfo === null) {
        const response = await signIn({
          email: "test3@example.com",
          password: "password",
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
        <Title>Sign In</Title>
        <button onClick={onClickHandler}>
          {authInfo ? "サインアウト" : "サインイン"}
        </button>
      </main>
    </div>
  );
};

export default Index;
