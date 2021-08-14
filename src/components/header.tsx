import Link from "next/link";
import Button from "~/components/button";
import { useRouter } from "next/dist/client/router";
import { useRecoilValue } from "recoil";
import { authState } from "~/recoil/auth";
import IconDropdown from "~/components/iconDropDown";

/**
 * ヘッダーコンポーネント
 */

const Header: React.VFC = () => {
  const authParams = useRecoilValue(authState);
  const router = useRouter();

  const signedOutElement = (
    <div className="flex space-x-3 items-center">
      <Button
        onClick={() => {
          router.push("/signUp");
        }}
        buttonStyle="white-outlined"
        className="px-2 whitespace-nowrap"
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          router.push("/signIn");
        }}
        buttonStyle="white-outlined"
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
          router.push("/bookRegistration");
        }}
        buttonStyle="white-outlined"
        className="px-2 whitespace-nowrap"
      >
        投稿する
      </Button>
      <IconDropdown />
    </div>
  );

  return (
    <header className="bg-gray-700 flex justify-between px-3 py-3 items-center">
      <Link href="/">
        <a>
          <div className="text-3xl font-bold text-white">Codemap</div>
        </a>
      </Link>
      {authParams.uid ? signedInElement : signedOutElement}
    </header>
  );
};

export default Header;
