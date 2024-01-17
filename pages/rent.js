import MainForm from "@/layout/ui/form";
import Link from "next/link";

import Layout from "@/layout/Layout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
    return <>s</>;
  }
  return (
    <div className="xl:px-32 px-8 ">
      <Hotel data={data} clubs={clubs} />
      <MainForm
        header={
          "Searching for the easiest, safest, and quickest way to rent timeshare and book resort vacations for up to 50% off."
        }
        body={
          "With a timeshare rental, you can go vacation in a more comfortable, luxurious way, all for less than you would pay at a nearby hotel as it is direct from owners."
        }
      />
    </div>
  );
}

const Hotel = ({ clubs, data }) => {
  const [t, i18n] = useTranslation();
  console.log(data);

  // const clubs = [
  //   {
  //     name: "Marriott Club Son Antem",
  //     link: "clups/1",
  //     image: "/images/project-01.webp",
  //   },
  //   {
  //     name: "Marriott’s Playa Andaluza",
  //     link: "clups/2",
  //     image: "/images/project-02.webp",
  //   },
  //   {
  //     name: "Marriott's Village d'ile-de-France",
  //     link: "clups/3",
  //     image: "/images/project-03.webp",
  //   },

  //   {
  //     name: "Grand Residences by Marriott - Mayfair - London 47 Park Street",
  //     link: "clups/5",
  //     image: "/images/project-05.webp",
  //   },
  //   {
  //     name: "Marriott’s Marbella Beach Resort",
  //     link: "clups/6",
  //     image: "/images/project-06.webp",
  //   },

  //   {
  //     name: "Marriott's Phuket Beach Resort & Marriott’s Mai Khao Beach",
  //     link: "clups/80",
  //     image: "/images/80-logo.webp",
  //   },
  // ];
  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="/images/owners/1.png"
            className="w-[300px] h[600px] object-cover object-center m-auto"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">{t("Rent Timeshare")}</h2>
          <p
            className="pt-3 text-[#666]    font-base"
            dangerouslySetInnerHTML={{
              __html: data.rent[i18n.language],
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
                name={val.name}
                link={"/clubs/" + val.id}
                image={"/images/" + val.logo}
                rent={val.rent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ClubCard = ({ image, name, rent, link, travel }) => {
  return (
    <Link href={link} className={` lg:w-1/3  w-full p-2`}>
      <div className="flex justify-center pb-8 cursor-pointer w-full ">
        <div>
          <img
            src={image}
            className=" h-[220px] w-[270px] object-cover  hover:scale-105  duration-300 ease-in"
          />
          <div className="py-4 text-center text-[#886c3c] font-bold hover:text-main  text-lg max-w-[270px]">
            {name}
          </div>
          <p
            className=" text-[#666]   text-center  font-base"
            dangerouslySetInnerHTML={{
              __html: rent,
            }}
          ></p>
        </div>
      </div>
    </Link>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
async function getData() {
  const res = await fetch("/api/rent");
  return await res.json();
}
