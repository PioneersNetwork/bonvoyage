import MainForm from "@/layout/ui/form";
import Layout from "@/layout/Layout";

import Link from "next/link";
import Marquee from "react-fast-marquee";
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
            src="/images/des6.jpg"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-14 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Outbound Travel")}
          </h2>
          <p className="pt-3 text-[#666]">
            <strone className=" font-semibold">
              {t("Bon Voyage Services")}
            </strone>{" "}
            {t(
              "handles all outbound travel offering a spectrum of services from airline ticketing and custom outbound tours to visa and insurance services, hotel, apartment, resort reservations and many more whether it be a short weekend break, a family or business trip or even a long holiday.Boasting an extensive network of trustworthy industry partners in the lines of hotels, destination management companies and airlines worldwide, we provide a personalized service at very attractive prices that help us stand out in the industry as a travel company with a difference. As a dynamic travel company, we are always looking forward to raising our standards and share the best available deal with our clients."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Trans = () => {
  const clubs = [
    "/images/outbound/(1).jpg",
    "/images/outbound/(2).jpg",
    "/images/outbound/(3).jpg",
    "/images/outbound/(4).jpg",
    "/images/outbound/(5).jpg",
    "/images/outbound/(6).jpg",
    "/images/outbound/(7).jpg",
    "/images/outbound/(8).jpg",
    "/images/outbound/(9).jpg",
    "/images/outbound/(10).jpg",
    "/images/outbound/(11).jpg",
    "/images/outbound/(12).jpg",
    "/images/outbound/(13).jpg",
    "/images/outbound/(14).jpg",
    "/images/outbound/(15).jpg",
    "/images/outbound/(16).jpg",
    "/images/outbound/(17).jpg",
    "/images/outbound/(18).jpg",
    "/images/outbound/(19).jpg",
    "/images/outbound/(20).jpg",
    "/images/outbound/(21).jpg",
    "/images/outbound/(22).jpg",
    "/images/outbound/(23).jpg",
    "/images/outbound/(24).jpg",
    "/images/outbound/(25).jpg",
    "/images/outbound/(26).jpg",
    "/images/outbound/(27).jpg",
    "/images/outbound/(28).jpg",
    "/images/outbound/(29).jpg",
  ];
  return (
    <div className="px-2 py-16">
      <div className="flex flex-wrap lg:mx-16 justify-center">
        {clubs.map((val) => {
          return <ClubCard key={val.name} image={val} />;
        })}
      </div>
    </div>
  );
};

const ClubCard = ({ image }) => {
  return (
    <div className={`lg:w-1/2 w-full p-2`}>
      <div className="flex justify-center mx-4 pb-8 cursor-pointer w-full ">
        <img
          src={image}
          className="  h-[220px] w-full  object-cover  hover:scale-105  duration-300 ease-in"
        />
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
