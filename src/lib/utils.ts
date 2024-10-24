import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uniqBy<T, Q>(a: T[], key: (val: T) => Q) {
  return [...new Map(a.map((x) => [key(x), x])).values()];
}
