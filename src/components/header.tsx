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
  return (
    <header className="bg-gray-700 flex justify-between px-3 py-3 items-center">
      <Link href="/">
        <a>
          <div className="text-3xl font-bold text-white">Codemap</div>
        </a>
      </Link>
      <div className="flex space-x-3 items-center">
        <Button
          onClick={() => {
            router.push("/signUp");
          }}
          buttonStyle="black-outlined"
          className="px-1"
        >
          Sign Up
        </Button>
        <Button
          onClick={() => {
            router.push("/signIn");
          }}
          buttonStyle="black-outlined"
          className="px-1"
        >
          Sign In
        </Button>
        <div className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full object-cover bg-gray-100"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
