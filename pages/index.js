import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Marquee from "react-fast-marquee";
import data from "../staticData/countries.json";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import axios from "axios";

export default function Home() {
  const [showDialog, setShowDiaolg] = useState(false);
  const handleOpen = () => {
    const timer = setTimeout(() => {
      setShowDiaolg(true);
    }, 5000);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    handleOpen();
  }, []);
  return (
    <div id="first">
      <PopUpForm showDialog={showDialog} setShowDiaolg={setShowDiaolg} />
      <ImageForm />
      <Abound />
      <Timeshare />
      <Services />
      <Partners />
      <Travel />
      <Whatsapp />
    </div>
  );
}

const PopUpForm = ({ showDialog, setShowDiaolg }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
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
      await axios.post("api/sendEmail", { ...reqBody });
    } catch (error) {
      console.log(error);
    }
  };
  const countries = data;

  if (showDialog) {
    return (
      <div className=" absolute w-full h-full bg-black bg-opacity-40">
        <div className=" relative  w-full lg:w-[500px] bg-white rounded-lg top-[100px] m-auto">
          <div className=" p-4">
            <div className="  text-center flex justify-between pb-8">
              <div></div>
              <h4 className=" w-100 font-bold">{"why choose us?"}</h4>
              <button
                type="button"
                onClick={() => {
                  setShowDiaolg(false);
                }}
              >
                X
              </button>
            </div>
            <hr />
            <div className="">
              <div className="">
                <h3 className="">
                  <p className="pt-8 pb-4">
                    {
                      "With over 15 years of experience managing timeshare, we can help"
                    }
                  </p>
                </h3>
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
                      placeholder="Your Name"
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
                      placeholder="your Email"
                      required
                    />
                  </div>

                  <div
                    className=" validate-input"
                    data-validate="Phone is required"
                  >
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
                            Select Country
                          </option>
                          {countries.map((val) => {
                            return (
                              <option
                                key={val.id}
                                className=""
                                value={val.dial}
                              >
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
                          placeholder="Phone Number"
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
                        <option value="">{"Select Subject"}</option>
                        <option value="Rent">{"Rent"}</option>
                        <option value="Buy">{"Buy"}</option>
                        <option value="Sell">{"Sell"}</option>
                        <option value="Inquiry">{"Inquiry"}</option>
                        <option value="Manage">{"Manage"}</option>
                        <option value="Other">{"Other"}</option>
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
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
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
                    <label
                      for="checkbox-policy"
                      className=" inline text-sm font-bold"
                    >
                      {
                        "I consent to bon voyage to collect my data via this form.(Required)"
                      }
                    </label>
                    <h5 className="pt-2 text-sm font-bold">
                      {"Please Check our"}{" "}
                      <Link href="/privacy" className=" text-blue-500">
                        {"Privacy Policy"}
                      </Link>{" "}
                      {"to see how we protect and manage your submitted data."}
                    </h5>
                  </div>

                  <button
                    type="submit"
                    id="submit-main"
                    className=" text-white p-3 px-5  bg-main"
                    onClick={sendEmail}
                  >
                    {"Send Email"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

const Whatsapp = () => {
  return (
    <div className="fixed  bottom-8  right-8 z-20">
      <div className="  p-3  bg-green-600  rounded-full">
        <Link href="https://wa.me/971501877187" target="blank">
          <FaWhatsapp className=" text-4xl text-white " />
        </Link>
      </div>
      <div className="  p-1 bg-black bg-opacity-30   mt-2">
        <Link href={"/#first"}>
          <MdOutlineKeyboardDoubleArrowUp className="m-auto text-4xl text-white " />
        </Link>
      </div>
    </div>
  );
};

const ImageForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
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
    <div className="w-full   bg-[url(/images/photo_5906875368822914186_y.jpg)] bg-cover bg-no-repeat ">
      <div className="w-full h-full bg-gradient-to-b from-[#00000099] to-[#00000099]">
        <div className=" ">
          <div className=" flex justify-center flex-wrap  pt-40 pb-10">
            <div className="lg:w-2/5 w-full px-8 ">
              <p className=" bg-main text-white p-4 rounded-xl  text-center text-xl">
                {"GUARANTEED QUALITY SERVICE AT AFFORDABLE COST!"}
              </p>

              <p className="mt-3  pb-4 text-xl font-bold text-white">
                {"What are the major highlights of our services?"}
              </p>
              <ul className=" text-white mx-2">
                <li>
                  <span className=" text-xl">
                    <Image
                      decoding="async"
                      className="emoji inline-block mx-2 rtl:rotate-y-180 "
                      draggable="false"
                      src="https://s.w.org/images/core/emoji/11.2.0/svg/1f449.svg"
                      width="20"
                      height="20"
                      alt="👉"
                    />
                  </span>
                  {"Rent Timeshare (Weekly Rentals 7 nights & 8 days)"}
                </li>
                <li>
                  <span className=" text-xl">
                    <Image
                      decoding="async"
                      className="emoji inline-block mx-2 rtl:rotate-y-180 "
                      draggable="false"
                      src="https://s.w.org/images/core/emoji/11.2.0/svg/1f449.svg"
                      width="20"
                      height="20"
                      alt="👉"
                    />
                  </span>
                  {"Sell Timeshare (All Season Available)"}
                </li>
                <li>
                  <span className=" text-xl">
                    <Image
                      decoding="async"
                      className="emoji inline-block mx-2 rtl:rotate-y-180 "
                      draggable="false"
                      src="https://s.w.org/images/core/emoji/11.2.0/svg/1f449.svg"
                      width="20"
                      height="20"
                      alt="👉"
                    />
                  </span>{" "}
                  {"Buy Timeshare (All Season Available)"}
                </li>
                <li>
                  <span className=" text-xl">
                    <Image
                      decoding="async"
                      className="emoji inline-block mx-2 rtl:rotate-y-180 "
                      draggable="false"
                      src="https://s.w.org/images/core/emoji/11.2.0/svg/1f449.svg"
                      width="20"
                      height="20"
                      alt="👉"
                    />
                  </span>
                  {"Manage Timeshare (A-Z Processing)"}
                </li>
              </ul>
              <p className=" text-2xl text-white mt-8">
                {t(
                  "Enjoy up to 30% off on your weekly rental and experience 5-star service only by Marriott Properties."
                )}
              </p>
              <div className=" flex flex-wrap justify-center  pt-5 mt-2 ">
                <a
                  href="https://wa.me/971501877187"
                  target="blank"
                  className=" m-2 px-5  rounded-3xl p-3 bg-[#25D366] text-white"
                >
                  {"Chat on Whatsapp"}
                </a>
                <a
                  href="tel:00971501877187"
                  className=" m-2 px-5 rounded-3xl p-3 bg-[#0274be] text-white "
                >
                  <span className=" inline-block mx-4">
                    <FaPhoneAlt />
                  </span>
                  00971501877187
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4  bg-main rounded-lg p-4">
              <h4 className=" text-xl font-bold text-white py-3">
                {"GET IN TOUCH WITH US!"}
              </h4>
              <form id="contact-form-main" className="validate-form">
                <div className="">
                  <input
                    className="w-full p-2 rounded-md my-2 px-4"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="">
                  <input
                    className="w-full p-2 rounded-md my-2 px-4"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="your Email"
                    required
                  />
                </div>

                <div
                  className=" validate-input"
                  data-validate="Phone is required"
                >
                  <div className="flex flex-wrap  ">
                    <div className=" lg:w-1/2 w-full lg:pr-2 rtl:lg:pl-2 lg:rtl:pr-0">
                      <select
                        className="w-full p-2 rounded-md text-black my-2 px-4"
                        name="phonecode"
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                        required
                      >
                        <option value="" selected>
                          Select Country
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
                    <div className="lg:w-1/2 w-full lg:pl-2 lg:rtl:pr-2 lg:rtl:pl-0 ">
                      <input
                        className="w-full p-2 rounded-md my-2 px-4"
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className=" mb-3">
                  <div className="w-full">
                    <select
                      className="w-full p-2 rounded-md my-2 px-4"
                      name="subject"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    >
                      <option value="">{"Select Subject"}</option>
                      <option value="Rent">{"Rent"}</option>
                      <option value="Buy">{"Buy"}</option>
                      <option value="Sell">{"Sell"}</option>
                      <option value="Inquiry">{"Inquiry"}</option>
                      <option value="Manage">{"Manage"}</option>
                      <option value="Other">{"Other"}</option>
                    </select>
                  </div>
                </div>

                <div
                  className="m-b-30 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    className="w-full p-2 rounded-md my-2 px-4"
                    name="content"
                    placeholder="Your Message"
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
                  <label for="checkbox-policy" className=" inline">
                    {
                      "I consent to bon voyage to collect my data via this form.(Required)"
                    }
                  </label>
                  <h5 className="pt-2">
                    {"Please Check our"}{" "}
                    <Link href="/privacy" className=" text-blue-500">
                      {"Privacy Policy"}
                    </Link>
                    {"to see how we protect and manage your submitted data."}
                  </h5>
                </div>

                <button
                  type="submit"
                  id="submit-main"
                  className=" text-white p-3 px-5 rounded bg-[#886c3c]"
                  onClick={sendEmail}
                >
                  {"Send Email"}
                </button>
              </form>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

const Abound = () => {
  const clubs = [
    {
      name: "Marriott Club Son Antem",
      link: "clups/1",
      image: "/images/project-01.webp",
    },
    {
      name: "Marriott’s Playa Andaluza",
      link: "clups/2",
      image: "/images/project-02.webp",
    },
    {
      name: "Marriott's Village d'ile-de-France",
      link: "clups/3",
      image: "/images/project-03.webp",
    },
    {
      name: "Marriott’s Newport Coast Villas",
      link: "clups/4",
      image: "/images/project-04.webp",
    },
    {
      name: "Grand Residences by Marriott - Mayfair - London 47 Park Street",
      link: "clups/5",
      image: "/images/project-05.webp",
    },
    {
      name: "Marriott’s Marbella Beach Resort",
      link: "clups/6",
      image: "/images/project-06.webp",
    },
    {
      name: "Marriott's Ko Olina Beach Club",
      link: "clups/42",
      image: "/images/oeYUlNRcpfCKYmHgXsId.webp",
    },
    {
      name: "Marriott's Phuket Beach Resort & Marriott’s Mai Khao Beach",
      link: "clups/80",
      image: "/images/80-logo.webp",
    },
  ];

  return (
    <div className="bg-black w-full  pt-16">
      <div className=" ">
        <div className="flex justify-center pb-4">
          <img
            className="h-[230px] w-full  max-w-[500px]"
            src="/images/mariot.webp"
          />
        </div>
        <div className="flex flex-wrap lg:mx-16 justify-center">
          {clubs.map((val) => {
            return (
              <ClubCard
                key={val.name}
                name={val.name}
                link={val.link}
                image={val.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ClubCard = ({ image, name, link, travel }) => {
  return (
    <Link
      href={link}
      className={`${travel ? "lg:w-1/3" : "lg:w-1/4"} w-full p-2`}
    >
      <div className="flex justify-center mx-4 pb-8 cursor-pointer w-full ">
        <div>
          <Image
            src={image}
            height={220}
            width={270}
            alt={name}
            className=" h-[220px] w-[270px] object-cover  hover:scale-105  duration-300 ease-in"
          />
          <div className="py-4 text-center text-[#886c3c] font-bold hover:text-main  text-lg max-w-[270px]">
            {name}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Timeshare = () => {
  const timeshare = [
    {
      name: "Manage Timeshare",
      link: "manage",
      image: "/images/owners/1.webp",
    },
    {
      name: "Buy Timeshare",
      link: "buy",
      image: "/images/owners/2.webp",
    },
    {
      name: "Sell Timeshare",
      link: "sell",
      image: "/images/owners/3.webp",
    },
    {
      name: "Rent Timeshare",
      link: "rent",
      image: "/images/owners/4.webp",
    },
    {
      name: "MVCI Resort",
      link: "mvci",
      image: "/images/des1.webp",
    },
    {
      name: "MVCI Destinations Points",
      link: "mvci-point",
      image: "/images/destpoint.webp",
    },
    {
      name: "Marriott Bonvoy",
      link: "bonvoy",
      image: "/images/des3.webp",
    },
    {
      name: "Exchange with Interval International",
      link: "interval",
      image: "/images/owners/99.webp",
    },
  ];

  return (
    <div className="bg-black w-full  pt-16">
      <div className=" ">
        <div className="flex justify-center pb-4">
          <Image
            height={120}
            width={250}
            alt="mariot"
            className="h-[120px]   max-w-[500px]"
            src="/images/mariott.webp"
          />
        </div>
        <h3 className="pt-4 text-[#886c3c] text-center pb-16 text-2xl font-bold">
          Timeshare Program
        </h3>
        <div className="flex justify-center flex-wrap lg:mx-16">
          {timeshare.map((val) => {
            return (
              <ClubCard
                key={val.name}
                name={val.name}
                link={val.link}
                image={val.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref: counter, inView: counterin } = useInView();

  const services = [
    {
      name: "Timeshare Management",
      link: "services/9",
      image: "/images/s8.webp",
    },
    {
      name: "Tourism and Recreation Consultants",
      link: "services/4",
      image: "/images/s4.webp",
    },
    {
      name: "Hospitality Services",
      link: "services/6",
      image: "/images/s6.webp",
    },
    {
      name: "Businessmen Administrative Services",
      link: "services/5",
      image: "/images/s5.webp",
    },
    {
      name: "Public Relations Management",
      link: "services/3",
      image: "/images/s3.webp",
    },
    {
      name: "Marketing Management",
      link: "services/1",
      image: "/images/s1.webp",
    },
  ];

  return (
    <div className="bg-white w-full  pt-16">
      <div className=" ">
        <h3 className="pt-4 text-black text-center pb-8  text-4xl ">
          Our Services
        </h3>
        <div className="bg-[#333] w-[80px] h-[3px] m-auto  rounded-3xl mb-4"></div>
        <div className="flex flex-wrap lg:mx-16 ">
          {services.map((val) => {
            return (
              <ServicesCard
                key={val.name}
                name={val.name}
                link={val.link}
                image={val.image}
              />
            );
          })}
        </div>

        <div ref={counter} className="flex flex-wrap  lg:mx-16">
          <div className="text-center py-8 lg:w-1/3">
            <div>more Than</div>
            <div className=" text-6xl py-2">
              {counterin ? <Number n={300} /> : 300}
            </div>
            <div>ACTIVITIES</div>
          </div>
          <div className="text-center py-8 lg:w-1/3">
            <div>more Than</div>
            <div className=" text-6xl py-2">
              {counterin ? <Number n={550} /> : 550}
            </div>
            <div>CLIENTS</div>
          </div>
          <div className="text-center py-8 lg:w-1/3">
            <div>more Than</div>
            <div className=" text-6xl py-2">
              {counterin ? <Number n={7200} /> : 7200}
            </div>
            <div>DESTINATION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesCard = ({ image, name, link }) => {
  return (
    <Link href={link} className=" w-1/6">
      <div className="flex justify-center lg:mx-3 mx-8 pb-8 cursor-pointer">
        <div className="w-full">
          <img
            src={image}
            alt={name}
            className=" w-full object-cover  hover:scale-105  duration-300 ease-in"
          />
          <div className="py-4 text-center text-black  hover:text-main  text-lg ">
            {name}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Partners = () => {
  const parners = [
    "images/Partners/1.png",
    "images/Partners/2.png",
    "images/Partners/3.png",
    "images/Partners/4.png",
    "images/Partners/5.png",
    "images/Partners/6.png",
    "images/Partners/7.png",
    "images/Partners/8.png",
    "images/Partners/9.png",
    "images/Partners/10.png",
    "images/Partners/12.png",
    "images/Partners/13.png",
    "images/Partners/14.png",
    "images/Partners/15.png",
    "images/Partners/16.png",
    "images/Partners/17.png",
    "images/Partners/18.png",
    "images/Partners/19.png",
    "images/Partners/20.png",
    "images/Partners/21.png",
    "images/Partners/22.png",
    "images/Partners/23.png",
  ];

  return (
    <div className="bg-white w-full  pt-16 pb-16">
      <div className="lg:mx-16">
        <h3 className="pt-4 text-black text-center pb-4  text-4xl ">
          OUR PARTNERS
        </h3>
        <div className="bg-[#333] w-[80px] h-[3px] m-auto  rounded-3xl mb-8"></div>
        <p className=" text-center text-sm text-[#666] mb-8">
          we deal with the most famous companies around the world
        </p>
        <Marquee>
          {parners.map((val) => {
            return (
              <div key={val} className="">
                <img className="max-h-[100px]" src={val} />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

const Travel = () => {
  const timeshare = [
    {
      name: "Hotel, Apartment & Resort Reservations",
      link: "hotel_resort",
      image: "/images/travel/des6.webp",
    },
    {
      name: "Airline Reservations",
      link: "airline_reservations",
      image: "/images/travel/airline.webp",
    },
    {
      name: "Excursions & Tours",
      link: "excursions_tours",
      image: "/images/travel/excursions.webp",
    },
    {
      name: "Transfer Services",
      link: "transfer_services",
      image: "/images/travel/trans.webp",
    },
    {
      name: "MICE & Corporate Events",
      link: "mice_corporate",
      image: "/images/travel/event.webp",
    },
    {
      name: "Visa & Travel Insurance",
      link: "visa_travel",
      image: "/images/travel/visa.webp",
    },
  ];

  return (
    <div className="bg-white w-full  pt-16 pb-8">
      <div className=" ">
        <h3 className="pt-4 text-black text-center pb-4  text-4xl ">
          Travel & Tourism
        </h3>
        <div className="bg-[#333] w-[80px] h-[3px] m-auto  rounded-3xl mb-8"></div>

        <div className="flex flex-wrap justify-center lg:mx-16">
          {timeshare.map((val) => {
            return (
              <ClubCard
                key={val.name}
                name={val.name}
                link={val.link}
                image={val.image}
                travel={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((x) => x.toFixed(0))}</animated.div>;
};

Home.getLayout = (page) => <Layout>{page}</Layout>;
