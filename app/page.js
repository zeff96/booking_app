import styles from "./page.module.css";
import { SigninWrapperButton } from "./components/button/signin-wrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <SigninWrapperButton>
        <button type="button">Signin</button>
      </SigninWrapperButton>
    </main>
  );
}
