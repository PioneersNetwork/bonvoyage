import Layout from "@/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div className="px-[16px] lg:px-32">
      <Hotel />
    </div>
  );
}

const Hotel = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-[100px]  pb-16 ">
      <div className="flex flex-wrap ">
        <div className=" p-4 w-full lg:w-1/3">
          <img
            src="/images/policy.jpg"
            className="w-full h[300px] object-cover object-center"
          />
        </div>

        <div className=" w-full lg:w-2/3 px-6 lg:pt-4">
          <h2 className=" text-4xl  text-[#333] pb-4">{t("Privacy policy")}</h2>
          <p className="pt-3 text-[#666]    font-base">
            <strong className=" font-bold">{t("Bon Voyage Services")}</strong>
            {t(
              "is one-stop shop company popularly known not limited to Marriott Vacation Club Timeshare Resales & Rental Worldwide specializing SPAIN, FRANCE, UK & THAILAND."
            )}
          </p>
          <p className="my-4 text-[#666] font-bold ">
            {t(
              "Bon Voyage Services value all customers and recognizes the importance of privacy."
            )}
          </p>

          <p className="pt-3 text-[#666]    font-base">
            {t(
              "The Privacy Statement explains how we collect, use, and disclose data when you use our platform and associated services, your rights in determining what we do with the information that we collect or hold about you and tells you how to contact you."
            )}
          </p>
          <p className="my-4 text-[#666] font-bold ">
            {t("What does this Privacy Statement cover?")}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "This Privacy Statement is designed to describe: How and what type of personal information we collect and use When and with whom we share your personal information What choices you can make about how we collect, use, and share your personal information How you can access and update your information."
            )}
          </p>
          <p className="my-4 text-[#666] font-bold ">
            {t(
              "What personal information do we collect and use, and how do we collect it?"
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t("We collect personal information when :")}
          </p>
          <ul className="pt-3 text-[#666]    font-base  px-8">
            <li className="pt-3 text-[#666] list-disc font-base">
              {t("You give us the information")}
            </li>
            <li className="pt-3 text-[#666] list-disc font-base">
              {t("We collect it automatically")}
            </li>
            <li className="pt-3 text-[#666] list-disc font-base">
              {t("We receive it from others")}
            </li>
          </ul>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your data."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ is being used online."
            )}
          </p>

          <p className="my-4 text-[#666] font-bold ">
            {t(
              "When do we collect information? How do we use your information?"
            )}
          </p>
          <ol className="pt-3 text-[#666]    font-base  px-8">
            <li className="pt-3 text-[#666]  list-decimal font-base">
              {t("When you fill out an enquiry form")}
            </li>
            <li className="pt-3 text-[#666]  list-decimal font-base">
              {t("Signup for our newsletter")}
            </li>
            <li className="pt-3 text-[#666]  list-decimal font-base">
              {t("Respond to a survey or marketing communication")}
            </li>
            <li className="pt-3 text-[#666]  list-decimal font-base">
              {t("Send us an email")}
            </li>
            <li className="pt-3 text-[#666]  list-decimal font-base">
              {t("Surf the website")}
            </li>
            <li className="pt-3 text-[#666]  list-decimal font-base">
              {t("Use certain other site features in the following ways :")}
              <ol className="pt-3 text-[#666]    font-base  px-8">
                <li className="pt-3 text-[#666] list-[lower-alpha] font-base">
                  {t(
                    "To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested."
                  )}
                </li>
                <li className="pt-3 text-[#666] list-[lower-alpha] font-base">
                  {t("To improve our website to better serve you.")}
                </li>
                <li className="pt-3 text-[#666] list-[lower-alpha] font-base">
                  {t(
                    "To send periodic emails regarding your order or other products and services."
                  )}
                </li>
                <li className="pt-3 text-[#666] list-[lower-alpha] font-base">
                  {t(
                    "To follow up with them after correspondence (live chat, email, or phone inquiries)"
                  )}
                </li>
              </ol>
            </li>
          </ol>
          <p className="my-4 text-[#666] font-bold ">
            {t("How do we protect your information?")}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Our website is scanned on a regular basis for security holes and known vulnerabilities to make your visit to our site as safe as possible. We use regular Malware Scanning."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information. All transactions are processed through a gateway provider and are not stored or processed on our servers."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            <strong className=" font-semibold">
              {t("Do we use cookies?")}
            </strong>{" "}
            {t("Yes")}
            {t(
              "Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information."
            )}
          </p>
          <p className="pt-3 text-[#666]    font-base">
            {t(
              "For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;
