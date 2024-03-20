import { cookies } from "next/headers";
import styles from "./navbar.module.css";
import { LogoutButton } from "../logout/logout";
import { SideItems } from "./items";
import ToggleButton from "../button/toggleButton";

const Navbar = async () => {
  const token = cookies().get("token");

  return (
    <nav className={styles.navbar} id="nav">
      <img
        src="https://i.pinimg.com/originals/4f/8f/6e/4f8f6eb8e47d42930a4fea87a575d653.jpg"
        alt="logo"
        style={{ width: "100px", height: "50px" }}
      />
      <SideItems />
      {token && <LogoutButton />}
      <ToggleButton />
    </nav>
  );
};

export default Navbar;
