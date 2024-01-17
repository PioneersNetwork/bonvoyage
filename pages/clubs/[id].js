import MainForm from "@/layout/ui/form";
import Slider from "@/layout/ui/slider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../staticData/countries.json";
import { useTranslation } from "react-i18next";
import Layout from "@/layout/Layout";
import Head from "next/head";

export default function Home({ id }) {
  const [t, i18n] = useTranslation();

  const route = useRouter();
  id = route.query["id"];

  const [club, setClub] = useState(null);
  const [images, setImages] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    getData(id).then((val) => {
      setClub(val.club[0]);
      setMeta(val.meta[0]);
      setImages(
        val.picture.map((val) => {
          return "/images/clup/" + val.name;
        })
      );
    });
  }, [id]);

  if (images.length == 0 || !club) {
    return <></>;
  }
  return (
    <div className="pb-16">
      <Head>
        <title key={meta.id}>{meta.title ? meta.title : "club"} </title>
        <meta name="description" content={meta.description}></meta>
        <meta name="keywords" content={meta.keywords}></meta>
      </Head>
      <Slider images={images} />
      <div className="  mx-auto pt-4 px-8 lg:px-32 ">
        <ClubBody club={club} />
        <div className="flex flex-wrap">
          {/* <Resort className="w-full lg:w-1/2 pt-8" club={club} />
          <Apartments className="w-full lg:w-1/2 pt-8" club={club} /> */}
          <Amenities club={club} />
          <Availability club={club} />
          <div className="w-full lg:w-1/2 pt-8">
            <iframe
              className=" w-full h-[340px]"
              src={club.video_link}
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 pt-8">
            <MiniForm />
          </div>
          <div className="w-full lg:w-1/4 pt-8">
            <div className="mapouter">
              <div className="gmap_canvas h-auto">
                <iframe
                  width="100%"
                  height="270px"
                  id="gmap_canvas"
                  src={
                    "https://maps.google.com/maps?q=" +
                    club.title.en +
                    "&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  }
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 pt-8">
            <a href={"images/" + club.internalmap}>
              <img
                className=" max-w-full w-full"
                src={"/images/" + club.internalmap}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const ClubBody = ({ club }) => {
  const [t, i18n] = useTranslation();

  return (
    <div>
      <h3 className=" font-bold text-4xl  text-blue-900 pb-6">
        {club.title.en}
      </h3>
      <p
        className="pt-3 text-[#666] font-base"
        dangerouslySetInnerHTML={{ __html: club.description[i18n.language] }}
      ></p>
    </div>
  );
};
const Amenities = ({ club }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className="w-full lg:w-1/2 pt-8 p-4">
      <h3 className="  text-4xl  text-black pb-6">{t("Amenities")}</h3>
      <p
        className="pt-3 text-[#666] font-base"
        dangerouslySetInnerHTML={{ __html: club.amenities[i18n.language] }}
      ></p>
    </div>
  );
};
const Resort = ({ club }) => {
  const [t, i18n] = useTranslation();

  return (
    <div>
      <h3 className=" font-bold text-4xl  text-blue-900 pb-6">
        {club.title.en}
      </h3>
      <p
        className="pt-3 text-[#666] font-base"
        dangerouslySetInnerHTML={{ __html: club.description[i18n.language] }}
      ></p>
    </div>
  );
};
const Apartments = ({ club }) => {
  const [t, i18n] = useTranslation();

  return (
    <div>
      <h3 className=" font-bold text-4xl  text-blue-900 pb-6">
        {club.title.en}
      </h3>
      <p
        className="pt-3 text-[#666] font-base"
        dangerouslySetInnerHTML={{ __html: club.description[i18n.language] }}
      ></p>
    </div>
  );
};
const Availability = ({ club }) => {
  const [t, i18n] = useTranslation();

  const [month, SetMonth] = useState();
  console.log(club);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];
  return (
    <div className="w-full lg:w-1/2 pt-8 p-4 ">
      <div className="border-[1px] border-black p-4">
        <h3 className=" text-4xl  text-black pb-6">{t("Availability")}</h3>
        <div className=" w-11/12 flex p-2 overflow-x-auto bg-[#eee] ">
          {months
            .filter((val) => {
              return club[val.toLowerCase()] != null;
            })
            .map((val) => {
              return (
                <span
                  onClick={() => {
                    SetMonth(val.toLowerCase());
                  }}
                  key={val}
                  className="p-1 px-3 mx-1  blink_me rounded-3xl text-main bg-gray-500"
                >
                  {val}
                </span>
              );
            })}
        </div>

        <p className="pt-3 pb-6">{month ? month.toUpperCase() : ""}</p>
        <p
          className="pt-3 text-[#666] font-base"
          dangerouslySetInnerHTML={{ __html: club[month] }}
        ></p>
      </div>
    </div>
  );
};

const MiniForm = () => {
  const [t, i18n] = useTranslation();

  const countries = data;

  return (
    <div className=" m-auto px-8 p-4">
      <div>
        <img className="m-auto" src="/images/contact.gif" width={150} />
      </div>
      <div className=" text-center pb-4">
        <div className=" text-2xl font-bold text-[#333]">
          {t("Send Us A Message")}
        </div>
        <div className=" text-sm text-[#666]">
          {t(
            "Our team loves questions and feedback. Here are some ways to contact us"
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
              placeholder={t("Your Name")}
              required
            />
          </div>
          <div className="">
            <input
              className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
              type="email"
              name="email"
              placeholder={t("your Email")}
              required
            />
          </div>

          <div className=" validate-input" data-validate="Phone is required">
            <div className="flex flex-wrap  ">
              <div className=" lg:w-1/2 w-full lg:pr-2">
                <select
                  className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                  name="phonecode"
                  required
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
              <div className="lg:w-1/2 w-full lg:pl-2">
                <input
                  className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                  type="number"
                  name="phone"
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
              placeholder="Your Message"
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
};

async function getData(id) {
  const res = await fetch("/api/clubs/" + id);
  return await res.json();
}

Home.getInitialProps = async ({ query: { id } }) => {
  return { id: id };
};
Home.getLayout = (page) => <Layout>{page}</Layout>;
