import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// LANGUAGES
import eng from "@utilities/i18n/locales/eng.json";
import spa from "@utilities/i18n/locales/spa.json";
import fra from "@utilities/i18n/locales/fra.json";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  eng,
  spa,
  fra,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "spa",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: "eng",
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;
