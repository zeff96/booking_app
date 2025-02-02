import { verifySession } from "@/app/lib/dal";
import { user } from "@/app/lib/data";
import { AddMotorcycleForm } from "@/app/ui/motorcycles/addmotorcycle/add-motorcycle";
import Link from "next/link";

export default async function Page() {
  const session = await verifySession();
  const userRole = session.role;

  if (userRole !== "admin") {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-center font-semibold text-2xl mb-3">
          Access Denied
        </h2>
        <p className="text-center">
          You do not have the necessary permissions to access this page.
        </p>
        <Link
          href="/motorcycles"
          className="mt-3 bg-blue-500 text-white rounded-md p-3 hover:bg-blue-700"
        >
          Motorcycles
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl mb-3">Add Vespa</h2>
      <AddMotorcycleForm />
    </div>
  );
}
