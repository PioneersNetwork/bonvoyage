import DAshboardHeader from "./DAshboardHeader";
import { useTranslation } from "react-i18next";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" w-full">
      <DAshboardHeader />
      <main className=" pt-24 ">{children}</main>
    </div>
  );
};
export default DashboardLayout;
