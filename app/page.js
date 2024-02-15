import Login from "./login/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
