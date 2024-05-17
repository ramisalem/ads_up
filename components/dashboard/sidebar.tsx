"use client";

import NavLinks from "@/components/dashboard/nav-links";
import { LogoutButton } from "../auth/logout-button";

import clsx from "clsx";
import { useI18n, useCurrentLocale } from "@/locales/client";
import { motion, useCycle } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import ADSUPLogo from "./adsup-logo";

type props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 300}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 300}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

export default function SideNav({ collapsed, setCollapsed, shown }: props) {
  const t = useI18n();
  //const lng = useCurrentLocale();
  const [isOpen, toggleOpen] = useCycle(true, false);
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebar}
      className={clsx({
        " fixed md:static bg-[#FFFFFF] shadow-sm shadow-gray-400 md:translate-x-0 z-20":
          true,
        "transition-all duration-300 ease-in-out": true,
        "w-[240px] ": collapsed,
        "w-[60px]": !collapsed,
        "-translate-x-full": shown,
      })}>
      <div
        className={clsx({
          "flex flex-col justify-between h-screen md:h-full sticky inset-0":
            true,
        })}>
        {/* logo and collapse button */}
        <div
          className={clsx({
            "flex items-center border-b transition-none": true,
            "p-4 mx-4 justify-center": !collapsed,
            "py-2 justify-center": collapsed,
          })}>
          {collapsed && (
            <span className="flex justify-center items-center whitespace-nowrap">
              <ADSUPLogo />
            </span>
          )}
          <button
            className="grid place-content-center    rounded-full opacity-0 md:opacity-100"
            onClick={() => {
              setCollapsed(!collapsed);
              // toggleOpen();
            }}>
            {collapsed ? (
              <ChevronLeftIcon className="p-0 w-6 m-3 rounded-full bg-blue-900 hover:bg-blue-700  text-slate-50" />
            ) : (
              <ChevronRightIcon className="p-0 w-6 m-3 rounded-full bg-blue-900 hover:bg-blue-700   text-slate-50 md:block" />
            )}
          </button>
        </div>
        <div className="flex-grow">
          <div
            className={clsx({
              "my-2 flex flex-col  gap-2 items-stretch": true,
            })}>
            <NavLinks showname={collapsed} />
          </div>
        </div>
        <div className="flex-none flex-col   items-center justify-between">
          {/* <div
          className={clsx(" flex  w  rounded-md ", {
            "w-10 md:block": !collapsed,
          })}>
          hh
        </div> */}
          <div
            className={clsx(
              " flex h-10 grow items-center justify-center gap-2 space-x-2 rounded-md  p-1 mx-1 text-xl font-semibold hover:bg-sky-100 hover:text-blue-600  md:flex-none md:justify-start md:p-2 md:px-3 ",
              {
                "h-[40px] w-16  m-auto ": !collapsed,
              }
            )}>
            <PowerIcon className="w-6 " />
            <LogoutButton>
              <button className="flex space-x-2 flex-row overflow-hidden items-center justify-center   ">
                {collapsed && (
                  <div className="hidden md:block">{t("logout")}</div>
                )}
              </button>
            </LogoutButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
