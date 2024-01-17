import DashboardLayout from "@/layout/dashboardLayout";
import Editor from "@/layout/ui/editor";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { toBase64 } from "@/utils/base64";
export default function Home({ id }) {
  const { data: session, status } = useSession();
  const route = useRouter();
  id = route.query["id"];

  const [data1, setData1] = useState(null);
  const [DescriptionEn, setDescriptionEn] = useState(null);
  const [DescriptionAr, setDescriptionAr] = useState(null);
  const [image, setImage] = useState();
  const [t, i18n] = useTranslation();

  useEffect(() => {
    getData1(id).then((val) => {
      setData1(val.service[0]);
      setDescriptionEn(val.service[0].description.en);
      setDescriptionAr(val.service[0].description.ar);
    });
  }, [id]);

  const handleSub = async (e) => {
    e.preventDefault();
    let image_name = null;
    if (image) {
      image_name = Date.now() + "." + image.name.split(".").at(-1);
    }
    let ob = {
      ...data1,
      description: { en: DescriptionEn, ar: DescriptionAr },
    };
    if (image) {
      ob.logo = image_name;
    }
    let base = null;
    if (image) base = await toBase64(image);
    let arr = [
      await fetch("/api/services/store", {
        method: "POST",
        body: JSON.stringify(ob),
      }),
    ];
    if (image) {
      arr.push(
        await fetch("http://localhost:8000/api/images/upload", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            image: base,
            image_name: image_name,
            path: "images",
          }),
        })
      );
    }
    Promise.all(arr).then(() => {
      toast.success("updated in successfully!");
    });
  };

  if (!data1) {
    return <></>;
  }
  if (!session) window.location.href = "/dashboard";
  if (session && status != "loading")
    return (
      <div className=" pt-8  pb-16  xl:px-32   ">
        <div className="border-main border-2 p-4 rounded-md  bg-opacity-5 bg-main">
          <input
            type="file"
            onChange={(val) => {
              setImage(val.target.files[0]);
            }}
          />
          <div className="flex flex-wrap ">
            <div className=" p-4 w-full lg:w-1/3">
              <img
                src={"/images/" + data1.logo}
                className="w-full h[300px] object-cover object-center"
              />
            </div>
            <div className=" p-4 w-full lg:w-1/3">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full h[300px] object-cover object-center"
                />
              ) : null}
            </div>

            <div className="w-1/2 p-2">
              <input
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                type="text"
                name="name"
                placeholder="english name"
                required
                value={data1.title.en}
                onChange={(val) => {
                  setData1({
                    ...data1,
                    title: { en: val.target.value, ar: data1.title.ar },
                  });
                }}
              />
            </div>
            <div className="w-1/2 p-2">
              <input
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                type="text"
                name="name"
                placeholder="arabic name"
                required
                value={data1.title.ar}
                onChange={(val) => {
                  setData1({
                    ...data1,
                    title: { en: data1.title.en, ar: val.target.value },
                  });
                }}
              />
            </div>

            {/* <h2 className=" w-full text-4xl  text-[#333] pb-4">{data1.title.en}</h2>
        <h2 className=" w-full text-4xl  text-[#333] pb-4">{data1.title.ar}</h2> */}
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

async function getData1(id) {
  const res = await fetch("/api/services/" + id);
  return await res.json();
}

Home.getInitialProps = async ({ query: { id } }) => {
  return { id: id };
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
