import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cssMerge = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const formatCurrency = (amount) => {
  return (amount / 100).toLocaleString("en-EU", {
    style: "currency",
    currency: "EUR",
  });
};
