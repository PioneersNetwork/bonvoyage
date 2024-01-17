import MainForm from "@/layout/ui/form";
import Layout from "@/layout/Layout";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="xl:px-32 px-8 lg:px-32">
      <Hotel />
      <Trans />
      <MainForm />
    </div>
  );
}

const Hotel = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="images/aboutus.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">{t("About Us")}</h2>
          <p className="pt-3 text-[#666]">
            {t(
              "We are Dubai based one-stop shop with unlimited working experience in travel and tourism/hospitality services and timeshare for more than 15 years in Marriott handling and offering wide range of unique services to our members and non-members towards vacation to access, travel, discover and experience the world. We are capable to take care of your timeshare ownership from managing your account to booking, exchanging, or renting of your owned week. We have our focused timeshare in Marriott properties worldwide especially in Spain, France, UK & Thailand where we can produce 500 weeks every year, handling all VIPs and high-end owners."
            )}
          </p>
          <p className="pt-3 text-[#666]">
            {t(
              "Our aim is to maximize a smooth, hassle free, enjoyable, and unforgettable vacation experience!"
            )}
          </p>
          <p className="pt-3 text-[#666] font-semibold">
            {t("SERVICES OFFERED:")}
          </p>
          <ol className="pt-3 text-[#666] list-decimal px-8">
            <li>{t("Timeshare Management")}</li>
            <li>{t("Hospitality Services")}</li>
            <li>{t("Tourism and Recreation Consultants")}</li>
            <li>{t("Businessmen Administrative")}</li>
            <li>{t("Public Relations Management")}</li>
            <li>{t("Marketing Management")}</li>
          </ol>

          <p className="pt-3 text-[#666] font-semibold">{t("Our Vision")}</p>
          <p className="pt-1 text-[#666]">
            {t(
              "To be the topmost UAE company known for booking, exchanging, or renting Marriott timeshare owned weeks."
            )}
          </p>
          <p className="pt-3 text-[#666] font-semibold">{t("Our Mission")}</p>
          <p className="pt-1 text-[#666]">
            {t(
              "To deliver and offer all our services in the most professional timely, qualitative, and gratifying manner meeting the utmost expectations of our clients."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Trans = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-xl  text-[#333] pb-1">
            {t("Abdul Hamid Al Sabbagh")}
          </h2>
          <h2 className=" text-xl  text-[#333] pb-4">{t("President/Owner")}</h2>
          <p className="pt-3 text-[#666]">
            {t(
              "Graduated with bachelor’s degree in Economics major in Accountancy, equipped with more than 15 years of versatile professional service in travel & hospitality industry, I had opened my own company aiming to maximize a smooth, hassle free, enjoyable, and unforgettable vacation experience."
            )}
          </p>
          <p className="pt-3 text-[#666]">
            {t(
              "“To win you must begin”. Mapping out the circumstances you need to get ahead in your life. If you cannot find them, make them. Take initiative. Trust your journey, invest in the end game. “The way to get started is to quit talking and begin doing.”."
            )}
          </p>
          <p className="pt-3 text-[#666]">
            {t(
              "My journey to success started from scratch year back 2011 until I get noticed in the market. Learning to be a successful investor is a gradual process and the investment is typically a long one. Just like other investors, success was not made in a day. Learning the ins and outs of the financial world and your personality as an investor takes time and patience, not to mention trial and error. It starts with a plan and a time frame; when you know how long you re investing for and what you hope to gain, you can put the structure in place to achieve it."
            )}
          </p>
        </div>
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="/images/abd.jpg"
            className="w-full h[300px] object-cover object-center"
          />
          <div className="text-center text-[#666] font-semibold">
            {t("Travel is my passion")}
          </div>
        </div>
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
