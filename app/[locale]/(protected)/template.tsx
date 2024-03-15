"use client";

//import { languages, fallbackLng } from "@/app/i18n/settings";

import clsx from "clsx";
import { useState } from "react";
import { Navbar } from "./_components/navbar";
import SideNav from "@/components/dashboard/sidebar";

//import { I18nProviderClient } from "@/locales/client";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        className={clsx(
          "grid md:transition-[grid-template-column] max-h-full md:min-w-fit duration-300 ease-in-out md:flex-row md:overflow-hidden",
          {
            "grid-cols-sidebar": collapsed,
            "grid-cols-sidebar-collapsed": !collapsed,
          }
        )}>
        <div className="flex h-full md:w-64 md:block">
          <SideNav
            collapsed={collapsed}
            setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          />
        </div>

        <div className="flex flex-shrink-1 mt-3 md:flex-none  md:overflow-y-auto md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
