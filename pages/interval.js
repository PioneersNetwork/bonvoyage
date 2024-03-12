import MainForm from "@/layout/ui/form";
import { AiOutlineCheck } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation();

  return (
    <div className="px-[16px] lg:px-32">
      <Hotel />
      <Table />
      <p className="pt-3 text-[#666] w-full    font-bold">
        {t("Interval International Getaways")}
      </p>
      <p className="pt-3 text-[#666]    font-base">
        {t(
          "As Marriott Vacation Club Resale Specialists one of the most common questions, we are asked is Can we book the Marriott Vacation Club Getaways if we buy a resale? The answer is yes, of course, you can."
        )}
      </p>
      <p className="pt-3 text-[#666]    font-base">
        {t(
          "Getaway weeks are simply timeshare weeks that have been deposited with the exchange company and due to circumstances, such as, excess inventory or it is getting close to the travel date (usually within 90 days), the weeks have not been used. These weeks now belong to the exchange company, not to the timeshare owner or the resort developer or management company."
        )}
      </p>
      <p className="pt-3 text-[#666]    font-base">
        {t(
          "The exchange network generally offers all Getaways to all members, premium level memberships may have special offerings from time to time. Therefore, owners of Marriott Vacation Club timeshare who are also members of Interval International have access to all Getaways, including Marriott Vacation Club resorts. You will still have the same choice of membership levels with Interval International. Some exchange companies may also purchase additional inventory in timeshare and non-timeshare resorts to provide members with the additional choice of Getaways/Additional Holidays. It is the same principle with any other timeshare resale or exchange company, if you are not the original owner or purchaser of the timeshare, this will not make a difference to the exchange company for Exchanges or Getaways."
        )}
      </p>
      <p className="pt-3 text-[#666] italic  font-base">
        {t("Need to know more about Interval? Contact us very soon!")}
      </p>

      <div className="py-4">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/4py2QnBmaMQ"
        ></iframe>
      </div>
      <MainForm header={t("contact us now!")} />
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
        <div className="xl:p-12 xl:pt-0 p-4 w-full lg:w-1/3">
          <img
            src="/images/owners/inter.png"
            className="w-full h[250px] object-cover object-center "
          />
        </div>

        <div className=" w-full lg:w-2/3 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Exchange with Interval International")}
          </h2>
          <p className="pt-3 text-[#666] w-full    font-bold">
            {t("Unlock Amazing Benefits")}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Exchanging Vacation Club Points through Interval International via Exchange Partner Resorts"
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Owners owning a Marriott timeshare can exchange through external exchange partner, Interval International, and enjoy a 7-night vacation over 3000 resorts worldwide. Bon Voyage Services will assist in dealing/coordinating with Interval International’s customer service to open research for you, to suggest how to make the best exchange, deal with them in case of cancellation, to contact the resort for you if needed, to renew the membership or extend a week. Also, you can take advantages also about Getaways and get a huge discount and save up to 70% off standard internet price."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t("Here s everything you need to know about exchanging.")}
          </p>
          <p className=" text-[#666]    font-base">
            {t("Which Type of Exchange Is Right for You?")}
          </p>

          <p className="pt-3 text-[#666] w-full    font-bold">
            {t("There are three main types of exchange:")}
          </p>
          <p className="pt-3 text-[#666] w-full    font-bold">
            {t("Deposit First")}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Deposit First is the right exchange method when you're sure you want to vacation somewhere other than your home resort. You immediately deposit the week you reserved at your home resort with Interval International who then makes it available to other Owners. Once your Deposit has been confirmed, you will not be able to make changes or cancel the request. You can begin a Deposit First exchange between 12 months and 60 days before your home resort reservation check-in date. You'll have up to 24 months after your original home resort reservation check-in date to complete your exchange and travel."
            )}
          </p>
        </div>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Request First")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "Request First is the right exchange method when you want the security of keeping your home resort week until you confirm an acceptable exchange. You can begin a Request First exchange between 12 months and 60 days before your home resort reservation check-in date. You ll have up to 12 months prior to your home resort reservation check-in date to confirm an exchange and complete your travel."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Other Things to Know")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "Marriott Vacation Club Exchange Priority Marriott Vacation Club owners receive priority to comparable weeks deposited by other Vacation Club owners. Interval International holds the highly demanded weeks deposited from Marriott Vacation Club owners for a predetermined period to fulfill comparable exchange requests from other Marriott Vacation Club owners before making the weeks available for non-Marriott Vacation Club week owners. In addition, when all comparable factors are equal, Interval International gives priority to Marriott Vacation Club owners who request an exchange back to their home resort."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Comparable Exchange")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "When you exchange, the Interval International program is based upon the Comparable Exchange concept which attempts to ensure that the supply and demand for the resort and week you receive is similar in value to the supply and demand of what you have deposited€"
          )}
        </p>
        <p className=" text-[#666]    font-base">
          {t(
            "The comparison is based on a variety of aspects of your home resort and the resort you're requesting:"
          )}
        </p>
        <p className=" text-[#666]    font-base">
          {t(
            "Demand for the week and resort being deposited as well as being requested."
          )}
        </p>
        <p className=" text-[#666]    font-base">
          {t(
            "Supply of similar weeks and resorts being deposited as well as being requested."
          )}
        </p>
        <p className=" text-[#666]    font-base">
          {t(
            "Quality of resort, villa size or unit type and private sleeping capacity of the deposited week."
          )}
        </p>
        <p className=" text-[#666]    font-base">
          {t("Villa week check-in date.")}
        </p>
        <p className=" text-[#666]    font-base">
          {t("Date of request and date the villa week was deposited.")}
        </p>

        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Interval International Membership")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "We ve partnered with Interval International to facilitate the exchange process and manage the inventory of exchange weeks. Through your Interval International membership, you can choose from thousands of resorts worldwide. For Weeks Owners, Marriott Vacation Club pays for your first year of ownership with Interval International. After that, you ll need to maintain your membership on a yearly basis. Discounts for multi-year membership may be available. Your Interval International membership must be current through your desired exchange dates to request an exchange."
          )}
        </p>

        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Exchange Types: Internal vs. External")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "There are two types of exchanges, and Interval International is your source for both: Internal Exchange What: Exchange your week at your home resort for another week at your home resort that s in a different season or year. or exchange during your same week, but travel to another Marriott Vacation Club Resort."
          )}
        </p>

        <p className=" text-[#666]    font-base">
          {t(
            "Internal Exchange Fee: $164* * U.S. fee. All fees are subject to change."
          )}
        </p>
        <p className=" text-[#666]    font-base">{t("External Exchange:")}</p>
        <p className=" text-[#666]    font-base">
          {t(
            "What: Exchange your week at your home resort for another week at a non-Marriott Vacation Club Vacation Club Resort. Interval International can help you choose from thousands of resorts worldwide. Go to intervalworld.com to request your exchange. Fee: $219* to request travel within your country of residence or travel outside your country of residence."
          )}
        </p>
        <p className=" text-[#666]    font-base">
          {t(
            "* This is the fee if exchange is placed via intervalworld.com. Please note that Owners who place their exchange requests via a telephone call to Interval International will be charged an additional $20. Fees are listed in U.S. dollars, are subject to change, and vary by country of residence."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Additional Tips")}
        </p>
        <ol className="pt-1 text-[#666]    font-base  list-[circle] px-8">
          <li>
            {t(
              "Place your request as early as possible to increase your chances of confirmation. Be flexible."
            )}
          </li>
          <li>
            {t(
              "Choose as many resorts and dates as possible within the region you wish to travel."
            )}
          </li>
          <li>
            {t(
              "If your traveling party has fewer people than the private sleeping capacity listed for your deposited week, you may increase your chances of confirmation by accepting a smaller unit. For example: If you deposit a two-bedroom unit, but can use a one bedroom for your exchange, you will improve your chances of confirmation."
            )}
          </li>
          <li>
            {t(
              "Requesting a week within the seasonal demand no greater than your deposited week will improve your chances of confirmation."
            )}
          </li>
          <li>
            {t(
              "Multiple check-in days: check-in days vary by resort. You increase your chances for confirmation by accepting any check-in day during the week of your choice. However, you may limit your availability search to specific check-in days."
            )}
          </li>
        </ol>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "Explore the affiliated resorts by visiting Interval International or browsing the Interval International Resort Directory. When you are ready to exchange through Interval International, you will want to understand your desired destinations’ seasonal demand (as measured by the area’s Travel Demand Index), as well as how many people you would like to accommodate."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "You may either confirm your vacation or place a request by redeeming your Vacation Club Points for a 7-night stay according to the chart below. For example, if you would like to visit Cancun during the season of greatest demand and stay in a 2-bedroom villa, refer to the points equivalency chart below to know how many Vacation Club Points would be required."
          )}
        </p>
      </div>
    </div>
  );
};

