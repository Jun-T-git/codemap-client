import Head from "next/head";
import React from "react";
import Title from "~/components/title";
import { signIn } from "~/lib/api/auth";

const Index: React.VFC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Sign In</Title>
        <button
          onClick={async () => {
            try {
              await signIn({
                email: "test3@example.com",
                password: "password",
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          サインイン
        </button>
      </main>
    </div>
  );
};

export default Index;
