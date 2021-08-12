import { atom, RecoilState } from "recoil";
import { AuthParams } from "~/lib/api/auth";

export const authState: RecoilState<AuthParams> = atom({
  key: "recoil/auth",
  default: {
    uid: "",
    "access-token": "",
    client: "",
  },
});
