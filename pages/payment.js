import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="xl:px-32 px-8">
      <Payment />
    </div>
  );
}

const Payment = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="px-8 py-16  pt-28  lg:w-2/5 m-auto">
      <h1 className=" font-semibold text-3xl pb-8">{t("Payment Form")}</h1>
      <div>
        <form id="contact-form-main" className="validate-form">
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="name"
            placeholder={t("Name")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="country"
            placeholder={t("Country")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="state"
            placeholder={t("State")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="city"
            placeholder={t("City")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="zip"
            placeholder={t("ZIP")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="address"
            placeholder={t("Address")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="email"
            name="email"
            placeholder={t("Your Email")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="phone"
            placeholder={t("Phone Number")}
            required
          />
          <input
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            type="text"
            name="amount"
            placeholder={t("Amount")}
            required
          />
          <select
            className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
            name="curancy"
          >
            <option value="AED" selected>
              {"AED"}
            </option>
            <option value="EUR">{"EUR"}</option>
            <option value="USD">{"USD"}</option>
          </select>

          <div
            className="m-b-30 validate-input"
            data-validate="Message is required"
          >
            <textarea
              className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
              name="content"
              placeholder={t("Remarks")}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            id="submit-main"
            className=" text-white p-3 px-5  bg-main"
          >
            {t("Submit Order")}
          </button>
        </form>
      </div>
    </div>
  );
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
