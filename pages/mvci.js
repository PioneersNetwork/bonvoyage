import MainForm from "@/layout/ui/form";
import Image from "next/image";
import Layout from "@/layout/Layout";

import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Head from "next/head";
import { useTranslation } from "react-i18next";

async function getData() {
  const res = await fetch("/api/mvci");
  return res.json();
}
export default function Home() {
  const [data, setData] = useState(null);
  const [meta, setMeta] = useState([]);

  const [t, i18n] = useTranslation();

  useEffect(() => {
    getData().then((val) => {
      setData(val);
      setMeta(val.meta[0]);
    });
  }, []);

  if (!data) {
    return (
      <div className="fixed bg-black w-full h-full left-0 top-0 flex justify-center items-center z-50">
        <Image className="animate-pulse" src={"/images/icons/logo.svg"} width={100} height={70} />
      </div>
    );
  }
  if (data)
    return (
      <div className="xl:px-32 px-8 lg:px-32 ">
        <Head>
          <title key={meta.id}>{meta.title ? meta.title : "club"} </title>
          <meta name="description" content={meta.description}></meta>
          <meta name="keywords" content={meta.keywords}></meta>
        </Head>
        <Hotel data={data} />
        <MainForm
          header={t("Send Us A Message")}
          body={t(
            "Our team loves questions and feedback. Here are some ways to contact us"
          )}
        />
      </div>
    );
}

