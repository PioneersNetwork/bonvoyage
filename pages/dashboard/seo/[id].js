import DashboardLayout from "@/layout/dashboardLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSession, signOut } from "next-auth/react";
export default function Home({ id }) {
  const { data: session, status } = useSession();
  const route = useRouter();
  id = route.query["id"];

  const [data1, setData1] = useState(null);
  const [t, i18n] = useTranslation();
  let window = null;
  useEffect(() => {
    window=document.window;
    getData1(id).then((val) => {
      setData1(val.meta[0]);
    });
  }, [id]);

  const handleSub = async () => {
    const result = await fetch("/api/meta/update", {
      method: "POST",
      body: JSON.stringify(data1),
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
          <div className="">
            <div>{data1.menu}</div>
            <div>{data1.name}</div>
            <div className="w-full p-2">
              <div>Title</div>
              <input
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                type="text"
                name="name"
                placeholder="english name"
                required
                value={data1.title}
                onChange={(e) => {
                  setData1({ ...data1, title: e.target.value });
                }}
              />
            </div>
            <div className="w-full p-2">
              <div>Key Word</div>

              <input
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                type="text"
                name="name"
                placeholder="arabic name"
                required
                value={data1.keywords}
                onChange={(e) => {
                  setData1({ ...data1, keywords: e.target.value });
                }}
              />
            </div>
            <div className="w-full p-2">
              <div>description</div>

              <input
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                type="text"
                name="name"
                placeholder="arabic name"
                required
                value={data1.description}
                onChange={(e) => {
                  setData1({ ...data1, description: e.target.value });
                }}
              />
            </div>
            <button
              onClick={handleSub}
              className=" text-white p-3 px-5 rounded-lg  bg-main"
            >
              {"Save"}
            </button>
          </div>
        </div>
      </div>
    );
}

async function getData1(id) {
  const res = await fetch("/api/meta/" + id);
  return await res.json();
}

Home.getInitialProps = async ({ query: { id } }) => {
  return { id: id };
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
