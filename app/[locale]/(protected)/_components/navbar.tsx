"use client";
import { UserButton } from "@/components/auth/user-button";
import LocaleSwitcher from "@/components/dashboard/local-switcher";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
import { HeaderMobile } from "@/components/dashboard/header-mobile";
import { cn } from "@/lib/utils";
import { easeIn, motion } from "framer-motion";
type props = {
    collapsed: boolean;
};

const container = {
    hidden: { opacity: 0 },
    show: {
        easeIn: [0.17, 0.67, 0.83, 0.67],
        opacity: 1,
        transition: {
            easeIn: [0.17, 0.67, 0.83, 0.67],
            delayChildren: 0.5,
        },
    },
};

const Navbar = ({ collapsed }: props) => {
    return (
        <nav
            className={cn({
                "bg-[#FFFFFF]  text-black shadow-gray-400 shadow-md": true, // colors
                "flex flex-row justify-between items-center ": true, // layout
                "w-screen md:w-full  mb-4  md:pr-0 z-10 px-4 shadow-sm h-[68px] top-0 ": true, //positioning & styling
            })}
        >
            <div className="  items-center  justify-between md:flex">
                {!collapsed && (
                    <motion.div
                        animate={{ x: 10 }}
                        initial={{ x: -100 }}
                        exit={{ x: 0 }}
                        transition={{ ease: "easeIn", duration: 2 }}
                    >
                        <ADSUPLogo />
                    </motion.div>
                )}
            </div>

            <div className="flex  justify-center items-start mx-2 gap-x-2 ">
                <LocaleSwitcher />

                <UserButton />

                <HeaderMobile />
            </div>
        </nav>
    );
};
export default Navbar;
