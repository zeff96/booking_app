import React from "react";
import styles from "./addform.module.css";

const AddMotorcircle = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles["wrapper-title"]}>Add Motorcircle</h2>
      <form action="" className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={styles["form-control"]}
        />
        <input
          type="number"
          name="finance_fee"
          placeholder="Finance fee"
          required
          className={styles["form-control"]}
        />
        <input
          type="number"
          name="option_to_purchase"
          placeholder="Option to purchase"
          required
          className={styles["form-control"]}
        />
        <input
          type="number"
          name="total_amount_payable"
          placeholder="Total amount payable"
          required
          className={styles["form-control"]}
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          required
          className={styles["form-control"]}
        />
        <textarea
          name="bio"
          placeholder="Description"
          className={styles["form-control"]}
        ></textarea>
        <SubmitButton />
      </form>
    </div>
  );
};

function SubmitButton() {
  return (
    <button type="submit" className={styles.btn}>
      Create
    </button>
  );
}

export default AddMotorcircle;
