import React from "react";
import { getMotorcircleById } from "../../../lib/motorcircles/getMotorcircles";
import styles from "./motorid.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = params;
  const motorcircle = await getMotorcircleById(id);
  return (
    <div className={styles.container}>
      <Image
        src={motorcircle.image}
        alt={motorcircle.name}
        width={500}
        height={500}
        style={{ objectFit: "cover", borderRadius: "1rem" }}
      />
      <div>
        <h2>{motorcircle.name}</h2>
        <p className={styles["finance-info"]}>
          Finance fee: ${motorcircle.finance_fee}
        </p>
        <p className={styles["finance-info"]}>
          Option to purchase: ${motorcircle.option_to_purchase}
        </p>
        <p className={styles["finance-info"]}>
          Total amount payable: ${motorcircle.total_amount_payable}
        </p>
        <p className={styles["finance-info"]}>
          Duration: {motorcircle.duration}
        </p>
      </div>
    </div>
  );
};

export default page;
