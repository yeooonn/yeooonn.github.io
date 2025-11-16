"use client";
import { useState } from "react";
import { MENU_FOOTER_ITEMS, MENU_ITEMS } from "../constants/menu";
import Typography from "./Typography";
import cn from "../util/cn";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Home");

  return (
    <div className="h-screen pt-20 pb-10 flex flex-col fixed w-full">
      <div className="px-7 2xl:px-12">
        <Typography.Head3 className="mb-2">김연정</Typography.Head3>
        <Typography.P1>Frontend Developer</Typography.P1>
      </div>

      <div className="py-10 2xl:py-20">
        <nav className="flex flex-col gap-3">
          {MENU_ITEMS.map((item) => {
            const isSelectedMenu = selectedMenu === item.menu;

            return (
              <div key={item.menu} className="flex gap-3">
                <div className="w-4 2xl:w-9 mt-3">
                  {isSelectedMenu && <hr />}
                </div>
                <a
                  href={item.href}
                  className={cn(
                    isSelectedMenu ? "text-[#1a1a1a]" : "text-[#999]",
                    "hover:text-[#1a1a1a] transition-colors duration-300 ease-in-out"
                  )}
                  onClick={() => setSelectedMenu(item.menu)}
                >
                  <Typography.P1>{item.menu}</Typography.P1>
                </a>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="mx-4 px-3 2xl:px-8 py-10 mt-auto border-t border-[#e0e0e0] w-[14.5%] 2xl:w-[15.5%]">
        <nav>
          <div className="flex flex-col gap-3">
            {MENU_FOOTER_ITEMS.map((item) => {
              return (
                <a
                  target="_blank"
                  key={item.menu}
                  href={item.href}
                  className="text-[#999] hover:text-[#1a1a1a] transition-colors duration-300 ease-in-out"
                >
                  <Typography.P1>{item.menu}</Typography.P1>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
