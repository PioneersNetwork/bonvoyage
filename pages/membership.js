import MainForm from "@/layout/ui/form";
import Layout from "@/layout/Layout";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="xl:px-32 px-8 lg:px-32">
      <Hotel />
      <MainForm
        header={"Be a member, contact us now!"}
        body={"Your Membeship Matters."}
      />
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
            src="/images/member.png"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("JOIN OUR MEMBERSHIP!")}
          </h2>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Becoming a member of Bon Voyage Services gives you access not limited to Marriott Timeshare but to worldwide travel aiming to maximize a smooth, hassle-free, enjoyable, and unforgettable vacation experience!"
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t("Once a member, these services are included:")}
          </p>
          <p className="pt-3 text-[#666]    font-bold">
            {t("SERVICES OFFERED:")}
          </p>
          <ol className="pt-1 text-[#666]    font-base list-decimal px-8">
            <li>{t("Timeshare Management")}</li>
            <li>{t("Hospitality Services")}</li>
            <li>{t("Tourism and Recreation Consultants")}</li>
            <li>{t("Businessmen Administrative")}</li>
            <li>{t("Public Relations Management")}</li>
            <li>{t("Marketing Management")}</li>
          </ol>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "We are group of X Marriott Vacation Club employs with over 10 years of Experience, our expertise in the fields of membership management, customer service and sales"
            )}
          </p>
          <p className="pt-1 text-[#666]    font-base">
            {t(
              "What Our Goal of Establishing Bonvoyage Company? Benefiting from the experience gained through our work for Marriott vacation club company to serve Marriott vacation owners in the best possible way and suitable for different needs of the members. Moreover, helping our members to overcome any problem or issue might face Marriott members using the membership. What are our Services?"
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Managing Marriott vacation club ownership and handling all queries related to travels including:"
            )}
          </p>
          <ol className="pt-1 text-[#666]    font-base list-decimal px-8">
            <li>{t("Marriott Home Resort Reservations at the right time.")}</li>
            <li>
              {t(
                "Weeks exchange at over 2000 Resorts worldwide through Interval international, following up reservations and pending requests on behalf of the clients with interval intranational and helping to get the reservations done."
              )}
            </li>
            <li>
              {t(
                "Trading weeks into Marriott Bonvoy points before deadline, which allows members to use all Marriott Hotels groups worldwide."
              )}
            </li>
            <li>
              {t(
                "Trading weeks into Marriott destination points before deadline which allows members to access all MVCW resorts per night, Travel packages, adventure trips, cruise trips, etc."
              )}
            </li>
            <li>
              {t(
                "Pay maintenance on time to avoid pay late fees, and helping waiving the late fees for those who already have."
              )}
            </li>
            <li>
              {t(
                "Making reservation at over 50,000 hotels worldwide other than Marriott hotels, with discounted prices up to 50% more than any online reservation system like booking … etc."
              )}
            </li>
            <li>
              {t(
                "Up to 50% discount at over 2000 Resort worldwide including Marriott vacation club resorts."
              )}
            </li>
            <li>
              {t(
                "Listing weeks for Rent through online And rent it out with the highest possible prices."
              )}
            </li>
            <li>
              {t(
                "Helping at all kinds of reservation, outdoor activity, concierge services, city tours, Car Rental, Businessmen, and women services."
              )}
            </li>
            <li>
              {t(
                "Customer service center for immediate support in case any sudden problems show up."
              )}
            </li>
            <li>
              {t(
                "Listing weeks for resell through Marriott and helping to resell Marriott ownership outside Marriott to either other Marriott owners or to non-Marriott clients throw our own customers and agents."
              )}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
