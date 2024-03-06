"use client";

import { signOut } from "next-auth/react";
import styles from "./logout.module.css";

export function LogoutButton() {
  return (
    <button type="button" onClick={signOut} className={styles.btn}>
      Logout
    </button>
  );
}
