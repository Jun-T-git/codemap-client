import Head from "next/head";
import Link from "next/link";
import React from "react";
import Title from "~/components/title";

const Index: React.VFC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>トップ</Title>
        <div className="flex flex-col">
          <Link href="/signIn">
            <a>サインイン</a>
          </Link>
          <Link href="/signUp">
            <a>サインアップ</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
