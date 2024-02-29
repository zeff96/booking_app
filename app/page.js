import styles from "./page.module.css";
import LoginPage from "./login/login";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className={styles.main} id="main">
      <LoginPage />
    </main>
  );
}
