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
    <nav className="relative bg-secondary flex flex-row justify-between items-center p-3 ml-3  rounded-xl  shadow-sm">
      <div className="flex items-center gap-4 justify-between">
        <ADSUPLogo />

        {/* <div className="flex-row hidden gap-x-2 md:block">
          <Button
            asChild
            variant={pathname === "/server" ? "default" : "outline"}>
            <Link href="/server">{t("server")}</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/client" ? "default" : "outline"}>
            <Link href="/client">{t("client")}</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/admin" ? "default" : "outline"}>
            <Link href="/admin">{t("admin")}</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/settings" ? "default" : "outline"}>
            <Link href="/settings">{t("settings")}</Link>
          </Button>
        </div> */}
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-start  mx-1 w-24 justify-end   rounded-md border-solid border-cyan-900 border-2  bg-blue">
          <LocaleSwitcher />
        </div>
        <UserButton />
      </div>
    </nav>
  );
};
