import Menu from "@/app/ui/nav-link-items";
import Image from "next/image";
import Link from "next/link";
import { LogoutButton } from "../ui/auth/logout-form";

export default function MotorcycleLayout({ children }) {
  return (
    <section className="w-full h-screen flex py-4">
      <div className="h-screen w-[14%] md:w-[8%] lg:w-[25%] xl:w-[20%] lg:pl-3 border-r border-gray-200 text-sm flex flex-col">
        <Link
          href="/motorcycles"
          className="flex items-center justify-center lg:justify-start"
        >
          <Image src="/icon.jpg" alt="navbar icon" width={150} height={150} />
        </Link>
        <Menu />
        <div className="mt-auto flex justify-center lg:justify-start pb-6">
          <LogoutButton />
        </div>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[75%] xl:w-[80%] px-3 py-3">
        {children}
      </div>
    </section>
  );
}
