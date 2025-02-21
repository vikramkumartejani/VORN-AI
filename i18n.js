"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files directly
import en from "./public/locales/en.json";
import pt from "./public/locales/pt.json";
import ru from "./public/locales/ru.json";

// Optionally, if "pt-BR" should be the same as "pt":
const ptBR = pt;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
    ru: { translation: ru },
  },
  fallbackLng: "en",
  supportedLngs: ["en", "pt", "ru"],
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  react: {
    // Disable suspense so that the same fallback is used during SSR and on the client.
    useSuspense: false,
  },
  // Use localStorage and path detection if needed
  lng:
    typeof window !== "undefined"
      ? localStorage.getItem("selectedLanguage") || "en"
      : "en",
});

export default i18n;
