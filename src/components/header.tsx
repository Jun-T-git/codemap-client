import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { useRouter } from "next/dist/client/router";

/**
 * ヘッダーコンポーネント
 */

const Header: React.VFC = () => {
  const router = useRouter();

  const signedOutElement = (
    <div className="flex space-x-3 items-center">
      <Button
        onClick={() => {
          router.push("/signUp");
        }}
        buttonStyle="black-outlined"
        className="px-2 whitespace-nowrap"
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          router.push("/signIn");
        }}
        buttonStyle="black-outlined"
        className="px-2 whitespace-nowrap"
      >
        Sign In
      </Button>
    </div>
  );

  const signedInElement = (
    <div className="flex space-x-3 items-center">
      <Button
        onClick={() => {
          router.push("/");
        }}
        buttonStyle="black-outlined"
        className="px-2 whitespace-nowrap"
      >
        投稿する
      </Button>
      <div className="flex items-center">
        <Image
          src="/favicon.ico"
          alt="avatar"
          width={65}
          height={65}
          className="rounded-full object-cover bg-gray-100"
        />
      </div>
    </div>
  );

  return (
    <header className="bg-gray-700 flex justify-between px-3 py-3 items-center">
      <Link href="/">
        <a>
          <div className="text-3xl font-bold text-white">Codemap</div>
        </a>
      </Link>
      {signedOutElement}
    </header>
  );
};

export default Header;
