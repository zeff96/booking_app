import LoginPage from "./auth/login/login";
import Register from "./auth/Register/Register";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["main-wrapper"]}>
        <LoginPage />
        <hr />
        <div className={styles["signup-wrapper"]}>
          <button type="button" className={styles["signup-link"]}>
            Not registered? Click to signup
          </button>
          <div className={styles.modal}>
            <div className={styles["modal-content"]}></div>
            <div className={styles["modal-header"]}></div>
            <div className={styles["modal-body"]}>
              <Register />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
