import MainForm from "@/layout/ui/form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/layout/Layout";
import Head from "next/head";

export default function Home({ id }) {
  const route = useRouter();
  id = route.query["id"];

  const [data, setData] = useState(null);
  const [meta, setMeta] = useState(null);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    getData(id).then((val) => {
      setData(val.rental[0]);
      setMeta(val.meta[0]);
    });
  }, [id]);

  if (!data) {
    return <></>;
  }
  return (
    <div className="pt-[100px]  pb-16  xl:px-32 ">
      <Head>
        <title key={meta.id}>{meta.title ? meta.title : "club"} </title>
        <meta name="description" content={meta.description}></meta>
        <meta name="keywords" content={meta.keywords}></meta>
      </Head>
      <div className=" p-4 w-full ">
        <img
          src={"/images/clup/" + data.img_link}
          className="w-full h[300px] object-cover object-center"
        />
      </div>
      <h2 className=" text-4xl  text-[#333] pb-4 text-center">
        {data.title[i18n.language]}
      </h2>
      <div className="flex flex-wrap ">
        <div className=" lg:w-5/12">
          <iframe
            className="w-full h-[345px] p-8"
            src={data.video_link}
          ></iframe>
          <div class="text-center ">
            <div class="mt-5 mb-5">
              <a href={"/clubs/" + data.club_link}>
                <img className="m-auto" src="/images/bon.gif" width="150px" />
              </a>
            </div>
            <p class="mt-5 text-black ">
              {t("For week availability, click")}
              <a
                href={"/clubs/" + data.club_link}
                className="  underline p-1 text-blue-500 "
              >
                {t("Rental Vacations")}
              </a>
              {t(
                "in the dashboard. Weeks are updated daily basis and on time."
              )}
            </p>
          </div>
        </div>

        <div className=" w-full lg:w-7/12 px-6 lg:pt-4">
          <p
            className="pt-3 text-[#666]    font-base"
            dangerouslySetInnerHTML={{
              __html: data.description[i18n.language],
            }}
          ></p>
        </div>
      </div>

      <MainForm header={"Rental Inquiry"} body={" "} hideGIf={true} />
    </div>
  );
}

async function getData(id) {
  const res = await fetch("/api/rental/" + id);
  return await res.json();
}

Home.getInitialProps = async ({ query: { id } }) => {
  return { id: id };
};

Home.getLayout = (page) => <Layout>{page}</Layout>;
