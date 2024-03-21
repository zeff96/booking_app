"use client";
import styles from "./logout.module.css";
import { handleLogout } from "../../../lib/action";

export function LogoutButton() {
  return (
    <button type="button" onClick={handleLogout} className={styles.btn}>
      Logout
    </button>
  );
}
