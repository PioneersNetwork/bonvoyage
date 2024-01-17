import DashboardLayout from "@/layout/dashboardLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  const [data1, setData1] = useState([
    { name: "manage" },
    { name: "resale" },
    { name: "buy" },
    { name: "rent" },
  ]);
  const [t, i18n] = useTranslation();

  if (data1.length == 0) {
    return <></>;
  }
  if (!session) window.location.href = "/dashboard";
  if (session && status != "loading")
    return (
      <div className="pt-[100px] px-8  pb-16  xl:px-32 ">
        <div className="flex flex-wrap  justify-center">
          {data1.map((val) => {
            return (
              <Link href={"pages/" + val.name} key={val.name} className=" p-4 ">
                <h2 className="  bg-[#333] bg-opacity-30 border-main border-2 rounded-lg text-center    p-4">
                  {t(val.name)}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    );
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
