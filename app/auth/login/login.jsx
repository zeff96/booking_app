"use client";
import { useFormStatus, useFormState } from "react-dom";
import { authenticate } from "../../../lib/action";
import styles from "./login.module.css";

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} className={styles.btn}>
      Login
    </button>
  );
};

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form className={styles.form} action={dispatch}>
      <div className={styles["form-wrapper"]}>
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
        <div>
          {errorMessage && (
            <p className={styles["error-message"]}>{errorMessage}</p>
          )}
        </div>
        <LoginButton />
      </div>
    </form>
  );
}
