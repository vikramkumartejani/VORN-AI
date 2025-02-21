"use client";
import React from "react";
import { I18nextProvider } from "react-i18next"
import i18n from "../../i18n";
import useLanguage from "../hooks/useLanguage";

const HomePage = () => {
  // const { t } = useTranslation();
  useLanguage();
  
  return (
    <I18nextProvider i18n={i18n}>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold ">
          Welcome to Our Website
        </div>
      </div>
    </I18nextProvider>
  );
};

export default HomePage;
