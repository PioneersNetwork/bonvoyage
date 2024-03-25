import MainForm from "@/layout/ui/form";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Layout from "@/layout/Layout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState(null);
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    getData().then((val) => {
      console.log(val);
      setData(val.owner[0]);
      setClubs(val.clubs);
    });
  }, []);

  if (!data) {
    return (
      <div className="fixed bg-black w-full h-full left-0 top-0 flex justify-center items-center z-50">
        <Image className="animate-pulse" src={"/images/icons/logo.svg"} width={100} height={70} />
      </div>
    );
  }
  return (
    <div className="px-[16px] lg:px-32">
      <Hotel data={data} clubs={clubs} />
      <MainForm
        header={"Looking for the right Timeshare?"}
        body={
          "Get answers here instantly. We have a vast selection of timeshare weeks and timeshare points for sale typically discounted 50-90% from their original prices."
        }
      />
    </div>
  );
}

const Hotel = ({ data, clubs }) => {
  const [t, i18n] = useTranslation();

  // const clubs = [
  //   {
  //     name: "Marriott Club Son Antem",
  //     link: "clubs/1",
  //     image: "/images/project-01.webp",
  //   },
  //   {
  //     name: "Marriott’s Playa Andaluza",
  //     link: "clubs/2",
  //     image: "/images/project-02.webp",
  //   },
  //   {
  //     name: "Marriott's Village d'ile-de-France",
  //     link: "clubs/3",
  //     image: "/images/project-03.webp",
  //   },

  //   {
  //     name: "Grand Residences by Marriott - Mayfair - London 47 Park Street",
  //     link: "clubs/5",
  //     image: "/images/project-05.webp",
  //   },
  //   {
  //     name: "Marriott’s Marbella Beach Resort",
  //     link: "clubs/6",
  //     image: "/images/project-06.webp",
  //   },

  //   {
  //     name: "Marriott's Phuket Beach Resort & Marriott’s Mai Khao Beach",
  //     link: "clubs/80",
  //     image: "/images/80-logo.webp",
  //   },
  // ];
  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" p-[16px] w-full lg:w-1/3">
          <Image
            src="/images/owners/1.png"
            width={400}
            alt="buy"
            height={600}
            className=" object-cover object-center m-auto"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">{t("Buy Timeshare")}</h2>
          <p className="pt-3 text-[#666]    font-bold">
            {t("(Guaranteed 75% Off Retail & A Holiday for A Lifetime)")}
          </p>
          <p
            className="pt-3 text-[#666]    font-base"
            dangerouslySetInnerHTML={{
              __html: data.buy[i18n.language],
            }}
          ></p>
          <p className="py-20 text-[#666]  font-bold text-center">
            {t("Our focused timeshare is with Marriott Properties Worldwide")}
            <br />{" "}
            <Link href={"mvci"} className=" text-blue-500">
              Bonvoyage (bon-voyage.services)
            </Link>{" "}
            {t("specializing SPAIN, FRANCE, UK & THAILAND")}
          </p>
        </div>
        <div className="flex flex-wrap pt-8  justify-center">
          {clubs.map((val) => {
            return (
              <ClubCard
                key={val.id}
                name={val.title}
                link={"/clubs/" + val.id}
                image={"/images/" + val.logo}
                buy={val.buy}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ClubCard = ({ image, name, link, buy, travel }) => {
  const [t, i18n] = useTranslation();

  return (
    <Link href={link} className={` lg:w-1/3  w-full p-2`}>
      <div className="flex justify-center pb-8 cursor-pointer w-full ">
        <div>
          <img
            src={image}
            className=" h-[220px] w-[270px] object-cover  hover:scale-105  duration-300 ease-in"
          />
          <div className="py-4 text-center text-[#886c3c] font-bold hover:text-main  text-lg max-w-[270px]">
            {name[i18n.language]}
          </div>
          <p
            className=" text-[#666]   text-center  font-base"
            dangerouslySetInnerHTML={{
              __html: buy,
            }}
          ></p>
        </div>
      </div>
    </Link>
  );
};

async function getData() {
  const res = await fetch("/api/buy");
  return await res.json();
}
Home.getLayout = (page) => <Layout>{page}</Layout>;
