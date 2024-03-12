"use client";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { useI18n } from "@/locales/client";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  const t = useI18n();
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        🔐 {t("sign")}
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
