import Link from "next/link";
import LoginPage from "./auth/login/login";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["main-wrapper"]}>
        <LoginPage />
        <hr />
        <Link href="/register" className={styles["signup-link"]}>
          Not registered? Click to signup
        </Link>
      </div>
    </main>
  );
}
