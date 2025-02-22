"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"; // Ensure this is included for loading translations
import LanguageDetector from "i18next-browser-languagedetector"; // Ensure this is included for language detection

i18n
  .use(HttpBackend) // Use the backend to load translations
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    fallbackLng: "en", // Default language
    supportedLngs: ["en", "pt-BR", "ru"], // Supported languages
    ignoreJSONStructure: false,
    ns: ["translation"], // Namespaces for translations
    defaultNS: "translation", // Default namespace
    debug: process.env.NODE_ENV !== "production", // Enable debug mode in development
    preload: ["en", "pt-BR", "ru"], // Preload languages

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to your translation files
      cache: true, // Cache translations
    },

    detection: {
      order: ["localStorage", "path", "navigator"], // Order of language detection
      caches: ["localStorage"], // Cache detected language
    },

    lng:
      typeof window !== "undefined"
        ? localStorage.getItem("selectedLanguage") || "en"
        : "en", // Set initial language
  });

export default i18n;
