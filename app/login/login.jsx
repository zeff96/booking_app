"use client";

import { signIn } from "next-auth/react";
import styles from "./login.module.css";

export default function LoginPage() {
  async function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);

    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
      <input type="submit" value="Login" className={styles.btn} />
    </form>
  );
}
