"use client";

import Login from "./login/page";
import styles from "./page.module.css";

export default function Home() {
  const closeSideNav = () => {
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");

    nav.style.width = "0";
    main.style.marginLeft = "0";
  };
  return (
    <main className={styles.main} id="main">
      <Login />
      <button onClick={closeSideNav}>close</button>
    </main>
  );
}
