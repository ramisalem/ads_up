"use client";
import Link from "next/link";
import NavLinks from "@/components/dashboard/nav-links";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
import { LogoutButton } from "../auth/logout-button";
// import {
//   ArrowDownLeftIcon,
//   ArrowLeftCircleIcon,
//   ArrowLongRightIcon,
//   ChevronDoubleLeftIcon,
//   ChevronDoubleRightIcon,
//   ChevronLeftIcon,
//   PowerIcon,
// } from "@heroicons/react/24/outline";

import clsx from "clsx";
import { useI18n, useCurrentLocale } from "@/locales/client";
import { logout } from "@/actions/auth/logout";
import { useFormState } from "react-dom";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
type props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};
export default function SideNav({ collapsed, setCollapsed }: props) {
  // const [errorMessage, dispatch] = useFormState(logout, null);
  const t = useI18n();
  const lng = useCurrentLocale();
  return (
    // <div className=" mx-3 left-0 h-[90%] flex-col   items-center gap-1  overflow-hidden md:flex-none md:justify-start md:p-2 md:px-3">
    <div className="md:absolute top-5  flex-row mt-3 space-x-1 space-y-1 mx-2 hidden md:block md:h-0 md:flex-col ">
      <div
        className={clsx(
          " flex items-start justify-center md:w-full rounded-md   mt-5 text-sm font-medium hover:text-blue-600   md:justify-start",
          {
            "hidden h-[40px] md:w-10 mt-2 md:block ": !collapsed,
          }
        )}>
        <button
          className="  "
          onClick={(collapsed) => setCollapsed(!collapsed)}>
          {collapsed ? (
            <ChevronLeftIcon className="p-0 w-6 m-3 rounded-full bg-blue-900  text-slate-50" />
          ) : (
            <ChevronRightIcon className="p-0 w-6 m-3 rounded-full bg-black text-slate-50 md:block" />
          )}

          {/* {collapsed && <div className="hidden md:block">{t("showmenu")}</div>} */}
        </button>
      </div>
      <NavLinks showname={collapsed} />
      <div className="flex-none flex-col  items-stretch justify-between">
        {/* <div
          className={clsx(" flex  w  rounded-md ", {
            "w-10 md:block": !collapsed,
          })}>
          hh
        </div> */}
        <div
          className={clsx(
            "  h-10 flex-wrap flex-col  gap-1  rounded-md bg-gray-50  text-sm font-medium hover:bg-sky-100 hover:text-blue-600  md:flex-none md:justify-start md:p-2 md:px-3 ",
            {
              "h-[40px] w-10  ": !collapsed,
            }
          )}>
          <LogoutButton>
            <button className="flex space-x-2 flex-row items-center justify-center   ">
              <PowerIcon className="w-5" />
              {collapsed && (
                <div className="hidden md:block">{t("logout")}</div>
              )}
            </button>
          </LogoutButton>
        </div>
      </div>
    </div>

    // </div>
  );
}
