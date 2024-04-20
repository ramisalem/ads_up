"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { useI18n } from "@/locales/client";
import LocaleSwitcher from "@/components/dashboard/local-switcher";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
import HeaderMobile from "@/components/dashboard/header-mobile";
import { cn } from "@/lib/utils";
type props = {
  collapsed: boolean;
};
export const Navbar = ({ collapsed }: props) => {
  const t = useI18n();
  const pathname = usePathname();

  return (
    <nav
      className={cn({
        "bg-secondary  text-zinc-500": true, // colors
        "flex flex-row justify-between items-center": true, // layout
        "w-screen md:w-full sticky mb-4  md:pr-0 z-10 px-4 shadow-sm h-[68px] top-0 ":
          true, //positioning & styling
      })}>
      {!collapsed && (
        <div className="flex items-center  justify-between ">
          <ADSUPLogo />
        </div>
      )}
      <div className="flex  justify-center items-center">
        <div className="flex items-start   justify-end    rounded-md border-solid   border-2  bg-blue">
          <LocaleSwitcher />
        </div>
        <div className="mx-1 md:mr-0 rtl:mr-0">
          <UserButton />
        </div>
        <HeaderMobile />
      </div>
    </nav>
  );
};
