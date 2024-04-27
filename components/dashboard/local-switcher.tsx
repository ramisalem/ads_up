"use client";
import { useI18n, useCurrentLocale } from "@/locales/client";
import LocaleSwitcherSelect from "./local-switcher-select";
import { useEffect } from "react";
import { SelectItem } from "@radix-ui/react-select";
import { SaudiArabiaFlag, EnglishFlag } from "./svgicons";
const locales = ["en", "ar"];
export default function LocaleSwitcher() {
  const t = useI18n();
  const locale = useCurrentLocale();
  // const localesName: { [key: string]: string } = {
  //   en: "English",
  //   ar: "عربي",
  // };

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const icon = (lng: string) =>
    lng === "ar" ? (
      <div className="flex flex-row justify-between items-center ">
        عربي
        <span className="grid-content w-8">
          <SaudiArabiaFlag />
        </span>
      </div>
    ) : (
      <div className="flex flex-row justify-between items-center ">
        {" English"}
        <span className="grid-content w-8">
          <EnglishFlag />
        </span>
      </div>
    );
  return (
    <div className="text-2xl font-semibold border-0 text-center">
      <LocaleSwitcherSelect defaultValue={locale} label={t("switchLocale")}>
        {locales.map((cur) => (
          <SelectItem
            className="cursor-pointer text-slate-600 border-0 hover:bg-slate-200 w-auto"
            key={cur}
            value={cur}>
            {icon(cur)}
          </SelectItem>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
