"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import useLanguage from "../../hooks/useLanguage";
import Header from "../../components/Header";

const Staking = () => {
  useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <div className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/assets/hero-section-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          welcome
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Staking;