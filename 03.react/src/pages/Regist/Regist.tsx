import { Header } from "../../layout/Header/Header";
import Button from "@/components/Button/Button";
import styles from "./Regist.module.css";
import { Input } from "@/components/Input/Input";

export const Regist = () => {
  return (
    <div className={`${styles.registPage}`}>
      <Header>TODO App 등록</Header>
      <div className={styles.registContainer}>
        <Input label="제목" />
        <Input label="내용" />
        <Button
          option="regist"
          label="등록"
          onClick={() => console.log("버튼 클릭")}
        />
      </div>
    </div>
  );
};
