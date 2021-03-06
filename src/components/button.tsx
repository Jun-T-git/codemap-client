import { MouseEventHandler } from "react";

export type ButtonStyle =
  | "black-filled"
  | "white-filled"
  | "black-outlined"
  | "white-outlined";

type Props = {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: ButtonStyle;
  className?: string;
};

/**
 * ボタンコンポーネント
 * @param children テキスト
 * @param onClick クリック時の処理
 * @param buttonStyle クリック時の処理
 * @param className クラス
 */

const Button: React.VFC<Props> = ({
  children,
  onClick,
  buttonStyle = "black-filled",
  className,
}) => {
  let styleClass = "";
  switch (buttonStyle) {
    case "black-filled":
      styleClass = "bg-gray-700 text-white hover:bg-gray-500";
      break;
    case "white-filled":
      styleClass = "bg-gray-300 text-gray-900 hover:bg-gray-400";
      break;
    case "black-outlined":
      styleClass =
        "text-gray-900 border border-gray-700 border-2 hover:bg-gray-500 hover:text-white";
      break;
    case "white-outlined":
      styleClass =
        "text-white border border-white border-2 hover:text-gray-700 hover:bg-gray-200";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${className} ${styleClass} font-bold rounded py-2 w-full`}
    >
      {children}
    </button>
  );
};

export default Button;
