import Head from "next/head";
import Link from "next/link";
import React from "react";
import Title from "~/components/title";
import { deleteUser } from "~/lib/api/auth";
import { fetchUsersDetail } from "~/lib/api/users";

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
          <button
            onClick={async () => {
              try {
                const data = await fetchUsersDetail("2");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Fetch
          </button>
          <button
            onClick={async () => {
              try {
                const data = await deleteUser({
                  uid: "test4@example.com",
                  "access-token": "vnKmuOrm4eK0fuKQReB3RQ",
                  client: "FsIavo6b6AK6hULH1HYgbg",
                });
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Delete
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
