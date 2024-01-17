import MainForm from "@/layout/ui/form";
import Marquee from "react-fast-marquee";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <div className="xl:px-32 px-8">
      <Hotel />
      <Companies />
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
            src="/images/travel/des6.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-14 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Hotel, Apartment & Resort Reservations")}
          </h2>
          <p className="pt-3 text-[#666]">
            {t(
              "Thinking where to stay? Not to worry, Bon Voyage Services got you covered. We offer fine selection of accommodation arrangements of hotels, apartments and resorts ranging from premium luxury to budget properties worldwide to choose from, for both your holiday and business travel. Book through us and get guaranteed less rates and with quality service."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Companies = () => {
  const [t, i18n] = useTranslation();

  const parners = [
    "images/Partners/9.png",
    "images/Partners/24.png",
    "images/Partners/15.png",
    "images/Partners/25.png",
    "images/Partners/26.png",
    "images/Partners/27.png",
    "images/Partners/28.png",
    "images/Partners/29.png",
    "images/Partners/30.png",
    "images/Partners/16.png",
    "images/Partners/31.png",
    "images/Partners/32.png",
    "images/Partners/33.png",
    "images/Partners/34.png",
    "images/Partners/35.png",
    "images/Partners/36.png",
    "images/Partners/37.png",
    "images/Partners/38.png",
    "images/Partners/39.png",
    "images/Partners/40.png",
    "images/Partners/41.png",
    "images/Partners/42.png",
    "images/Partners/43.png",
    "images/Partners/44.png",
    "images/Partners/45.png",
    "images/Partners/46.png",
    "images/Partners/47.png",
    "images/Partners/48.png",
  ];
  return (
    <div className="px-2 py-16">
      <p className=" text-sm text-[#666]  text-center pb-16  font-bold">
        {t("we deal with the most famous companies around the world")}
      </p>

      <Marquee>
        {parners.map((val) => {
          return (
            <div key={val} className="">
              <img className="max-h-[100px]" src={val} />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
