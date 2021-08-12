import Head from "next/head";
import Link from "next/link";
import React from "react";
import Title from "~/components/title";
import Button from "~/components/button";
import { deleteUserRequest } from "~/lib/api/auth";
import { fetchUsersDetail } from "~/lib/api/users";

const Index: React.VFC = () => {
  return (
    <div>
      <main>
        <Title>トップ</Title>
        <div className="flex flex-col">
          <Button
            buttonStyle="white-filled"
            onClick={async () => {
              try {
                const data = await fetchUsersDetail("2");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Fetch
          </Button>
          <Button
            onClick={async () => {
              try {
                const data = await deleteUserRequest({
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
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
