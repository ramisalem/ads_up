import { DocumentDuplicateIcon, UserGroupIcon, HomeIcon, QuestionMarkCircleIcon, BookOpenIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { SideNavItem } from "./types";
import { FcSettings } from "react-icons/fc";



export const SIDENAVITEMS: SideNavItem[] = [
    { name: "home", href: `/dashboard`, icon: HomeIcon },
    {
        name: "advertisment",
        href: `/advertisment`,
        icon: DocumentDuplicateIcon,
    },
    {
        name: "coupons",
        href: `/coupons`,
        icon: BookOpenIcon,
    },
    {
        name: "helpcenter",
        href: `/helpcenter`,
        icon: QuestionMarkCircleIcon,
    },
    // { name: "users", href: `/client`, icon: UserGroupIcon },

    {
        name: "settings", href: "/settings", icon: FcSettings, submenu: true, subMenuItems: [
            { name: "settings", href: `/settings`, icon: FcSettings },
            { name: 'admin', href: '/admin', icon: UserCircleIcon },
            { name: 'client', href: '/client' }
        ]
    },

    // { name: "users", href: `/users`, icon: UserGroupIcon },
    // { name: "users", href: `/users`, icon: UserGroupIcon },
    // { name: "users", href: `/users`, icon: UserGroupIcon },
    // { name: "users", href: `/users`, icon: UserGroupIcon },
    // { name: "users", href: `/users`, icon: UserGroupIcon },
] as const;