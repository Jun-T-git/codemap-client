import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import Dropdown from "./dropDown";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userInfoState } from "~/recoil/userInfo";
import { useRouter } from "next/dist/client/router";
import { signOutRequest } from "~/lib/api/auth";
import Modal from "~/components/modal";
import Button from "./button";

/**
 * ヘッダーアイコンのドロップダウンメニュー
 */

const IconDropdown: React.VFC = () => {
  const userInfo = useRecoilValue(userInfoState);
  const resetUserInfo = useResetRecoilState(userInfoState);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();
  const signOut = async () => {
    if (userInfo.auth.uid) {
      const signOutParams = userInfo.auth;
      try {
        const response = await signOutRequest(signOutParams);
        console.log(response);
        resetUserInfo();
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const menuItems = [
    {
      text: "Profile",
      onClick: () => router.push(`/users/${userInfo.userId}`),
    },
    {
      text: "Sign Out",
      onClick: () => setIsOpenModal(true),
    },
  ];

  return (
    <>
      <Dropdown menuItems={menuItems} className="flex items-center">
        <Image
          src="/favicon.ico"
          alt="avatar"
          width={65}
          height={65}
          className="rounded-full object-cover bg-red-200"
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
