import Link from "next/link";
import data from "../../staticData/countries.json";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
export default function MainForm({ header, body, hideGIf = false }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const submitF = (e) => {
    e.preventDefault();
  };
  const sendEmail = async () => {
    const reqBody = {
      name: name,
      email: email,
      subject: subject,
      country: country,
      phone: phone,
      text: text,
      source: router.pathname,
    };
    console.log(reqBody);
    try {
      await axios.post("/api/sendEmail", { ...reqBody });
    } catch (error) {
      console.log(error);
    }
  };
  const countries = data;
  const [t, i18n] = useTranslation();

  return (
    <div className="px-8 py-16 lg:w-2/5 m-auto">
      {!hideGIf ? (
        <div>
          <Image
            className="m-auto"
            src="/images/contact.gif"
            width={150}
            height={150}
            alt="gif"
          />
        </div>
      ) : null}
      <div className=" text-center pb-4">
        <div className=" text-2xl font-bold text-[#333]">
          {t(header ? header : "Send Us A Message")}
        </div>
        <div className=" text-sm text-[#666]">
          {t(
            body
              ? body
              : "Our team loves questions and feedback. Here are some ways to contact us"
          )}
        </div>
      </div>

      <div>
        <form id="contact-form-main" className="validate-form">
          <div className="">
            <input
              className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder={t("Your Name")}
              required
            />
          </div>
          <div className="">
            <input
              className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder={t("your Email")}
              required
            />
          </div>

          <div className=" validate-input" data-validate="Phone is required">
            <div className="flex flex-wrap  ">
              <div className=" lg:w-1/2 w-full lg:pr-2 lg:rtl:pr-0 lg:rtl:pl-2">
                <select
                  className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                  name="phonecode"
                  required
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    {t("Select Country")}
                  </option>
                  {countries.map((val) => {
                    return (
                      <option key={val.id} className="" value={val.dial}>
                        {val.name} (+{val.dial})
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-2 lg:rtl:pl-0 lg:rtl:pr-2">
                <input
                  className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder={t("Phone Number")}
                  required
                />
              </div>
            </div>
          </div>

          <div className=" mb-3">
            <div className="w-full">
              <select
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              >
                <option value="">{t("Select Subject")}</option>
                <option value="Rent">{t("Rent")}</option>
                <option value="Buy">{t("Buy")}</option>
                <option value="Sell">{t("Sell")}</option>
                <option value="Inquiry">{t("Inquiry")}</option>
                <option value="Manage">{t("Manage")}</option>
                <option value="Other">{t("Other")}</option>
              </select>
            </div>
          </div>

          <div
            className="m-b-30 validate-input"
            data-validate="Message is required"
          >
            <textarea
              className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
              name="content"
              placeholder={t("Your Message")}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              required
            ></textarea>
          </div>

          <div className="mb-4 validate-input  text-base">
            <input
              type="checkbox"
              id="checkbox-policy"
              className=" w-4 h-4 inline mr-4"
              required
              data-validate="Checkbox policy is required"
            />
            <label for="checkbox-policy" className=" inline text-sm font-bold">
              {t(
                "I consent to bon voyage to collect my data via this form.(Required)"
              )}
            </label>
            <h5 className="pt-2 text-sm font-bold">
              {t("Please Check our")}{" "}
              <Link href="/privacy" className=" text-blue-500">
                {t("Privacy Policy")}
              </Link>{" "}
              {t("to see how we protect and manage your submitted data.")}
            </h5>
          </div>

          <button
            type="submit"
            id="submit-main"
            className=" text-white p-3 px-5  bg-main"
            onClick={sendEmail}
          >
            {t("Send Email")}
          </button>
        </form>
        <div className="h-[1px] bg-main my-4" />
        <div className="flex justify-end">
          <button className=" text-white p-3 px-5  bg-main">
            {t("Make Payment")}
          </button>
        </div>
      </div>
    </div>
  );
}
