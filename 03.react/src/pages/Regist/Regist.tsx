import { Input } from "@/components/Input/Input";
import S from "./Regist.module.css";
export const Regist = (): JSX.Element => {
  return (
    <>
      <h1 className={S.registHeader}>TODO App 등록</h1>
      <div className={S.inputWrapper}>
        <Input label="제목:" />
        <Input label="내용:" />
      </div>
    </>
  );
};
