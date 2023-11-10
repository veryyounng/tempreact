import { Header } from "../../layout/Header/Header";
import Button from "@/components/Button/Button";
import styles from "./Regist.module.css";

export const Regist = () => {
  return (
    <div className={`${styles.registPage}`}>
      <Header>투두 등록 헤더 테스트</Header>
      <div className={styles.registContainer}>
        <input
          type="text"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <textarea
          // value={content}
          // onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
        />
        <Button
          option="regist"
          label="등록"
          onClick={() => console.log("버튼 클릭")}
        />
      </div>
    </div>
  );
};
