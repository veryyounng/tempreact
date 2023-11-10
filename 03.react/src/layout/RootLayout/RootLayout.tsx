import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import Button from "@/components/Button/Button";
import Link from "@/components/Link/Link";

export const RootLayout = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Footer />
      <Button
        option={"trash"}
        label={"테스트"}
        onClick={() => console.log("버튼 테스트")}
      ></Button>
      <Link path={"/Regist"}>링크 테스트</Link>
    </div>
  );
};
