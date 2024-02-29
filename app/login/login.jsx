"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <form>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <input type="submit" value="Login" />
    </form>
  );
}
