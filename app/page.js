import styles from "./page.module.css";
import LoginPage from "./login/login";
import { getServerSession } from "next-auth";
import MotorCircles from "./components/motorcircles/motorcircles";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className={styles.main} id="main">
      {session ? <MotorCircles /> : <LoginPage />}
    </main>
  );
}
