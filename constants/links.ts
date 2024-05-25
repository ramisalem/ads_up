import {
    DocumentDuplicateIcon,
    DocumentTextIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    BookOpenIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import { SideNavItem } from "./types";
import { FcSettings } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";

export const SIDENAVITEMS: SideNavItem[] = [
    { name: "home", href: `/dashboard`, icon: HomeIcon } as const,
    {
        name: "advertisment",
        href: `/advertisment`,
        icon: DocumentDuplicateIcon,
    } as const,
    {
        name: "coupons",
        href: `/coupons`,
        icon: BookOpenIcon,
    } as const,
    {
        name: "helpcenter",
        href: `/helpcenter`,
        icon: QuestionMarkCircleIcon,
    } as const,
    { name: "users", href: `/users`, icon: FaUsers },

    {
        name: "settings",
        href: "/settings",
        icon: FcSettings,
        submenu: true,
        subMenuItems: [
            { name: "settings", href: `/settings`, icon: FcSettings } as const,
            { name: "admin", href: "/admin", icon: UserCircleIcon } as const,
            { name: "client", href: "/client" } as const,
        ] as const,
    } as const,
    {
        name: "metadata",
        href: `/metadata`,
        icon: DocumentTextIcon,
    } as const,
] as const;
