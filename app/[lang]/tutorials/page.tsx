"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import useLanguage from "../../hooks/useLanguage";
import Footer from "../../components/Footer";

const Podcasts = () => {
  useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      {/* <Header /> */}
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <h1>Staking</h1>
      </main>
      <Footer/>
    </I18nextProvider>
  );
};

export default Podcasts;
