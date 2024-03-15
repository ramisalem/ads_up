"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { useI18n } from "@/locales/client";
import LocaleSwitcher from "@/components/dashboard/local-switcher";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
export const Navbar = () => {
  const t = useI18n();
  const pathname = usePathname();

  return (
    <nav className="relative bg-secondary flex flex-row w-full justify-between items-center p-3  rounded-xl  shadow-sm">
      <div className="flex items-center gap-4 justify-between">
        <ADSUPLogo />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex items-start  mx-1 w-24 justify-end   rounded-md border-solid border-cyan-900 border-2  bg-blue">
          <LocaleSwitcher />
        </div>
        <UserButton />
      </div>
    </nav>
  );
};
