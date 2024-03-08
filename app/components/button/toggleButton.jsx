"use client";
import React, { useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { PiCaretLeftBold } from "react-icons/pi";
import styles from "./button.module.css";

const ToggleButton = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div>
      {!isHover && (
        <TbMinusVertical
          className={styles.btn}
          onPointerEnter={handleMouseOver}
        />
      )}
      {isHover && (
        <PiCaretLeftBold
          className={styles.btn}
          onPointerLeave={handleMouseOut}
        />
      )}
    </div>
  );
};

export default ToggleButton;
