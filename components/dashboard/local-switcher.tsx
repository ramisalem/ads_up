"use client";
import { useI18n, useCurrentLocale } from "@/locales/client";
import LocaleSwitcherSelect from "./local-switcher-select";

const locales = ["en", "ar"];
export default function LocaleSwitcher() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const localesName = {
    en: "English",
    ar: "عربي",
  };

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("switchLocale")}>
      {locales.map((cur: string) => (
        <option key={cur} value={cur}>
          {localesName[cur]}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
