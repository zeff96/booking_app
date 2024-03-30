"use client";
import { useFormStatus, useFormState } from "react-dom";
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
        <LoginButton />
        <p className={styles["error-message"]}>{state?.message}</p>
      </div>
    </form>
  );
}
