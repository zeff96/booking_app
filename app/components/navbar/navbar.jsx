import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { LogoutButton } from "../logout/logout";
import { getServerSession } from "next-auth";

const Navbar = () => {
  const session = getServerSession();

  return (
    <nav className={styles.navbar} id="nav">
      <ul className={styles.item}>
        <li className={styles["list-item"]}>
          <Link className={styles["nav-link"]} href="/">
            Models
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link className={styles["nav-link"]} href="/">
            Reserve
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link className={styles["nav-link"]} href="/">
            Reservations
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link className={styles["nav-link"]} href="/">
            Add Motorcircle
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link className={styles["nav-link"]} href="/">
            Delete Motorcircle
          </Link>
        </li>
      </ul>
      {session && <LogoutButton />}
    </nav>
  );
};

export default Navbar;
