import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.item}>
        <li className={styles["list-item"]}>
          <Link href="/">Motorcircles</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/">Reserve</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/">Reservations</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/">Add Motorcircle</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/">Delete Motorcircle</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
