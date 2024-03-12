/* eslint-disable @next/next/no-html-link-for-pages */
import { FiMenu } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [t, i18n] = useTranslation();
  const list = [
    {
      name: "OWNERS Page",
      link: "link",
      sup: [
        { name: "Manage Timeshare", link: "/manage" },
        { name: "Buy Timeshare", link: "/buy" },
        { name: "Sell Timeshare", link: "/sell" },
        { name: "Rent Timeshare", link: "/rent" },
        { name: "MVCI Resort", link: "/mvci" },
        { name: "MVCI Destinations Points", link: "/mvci-point" },
        { name: "Marriott Bonvoy", link: "/bonvoy" },
        { name: "Exchange with Interval International", link: "/interval" },
      ],
    },
    {
      name: "Rental Vacations",
      link: "link",
      sup: [
        { name: "Marriott’s Club Son Antem", link: "/clubs/1" },
        { name: "Marriott’s playa andaluza", link: "/clubs/2" },
        { name: "Marriott's Village d'ile-de-France", link: "/clubs/3" },
        { name: "Marriott’s marbella beach resort", link: "/clubs/6" },
        {
          name: "Grand Residences by Marriott-Mayfair-London 47 park",
          link: "/clubs/5",
        },
        { name: "Marriott’s newport coast villas", link: "/clubs/4" },
        { name: "Marriott’s Ko Olina Beach Club", link: "/clubs/42" },
        {
          name: "Marriott's Phuket Beach Resort & Marriott’s Mai Khao Beach",
          link: "/clubs/80",
        },
      ],
    },
    {
      name: "Europe Resort",
      link: "link",
      sup: [
        { name: "Marriott’s Marbella Beach Resort", link: "/rentals/2" },
        { name: "Marriott’s Club Son Antem", link: "/rentals/1" },
        { name: "Marriott’s Playa Andaluza", link: "/rentals/3" },
        { name: "Marriott's Village d'ile-de-France", link: "/rentals/4" },
      ],
    },
    {
      name: "Travel & Tourism",
      link: "link",
      sup: [
        {
          name: "Hotel, Apartment & Resort Reservations",
          link: "/hotel_resort",
        },
        { name: "Airline Reservations", link: "/airline_reservations" },
        { name: "Excursions & Tours", link: "/excursions_tours" },
        { name: "Transfer Services", link: "/transfer_services" },
        { name: "MICE & Corporate Events", link: "/mice_corporate" },
        { name: "Visa & Travel Insurance", link: "/visa_travel" },
        { name: "Outbound Travel", link: "/outbound_travel" },
      ],
    },
    {
      name: "Services",
      link: "link",
      sup: [
        { name: "Tourism and Recreation Consultants", link: "/services/4" },
        { name: "Businessmen Administrative Services", link: "/services/5" },
        { name: "Hospitality Services", link: "/services/6" },
        { name: "Timeshare Management", link: "/services/9" },
        { name: "Public Relations Management", link: "/services/3" },
        { name: "Marketing Management", link: "/services/1" },
      ],
    },
    {
      name: "About Us",
      link: "link",
      sup: [
        { name: "About Us", link: "/about" },
        { name: "Payment Gateway", link: "/payment" },
        { name: "Terms & conditions", link: "/terms" },
        { name: "Privacy policy", link: "/privacy" },
        { name: "Refund policy", link: "/refund" },
        { name: "Membership", link: "/membership" },
      ],
    },
  ];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    document.dir = i18n.dir(lang);
  };

  const [open, setOpen] = useState(false);
  const [openSup, setOpenSup] = useState("");

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={` ${
        clientWindowHeight != 0 ? "lg:to-black lg:from-black" : ""
      } bg-black lg:bg-transparent  w-screen  fixed lg:bg-gradient-to-b   lg:from-[#00000088]  lg:px-32 z-10`}
    >
      <div className="flex justify-between  p-4">
        <Link href={"/"}>
          <Image
            className="lg:hidden"
            src={"/images/icons/logo.png"}
            alt="Picture of the author"
            width={200}
            height={40}
          />
          <Image
            className={`hidden lg:block ${
              clientWindowHeight != 0 ? "" : " brightness-[500]"
            }`}
            src={"/images/icons/logo.svg"}
            alt="Picture of the author"
            width={100}
            height={70}
          />
        </Link>
        <ul className=" list-none text-white lg:flex mx-8  hidden">
          {list.map((el) => {
            return (
              <li
                key={el.name}
                className=" hover:text-main cursor-pointer relative  group "
              >
                <div className="flex justify-between p-4   text-base ">
                  <div
                    className=" font-bold uppercase"
                    style={{ textShadow: "#000000b0 0 0 10px" }}
                  >
                    {t(el.name)}
                  </div>
                  <a
                    className="pt-1"
                    onClick={() => {
                      if (openSup == el.name) {
                        setOpenSup("");
                      } else {
                        setOpenSup(el.name);
                      }
                    }}
                  ></a>
                </div>
                <ul
                  className={`w-72 rounded-md absolute   text-black  text-base  group-hover:block  hidden`}
                >
                  {el.sup.map((sup, index) => {
                    return (
                      <li
                        key={index}
                        className="p-2  border-stone-600 border-b-[1px] px-4 hover:bg-main w-72 bg-white first:rounded-t-sm last:rounded-b-sm shadow-md"
                      >
                        <Link href={sup.link}>
                          <div>{t(sup.name)}</div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="p-4 hidden lg:block">
          {i18n.language == "en" && (
            <BsTranslate
              className="text-white  text-lg hover:text-main cursor-pointer "
              style={{ textShadow: "#000 0 0 10px" }}
              onClick={() => {
                changeLang("ar");
              }}
            />
          )}
          {i18n.language == "ar" && (
            <BsTranslate
              className="text-white  text-lg hover:text-main cursor-pointer "
              style={{ textShadow: "#000 0 0 10px" }}
              onClick={() => {
                changeLang("en");
              }}
            />
          )}
        </div>
        <a
          className=" lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? (
            <FiMenu className=" text-white  text-4xl" />
          ) : (
            <BsXLg className=" text-white  text-4xl" />
          )}
        </a>
      </div>
      <div className={`bg-main ${open ? "block" : "hidden"}`}>
        <ul className=" list-none text-white  ">
          {list.map((el) => {
            return (
              <li
                key={el.name}
                className={` ${open ? "block" : "hidden"} cursor-pointer`}
              >
                <div className="  p-4  text-lg uppercase">
                  <a
                    className="pt-1 flex justify-between"
                    onClick={() => {
                      if (openSup == el.name) {
                        setOpenSup();
                      } else {
                        setOpenSup(el.name);
                      }
                    }}
                  >
                    <div>{el.name}</div>

                    {openSup == el.name ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </a>
                </div>
                <ul
                  className={`w-full bg-white  text-black  text-base ${
                    openSup == el.name ? "block" : "hidden"
                  }`}
                >
                  {el.sup.map((sup, index) => {
                    return (
                      <li
                        key={index}
                        className="p-2  border-stone-600 border-b-[1px] px-4"
                      >
                        <Link onClick={()=>{
                          setOpen();
                        }} href={sup.link}>
                          <div>{sup.name}</div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="px-4 pb-4">
          {i18n.language == "en" && (
            <BsTranslate
              className="text-white  text-lg"
              onClick={() => {
                changeLang("ar");
              }}
            />
          )}
          {i18n.language == "ar" && (
            <BsTranslate
              className="text-white  text-lg"
              onClick={() => {
                changeLang("en");
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
