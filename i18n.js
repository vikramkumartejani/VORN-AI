"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // Hardcode to English for testing
  fallbackLng: "en",
  supportedLngs: ["en", "pt-BR", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
