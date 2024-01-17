import DashboardLayout from "@/layout/dashboardLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSession, signOut } from "next-auth/react";
import Editor from "@/layout/ui/editor";
import toast from "react-hot-toast";
export default function Home({ name }) {
  if (!["resale", "rent", "manage", "buy"].includes(name)) {
    route.push("dashboard");
  }
  const { data: session, status } = useSession();
  const route = useRouter();
  name = route.query["name"];

  const [data1, setData1] = useState(null);
  const [DescriptionEn, setDescriptionEn] = useState(null);
  const [DescriptionAr, setDescriptionAr] = useState(null);
  const [t, i18n] = useTranslation();
  let window = null;
  useEffect(() => {
    window=document.window;
    getData1(name).then((val) => {
      setData1(val.owners);
      setDescriptionEn(val.owners[name].en);
      setDescriptionAr(val.owners[name].ar);
    });
  }, [name]);

  const handleSub = async (e) => {
    e.preventDefault();
    let ob = {
      ...data1,
      [name]: { en: DescriptionEn, ar: DescriptionAr },
    };

    let arr = [
      await fetch("/api/pages/store", {
        method: "POST",
        body: JSON.stringify(ob),
      }),
    ];

    Promise.all(arr).then(() => {
      toast.success("updated in successfully!");
    });
  };

  if (!data1) {
    return <></>;
  }
  if (!session && window!=null) window.location.href = "/dashboard";
  if (session && status != "loading")
    return (
      <div className=" pt-8  pb-16  xl:px-32   ">
        <div className="border-main border-2 p-4 rounded-md  bg-opacity-5 bg-main">
          <div className="flex flex-wrap ">
            <div className="w-1/2 p-2">
              <div>description En :</div>
              <Editor content={DescriptionEn} setContent={setDescriptionEn} />
            </div>
            <div className="w-1/2 p-2">
              <div>description Ar :</div>
              <Editor content={DescriptionAr} setContent={setDescriptionAr} />
            </div>
          </div>
          <button
            onClick={handleSub}
            className=" text-white p-3 px-5 rounded-lg  bg-main"
          >
            {"Save"}
          </button>
        </div>
      </div>
    );
}

async function getData1(name) {
  const res = await fetch("/api/pages/" + name);
  return await res.json();
}

Home.getInitialProps = async ({ query: { name } }) => {
  return { name: name };
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
