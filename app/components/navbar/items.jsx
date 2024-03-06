import Link from "next/link";
import styles from "./navbar.module.css";

const items = [
  {
    name: "model",
    path: "/motorcircles",
  },
  {
    name: "reserve",
    path: "/motorcircles/reserve",
  },
  {
    name: "reservations",
    path: "/motorcircles/reservations",
  },
  {
    name: "add motorcircle",
    path: "/motorcircles/addMotorcircle",
  },
  {
    name: "delete motorcircle",
    path: "/motorcircles/deleteMotorcircle",
  },
];

export function SideItems() {
  let listItem = items.map((item) => (
    <li key={item.name} className={styles["list-item"]}>
      <Link href={item.path} className={styles["nav-link"]}>
        {item.name}
      </Link>
    </li>
  ));

  return <ul className={styles.list}>{listItem}</ul>;
}
