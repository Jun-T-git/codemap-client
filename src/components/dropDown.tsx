import React, { MouseEventHandler } from "react";
import { Menu } from "@headlessui/react";

type MenuItem = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type Props = {
  children: JSX.Element;
  menuItems: Array<MenuItem>;
  className?: string;
};

/**
 * ドロップダウンメニュー
 * @param children メニューを開くボタン
 * @param menuItems メニューの項目
 * @param className
 */

const Dropdown: React.VFC<Props> = ({ children, menuItems, className }) => {
  return (
    <Menu>
      <div className="relative">
        <Menu.Button className={`${className} hover:opacity-70`}>
          {children}
        </Menu.Button>
        <Menu.Items
          as="div"
          className="absolute top-[3.75rem] right-0 flex flex-col w-52 border rounded z-10"
        >
          {menuItems.map((menuItem, mi) => (
            <Menu.Item key={mi}>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-gray-500 text-white px-3 py-1"
                      : "bg-gray-700 text-white px-3 py-1"
                  }`}
                  onClick={menuItem.onClick}
                >
                  {menuItem.text}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default Dropdown;
