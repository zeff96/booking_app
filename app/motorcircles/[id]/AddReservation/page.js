import React from "react";
import styles from "./addReservation.module.css";

const AddReserveForm = () => {
  return (
    <section className={styles.section}>
      <h2>BOOK A VESPA TEST-RIDE</h2>
      <p className={styles["vespa-info"]}>
        There are different versions of the Vespa.Today five series are in
        production: the classic manual transmission PX and the modern CVT
        transmission S, LX, GT, and GTS. We have showrooms all over the globe
        which some include test-riding facilities. If you wish to find out if a
        test-ride is available in your area. Please use the selector below
      </p>
      <div>
        <select name="" id=""></select>
        <button type="button">Book Now</button>
      </div>
    </section>
  );
};

export default AddReserveForm;
