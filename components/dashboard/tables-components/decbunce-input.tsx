"use client";
import { Input } from "@/components/ui/input";
import React from "react";

export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  placeholder,
  ...props
}: {
  value: string | number | any;
  onChange: (value: string | number | any) => void;
  debounce?: number;
  placeholder?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState<string | number | any>(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Input
      {...props}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      className="h-8 w-[150px] lg:w-[250px]"
    />
  );
}
