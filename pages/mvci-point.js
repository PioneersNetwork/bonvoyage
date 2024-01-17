import MainForm from "@/layout/ui/form";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation();
  return (
    <div className="xl:px-32 px-8  lg:px-32">
      <Hotel />
      <Table />
      <p className="py-16 text-[#666]    font-bold">
        {t(
          "Are you enrolled with Destinations Points Program? If not, please let us know now and we will assist you."
        )}
      </p>
      <MainForm
        header={t("How Club Points Work?")}
        body={t(
          "When you become a timeshare Member in the Marriott Vacation Club, you can use points and experience dream holidays."
        )}
      />
    </div>
  );
}

const Hotel = () => {
  const [t, i18n] = useTranslation();

  const cards = [
    { name: "OWNER", sub: "up to 3,999 Points", image: "/images/owner.jpg" },
    { name: "SELECT", sub: "4,000–6,999 Points", image: "/images/select.jpg" },
    {
      name: "EXECUTIVE",
      sub: "7,000–9,999 Points",
      image: "/images/executive.jpg",
    },
    {
      name: "PRESIDENTIAL",
      sub: "10,000–14,999 Points",
      image: "/images/presidential.jpg",
    },
    {
      name: "CHAIRMANS CLUB",
      sub: "15,000+ Points",
      image: "/images/chairman.jpg",
    },
  ];
  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="/images/destpoint.png
"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("MVCI Destinations Points")}
          </h2>
          <p className="pt-3 text-[#666]    font-base">
            {t("The")}{" "}
            <b className="font-bold">
              {t("Marriott Vacation Club Destinations Program")}
            </b>{" "}
            {t(
              "is a point-based vacation ownership program allowing owners to reserve their vacation time quickly and easily, choosing any resort in Marriott Vacation Club´s extensive portfolio of resorts. Owners can also benefit from a whole selection of additional services and opportunities since the launch of Marriott timeshare points. When you become an owner of the Marriott Vacation Club Destinations Club Ownership Program, you make a one-time purchase of your timeshare ownership, which affords you an annual allotment of vacation currency, known as Vacation Point. Your yearly allotment of vacation points can be used each year to reserve any available Marriott Vacation timeshare resort at any available time of the year."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Marriott offers a wide range of resort locations at some of the most sought-after destinations around the world, as well as a varying unit size that can accommodate large families with multiple rooms, full kitchens and much more."
            )}
          </p>
        </div>
        <p className="pt-3 text-[#666]    font-bold">
          {t(
            "Once you are enrolled owner you will receive an automatic upgrade to Gold, Platinum, or Titatum Elite membership with Marriott Bonvoy subject to how many destinations points you owned to use at Marriott hotels worldwide."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "As a member of the Exchange Program, you will enjoy unparalleled levels of flexibility:"
          )}
        </p>
        <div>
          <ol className="pt-1 text-[#666]    font-base  list-[circle] px-8">
            <li>
              {t(
                "You can choose to use your week as you have in the past or elect to use your Vacation Club Points for even more choices."
              )}
            </li>
            <li>{t("Check in any day of the week, any week of the year.")}</li>
            <li>
              {t(
                "Choose the accommodation size you need - from a studio to three-bedroom town house."
              )}
            </li>
            <li>
              {t(
                "Choose the length of vacation thats right for you  a few days or a few weeks."
              )}
            </li>
            <li>
              {t(
                "Additional choices such as adventure travel, cruises, guided tours, and special hotel experience packages."
              )}
            </li>
            <li>{t("You may also sell your destination points")}</li>
            <li>{t("You may rent or exchange")}</li>
            <li>{t("All subject to availability")}</li>
          </ol>
        </div>

        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Exciting Vacation Collections")}
        </p>

        <div>
          <ol className="pt-1 text-[#666]    font-base  list-[circle] px-8">
            <li>
              {t(
                "Marriott Vacation Club® Collection – With Vacation Club Points, you ll enjoy even greater flexibility when you vacation at our collection of more than 55 Marriott Vacation Club resorts."
              )}
            </li>
            <li>
              {t(
                "World Traveller Collection – Provides access to hundreds of affiliate resorts throughout dozens of countries worldwide through an affiliation with Interval International, Inc."
              )}
            </li>
            <li>
              {t(
                "Explorer Collection – Experience an exciting new collection of once-in-a-lifetime adventures, excursions, cruises and group tours!"
              )}
            </li>
          </ol>
        </div>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Enhanced Flexibility*")}
        </p>
        <div>
          <ol className="pt-1 text-[#666]    font-base  list-[circle] px-8">
            <li>
              {t("Check in any day of the week, any season of the year.")}
            </li>
            <li>{t("Choose the length of stay thats right for you.")}</li>
            <li>{t("Pick the accommodation size you need for each trip.")}</li>
            <li>
              {t(
                "Bank or borrow Vacation Club Points for even greater flexibility."
              )}
            </li>
            <li>{t("Share Vacation Club Points with other Owners.")}</li>
          </ol>
        </div>
        <p className="pt-3 text-[#666] w-full    font-bold">{t("Banking")}</p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "In the event that you discover you won’t have the capacity to use all of your points inside the present use year, you can save your present allocation of points for the following year. This is known as “banking” your points. This is an excellent option if you think you will need extra points for your holiday in the following year."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">{t("Borrowing")}</p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "The opposite of banking your points, if the holiday you are interested in booking requires Destinations points than you presently have in your current Use Year, you are able to borrow extra points from the upcoming usage year."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "Single, Consolidated Club Fee You no longer pay separate fees for Interval International membership, exchanges to other Marriott Vacation Club resorts or trading for Marriott Rewards® points."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("What makes the destinations program different?")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "The Marriott Vacation Club Destinations points program was founded with the intention of offering new and existing Marriott timeshare owners’ additional options with regards to their luxury vacation ownership. The Marriott destination points program provides its members with access to a huge selection of luxury timeshare properties in the most desirable holiday destinations in the world. This offers much more flexibility by allowing you to choose when and where to go each time you want to book a holiday."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Marriott Vacation Club Destinations Points Transaction Options")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "As a member of the Marriott Vacation Club Destinations program, you also have the option of banking and borrowing your points."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("How we Rent your Destination Points!")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "We are here to help you Rent your destination points through us to take the hassle and stress out of renting your unused Destination Points! We deal with mostly with all major companies, VIP’s and high-end clients which can help monetize your points easily."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "We shall rent your destination points equivalent to certain amount with a contract for you to sign."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "We shall handle all from A-Z and you have nothing to worry. Once your name comes up from the list that we rotate, we shall inform you immediately."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "We are here to help you Rent your destination points through us to take the hassle and stress out of renting your unused Timeshare Points! We deal with most all of the major developers and can help you monetize your points easily."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "We shall assist in booking your points on various reservations and you will receive your cheque instantly. Once the year ends, you can always notify us if you would like to rent out your points big or small and we shall get it done."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Marriott Vacation Club Destinations Ownership Levels")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "There are currently three levels in the Marriott Vacation Club destinations program and your level of ownership influences the reservation windows that you are entitled to."
          )}
        </p>

        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Destinations Points Ownership Levels")}
        </p>
        <p className=" text-[#666] w-full    font-bold">
          <span className="mx-2">{t("OWNER")}</span>up to 3,999 Points
        </p>
        <p className=" text-[#666] w-full    font-bold">
          <span className="mx-2">{t("SELECT")}</span> 4,000 to 6,999 Points
        </p>
        <p className=" text-[#666] w-full    font-bold">
          <span className="mx-2">{t("EXECUTIVE")}</span> 7,000–9,999 Points
        </p>
        <p className=" text-[#666] w-full    font-bold">
          <span className="mx-2">{t("PRESIDENTIAL")}</span> 10,000–14,999 Points
        </p>
        <p className=" text-[#666] w-full    font-bold">
          <span className="mx-2">{t("CHAIRMANS CLUB")}</span> 15,000+ Points
        </p>

        <p className="pt-3 text-[#666]    font-base">
          {t(
            "It is worth noting that when purchasing additional points or selling existing points, your ownership level is subject to change. If this applies to your situation, your new ownership level will take effect on the first day of the following month."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Kindly check below tabulated levels and benefits of ownership.")}
        </p>

        <div className="my-16  w-full ">
          <div className="text-4xl  text-[#333] pb-4 text-center font-bold">
            {t("Destinations Points Level")}
          </div>

          <div className="flex justify-center flex-wrap">
            {cards.map((val, index) => {
              return (
                <Card
                  key={val.name}
                  name={val.name}
                  sub={val.sub}
                  index={index}
                  image={val.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, name, sub, index }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className={`${index < 2 ? "lg:w-1/3 mx-4" : "lg:w-1/3"} w-full p-2`}>
      <div className="flex justify-center mx-4 pb-8 cursor-pointer w-full ">
        <div className="hover:scale-105  duration-300 ease-in w-full">
          <img src={image} className=" h-[220px] w-full object-cover  " />
          <div className="bg-main py-4 text-center text-white font-bold   text-lg ">
            {t(name)}
            <div className=" text-base font-medium">{t(sub)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Table = () => {
  return (
    <table className=" border-[1px] border-[#e9ecef] table-fixed">
      <thead>
        <tr>
          <th
            scope="col"
            className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666] max-w-[150px]"
          >
            {"BENEFITS"}
          </th>
          <th
            scope="col"
            className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
          >
            {"OWNER"}
            <br />
            up to 3,999 Points
          </th>
          <th
            scope="col"
            className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
          >
            {"SELECT"}
            <br />
            4,000–6,999 Points
          </th>
          <th
            scope="col"
            className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
          >
            {"EXECUTIVE"}
            <br />
            7,000–9,999 Points
          </th>
          <th
            scope="col"
            className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
          >
            {"PRESIDENTIAL"}
            <br />
            10,000–14,999 Points
          </th>
          <th
            scope="col"
            className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
          >
            {"CHAIRMANS CLUB"}
            <br />
            15,000+ Points
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            className=" border-[#e9ecef] border-[1px] text-base px-8  p-2"
            colspan="6"
          >
            {"RESERVATION FLEXIBILITY"}
          </td>
        </tr>
        <tr>
          <td
            scope="row"
            className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
          >
            13-Month Booking Window *With a Vacation Club Points premium
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            7+ night stays
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            7+ night stays
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            1+ night stays
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            1+ night stays
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            1+ night stays
          </td>
        </tr>
        <tr>
          <td
            scope="row"
            className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
          >
            Luxury Resorts Booking Window
            <br />
            Reservation window
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            6 months prior
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            6 months prior
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            13 months prior
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            13 months prior
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            13 months prior
          </td>
        </tr>
        <tr>
          <td
            scope="row"
            className="text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
          >
            Banking Points Banking deadline prior to end of current Use Year
            (for use in subsequent Use Year/s)
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            6 months (1 year)
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            6 months (1 year)
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            4 months (1 year)
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            4 months (1.5 years)
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            4 months (2 years)
          </td>
        </tr>

        <tr>
          <td
            scope="row"
            className="text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
          >
            Points Election Window
            <br />
            Complete election by this date the year prior (Applies to Enrolled
            Weeks only) Reservation window
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            Sept. 30
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            Sept. 30
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            Sept. 30
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            Oct. 31
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            Oct. 31
          </td>
        </tr>

        <tr>
          <td
            scope="row"
            className="text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
          >
            Last-Minute Points <br />
            Reservation Discount
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            25% off 30 days prior to arriva
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            30% off 60 days prior to arrival
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            30% off 60 days prior to arrival
          </td>
        </tr>

        <tr>
          <td
            scope="row"
            className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
          >
            Marriott Vacation Club® Rental Discount
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            25% Off
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            25% Off
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            30% off
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            35% off
          </td>
          <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
            35% off
          </td>
        </tr>
      </tbody>
    </table>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