const Card = ({ image, name, sub, index }) => {
  return (
    <div className={`${index < 2 ? "lg:w-1/3 mx-4" : "lg:w-1/3"} w-full p-2`}>
      <div className="flex justify-center mx-4 pb-8 cursor-pointer w-full ">
        <div className="hover:scale-105  duration-300 ease-in w-full">
          <img src={image} className=" h-[220px] w-full object-cover  " />
          <div className="bg-main py-4 text-center text-white font-bold   text-lg ">
            {name}
            <div className=" text-base font-medium">{sub}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Table = () => {
  return (
    <div className="pt-8 overflow-x-auto">
      <table className=" border-[1px] border-[#e9ecef] table-fixed">
        <tbody>
          <tr>
            <td
              colspan={8}
              className=" bg-[#128275] p-4  border-[1px] border-black"
            >
              <p>
                <span>Travel Demand Index (TDI) Based exchange values</span>
              </p>
            </td>
          </tr>
          <tr>
            <td
              colspan={2}
              rowspan={2}
              className="bg-[#DBDBDB] p-4 border-[1px] border-black"
            >
              <p>
                <span>
                  TDI
                  <br />
                  Range
                </span>
              </p>
            </td>
            <td
              colspan={5}
              className="bg-[#DBDBDB] p-4 border-[1px] border-black"
            >
              <p>
                <span>Full-Week Exchange Values</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>Studio</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>1-Bdrm</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>2-Bdrm</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>3-Bdrm</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>4-Bdrm</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>Peak</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>140-150</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>2,250</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>3,000</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>4,500</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>6,000</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>7,000</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>High</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>115-135</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>1,750</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>2,750</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>4,000</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>5,000</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>6,000</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>Medium</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>90-110</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>1,500</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>2,250</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>3,000</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>4,000</span>
              </p>
            </td>
            <td className="p-4 border-[1px] border-black">
              <p>
                <span>5,000</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>Low</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>50-85</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>1,000</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>1,500</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>2,250</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>3,000</span>
              </p>
            </td>
            <td className="bg-[#FFDFA8] p-4 border-[1px] border-black">
              <p>
                <span>4,000</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
