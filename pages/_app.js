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
          <title>bon</title>
        </Head>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
