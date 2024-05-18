"use client";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { useScopedI18nUntyped } from "@/locales/client";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  const t = useScopedI18nUntyped("header");
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-2xl font-semibold")}>{t(`${label}`)}</h1>
      <p className="text-muted-foreground text-sm">{t(`${label}`)}</p>
    </div>
  );
};
