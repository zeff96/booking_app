"use client";
import styles from "./logout.module.css";

export function LogoutButton() {
  return (
    <button type="button" className={styles.btn}>
      Logout
    </button>
  );
}
