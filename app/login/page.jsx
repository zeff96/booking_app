"use client";

import { useFormStatus, useFormState } from "react-dom";
import { authenticate } from "../lib/action";
import styles from "./page.module.css";

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className={styles.form}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className={styles["form-control"]}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className={styles["form-control"]}
      />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.btn}>
      Login
    </button>
  );
}
