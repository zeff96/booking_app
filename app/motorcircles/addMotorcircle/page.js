"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./addform.module.css";
import { create } from "../../../lib/motorcircles/createMotorcircle";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.btn} aria-disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

const Form = () => {
  const [state, formAction] = useFormState(create, initialState);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles["wrapper-title"]}>Add Motorcircle</h2>
      <form action={formAction} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={styles["form-control"]}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
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
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </form>
    </div>
  );
};

export default function AddMotorcircle() {
  return <Form />;
}
