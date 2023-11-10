import { useId } from "react";
import styles from "./Input.module.css";

export const Input = ({ label }: { label: string }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input type="text" name="" id={id} className={styles.inputField} />
    </>
  );
};
