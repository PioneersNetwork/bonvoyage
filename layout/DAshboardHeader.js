/* eslint-disable @next/next/no-html-link-for-pages */
import { FiMenu } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useTranslation } from "react-i18next";
const DAshboardHeader = () => {
  const [t, i18n] = useTranslation();
  const list = [
    {
      name: "SEO",
      link: "seo",
    },
    {
      name: "Pages",
      link: "pages",
    },
    {
      name: "Rental",
      link: "rental",
    },
    {
      name: "Clubs",
      link: "clubs",
    },
    {
      name: "Services",
      link: "services",
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
    <header className={`  bg-black   w-screen  fixed      lg:px-32 z-10`}>
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
              <Link
                href={"/dashboard/" + el.link}
                key={el.name}
                className=" hover:text-main cursor-pointer relative  group"
              >
                <div className="flex justify-between p-4   text-base ">
                  <div
                    className=" font-bold"
                    style={{ textShadow: "#000000b0 0 0 10px" }}
                  >
                    {t(el.name)}
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
        <div className="p-4 hidden lg:block">
          <button className=" text-white font-bold" onClick={() => signOut()}>
            Sign Out
          </button>
          {/* {i18n.language == "en" && (
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
          )} */}
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
                <div className="flex justify-between p-4  text-lg">
                  <div>{el.name}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="px-4 pb-4">
          {/* {i18n.language == "en" && (
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
          )} */}
          <button className="text-white font-bold" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};
export default DAshboardHeader;
