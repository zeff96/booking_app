"use client";

import {
  HomeIcon,
  PlusCircleIcon,
  PlusIcon,
  TrashIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  {
    name: "MOTORCYCLES",
    href: "/motorcycles",
    icon: HomeIcon,
  },
  {
    name: "RESERVE",
    href: "/motorcycles/reserve",
    icon: PlusIcon,
  },
  {
    name: "RESERVATIONS",
    href: "/motorcycles/reservations",
    icon: ListBulletIcon,
  },
  {
    name: "ADD MOTORCYCLE",
    href: "/motorcycles/add-motorcycle",
    icon: PlusCircleIcon,
  },
  {
    name: "DELETE MOTORCYCLE",
    href: "/motorcycles/delete-motorcycle",
    icon: TrashIcon,
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div>
      {items.map((item) => {
        const LinkIcon = item.icon;
        return (
          <Link
            href={item.href}
            key={item.name}
            className={clsx(
              "flex items-center justify-center lg:justify-start gap-2 p-4 text-sm",
              {
                "bg-lime-500 text-white": pathname === item.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <span className="hidden lg:block">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
