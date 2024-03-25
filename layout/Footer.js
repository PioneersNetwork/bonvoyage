/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import { useRouter } from "next/router";

import data from "../staticData/countries.json";
import {
  FaHome,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Footer = ({ showForm = false }) => {
  const [t, i18n] = useTranslation();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [message,setMessage]=useState();
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
  showForm = router.route == "/";

  const countries = data;
  return (
    <footer className="w-full text-white">
      <div className="bg-center  bg-no-repeat bg-cover bg-fixed  relative z-[1]   font-normal bg-[url('/images/bg-03.jpg')]">
        <div className="w-full h-full bg-[#636b70] opacity-90 px-[16px] lg:px-4 pt-9  pb-4">
          <div className="flex flex-wrap w-full  md:justify-center">
            <div className="w-full   md:w-1/2  lg:w-1/4 pr-4 pl-4 ">
              <div className="">
                <a href="#">
                  <img
                    className="max-s-full mb-4"
                    src="/images/icons/logo-02.png"
                    alt="IMG"
                  />
                </a>
              </div>
              <div className=" text-base mt-12 ">
                <div>
                  <p className="  pb-1">
                    {t(
                      "Our aim is to maximize a smooth, hassle free, enjoyable, and unforgettable vacation experience!"
                    )}
                  </p>
                  <ul>
                    <li className="flex-wr-s-s  pb-3">
                      <span className="size-w-4">{t("SERVICES OFFERED:")}</span>
                    </li>
                    <li className="flex-wr-s-s  pb-2">
                      <Link href="/services/9" className=" hov-link2 trans-02">
                        <span className="size-w-4">
                          {t("Timeshare Management")}
                        </span>
                      </Link>
                    </li>

                    <li className="flex-wr-s-s  p-b-2">
                      <Link href="/services/6" className=" hov-link2 trans-02">
                        <span className="size-w-4">
                          {t("Hospitality Services")}
                        </span>
                      </Link>
                    </li>
                    <li className="flex-wr-s-s  p-b-2">
                      <Link href="/services/4" className=" hov-link2 trans-02">
                        <span className="size-w-4">
                          {t("Tourism and Recreation Consultants")}
                        </span>
                      </Link>
                    </li>

                    <li className="flex-wr-s-s  p-b-2">
                      <Link href="/services/5" className=" hov-link2 trans-02">
                        <span className="size-w-4">
                          {t("Businessmen Administrative")}
                        </span>
                      </Link>
                    </li>
                    <li className="flex-wr-s-s  p-b-2">
                      <Link href="/services/3" className=" hov-link2 trans-02">
                        <span className="size-w-4">
                          {t("Public Relations Management")}
                        </span>
                      </Link>
                    </li>
                    <li className="flex-wr-s-s  p-b-2">
                      <Link href="/services/1" className=" hov-link2 trans-02">
                        <span className="size-w-4">
                          {t("Marketing Management")}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full   md:w-1/2  lg:w-1/4 pr-4 pl-4 p-b-20">
              <div className="  mb-12">
                <h4 className=" text-lg uppercase cl-0">{t("Contact us")}</h4>
              </div>
              {showForm ? (
                <div>
                  <form id="contact-form-footer" className="validate-form" onSubmit={(e)=>{
                    e.preventDefault();
                    sendEmail();
                  }}>
                    <div className="row lg:flex gap-2">
                      <div
                        className="mb-2 lg:w-1/2"
                        data-validate="Name is required"
                      >
                        <input
                          className=" w-full p-2 rounded-sm text-black"
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

                      <div className="mb-2 lg:w-1/2">
                        <input
                          className="w-full p-2 rounded-sm text-black"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-2 validate-input">
                      <div className=" lg:flex gap-2">
                        <div className=" lg:w-1/2 mb-2">
                          <select
                            className="w-full p-2 rounded-sm text-black"
                            name="phonecode"
                            required
                            value={country}
                            onChange={(e) => {
                              setCountry(e.target.value);
                            }}
                          >
                            <option value="" selected>
                              {t("Select Country")}
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
                        <div className="lg:w-1/2">
                          <input
                            className="w-full p-2 rounded-sm text-black"
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

                    <div className="row mb-1">
                      <div className="w-full text-black">
                        <select
                          className="w-full p-2 rounded-sm"
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
                          <option value="Management">{t("Management")}</option>
                          <option value="Other">{t("Other")}</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full" data-validate="Message is required">
                      <textarea
                        className="w-full p-2 rounded-sm text-black"
                        name="content"
                        placeholder="Your Message"
                        required
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      ></textarea>
                    </div>

                    <div
                      id="recaptcha"
                      className="g-recaptcha"
                      data-sitekey="6LcAvLclAAAAANhQulhzn4U8qi1Td3tq9vPzPGTB"
                      data-callback="onSubmitFooter"
                      data-size="invisible"
                    ></div>
                    {message && <div className={`${message.result?'text-green-500':'text-red-500'} bg-white p-2 rounded my-1`}>{message.message}</div>}
                    <button
                      type="submit"
                      id="submit-footer"
                      className=" py-2 px-4 bg-main text-white my-3"
                      
                    >
                      {t("Send Email")}
                    </button>
                  </form>
                </div>
              ) : null}

              <ul>
                <li className="flex  p-b-2">
                  <span className=" text-xl px-2">
                    <FaHome />
                  </span>
                  <span className="size-w-4">P.O. Box 15154,</span>
                </li>
                <li className="flex  pb-1">
                  <span className="size-w-4">
                    11th Floor, Office 1, Al Salemiyah Tower,
                  </span>
                </li>
                <li className="flex  pb-1">
                  <span className="size-w-4">
                    17th Street, Riggat Al Buteen, Deira,
                  </span>
                </li>
                <li className="flex  pb-2">
                  <span className="size-w-4">Dubai, United Arab Emirates</span>
                </li>

                <li className="flex  pb-2 pt-2">
                  <span className=" text-xl px-2">
                    <FaEnvelope />
                  </span>

                  <span className="size-w-4">
                    <a className=" " href="mailto:support@bon-voyage.services">
                      support@bon-voyage.services
                    </a>
                  </span>
                </li>

                <li className="flex  pb-2">
                  <span className=" text-xl px-2">
                    <FaPhoneAlt />
                  </span>

                  <span className="size-w-4">
                    <a className=" " href="tel:00971501877187">
                      +971 50 187 7187
                    </a>
                  </span>
                </li>
              </ul>

              <div className="flex pt-3 mb-12 flex-wrap">
                <a
                  href="https://wa.me/971501877187"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.facebook.com/bonvoyage.services1/"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/bonvoyage.services/"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/bon-voyage-services/"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://twitter.com/BonvServices"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.tiktok.com/@bonvoyageservices"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.google.com/search?q=Bon+Voyage+Vacation+Services&stick=H4sIAAAAAAAA_-NgU1I1qDBONU0zTbFITEpMMjC3MDK3MqgwMzYzTTNITE4yTElMSTY2WMQq45SfpxCWX5mYnqoQlpicWJIJ5AenFpVlJqcWAwC7wWSsSAAAAA&hl=en&mat=CUVuh5nuwEYmElYBNqvzOs5sWzbf8G6e5de5NN_VRJyjLFgRcqxLT57b8AYXfA8u4AQ9jmrVtUFYPA2T0WwfHbiqs5Ntgxs8i2X9XItj58t8MLZK2c28i8yVpgQQP4kS-A&authuser=0"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaGooglePlusG />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCjfnzxZ_tCn73jBoinWLDJQ"
                  className="flex-c-c bg-main  rounded-full text-white p-2 text-xl flex-wrap size-a-7 borad-50per bg-11 fs-16 cl-0 hov-btn2 trans-02 m-r-10 m-2"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="w-full   md:w-1/2  lg:w-1/5 pr-4 pl-4  mt-16">
              <div className="size-h-1 flex-s-e m-b-18">
                <h4 className="t1-m-3 uppercase cl-0"></h4>
              </div>

              <div className="flex-wr-s-s">
                <ul className=" list-disc">
                  <li className="kit-list1 pb-2">
                    <Link href="/manage" className=" hov-link2 trans-02">
                      {t("Owners Page")}
                    </Link>
                  </li>

                  <li className="kit-list1 pb-2">
                    <Link href="/clubs/1" className=" hov-link2 trans-02">
                      {t("Rental Vacations")}
                    </Link>
                  </li>

                  <li className="kit-list1 pb-2">
                    <Link href="/rentals/2" className=" hov-link2 trans-02">
                      {t("Europe Resort")}
                    </Link>
                  </li>

                  <li className="kit-list1 pb-2">
                    <Link href="/hotel_resort" className=" hov-link2 trans-02">
                      {t("Travel & Tourism")}
                    </Link>
                  </li>

                  <li className="kit-list1 pb-2">
                    <Link href="/services/4" className=" hov-link2 trans-02">
                      {t("Services")}
                    </Link>
                  </li>

                  <li className="kit-list1 pb-2">
                    <Link href="/about" className=" hov-link2 trans-02">
                      {t("About Us")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full    md:w-1/2   lg:w-1/4 pr-4 pl-4 mt-6 h-3/4  mb-8">
              <div className="w-full">
                <iframe
                  className=" border-none w-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59727092.228100404!2d-7.0799012500000025!3d23.979796498663767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6365f0acb1dadc30!2sBon%20Voyage%20Vacation%20Services!5e0!3m2!1sen!2sus!4v1668851751165!5m2!1sen!2sus"
                  loading="lazy"
                  width="80%"
                  height="90%"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#111] text-[#ccc] text-lg">
        <div className="xl:px-32 px-8 sm:px-4 txt-center p-tb-15 m-auto p-4 text-center">
          Copyright @ 2024 All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
