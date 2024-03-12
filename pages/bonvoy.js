import MainForm from "@/layout/ui/form";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";
import Layout from "@/layout/Layout";

import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation();

  return (
    <div className="px-[16px] lg:px-32">
      <Hotel />
      <Table />
      <div className="px-[16px] mt-8">
        <p className="pt-3 text-[#666]    font-base">
          {" "}
          * {t("Late checkout subject to availability at all hotels.")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {" "}
          **{" "}
          {t(
            "Late checkout subject to availability at resorts and convention hotels."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {" "}
          *** {t("In Hotel Welcome Gift varies by brand.")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {" "}
          ****{" "}
          {t(
            "Lounge access and full complimentary breakfast subject to availability. At hotel brands that have lounges, you will have full access and complimentary breakfast."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {" "}
          ***** {t("Annual Choice Benefit gift options vary by brand.")}
        </p>
        <p className="pt-6 text-[#666]    font-base">
          {t("Terms & Conditions")}
        </p>
        <p className="pt-6 text-[#666]    font-base">
          {t(
            "Presently, different resort groups have better value propositions than others, but for the most part, most timeshare rooms can be rented besides peak times for close to what you pay in maintenance fees."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("NOT A MEMBER OF MARRIOTT BONVOY? CONTACT US NOW TO ASSIST YOU!")}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Bon Voyage Services:")}
        </p>
        <p className="pt-6 text-[#666]    font-base">
          -{" "}
          {t(
            "Shall assist you in your travel needs worldwide not limited to Marriott Properties."
          )}
        </p>
        <p className="pt-6 text-[#666]    font-base">
          -{" "}
          {t(
            "Shall coordinate and keep track to grant your special requests in your upcoming confirmed reservations."
          )}
        </p>
      </div>
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
            src="/images/owners/111.png
"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Marriott Bonvoy")}
          </h2>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "The Marriott Bonvoy™ enables you to earn Marriott Bonvoy™ Points toward hotel stays, airline transportation, cruises and much, much more."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "You can earn Marriott Bonvoy Points by staying at participating Marriott hotels and resorts worldwide and by trading your timeshare ownership week for Bonvoy Points, if eligible. You also receive special members-only offers and discounts."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "To learn more about membership benefits or to check your Bonvoy Points balance, visit www.marriottbonvoy.com. NEWEST Marriott Bonvoy benefits for Marriott Vacation Club Owners. Expanded Brands and Destinations Previously, Marriott Bonvoy Points earned from your Ownership or Membership were only eligible for use at Marriott branded hotels."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Now you ll have even more opportunities to use your Marriott Bonvoy Points at more than 6,700 hotels and resorts where you may enjoy elevated Elite benefits and status recognition. You can visit exciting destinations at hotels under the distinctive Ritz-Carlton®, St. Regis, Marriott® and Starwood® brands."
            )}
          </p>
        </div>

        <div className="w-full py-4">
          <img src="/images/owners/new 6.png" />
        </div>

        <p className="pt-3 text-[#666]    font-base">
          {t(
            "As an enrolled Owner at the Select, Executive, Presidential or Chairman s Club benefit level, your Elite status in the Marriott Bonvoy program is now upgraded."
          )}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "Owners with Marriott Bonvoy™ Gold Elite status will be elevated to Marriott Bonvoy™ Platinum Elite status, and Owners with Platinum Elite status will be elevated to Marriott Bonvoy™ Titanium Elite status. In addition, those at the Owner benefit level will now receive Gold Elite status. If you are an unenrolled Owner with eligible weeks, the potential benefits of enrolling just got better. By enrolling your eligible weeks, you may also receive complimentary enrollment in the Marriott Bonvoy program at an Elite status of Gold Elite, Platinum Elite or Titanium Elite, based on your number of Vacation Club Points. Enrolling your eligible week (s) is easy."
          )}
        </p>
        <p className="pt-3 text-[#666] w-full    font-bold">
          {t("Unlock Amazing Benefits")}
        </p>
        <p className="pt-3 text-[#666]    font-base">
          {t(
            "All members enjoy unlimited travel possibilities and the more you stay, the more benefits you unlock."
          )}
        </p>
      </div>
    </div>
  );
};

