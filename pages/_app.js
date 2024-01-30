import "@/styles/globals.css";
import Layout from "./../layout/Layout";

import { Tajawal } from "next/font/google";
import { Montserrat } from "next/font/google";
import Head from "next/head";

import i18n from "@/locale/i18n";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin", "arabic"],
  display: "swap",
});
const man = Montserrat({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["tajawal"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider>
      <main className={man.className}>
        <Toaster />
        <Head>
          <meta name="viewport" content="width=device-width" />
          
          <title>Luxury Vacation Home Rentals Company | Buy, Sell, Rent Timeshare </title>
          <title>Bonvoyage | Your Vacation Guide</title>
    <meta name="description" content="We are a luxury vacation home rental company. Our aim is to maximize a smooth, hassle-free, enjoyable, and unforgettable vacation experience! Buy, Sell, Rent Timeshare." />
    <meta name="keywords" content="Buy, Sell, Rent Timeshare, Luxury Vacation Home Rentals Company" />

    <meta itemprop="image" content="https://bon-voyage.services/images/icons/logo.svg" />
    <meta itemprop="description"
        content="Through our website you will discover the paradisiac beaches around the world .\r\nYou will enjoy the wonderful experiences in various countries like Brazil,Athen,Amesterdam and Berlin .\r\nWe choose for you the most popular destinations \r\nWith us you will get a comfortable and affordable vacation\r\nWe plan everything from zero to ten this includes hotels ,tour plan,and resturants \r\nour company is a market leader in the vacations management field within the Middle East, cooperating with many marketing companies.\r\nWe assist property owners organize and plan holidays, from rentals, resells, tours and activities\r\nWe will organise your family trip, book your flight, find hotels, apartment or a villa \r\nany where around the world, reserve your car, taxi, museum, amusement parks, restaurant, sightseeing and local attractions.\r\nWe will find together the best travel solution, not only in terms of accommodation but also about sightseeing, transportation, and excursions.\r\nWe will assist you in all the different phases year after year.\r\nWe are seeking for excellence and will provide quality service at a cost that you can't get anywhere else" />
    <meta itemprop="name" content="Bon Voyage | Bon Voyage" />
    
    <meta property="og:url" content="https://bon-voyage.services/Request a demo" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Bon Voyage | Bon Voyage" />
    <meta property="og:description"
        content="Through our website you will discover the paradisiac beaches around the world .\r\nYou will enjoy the wonderful experiences in various countries like Brazil,Athen,Amesterdam and Berlin .\r\nWe choose for you the most popular destinations \r\nWith us you will get a comfortable and affordable vacation\r\nWe plan everything from zero to ten this includes hotels ,tour plan,and resturants \r\nour company is a market leader in the vacations management field within the Middle East, cooperating with many marketing companies.\r\nWe assist property owners organize and plan holidays, from rentals, resells, tours and activities\r\nWe will organise your family trip, book your flight, find hotels, apartment or a villa \r\nany where around the world, reserve your car, taxi, museum, amusement parks, restaurant, sightseeing and local attractions.\r\nWe will find together the best travel solution, not only in terms of accommodation but also about sightseeing, transportation, and excursions.\r\nWe will assist you in all the different phases year after year.\r\nWe are seeking for excellence and will provide quality service at a cost that you can't get anywhere else" />
    <meta property="og:image" content="https://bon-voyage.services/images/icons/logo.svg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Bon Voyage | Bon Voyage" />
    <meta name="twitter:description"
        content="Through our website you will discover the paradisiac beaches around the world .\r\nYou will enjoy the wonderful experiences in various countries like Brazil,Athen,Amesterdam and Berlin .\r\nWe choose for you the most popular destinations \r\nWith us you will get a comfortable and affordable vacation\r\nWe plan everything from zero to ten this includes hotels ,tour plan,and resturants \r\nour company is a market leader in the vacations management field within the Middle East, cooperating with many marketing companies.\r\nWe assist property owners organize and plan holidays, from rentals, resells, tours and activities\r\nWe will organise your family trip, book your flight, find hotels, apartment or a villa \r\nany where around the world, reserve your car, taxi, museum, amusement parks, restaurant, sightseeing and local attractions.\r\nWe will find together the best travel solution, not only in terms of accommodation but also about sightseeing, transportation, and excursions.\r\nWe will assist you in all the different phases year after year.\r\nWe are seeking for excellence and will provide quality service at a cost that you can't get anywhere else" />
    <meta name="twitter:image" content="https://bon-voyage.services/images/icons/logo.svg" />
        </Head>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
