"use client";
import styles from "./PaqButton.module.css";

const PaqButton = ({ onClick, label }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {label}
    </button>
  );
};

export default PaqButton;
