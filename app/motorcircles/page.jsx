import Image from "next/image";
import { getMotorcircles } from "../../lib/motorcircles/getMotorcircles";
import styles from "./page.module.css";

export default async function MotorCircles() {
  const motorcircles = await getMotorcircles();
  let listMotorcircles = motorcircles.map((motor) => (
    <li key={motor.id} className={styles["list-item"]}>
      <h2>{motor.name}</h2>
      <Image
        src={motor.image}
        alt={motor.name}
        width={200}
        height={200}
        style={{ borderRadius: "50%" }}
      />
      <p>{motor.bio}</p>
    </li>
  ));
  return (
    <div className={styles.wrapper}>
      <h2 className={styles["wrapper-title"]}>Select a motorcircle</h2>
      {<ul className={styles.list}>{listMotorcircles}</ul>}
    </div>
  );
}
