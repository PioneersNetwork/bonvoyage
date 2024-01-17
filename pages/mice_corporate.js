import MainForm from "@/layout/ui/form";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="xl:px-32 px-8">
      <Hotel />
      <Trans />
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
            src="/images/travel/event.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-14 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("MICE & Corporate Events")}
          </h2>
          <p className="pt-3 text-[#666]">
            {t(
              "We understand the specialization and expertise required required for meetings, conventions, incentive travel etc that we have a dedicated and committed specialists towards providing quick and efficient service from A-Z process to execution."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Trans = () => {
  const clubs = [
    {
      name: "Personal driver",
      sub: "This service is launched with professionalism and attention",
      image: "/images/s1.png",
    },
    {
      name: "Rent a car",
      sub: "Customers can choose to rent a car on a daily , weekly , monthly",
      image: "/images/s2.png",
    },
    {
      name: "Taxi",
      sub: "We provide taxi services for 24 hours",
      image: "/images/s3.png",
    },
    {
      name: "Public Transport",
      sub: "Choose freely the type of vehicle you wish",
      image: "/images/s5.png",
    },
  ];
  return (
    <div className="px-2 py-16">
      <div className="flex flex-wrap lg:mx-16 justify-center">
        {clubs.map((val) => {
          return (
            <ClubCard
              key={val.name}
              name={val.name}
              sub={val.sub}
              image={val.image}
            />
          );
        })}
      </div>
    </div>
  );
};

const ClubCard = ({ image }) => {
  return (
    <div className={`lg:w-1/4 w-full p-2`}>
      <div className="flex justify-center mx-4 pb-8 cursor-pointer w-full ">
        <div>
          <img
            src={image}
            className=" h-[220px] w-[270px] object-cover  hover:scale-105  duration-300 ease-in"
          />
        </div>
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
