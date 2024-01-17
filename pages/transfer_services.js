import MainForm from "@/layout/ui/form";
import Layout from "@/layout/Layout";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then((val) => {
      setData(val.transports);
    });
  }, []);

  if (!data) {
    return <></>;
  }
  return (
    <div className="xl:px-32 px-8">
      <Hotel />
      <Trans transport={data} />
      <MainForm />
    </div>
  );
}

const Hotel = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-[100px]">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="/images/travel/trans.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-14 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Transfer Services")}
          </h2>
          <p className="pt-3 text-[#666]">
            {t(
              "Arrive in Style and on time in a high-end or normal vehicle whether you are traveling alone, with loved ones or as a group, our fleet of safe and comfortable vehicles are available at your service. We also accommodate requests for specific brands, series, sizes and colors. We are committed to delivering the highest level of personalized treatment providing our clientele with exceptional service."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Trans = ({ transport }) => {
  const [t, i18n] = useTranslation();

  // const clubs = [
  //   {
  //     name: "Personal driver",
  //     sub: "This service is launched with professionalism and attention",
  //     image: "/images/trans-1.jpg",
  //   },
  //   {
  //     name: "Rent a car",
  //     sub: "Customers can choose to rent a car on a daily , weekly , monthly",
  //     image: "/images/trans-2.jpg",
  //   },
  //   {
  //     name: "Taxi",
  //     sub: "We provide taxi services for 24 hours",
  //     image: "/images/trans-3.jpg",
  //   },
  //   {
  //     name: "Public Transport",
  //     sub: "Choose freely the type of vehicle you wish",
  //     image: "/images/trans-4.jpg",
  //   },
  //   {
  //     name: "Yacht",
  //     sub: "Try yachting services to save time , stress and enjoy sailing",
  //     image: "/images/trans-5.jpg",
  //   },
  //   {
  //     name: "Train",
  //     sub: "We give you the possibility to travel on all trains on all axis",
  //     image: "/images/trans-6.jpg",
  //   },
  //   {
  //     name: "Private Plane",
  //     sub: "Book your private plane and discover the luxury of flying",
  //     image: "/images/trans-7.jpg",
  //   },
  //   {
  //     name: "Air Transport",
  //     sub: "We deal with reliable airlines that guarantee efficiency",
  //     image: "/images/trans-8.jpg",
  //   },
  // ];
  return (
    <div className="px-2 py-16">
      <div className="flex flex-wrap lg:mx-16 justify-center">
        {transport.map((val) => {
          return (
            <ClubCard
              key={val.id}
              name={val.title[i18n.language]}
              sub={val.description[i18n.language]}
              image={"/images/" + val.logo}
            />
          );
        })}
      </div>
    </div>
  );
};

const ClubCard = ({ image, name, sub }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className={`lg:w-1/4 w-full p-2`}>
      <div className="flex justify-center mx-4 pb-8 cursor-pointer w-full ">
        <div>
          <img
            src={image}
            className=" h-[220px] w-[270px] object-cover  hover:scale-105  duration-300 ease-in"
          />
          <div className="py-4 text-center  text-[#333]  hover:text-main  text-lg max-w-[270px]">
            {t(name)}
          </div>
          <p className="text-[#666] px-2 text-center">{t(sub)}</p>
        </div>
      </div>
    </div>
  );
};

async function getData() {
  const res = await fetch("/api/transport");
  return await res.json();
}
Home.getLayout = (page) => <Layout>{page}</Layout>;
