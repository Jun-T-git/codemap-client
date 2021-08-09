import Head from "next/head";
import React from "react";
import Title from "~/components/title";
import { signUp } from "~/lib/api/auth";

const Index: React.VFC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Sign Up</Title>
        <button
          onClick={async () => {
            try {
              await signUp({
                name: "name4",
                email: "test4@example.com",
                password: "password",
                password_confirmation: "password",
                image: "image",
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          サインアップ
        </button>
      </main>
    </div>
  );
};

export default Index;
