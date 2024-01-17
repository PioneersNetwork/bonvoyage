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
            src="/images/travel/visa.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-14 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Visa & Travel Insurance")}
          </h2>
          <p className="pt-3 text-[#666]">
            {t(
              "One of the most daunting and tedious tasks of travelling is sorting out the travel visa. As a dynamic travel company, we understand the difficult and process and strive to extend our hand to you, our valued customer to ensure that you travel with minimal hassle and stress. We combine our expertise in the industry along with our excellent relations with several foreign embassies to handle and process the visa arrangements on your behalf like UAE Visa, Schengen Visa and many more."
            )}
          </p>
          <p className="pt-3 text-[#666]">
            {t(
              "Our services also include comprehensive travel insurance packages. With access to an unlimited number of hospitals and health service providers, around the world, we guarantee that you won’t be disappointed with the insurance packages we provide. These packages include medical facilities, baggage loss and delay, unique facilities and much more to ensure that you are fully covered when travelling."
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
      image: "/images/travel/visa1.png",
    },
    {
      name: "Rent a car",
      sub: "Customers can choose to rent a car on a daily , weekly , monthly",
      image: "/images/travel/visa2.png",
    },
    {
      name: "Taxi",
      sub: "We provide taxi services for 24 hours",
      image: "/images/travel/visa3.png",
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
    <div className={`lg:w-1/3 w-full p-2`}>
      <div className="flex justify-center mx-4 pb-8 cursor-pointer w-full ">
        <div>
          <img
            src={image}
            className="  object-cover  hover:scale-105  duration-300 ease-in"
          />
        </div>
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
