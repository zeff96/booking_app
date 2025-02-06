import getMotorcycles from "@/app/actions/motorcycles/motorcles";
import { verifySession } from "@/app/lib/dal";
import { DeleteForm } from "@/app/ui/motorcycles/deleteMotorcycle/deleteMotorcycle";
import Link from "next/link";

async function DeleteMotorcircle() {
  const { role } = await verifySession();
  const listMotorcircles = await getMotorcycles();

  if (role !== "admin") {
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
      <h2 className="text-xl font-semibold text-center mb-10">
        Choose a motorcircle to delete by clicking delete button
      </h2>
      {listMotorcircles.map((item) => (
        <div
          key={item.id}
          className="border-t border-e border-s border-gray-300 p-3 last:border-b hover:bg-gray-200 flex items-center justify-between"
        >
          <span>{item.name}</span>
          <DeleteForm itemId={item.id} />
        </div>
      ))}
    </div>
  );
}

export default DeleteMotorcircle;
