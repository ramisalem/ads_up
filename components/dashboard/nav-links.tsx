"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n, useScopedI18nUntyped } from "@/locales/client";
import clsx from "clsx";
import { SIDENAVITEMS } from "@/constants/links";
import { useState } from "react";
import { SideNavItem } from "@/constants/types";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type props = {
  showname: boolean;
};
export default function NavLinks({ showname }: props) {
  return (
    <>
      {SIDENAVITEMS.map((item, idx) => {
        //const LinkIcon = item.icon;
        return <MenuItem key={idx} item={item} isSidebarCollapsed={showname} />;
      })}
    </>
  );
}

const MenuItem = ({
  item,
  isSidebarCollapsed,
}: {
  item: SideNavItem;
  isSidebarCollapsed: boolean;
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const t = useScopedI18nUntyped("sidebar");
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const LinkIcon = item.icon;
  return (
    <div className={`${!isSidebarCollapsed}?"w-10 ": ''`}>
      {item.submenu ? (
        <div>
          <div
            className={clsx(
              "flex h-10  items-center justify-center gap-1 rounded-md  mx-auto text-3xl font-semibold hover:bg-sky-100 hover:text-blue-600   md:justify-between  ",
              {
                "bg-sky-100 text-blue-600": pathname.indexOf(item.href) !== -1,
                "flex w-12  ": !isSidebarCollapsed,
                "w-full justify-start md:p-1 md:px-3": isSidebarCollapsed,
              }
            )}>
            <div className="flex flex-row space-x-4  items-center">
              {isSidebarCollapsed ? (
                <button onClick={toggleSubMenu}>
                  <span className="flex flex-row">
                    <LinkIcon className="w-10 h-6" />
                    <p className="hidden text-base md:block">
                      {t(`${item.name}`)}
                    </p>
                  </span>
                </button>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <LinkIcon className="w-10 h-6" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>يحتوي قائمة</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>

            {isSidebarCollapsed && (
              <button onClick={toggleSubMenu}>
                <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                  <ChevronDownIcon className="w-6" />
                </div>
              </button>
            )}
          </div>
          {subMenuOpen && isSidebarCollapsed && (
            <div className="my-2 ltr:ml-12 rtl:mr-12 flex flex-col space-y-3">
              {item.subMenuItems?.map((subItem, idx) => {
                //const SubLinkIcon = subItem.icon ;
                return (
                  <div
                    key={idx}
                    className={clsx(
                      "flex h-10  items-center justify-between gap-2 rounded-md bg-white ms-auto text-md font-semibold hover:bg-sky-100 hover:text-blue-600 ",
                      {
                        "bg-sky-100 text-blue-600":
                          pathname.indexOf(item.href) !== -1,
                        "flex w-12  ": !isSidebarCollapsed,
                        "w-full": isSidebarCollapsed,
                      }
                    )}>
                    <Link
                      key={idx}
                      href={subItem.href}
                      className={`${
                        pathname.indexOf(subItem.href) !== -1
                          ? "bg-sky-100 font-bold"
                          : ""
                      }`}>
                      <span className=""> {t(`${subItem.name}`)}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            "flex h-10 grow items-center justify-center gap-2 rounded-md  p-1 mx-1 text-3xl font-semibold hover:bg-sky-100 hover:text-blue-600  md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "bg-sky-100 text-blue-600": pathname.indexOf(item.href) !== -1,
              "w-12 ": !isSidebarCollapsed,
            }
          )}>
          {isSidebarCollapsed ? (
            <span className="flex flex-row">
              <LinkIcon className="w-10 h-6" />
              <p className="hidden text-base md:block">{t(`${item.name}`)}</p>
            </span>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <LinkIcon className="w-10 h-6" />
                </TooltipTrigger>
                <TooltipContent
                  className="text-sm bg-secondary text-black mx-4 "
                  side="left"
                  sideOffset={4}>
                  <p>{t(`${item.name}`)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </Link>
      )}
    </div>
  );
};
