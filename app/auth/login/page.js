"use client";
import { useFormStatus, useFormState } from "react-dom";
import Link from "next/link";
import { authenticate } from "../../../lib/action";
import styles from "./login.module.css";

const initialState = {
  message: "",
};

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} className={styles.btn}>
      Login
    </button>
  );
};

export default function LoginPage() {
  const [state, dispatch] = useFormState(authenticate, initialState);
  return (
    <form className={styles.form} action={dispatch}>
      <div className={styles["form-wrapper"]}>
        <h2 className={styles.header}>Login to account</h2>
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
        <p className={styles["error-message"]}>{state?.message}</p>
        <LoginButton />
        <hr />
        <div className={styles["signup-wrapper"]}>
          <Link href="/auth/registration" className={styles["signup-link"]}>
            Not registered? Click to signup
          </Link>
        </div>
      </div>
    </form>
  );
}
