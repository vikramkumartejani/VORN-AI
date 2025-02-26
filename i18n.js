"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./public/locales/en/translation.json";
import ptTranslations from "./public/locales/pt-BR/translation.json";
import ruTranslations from "./public/locales/ru/translation.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  "pt-BR": {
    translation: ptTranslations,
  },
  ru: {
    translation: ruTranslations,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt-BR", "ru"],
    ns: ["translation"],
    defaultNS: "translation",
    debug: process.env.NODE_ENV !== "production",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 1,
      caches: ["localStorage"],
    },

    react: {
      useSuspense: false,
      bindI18n: "languageChanged loaded",
    },
  });

export default i18n;
