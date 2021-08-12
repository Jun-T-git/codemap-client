import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import Dropdown from "./dropDown";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authState } from "~/recoil/auth";
import { useRouter } from "next/dist/client/router";
import { signOutRequest } from "~/lib/api/auth";
import Modal from "~/components/modal";
import Button from "./button";

/**
 * ヘッダーアイコンのドロップダウンメニュー
 */

const IconDropdown: React.VFC = () => {
  const authParams = useRecoilValue(authState);
  const resetAuthParams = useResetRecoilState(authState);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();
  const signOut = async () => {
    if (authParams.uid) {
      const signOutParams = authParams;
      try {
        const response = await signOutRequest(signOutParams);
        console.log(response);
        resetAuthParams();
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const menuItems = [
    {
      text: "Profile",
      onClick: () => router.push("/"),
    },
    {
      text: "Sign Out",
      onClick: () => setIsOpenModal(true),
    },
  ];

  return (
    <>
      <Dropdown menuItems={menuItems}>
        <Image
          src="/favicon.ico"
          alt="avatar"
          width={65}
          height={65}
          className="rounded-full object-cover bg-gray-100"
        />
      </Dropdown>
      <Modal
        isOpen={isOpenModal}
        title="サインアウト"
        description="サインアウトしますか？"
      >
        <div className="flex space-x-4">
          <Button
            buttonStyle="white-filled"
            onClick={() => setIsOpenModal(false)}
          >
            いいえ
          </Button>
          <Button
            buttonStyle="black-filled"
            onClick={async () => {
              setIsOpenModal(false);
              await signOut();
            }}
          >
            はい
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default IconDropdown;
