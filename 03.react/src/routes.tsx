import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "@/layout/RootLayout/RootLayout";
import { Regist } from "./pages/Regist/Regist";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="regist" element={<Regist />} />
    </Route>
  )
);
