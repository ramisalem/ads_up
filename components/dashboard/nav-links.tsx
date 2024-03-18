"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n, useScopedI18nUntyped } from "@/locales/client";
import clsx from "clsx";
import { SIDENAVITEMS } from "@/constants/links";
import { useState } from "react";
import { SideNavItem } from "@/constants/types";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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
          <button
            onClick={toggleSubMenu}
            className={clsx(
              "flex h-10  items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 ",
              {
                "bg-sky-100 text-blue-600": pathname.indexOf(item.href) !== -1,
                "flex w-10  ": !isSidebarCollapsed,
                "w-full": isSidebarCollapsed,
              }
            )}>
            <div className="flex flex-row space-x-4 items-center">
              <LinkIcon className="w-6" />
              {isSidebarCollapsed ? (
                <p className=" text-sm block">{t(`${item.name}`)}</p>
              ) : (
                <p className="hidden"></p>
              )}
            </div>

            {isSidebarCollapsed && (
              <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                <ChevronDownIcon className="w-6" />
              </div>
            )}
          </button>

          {subMenuOpen && isSidebarCollapsed && (
            <div className="my-2 ml-12   space-x-1  flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                //const SubLinkIcon = subItem.icon ;
                return (
                  <div
                    key={idx}
                    className={clsx(
                      "flex h-10  items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 ",
                      {
                        "bg-sky-100 text-blue-600":
                          pathname.indexOf(item.href) !== -1,
                        "flex w-10  ": !isSidebarCollapsed,
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
                      <span> {t(`${subItem.name}`)}</span>
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
            "flex h-10 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600  md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "bg-sky-100 text-blue-600": pathname.indexOf(item.href) !== -1,
              "w-10 ": !isSidebarCollapsed,
            }
          )}>
          <LinkIcon className="w-6" />
          {isSidebarCollapsed ? (
            <p className="hidden text-sm md:block">{t(`${item.name}`)}</p>
          ) : (
            <p className="hidden"></p>
          )}
        </Link>
      )}
    </div>
  );
};
