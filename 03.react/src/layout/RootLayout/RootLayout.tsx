import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const RootLayout = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
