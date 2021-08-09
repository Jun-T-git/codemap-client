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
        <div className="text-center px-20 py-10 bg-gray-300">
          <Title>This is Nextjs Template!</Title>
          <p className="text-blue-500">Next.js + TypeScript + TailwindCSS</p>
        </div>
        <button
          onClick={async () => {
            try {
              await signIn({
                email: "test2@example.com",
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
