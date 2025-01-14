import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cssMerge = (...inputs) => {
  return twMerge(clsx(inputs));
};
