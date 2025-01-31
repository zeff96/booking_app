"use client";

import { verifyAccount } from "@/app/actions/auth";
import { useActionState } from "react";

export const AccountConfirmationForm = ({ token }) => {
  const [state, action, pending] = useActionState(verifyAccount, undefined);
  return (
    <form action={action}>
      <input type="hidden" name="token" value={token} />
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Verify email
        </button>
      </div>
    </form>
  );
};
