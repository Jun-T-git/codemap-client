import { atom, RecoilState } from "recoil";
import { AuthParams } from "~/lib/api/auth";

export type Profile = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export type UserInfo = {
  profile: Profile;
  auth: AuthParams;
};

export const userInfoState: RecoilState<UserInfo> = atom({
  key: "recoil/auth",
  default: {
    profile: {
      id: "",
      name: "",
      email: "",
      image: "",
    },
    auth: {
      uid: "",
      "access-token": "",
      client: "",
    },
  },
});
