import MainForm from "@/layout/ui/form";
import Marquee from "react-fast-marquee";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="px-[16px] lg:px-32">
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
            src="/images/travel/excursions.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-14 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Excursions & Tours - A time to escape and unwind")}
          </h2>
          <p className="pt-3 text-[#666]">
            {t(
              "From sightseeing, visiting iconic and historic landmarks, theme parks, museums, cruises, and safaris to beaches and shopping malls."
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
    "/images/locations/1.png",
    "/images/locations/2.png",
    "/images/locations/3.png",
    "/images/locations/4.png",
    "/images/locations/5.png",
    "/images/locations/6.png",
    "/images/locations/7.png",
    "/images/locations/9.png",
    "/images/locations/10.png",
    "/images/locations/12.png",
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
