"use client";

//import { languages, fallbackLng } from "@/app/i18n/settings";

import clsx from "clsx";
import { useState } from "react";
import { Navbar } from "./_components/navbar";
import HeaderMobile from "@/components/dashboard/header-mobile";
import SideNav from "@/components/dashboard/sidebar";
import StoreProvider from "@/app/storeProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen ">
      <Navbar />
      <HeaderMobile />
      <div
        className={clsx(
          "md:grid transition-[grid-template-column] max-h-fit duration-300 ease-in-out md:grid-cols-[1fr,minmax(0, 1fr)]",
          {
            "md:grid-cols-sidebar": collapsed,
            "md:grid-cols-sidebar-collapsed": !collapsed,
          }
        )}>
        <div className="flex h-full  md:w-64 md:block">
          <SideNav
            collapsed={collapsed}
            setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          />
        </div>

        <div className="flex flex-shrink-1  md:flex-none md:mx-3  md:overflow-y-auto md:px-5">
          {children}
        </div>
      </div>
    </div>
  );
}
