import MainForm from "@/layout/ui/form";
import Marquee from "react-fast-marquee";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="lg:px-16 px-[16px]">
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
            src="/images/travel/airline.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-14 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Airline Reservations")}
          </h2>
          <p className="pt-3 text-[#666]">
            {t(
              "Utilizing our extensive experience in local and international flight handling, we have developed excellent relationships with many international airlines. This enables us to provide an all-round service to you, our valued customer and extend many deals and special offers on your flights. You can book a flight to any destination with minimal effort, receive amazing flight deals, and obtain guidance and support in choosing the best destinations, routes, and flights most suitable for you. We aim to provide an efficient service and take a keen interest in all aspects of your travel related matters. Enjoy the pleasure of planning your travel itinerary with ease. We help you make the right choice and will ensure utmost comfort and convenience that all necessities will be taken care with our flight booking service."
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
    "images/airline/1.png",
    "images/airline/2.png",
    "images/airline/3.png",
    "images/airline/4.png",
    "images/airline/5.png",
    "images/airline/6.png",
    "images/airline/7.png",
    "images/airline/8.png",
    "images/airline/9.png",
    "images/airline/10.png",
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
