"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button type="button" onClick={signOut}>
      Logout
    </button>
  );
}
