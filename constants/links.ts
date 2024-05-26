import {
    DocumentDuplicateIcon,
    DocumentTextIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    BookOpenIcon,
    UserCircleIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { SideNavItem } from "./types";
import { FcSettings, FcDocument, FcOpenedFolder, FcQuestions, FcAbout } from "react-icons/fc";
import { FaUsers, FaHome, FaUser, FaAdn, FaCreditCard } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
export const SIDENAVITEMS: SideNavItem[] = [
    { name: "home", href: `/dashboard`, icon: HomeIcon /*FaHome*/ } as const,
    {
        name: "advertisment",
        href: `/advertisment`,
        icon: /* DocumentTextIcon*/ FaAdn,
    } as const,
    {
        name: "coupons",
        href: `/coupons`,
        icon: BookOpenIcon /*FaCreditCard*/,
    } as const,
    {
        name: "helpcenter",
        href: `/helpcenter`,
        icon: QuestionMarkCircleIcon /*FcQuestions*/,
    } as const,
    { name: "users", href: `/users`, icon: UserCircleIcon /*FaUsers*/ },

    {
        name: "settings",
        href: "/settings",
        icon: /*ShieldCheckIcon*/ LuSettings /*FcSettings*/,
        submenu: true,
        subMenuItems: [
            {
                name: "settings",
                href: `/settings`,
                icon: ShieldCheckIcon /*FcSettings*/,
            } as const,
            { name: "admin", href: "/admin", icon: UserCircleIcon /*FaUser*/ } as const,
            {
                name: "client",
                href: "/client",
                icon: UserCircleIcon /*FaCircleUser*/,
            } as const,
        ] as const,
    } as const,
    {
        name: "metadata",
        href: `/metadata`,
        icon: DocumentDuplicateIcon,
    } as const,
] as const;
