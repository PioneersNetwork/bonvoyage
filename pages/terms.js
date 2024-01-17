import MainForm from "@/layout/ui/form";
import Layout from "@/layout/Layout";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="xl:px-32 px-8 lg:px-32">
      <Hotel />
      <MainForm />
    </div>
  );
}

const Hotel = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-[100px] ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="/images/terms.jpg"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">
            {t("Terms & conditions")}
          </h2>
          <p className="pt-3 text-[#666]  text-sm">
            <strong className=" font-bold">{t("Bon Voyage Services")}</strong>
            {t(
              "assists not only private individuals in buying or selling a luxury time share in the private resale market but also worldwide travel."
            )}
          </p>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "These Terms are important together with your booking confirmation set out the legal terms on which services are made available to you. They also cover any interactions or communications you have with us."
            )}
          </p>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "Your use of our Service is conditioned upon your acceptance of these Terms. To book our services, you must also accept these Terms. We may change these Terms at any time and your future use of our Service following changes to these Terms is subject to you accepting those updated Terms."
            )}
          </p>
          <strong className="pt-3 text-[#666]    font-bold ">
            {t(
              "Please read this agreement carefully before using the Web Site:"
            )}
          </strong>
          <ol className="pt-3 text-[#666]  text-sm list-decimal px-8">
            <li>
              {t(
                "The access to this Web Site is subject to the terms and conditions set forth below."
              )}
            </li>
            <li>
              {t(
                "Your use of the Web Site signifies your acceptance of this agreement."
              )}
              <br />
              {t(
                " If you do not agree to comply with this agreement, please do not use the Web Site."
              )}
            </li>
            <li>
              {t(
                "Bon Voyage Services reserves the right to make changes in the programs, policies, products and services described in this Web Site at any time without notice."
              )}
            </li>
            <li>
              {t(
                "A user who uses or makes decisions based on information contained in this Web Site does so at the user`s own risk."
              )}
            </li>
          </ol>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "By accessing this Web Site, the user agrees to hold Bon Voyage Services and its affiliates harmless against any claims for damages arising from any decisions that the user makes based on such information."
            )}
          </p>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "Bon Voyage Services and its affiliated websites involves pooling advertising resources with those of other sellers / buyers to maximize exposure to potential buyers / sellers of timeshare properties. Although your timeshares will be exposed to millions of potential buyers because of our advertising program."
            )}
          </p>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "Bon Voyage Services is not affiliated with any resort, or any third-party organization. It does extensive advertising in print, the radio, search engines, billboards and other advertising mediums, to drive buyers and sellers to our web site or to call us by phone for information about our advertiser’s timeshare properties."
            )}
          </p>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "Bon Voyage Services has made no representations as to the period that it will take to sell your timeshare, the success rate of our advertising program or the sales price that you may receive. Market condition and the size and location determines the marketing period and sales price of the week that you desire to sell."
            )}
          </p>

          <h2 className=" text-4xl  text-[#333] pb-4  pt-8">
            {t("Limitation of Liability")}
          </h2>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "Under no shall Bon Voyage Services be liable for any damages, direct, special, incidental, consequential, punitive, or exemplary or otherwise, that result from the use of, or the inability to use, the materials in this Web Site, even if Bon Voyage Services or an authorized representative has been advised of the possibility of such damages."
            )}
          </p>
          <p className="pt-3 text-[#666]  text-sm">
            {t(
              "As the Web Site is operated within UAE, this agreement shall be governed by and enforced in accordance with the UAE laws. If a court of competent jurisdiction finds any part of this agreement void or unenforceable, the remainder should be enforced, and the court should use its authority to amend it to fulfill the stated purposes of this agreement to the fullest extent permitted by law."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;
