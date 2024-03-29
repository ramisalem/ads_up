"use client";
import { useI18n, useCurrentLocale } from "@/locales/client";
import LocaleSwitcherSelect from "./local-switcher-select";
import { FunctionComponent, useEffect } from "react";
import { SelectItem } from "@radix-ui/react-select";
const locales = ["en", "ar"];
export default function LocaleSwitcher() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const localesName: { [key: string]: string } = {
    en: "English",
    ar: "عربي",
  };
  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);
  return (
    <div className="text-2xl font-semibold text-center">
      <LocaleSwitcherSelect defaultValue={locale} label={t("switchLocale")}>
        {locales.map((cur) => (
          <SelectItem
            className="cursor-pointer text-slate-600 hover:bg-slate-200"
            key={cur}
            value={cur}>
            {localesName[cur]}
          </SelectItem>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
