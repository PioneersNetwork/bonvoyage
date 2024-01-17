import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./header";
import { useTranslation } from "react-i18next";
import { SessionProvider } from "next-auth/react";
const Layout = ({ children }) => {
  return (
    <SessionProvider>
      <div className=" w-full">
        <Header />
        <main className=" min-h-screen">{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
};
export default Layout;
