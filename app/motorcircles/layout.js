import Navbar from "../components/navbar/navbar";
import styles from "./page.module.css";

export default function MotorcircleLayout({ children }) {
  return (
    <section className={styles.section}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </section>
  );
}