const Table = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-8 overflow-x-auto px-[16px]">
      <p className="py-8 text-[#666] w-full text-center   font-bold">
        {t("BENEFITS AT A GLANCE Compare Elite Benefits")}
      </p>

      <table className=" border-[1px] border-[#e9ecef] table-fixed">
        <thead>
          <tr>
            <th
              scope="col"
              className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666] max-w-[100px]"
            >
              {"Compare Elite Benefits"}
            </th>
            <th
              scope="col"
              className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
            >
              Silver Elite Stay 10 nights/ yr
            </th>
            <th
              scope="col"
              className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
            >
              Gold Elite Stay 25 nights/ yr
            </th>
            <th
              scope="col"
              className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
            >
              Platinum Elite Stay 50 nights/ yr
            </th>
            <th
              scope="col"
              className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
            >
              Titanum Elite Stay 75 nights/ yr
            </th>
            <th
              scope="col"
              className=" border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"
            >
              Ambassador Elite Stay 100 nights/ yr + $20,000 USD spend
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              scope="row"
              className=" text-center border-[#e9ecef] border-[1px] text-base max-w-[100px]    border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">UltimateReservation Guarantee</p>
              <p className=" font-base">
                If we cant honor your reservation for any reason, we guarantee
                that we ll pay for you to stay nearby and compensate you for the
                inconvenience.
              </p>
              <p className=" font-base">Learn more about compensation rates.</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
          </tr>
          <tr>
            <td
              scope="row"
              className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">Points Bonus</p>
              <p className=" font-base">
                Earn bonus points on eligible hotel purchases.
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              10% Bonus
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              25% Bonus
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              50% Bonus
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              75% Bonus
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              75% Bonus
            </td>
          </tr>
          <tr>
            <td
              scope="row"
              className="text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">Late Checkout</p>
              <p className=" font-base">Based on availability</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">Priority</p>
              <p className="font-semibold">Late Checkout *</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">2pm *</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">4pm **</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">4pm **</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">4pm **</p>
            </td>
          </tr>

          <tr>
            <td
              scope="row"
              className="text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">In Hotel Welcome Gift</p>
              <p className=" font-base">Varies by brand</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">Points ***</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">
                Points, Breakfast Offering, or Amenity ***
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">
                Points, Breakfast Offering, or Amenity ***
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">
                Points, Breakfast Offering, or Amenity ***
              </p>
            </td>
          </tr>

          <tr>
            <td
              scope="row"
              className="text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              Dedicated Elite Support
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
          </tr>

          <tr>
            <td
              scope="row"
              className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">Lounge Access</p>
              <p className=" font-base">
                Full lounge access and complimentary breakfast
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
          </tr>
          <tr>
            <td
              scope="row"
              className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">Annual Choice Benefit</p>
              <p className=" font-base">
                5 Suite Night Awards or Gift Options*****
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">Stay 50 Qualifying Nights</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <p className="font-semibold">Stay 75 Qualifying Nights</p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
          </tr>
          <tr>
            <td
              scope="row"
              className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">48-Hour Guarantee</p>
              <p className=" font-base">
                Book by 3pm, 48 hours prior to arrival, and we ll always have a
                room available to you. Terms & Conditions
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
              <AiOutlineCheck className="mx-auto" />
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
          </tr>
          <tr>
            <td
              scope="row"
              className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">Your24</p>
              <p className=" font-base">
                Flexibiltiy to choose your 24-hour check-in and checkout time.
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
          </tr>
          <tr>
            <td
              scope="row"
              className=" text-center border-[#e9ecef] border-[1px] text-base  font-semibold  border-b-2  p-2 text-[#666]"
            >
              <p className="font-semibold">Ambassador Service</p>
              <p className=" font-base">
                Get personal assistance with your stays.
              </p>
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              {" "}
            </td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]"></td>
            <td className="border-[#e9ecef] border-[1px] text-base  border-b-2 text-center p-2 text-[#666]">
              <AiOutlineCheck className="mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
