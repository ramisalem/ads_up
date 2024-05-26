"use client";
import { UserButton } from "@/components/auth/user-button";
import LocaleSwitcher from "@/components/dashboard/local-switcher";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
import { HeaderMobile } from "@/components/dashboard/header-mobile";
import { cn } from "@/lib/utils";
type props = {
    collapsed: boolean;
};
export const Navbar = ({ collapsed }: props) => {
    return (
        <nav
            className={cn({
                "bg-[#FFFFFF]  text-black shadow-gray-400 shadow-md": true, // colors
                "flex flex-row justify-between items-center ": true, // layout
                "w-screen md:w-full  mb-4  md:pr-0 z-10 px-4 shadow-sm h-[68px] top-0 ": true, //positioning & styling
            })}
        >
            <div className="  items-center  justify-between md:flex">
                {!collapsed && <ADSUPLogo />}
            </div>

            <div className="flex  justify-center items-start mx-2 gap-x-2 ">
                <LocaleSwitcher />

                <UserButton />

                <HeaderMobile />
            </div>
        </nav>
    );
};
