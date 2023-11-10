import styles from "./RootLayout.module.css";
import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";
// import Button from "@/components/Button/Button";
// import Link from "@/components/Link/Link";
// import { Input } from "../../components/Input/Input";
import { Regist } from "@/pages/Regist/Regist";

export const RootLayout = (): JSX.Element => {
  return (
    <div className={`${styles.container}`}>
      {/* <Header>메인 헤더 테스트</Header> */}
      <Regist />
      <Footer />
    </div>
  );
};
