import DashboardLayout from "@/layout/dashboardLayout";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { data: session, status } = useSession();
  const [data1, setData1] = useState([]);
  const [t, i18n] = useTranslation();
  let window=null;
  useEffect(() => {
    window= document.window;
    getData().then((val) => {
      console.log(val);
      setData1(val.clubs);
    });
  }, []);

  if (data1.length == 0) {
    return <></>;
  }
  if (!session && window!=null) window.location.href = "/dashboard";
  if (session && status != "loading")
    return (
      <div className="pt-[100px] px-8  pb-16  xl:px-32 ">
        <div className="flex flex-wrap  justify-center">
          {data1.map((val) => {
            return (
              <Link href={"clubs/" + val.id} key={val.id} className=" p-4 ">
                <h2 className="  bg-[#333] bg-opacity-30 border-main border-2 rounded-lg text-center    p-4">
                  <div>{val.id}</div>
                  {val.title[i18n.language]}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    );
}

async function getData() {
  const res = await fetch("/api/list/clubs");
  return await res.json();
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
