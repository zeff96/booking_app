"use client";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import styles from "./register.module.css";
import { register } from "../../../lib/action";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.btn}>
      Signup
    </button>
  );
}

export default function RegisterPage() {
  const [state, formAction] = useFormState(register, initialState);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles["form-wrapper"]}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          required
          className={styles["form-control"]}
        />
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
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          required
          className={styles["form-control"]}
        />
        <SubmitButton />
        <p aria-live="polite" role="status" className={styles["error-message"]}>
          {state?.message}
        </p>
        <hr />
        <div className={styles["login-wrapper"]}>
          <Link href="/" className={styles["login-link"]}>
            Registered? Click to login
          </Link>
        </div>
      </div>
    </form>
  );
}
