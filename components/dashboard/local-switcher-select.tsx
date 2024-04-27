"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EnglishFlag, SaudiArabiaFlag } from "./svgicons";
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};
//import SaudiArabiaFlag from "@/components/dashboard/svgicons";
export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  //const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  function onSelectChange(
    value: string /*event: ChangeEvent<HTMLSelectElement>*/
  ) {
    // const nextLocale: any = event.target.value;
    const nextLocale: any = value;
    startTransition(() => {
      try {
        changeLocale(nextLocale);
      } catch (e) {
        throw e;
      }
      //window.history.replaceState(router.);
    });
  }
  const icon = (lng: string) =>
    lng === "ar" ? (
      <div className="flex flex-row justify-between items-center ">
        <span className="grid-content w-10">
          <SaudiArabiaFlag />
        </span>
      </div>
    ) : (
      <div className="flex flex-row justify-between items-center ">
        <span className="grid-content w-10">
          <EnglishFlag />
        </span>
      </div>
    );
  return (
    <label
      className={clsx(
        "relative text-black-100",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}>
      <p className="sr-only">{label}</p>
      <Select
        disabled={isPending}
        onValueChange={onSelectChange}
        defaultValue={defaultValue}
        value="">
        <SelectTrigger>
          <SelectValue placeholder={icon(defaultValue)}>
            {defaultValue}
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="text-black">{children}</SelectContent>
      </Select>
    </label>
  );
}
