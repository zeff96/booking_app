"use client";

import { verifyAccount } from "@/app/actions/auth";

export const AccountConfirmationForm = ({ token }) => {
  const verifyAccountWithToken = verifyAccount.bind(null, token);

  return (
    <form action={verifyAccountWithToken}>
      <div>
        <button
          disabled={pending}
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Verify email
        </button>
      </div>
      {state?.message && <div className="text-red-500">{state.message}</div>}
    </form>
  );
};
