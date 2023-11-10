import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  option: string;
  label: string;
}

const Button = ({ option, onClick, label, className }: ButtonProps) => {
  const mode =
    option === "regist"
      ? styles["buttonRegist"]
      : option === "trash"
      ? styles["buttonTrash"]
      : styles["buttonDefault"];

  return (
    <button
      type="button"
      className={`${styles.button} ${mode} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
