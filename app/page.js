import Login from "./login/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Login />
    </div>
  );
}
