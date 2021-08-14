import { atom, RecoilState } from "recoil";
import { AuthParams } from "~/lib/api/auth";

export type UserInfo = {
  userId: string;
  auth: AuthParams;
};

export const userInfoState: RecoilState<UserInfo> = atom({
  key: "recoil/auth",
  default: {
    userId: "",
    auth: {
      uid: "",
      "access-token": "",
      client: "",
    },
  },
});
