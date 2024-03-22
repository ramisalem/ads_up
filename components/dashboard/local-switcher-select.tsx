"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

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

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale: any = event.target.value;

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
      <select
        className="inline-flex appearance-light bg-transparent"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={(value) => onSelectChange(value)}>
        {children}
      </select>
    </label>
  );
}
