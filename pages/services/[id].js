import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/layout/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Home({ id }) {
  const route = useRouter();
  id = route.query["id"];

  const [data, setData] = useState(null);
  const [meta, setMeta] = useState([]);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    setData();
    getData(id).then((val) => {
      setData(val.service[0]);
      setMeta(val.meta[0]);
    });
  }, [id]);

  if (!data) {
    return (
      <div className="fixed bg-black w-full h-full left-0 top-0 flex justify-center items-center z-50">
        <Image className="animate-pulse" src={"/images/icons/logo.svg"} width={100} height={70} />
      </div>
    );
  }
  return (
    <div className="pt-[100px]  pb-16  px-[16px] lg:px-32">
      <Head>
        <title key={meta.id}>{meta.title ? meta.title : "club"} </title>
        <meta name="description" content={meta.description}></meta>
        <meta name="keywords" content={meta.keywords}></meta>
      </Head>
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src={"/images/" + data.logo}
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {data.title[i18n.language]}
          </h2>
          <p
            className="pt-3 text-[#666]    font-base"
            dangerouslySetInnerHTML={{
              __html: data.description[i18n.language],
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}

async function getData(id) {
  const res = await fetch("/api/services/" + id);
  return await res.json();
}

Home.getInitialProps = async ({ query: { id } }) => {
  return { id: id };
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
