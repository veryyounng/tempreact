import { useId } from "react";
import S from "./Input.module.css";

export const Input = ({
  label,
}: // ref,
{
  label: string;
  // ref: React.RefObject<HTMLInputElement>;
}) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className={S.inputLabel}>
        {label}
      </label>
      <input type="text" name="" id={id} className={S.inputField} />
    </>
  );
};
