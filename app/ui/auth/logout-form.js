"use client";
import { PowerIcon } from "@heroicons/react/24/outline";

import { logout } from "@/app/actions/auth";
import { useActionState } from "react";

export function LogoutButton() {
  const [state, action, pending] = useActionState(logout, undefined);
  return (
    <form action={action}>
      <button type="submit" disabled={pending}>
        <PowerIcon className="w-6" />
      </button>
    </form>
  );
}
