"use client";
import {
    HomeIcon,
    UserCircleIcon,
    BanknotesIcon,
    InformationCircleIcon,
    WrenchScrewdriverIcon,
    UserIcon,
    UserGroupIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { SideNavItem } from "./types";

import { QuestionMarkIcon } from "@radix-ui/react-icons";
export const SIDENAVITEMS: SideNavItem[] = [
    { name: "home", href: `/dashboard`, icon: <HomeIcon /> } as const,
    {
        name: "advertisment",
        href: `/advertisment`,
        icon: <ShoppingBagIcon /> /*<FaAdn />*/,
    } as const,
    {
        name: "coupons",
        href: `/coupons`,
        icon: <BanknotesIcon />,
    } as const,
    {
        name: "helpcenter",
        href: `/helpcenter`,
        icon: /*QuestionMarkCircleIcon*/ <QuestionMarkIcon />,
    } as const,
    { name: "users", href: `/users`, icon: <UserGroupIcon /> },

    {
        name: "settings",
        href: "/settings",
        icon: /*ShieldCheckIcon*/ <WrenchScrewdriverIcon /> /*FcSettings*/,
        submenu: true,
        subMenuItems: [
            {
                name: "settings",
                href: `/settings`,
                icon: /*ShieldCheckIcon*/ <WrenchScrewdriverIcon />,
            } as const,
            {
                name: "admin",
                href: "/admin",
                icon: /*UserCircleIcon*/ <UserCircleIcon />,
            } as const,
            {
                name: "client",
                href: "/client",
                icon: /*UserCircleIcon*/ <UserIcon />,
            } as const,
        ] as const,
    } as const,
    {
        name: "metadata",
        href: `/metadata`,
        icon: <InformationCircleIcon />,
    } as const,
] as const;
