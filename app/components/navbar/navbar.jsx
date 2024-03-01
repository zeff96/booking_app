import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { LogoutButton } from "../logout/logout";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { SideItems } from "./items";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className={styles.navbar} id="nav">
      <SideItems />
      {session && <LogoutButton />}
    </nav>
  );
};

export default Navbar;
