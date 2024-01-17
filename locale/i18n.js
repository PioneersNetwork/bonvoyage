import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEN from "./en.json";
import TranslationAR from "./ar.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: TranslationEN,
  },
  ar: {
    translation: TranslationAR,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
