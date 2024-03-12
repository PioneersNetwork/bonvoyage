import MainForm from "@/layout/ui/form";
import Link from "next/link";
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
        header={"Need to sell timeshare?"}
        body={
          "There are buyers on our site right now searching for timeshares just like yours. Get answers here instantly and access to best marketing platforms and strong database of Buyers"
        }
      />
    </div>
  );
}

const Hotel = ({ data, clubs }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <Image
            width={400}
            height={600}
            alt="sell"
            src="/images/owners/1.png"
            className="object-cover object-center m-auto"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">{t("Sell Timeshare")}</h2>
          <p className="pt-3 text-[#666]    font-bold">
            {t("Free Registration & Tailor-Made Adverts")}
          </p>
          <p
            className="pt-3 text-[#666]    font-base"
            dangerouslySetInnerHTML={{
              __html: data.resale[i18n.language],
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
        <div className="flex flex-wrap pt-8  justify-center items-center">
          {clubs.map((val) => {
            return (
              <ClubCard
                key={val.id}
                name={val.name}
                link={"/clubs/" + val.id}
                image={"/images/" + val.logo}
                sell={val.sell}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ClubCard = ({ image, name, link, sell, travel }) => {
  return (
    <Link href={link} className={` lg:w-1/3  w-full p-2`}>
      <div className="flex justify-center items-center pb-8 cursor-pointer w-full ">
        <div>
          <img
            src={image}
            className=" h-[220px] w-[270px] object-cover  hover:scale-105 mx-auto  duration-300 ease-in"
          />
          <div className="py-4 text-center text-[#886c3c] font-bold hover:text-main mx-auto  text-lg max-w-[270px]">
            {name}
          </div>
          <p
            className=" text-[#666]   text-center  font-base mx-auto"
            dangerouslySetInnerHTML={{
              __html: sell,
            }}
          ></p>
        </div>
      </div>
    </Link>
  );
};

async function getData() {
  const res = await fetch("/api/sell");
  return await res.json();
}
Home.getLayout = (page) => <Layout>{page}</Layout>;
