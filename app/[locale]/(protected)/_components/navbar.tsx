"use client";

import { UserButton } from "@/components/auth/user-button";
import LocaleSwitcher from "@/components/dashboard/local-switcher";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
import HeaderMobile from "@/components/dashboard/header-mobile";
import { cn } from "@/lib/utils";
type props = {
  collapsed: boolean;
};
export const Navbar = ({ collapsed }: props) => {
  return (
    <nav
      className={cn({
        "bg-secondary  text-zinc-500": true, // colors
        "flex flex-row justify-between items-center": true, // layout
        "w-screen md:w-full sticky mb-4  md:pr-0 z-10 px-4 shadow-sm h-[68px] top-0 ":
          true, //positioning & styling
      })}>
      {!collapsed && (
        <div className="hidden  items-center  justify-between md:flex">
          <ADSUPLogo />
        </div>
      )}
      <div className="flex  justify-center mx-2 gap-x-2 items-center">
        <LocaleSwitcher />

        <UserButton />

        <HeaderMobile />
      </div>
    </nav>
  );
};
