import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function isValidDate(d: any) {
  const parsedDate = new Date(d);
  return parsedDate instanceof Date && !Number.isNaN(parsedDate);
}