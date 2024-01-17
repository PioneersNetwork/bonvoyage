import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="xl:px-32 px-8 lg:px-32">
      <Hotel />
    </div>
  );
}

const Hotel = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-[100px]  pb-16 ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="/images/refund.jpg"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Cancellation & Refund Policy")}
          </h2>

          <p className="my-4 text-[#666] font-bold ">
            {t(
              "Marriott Timeshare Weekly Rentals (7 nights and 8 days) OR Vacation Rentals(7 nights and 8 days)"
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            <strong className=" font-bold">{t("Bon Voyage Services")}</strong>
            {t(
              "is acting solely as an independent broker putting together the owner holding the reservation and the guest who will be using the reservation. Bon Voyage Services do not represent Marriott Vacation Club. Bon Voyage Services is not responsible for adherence to the Marriott Vacation Club terms and conditions and is not liable in any way if any such terms and conditions broken. The owner of the week(s) and holding the above reservation is paid immediately after the funds are cleared by Bon Voyage Services, therefore this is a non-refundable, no cancellation transaction. Whatever the case, in the event that the renter, is not able to make use of the reservation, there will be no refund including a force majeure event."
            )}
          </p>

          <p className="my-4 text-[#666] font-bold ">{t("Short Stays")}</p>

          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Change of plans? Not to worry. We shall assist you as long as you notify us whether you ll get money back depends on the type of booking you made and how close you are to check-in. Heres how it breaks down:"
            )}
          </p>
          <p className=" text-[#666]    font-base">
            <strong className=" font-bold">{t("Refundable booking")}</strong>
            {t(
              "- If you aren`t too close to check-in hotels have their own rules about that, so be sure to check the fine print in your itinerary."
            )}
          </p>
          <p className=" text-[#666]    font-base">
            <strong className=" font-bold">
              {t("Non-refundable booking?")}
            </strong>
            {t("- If you Like the name suggests, you wont get any money back.")}
          </p>
          <p className="pt-3 text-[#666] font-bold ">
            {t("How to cancel your hotel/vacation rental")}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Get in touch with us and we will take care of it for you. Just keep in mind that the hotel may charge a fee depends on the reservation made."
            )}
          </p>
          <p className="my-4 text-[#666] font-bold ">
            {t("Other Information’s you need to know")}
          </p>

          <p className="pt-3 text-[#666]    font-base">
            <strong className=" font-bold">{t("NO SHOWS")}</strong>
            {t(
              "- If you dont show up, or show up outside of check-in hours, the hotel may charge you. The Rules and Restrictions section in your itinerary has all the fine print."
            )}
          </p>
          <p className=" text-[#666]    font-bold">
            {t("Book a vacation package?")}
          </p>
          <p className=" text-[#666]    font-bold">
            {t(
              "Just need to change something? Try changing your booking instead of canceling it."
            )}
          </p>
          <p className=" text-[#666]    font-bold">
            {t("Book a vacation package?")}
          </p>
          <p className=" text-[#666]    font-bold">
            {t("Still need help? Get in touch. We are here for you.")}
          </p>
        </div>
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
