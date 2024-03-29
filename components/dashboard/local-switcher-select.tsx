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
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

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

  return (
    <label
      className={clsx(
        "relative text-black-100",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}>
      <p className="sr-only">{label}</p>
      {/* <select
        className="inline-flex appearance-light bg-transparent"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={(value) => onSelectChange(value)}>
        {children}
      </select> */}
      <Select
        // disabled={isPending}
        onValueChange={onSelectChange}
        defaultValue={defaultValue}
        value="hhhh">
        <SelectTrigger>
          <SelectValue placeholder={defaultValue}>{defaultValue}</SelectValue>
        </SelectTrigger>

        <SelectContent className="text-black">{children}</SelectContent>
      </Select>
    </label>
  );
}
