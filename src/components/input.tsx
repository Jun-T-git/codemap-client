import React, { ChangeEventHandler, FocusEventHandler } from "react";

type Props = {
  placeholder: string;
  value: string;
  type?: string;
  label?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};
/**
 * 入力欄コンポーネント
 * @param placeholder
 * @param value
 * @param type 入力タイプ
 * @param label ラベル
 * @param className
 * @param onChange 値変更時の処理
 * @param onBlur フォーカスが外れたときの処理
 */

const Input: React.VFC<Props> = ({
  placeholder,
  value,
  type,
  label,
  className,
  onChange,
  onBlur,
}) => (
  <div>
    <label className={"block text-gray-700 text-sm md:text-lg font-bold mb-2"}>
      {label}
    </label>
    <input
      placeholder={placeholder}
      value={value}
      type={type}
      className={`${className} text-sm md:text-base bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300`}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
);

export default Input;
