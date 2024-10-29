import { Outlet } from "react-router-dom";
import Header from "./compoents/Header";
import Footer from "./compoents/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
