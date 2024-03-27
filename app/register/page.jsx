import Link from "next/link";
import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <form className={styles.form}>
      <div className={styles["form-wrapper"]}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          required
          className={styles["form-control"]}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles["form-control"]}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={styles["form-control"]}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          required
          className={styles["form-control"]}
        />
        <input type="submit" value="Login" className={styles.btn} />
        <hr />
        <div className={styles["login-wrapper"]}>
          <Link href="/" className={styles["login-link"]}>
            Registered? Click to login
          </Link>
        </div>
      </div>
    </form>
  );
}
