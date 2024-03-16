import React from "react";
import styles from "./navbar.module.css";
import { LogoutButton } from "../logout/logout";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { SideItems } from "./items";
import ToggleButton from "../components/button/toggleButton";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className={styles.navbar} id="nav">
      <img
        src="https://i.pinimg.com/originals/4f/8f/6e/4f8f6eb8e47d42930a4fea87a575d653.jpg"
        alt="logo"
        style={{ width: "100px", height: "50px" }}
      />
      <SideItems />
      {session && <LogoutButton />}
      <ToggleButton />
    </nav>
  );
};

export default Navbar;
