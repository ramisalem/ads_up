"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { useI18n } from "@/locales/client";
import LocaleSwitcher from "@/components/dashboard/local-switcher";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
import HeaderMobile from "@/components/dashboard/header-mobile";
export const Navbar = () => {
  const t = useI18n();
  const pathname = usePathname();

  return (
    <nav className="static top-0 mb-4  md:pr-0 bg-secondary flex flex-row md:w-full justify-between md:items-center  rounded-xl  shadow-sm">
      <div className="flex items-center  justify-between ">
        <ADSUPLogo />
      </div>
      <div className="flex  justify-center items-center">
        <div className="flex items-start   justify-end    rounded-md border-solid   border-2  bg-blue">
          <LocaleSwitcher />
        </div>
        <div className="mr-10 md:mr-0 rtl:mr-0">
          <UserButton />
        </div>
        <HeaderMobile />
      </div>
    </nav>
  );
};
