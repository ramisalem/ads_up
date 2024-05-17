"use client";

//import { languages, fallbackLng } from "@/app/i18n/settings";

import clsx from "clsx";
import { useState } from "react";
import { Navbar } from "./_components/navbar";

import SideNav from "@/components/dashboard/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setSidebarCollapsed] = useState(true);

  return (
    <>
      {/* <HeaderMobile /> */}
      <div
        className={clsx(
          "grid min-h-screen transition-[grid-template-column]  duration-300 ease-in-out md:grid-cols-[1fr,minmax(0, 1fr)]",
          {
            "md:grid-cols-sidebar": collapsed,
            "md:grid-cols-sidebar-collapsed": !collapsed,
          }
        )}>
        <div className="hidden md:grid">
          <SideNav
            shown={false}
            collapsed={collapsed}
            setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          />
        </div>
        <div>
          <Navbar collapsed={collapsed} />
          {children}
        </div>
      </div>
    </>
  );
}