const Hotel = ({ data }) => {
  const [t, i18n] = useTranslation();

  const res = [
    {
      name: "Marriott Vacation Club Resorts :",
      links: data.club,
      image: "/images/resorts/bon/1.png",
    },
    {
      name: "Grand Residences :",
      links: data.grands,
      image: "/images/resorts/bon/6.png",
    },
    {
      name: "Marriott Vacation Luxury Resort :",
      links: data.luxures,
      image: "/images/resorts/bon/4.png",
    },
    {
      name: "Westin Vacation Club :",
      links: data.westins,
      image: "/images/resorts/bon/2.png",
    },
    {
      name: "Sheraton Vacation Club :",
      links: data.sheratons,
      image: "/images/resorts/bon/5.png",
    },
  ];

  const hotels = [
    {
      image: "/images/resorts/1.png",
      name: "The Lodge at Sonoma Resort",
      description: "",
    },
    {
      image: "/images/resorts/2.png",
      name: "Sydney Harbour Marriott Hotel at Circular Quay",
      description: "",
    },
    {
      image: "/images/resorts/3.png",
      name: "Marriott Cancun Resort Autograph Collection",
      description: "",
    },
    {
      image: "/images/resorts/4.png",
      name: "Renaissance Tuscany Il Ciocco Resort & Spa",
      description: "",
    },
    {
      image: "/images/resorts/5.png",
      name: "The Ritz-Carlton, Millenia Singapore",
      description: "",
    },
    {
      image: "/images/resorts/6.png",
      name: "Sheraton Maldives Full Moon Resort & Spa",
      description: "",
    },
  ];
  const cruises = [
    {
      image: "/images/resorts/7.png",
      name: "Viking Ocean Cruises 9-Night",
      description: "",
    },
    {
      image: "/images/resorts/8.png",
      name: "MSC Cruises 7-Night",
      description: "",
    },
    {
      image: "/images/resorts/9.png",
      name: "America Line 14-Day",
      description: "",
    },
    {
      image: "/images/resorts/10.png",
      name: "Princess Cruises 15-Day",
      description: "",
    },
    {
      image: "/images/resorts/11.png",
      name: "Royal Caribbean Cruise Line 5-Night",
      description: "",
    },
    {
      image: "/images/resorts/12.png",
      name: "Holland",
      description: "",
    },
  ];
  const tours = [
    {
      image: "/images/resorts/13.png",
      name: "Exploring Britain & Ireland featuring England, Ireland",
      description: "",
    },
    {
      image: "/images/resorts/14.png",
      name: "Reflections of Italy",
      description: "",
    },
    {
      image: "/images/resorts/15.png",
      name: "Scotland, and Wales",
      description: "",
    },
    {
      image: "/images/resorts/16.png",
      name: "Machu Picchu & the Galápagos Islands",
      description: "",
    },
    {
      image: "/images/resorts/17.png",
      name: "The Plains of Africa Kenya Wildlife Safari",
      description: "",
    },
    {
      image: "/images/resorts/18.png",
      name: "National Parks of America",
      description: "",
    },
  ];
  const homs = [
    {
      image: "/images/resorts/19.png",
      name: "Paradise, Cote D'Azur & St. Tropez",
      description: "",
    },
    {
      image: "/images/resorts/20.png",
      name: "Augusta, Tuscany",
      description: "",
    },
    {
      image: "/images/resorts/21.png",
      name: "The Villa Mariana, Costa Rica",
      description: "",
    },
    {
      image: "/images/resorts/22.png",
      name: "Casa La Laguna, Los Cabos",
      description: "",
    },
    {
      image: "/images/resorts/23.png",
      name: "Stradivari, Amalfi Coast",
      description: "",
    },
    {
      image: "/images/resorts/24.png",
      name: "Nautilus Residence, Santorini",
      description: "",
    },
  ];

  const activities = [
    {
      image: "/images/resorts/25.png",
      name: "NCAA Final Four Basketball",
      description: "",
    },
    {
      image: "/images/resorts/26.png",
      name: "World Series Single Game Program",
      description: "",
    },
    {
      image: "/images/resorts/27.png",
      name: "Kentucky Derby Lexington Horse Farm",
      description: "",
    },
    {
      image: "/images/resorts/28.png",
      name: "The Emmy Awards Experience",
      description: "",
    },
    {
      image: "/images/resorts/29.png",
      name: "The NHL Stanley Cup Program",
      description: "",
    },
    {
      image: "/images/resorts/30.png",
      name: "The Country Music Awards Experience",
      description: "",
    },
    {
      image: "/images/resorts/31.png",
      name: "Travel Insurance",
      description: "Book your travel and insure your trip using Club Points.",
    },
    {
      image: "/images/resorts/32.png",
      name: "Car Rentals",
      description: "Exchange club points to create  your next travel memories.",
    },
    {
      image: "/images/resorts/33.png",
      name: "Airline Miles",
      description:
        "Exchange club points to fly away to your next vacation destination.",
    },
  ];

  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:px-24">
          <img
            src="/images/resorts/ab.png"
            className=" object-cover object-center m-auto"
          />
        </div>

        <div className=" w-full  px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">{t("MVCI Resort")}</h2>
          <p
            className="pt-3 text-[#666] font-base"
            dangerouslySetInnerHTML={{
              __html: data.destination[0].mvci[i18n.language],
            }}
          ></p>

          <div className="my-8">
            {res.map((val) => {
              return (
                <Resorts
                  key={val.name}
                  name={val.name}
                  image={val.image}
                  links={val.links}
                />
              );
            })}
          </div>

          <p className="pt-3 text-[#666]    font-bold text-center">
            {t(
              "Find Your Happy Place. Contact us now and we shall plan your dream vacation!"
            )}
          </p>
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Explorer collection")}
          </h2>

          <p className="pt-3 text-[#666]    ">
            {t(
              "What Does Exploration Look Like to You? Abound by Marriott Vacations™, you'll have access to exceptional travel opportunities and one-of-a-kind adventures worldwide."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-bold">
            {t("Luxury Hotels & Residences")}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Some of the world’s most memorable hotels in the most magnificent cities: these add up to one amazing vacation. Exclusive packages include 47 Park Street℠, Grand Residences by Marriott®, Ritz-Carlton® hotels, and more. Make one of them your home base for your next grand getaway."
            )}
          </p>

          <div className="flex justify-center flex-wrap pt-8">
            {hotels.map((val) => {
              return (
                <ClubCard
                  key={val.name}
                  name={val.name}
                  image={val.image}
                  description={val.description}
                />
              );
            })}
          </div>
          <p className="pt-3 text-[#666]    font-bold">{t("Cruises")}</p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "As an Owner, you have access to ports of call around the world on a wide variety of cruise lines. And when you’re on a cruise, it’s just about as good as it can be. Relax and recharge with cruise options ranging from 2 nights to several weeks. Below is just a taste of the countless cruises available to Owners seeking adventure and relaxation on the high seas."
            )}
          </p>

          <div className="flex justify-center flex-wrap pt-8">
            {cruises.map((val) => {
              return (
                <ClubCard
                  key={val.name}
                  name={val.name}
                  image={val.image}
                  description={val.description}
                />
              );
            })}
          </div>
          <p className="pt-3 text-[#666]    font-bold">{t("Guided Tours")}</p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Choose from an ever-changing catalog of the world’s most fascinating excursions and get ready to start checking items off your bucket list iyou want the best of both worlds! An expertly guided tours were designed with you in mind as planned itinerary and personal time for your own adventures. Below is just a small glimpse at the vast array of guided tours our Owners have access to."
            )}
          </p>

          <div className="flex justify-center flex-wrap pt-8">
            {tours.map((val) => {
              return (
                <ClubCard
                  key={val.name}
                  name={val.name}
                  image={val.image}
                  description={val.description}
                />
              );
            })}
          </div>
          <p className="pt-3 text-[#666]    font-bold">{t("Vacation Homes")}</p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Owners at the Executive*, Presidential, and Chairman’s Club benefit levels have access to upscale and distinctive vacation homes located in desirable destinations such as Cabo San Lucas, Croatia, and Italy — perfect for hosting family reunions, anniversaries, and other special celebrations."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "* Vacation home options differ by benefit level. Here’s just a small sample of the breathtaking vacation homes and destinations our Owners enjoy."
            )}
          </p>

          <div className="flex justify-center flex-wrap pt-8">
            {homs.map((val) => {
              return (
                <ClubCard
                  key={val.name}
                  name={val.name}
                  image={val.image}
                  description={val.description}
                />
              );
            })}
          </div>
          <p className="pt-3 text-[#666]    font-bold">
            {t("Specialty Packages & Activities")}
          </p>

          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Abound by Marriott Vacations™, you can explore unique experiences to customize your vacation with an exciting array of prepackaged weekends and activities available. Whether it’s a 3-night hotel package in Latin America, expert golf instruction, or access to premier entertainment and sporting events, we can help you live it. Here are just a few examples of the most popular Specialty Packages available to our Owners."
            )}
          </p>

          <div className="flex justify-center flex-wrap pt-8">
            {activities.map((val) => {
              return (
                <ClubCard
                  key={val.name}
                  name={val.name}
                  image={val.image}
                  description={val.description}
                />
              );
            })}
          </div>

          <p className="pt-24 text-[#666]  font-bold text-center">
            {t(
              "Contact us very soon and and we shall take care of your travels worldwide!"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const ClubCard = ({ image, name, description }) => {
  const [t, i18n] = useTranslation();
  console.log(t(description));

  return (
    <div className={` lg:w-1/3  w-full p-2`}>
      <div className="flex justify-center pb-8 cursor-pointer w-full ">
        <div>
          <Image
            src={image}
            height={160}
            width={280}
            className="object-cover"
            alt="image"
          />
          {/* <img className=" h-[160px] w-[280px] " /> */}
          <div className="py-4 text-center text-black font-bold   text-lg max-w-[280px]">
            {t(name)}
          </div>
          {description ? (
            <div className=" text-center text-black font-base   text-lg max-w-[280px]">
              {t(description)}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Resorts = ({ name, image, links }) => {
  const [t, i18n] = useTranslation();

  return (
    <div>
      <p className="pt-3 text-[#666]   text-xl  font-bold">{t(name)} </p>
      <div className="lg:flex lg:flex-wrap">
        <Image
          width={220}
          height={220}
          className="mx-auto lg:mx-8 max-h-[220px]"
          src={image}
          alt="image"
        />
        {/* <img className="mx-auto lg:mx-8 w-[220px] h-[220px] " src={image} /> */}
        <div>
          <ul className="lg:pt-8 mx-4 lg:mx-8">
            {links.map((val) => {
              return (
                <li key={val.title.en}>
                  <a href={val.link} className=" text-blue-500">
                    {val.title[i18n.language]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
