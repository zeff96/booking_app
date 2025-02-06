"use client";

import { deleteMotorcycle } from "@/app/actions/motorcycles/motorcles";
import { useFormStatus } from "react-dom";

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-red-500 text-sm p-2 text-white rounded-md hover:bg-red-700"
    >
      Delete
    </button>
  );
}

export function DeleteForm({ itemId }) {
  const deleteMotorcycleWithId = deleteMotorcycle.bind(null, itemId);
  return (
    <form action={deleteMotorcycleWithId}>
      <DeleteButton />
    </form>
  );
}
