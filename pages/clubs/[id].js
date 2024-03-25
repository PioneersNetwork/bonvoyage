import MainForm from "@/layout/ui/form";
import Slider from "@/layout/ui/slider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../staticData/countries.json";
import { useTranslation } from "react-i18next";
import Layout from "@/layout/Layout";
import Head from "next/head";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import TheCalendar from "@/layout/ui/Calender";
import Image from "next/image";
import axios from "axios";
export default function Home({ id }) {
  const [t, i18n] = useTranslation();
  const [calendarRange, setCalendarRange] = useState([]);
  const [calendars, setCalenders] = useState([]);
  const [months, setMonths] = useState([]);
  const route = useRouter();
  id = route.query["id"];

  const [club, setClub] = useState(null);
  const [images, setImages] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    setClub();
    getData(id).then((val) => {
      setClub(val.club[0]);
      setMeta(val.meta[0]);
      if (val.club[0].calendar?.length) {
        setCalenders([]);
        setCalendarRange([]);
        setMonths([]);
        let oldMonths = [];
        let theCalendars = [];
        val.club[0].calendar.forEach((e, i) => {
          theCalendars.push({
            ...e,
            month: new Date(e.start).getMonth() + 1,
            year: new Date(e.start).getFullYear(),
          });

          var theMonth =
            new Date(e.start).getFullYear() +
            "-" +
            new Date(e.start).getMonth();
          if (
            oldMonths.filter((e) => e.monthYear == theMonth).length == 0 &&
            new Date(e.end) > new Date()
          ) {
            oldMonths.push({
              monthYear: theMonth,
              month: new Date(e.start).getMonth(),
              year: new Date(e.start).getFullYear(),
            });

            console.log(months);
          }
          var range = e.start;


          setCalendarRange((prev) => {
            let ranges = prev;
            ranges.push(range);
            
            return [...ranges];
          });
        });
        setMonths(oldMonths);
        setCalenders(theCalendars);
      }
      setImages(
        val.picture.map((val) => {
          return "/images/clup/" + val.name;
        })
      );
    });
  }, [id]);

  if (images.length == 0 || !club) {
    return (
      <div className="fixed bg-black w-full h-full left-0 top-0 flex justify-center items-center z-50">
        <Image className="animate-pulse" src={"/images/icons/logo.svg"} width={100} height={70} />
      </div>
    );
  }
  return (
    <div className="pb-16">
      <Head>
        <title key={meta.id}>{meta.title ? meta.title : "club"} </title>
        <meta name="description" content={meta.description}></meta>
        <meta name="keywords" content={meta.keywords}></meta>
      </Head>
      <Slider images={images} />
      <div className="  mx-auto pt-4 px-[16px] lg:px-32">
        <div className="flex flex-wrap">
          <div className={`w-full ${club.calendar?'lg:w-6/12':''}`}>
          <ClubBody club={club} />
          </div>
          <div className="w-full lg:w-6/12">
          {club.calendar && (
            <Availability
              club={club}
              calendarRange={calendarRange}
              months={months}
              calendars={calendars}
            />
          )}
          </div>
        </div>
        
        
        <div className="flex flex-wrap">
          {/* <Resort className="w-full lg:w-1/2 pt-8" club={club} />
          <Apartments className="w-full lg:w-1/2 pt-8" club={club} /> */}
          <Amenities club={club} />
          
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
const Availability = ({ club, calendarRange, months, calendars }) => {
  const [t, i18n] = useTranslation();
  const [mc, setMc] = useState(new DateObject());
  const [month, SetMonth] = useState();
  const [update, setUpdate] = useState(false);
  const monthsName = [
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
  useEffect(()=>{
    if(months.length!=0)
    {
      SetMonth({...months[0]});
      setMc(new DateObject({
        month: months[0].month + 1,
        year: months[0].year,
        day: 1,
      }))
    }
  },[])
  return (
    <div className="w-full p-4">
      <div className="border-[1px] border-black p-4">
        <h3 className=" text-4xl  text-black pb-6">{t("Availability")}</h3>
        <div className=" w-full flex p-2 overflow-x-auto bg-[#eee] ">
          {months.map((val) => {
            return (
              <>
                <button
                  onClick={() => {
                    SetMonth({ ...val });
                    setMc(
                      new DateObject({
                        month: val.month + 1,
                        year: val.year,
                        day: 1,
                      })
                    );
                  }}
                  key={val}
                  className="p-1 px-3 mx-1   rounded-3xl text-main bg-gray-800"
                >
                  {monthsName[val.month]}
                </button>
              </>
            );
          })}
        </div>

        <p className="pt-3 text-[#666] font-base">
          <TheCalendar
            currentDate={mc}
            calendarRange={calendarRange}
            calendars={calendars}
          />
        </p>
      </div>
    </div>
  );
};

const MiniForm = () => {
  const [t, i18n] = useTranslation();

  const countries = data;
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [message,setMessage]=useState();
  const sendEmail = async () => {
    console.log('test');
    const reqBody = {
      name: name,
      email: email,
      subject: subject,
      country: country,
      phone: phone,
      text: text,
      source: router.asPath,
    };
    console.log(reqBody);
    try {
      await axios.post("/api/sendEmail", { ...reqBody });
      setName("");
      setEmail("");
      setSubject("");
      setCountry("");
      setPhone("");
      setText("");
      setMessage({result:true,message:"Thank you for writing to us, we will respond as soon as possible"})
    } catch (error) {
      console.log(error);
      setMessage({result:false,message:error})
    }
  };
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
        <form id="contact-form-main" className="validate-form" onSubmit={(e)=>{
          e.preventDefault();
          sendEmail();
        }}>
          <div className="">
            <input
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
              className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
              type="text"
              name="name"
              placeholder={t("Your Name")}
              required
            />
          </div>
          <div className="">
            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
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
                value={country}
                onChange={(e)=>{setCountry(e.target.value)}}
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
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
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
              value={subject}
              onChange={(e)=>{
                setSubject(e.target.value);
              }}
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
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
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
          {message && <div className={`${message.result?'text-green-500':'text-red-500'} bg-white p-2 rounded my-1`}>{message.message}</div>}
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
