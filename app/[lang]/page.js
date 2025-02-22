"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import Header from "../components/Header";
import useLanguage from "../hooks/useLanguage";
import useLanguageRedirect from "../hooks/useLanguageRedirect";
import FeaturedIn from "../components/Home/FeaturedIn";
import OurFeature from "../components/Home/OurFeatures";
import BuiltOn from "../components/Home/BuiltOn";
import BuyNRTX from "../components/Home/BuyNRTX";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";

const Home = () => {
  useLanguage();
  useLanguageRedirect();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <div className="relative w-full h-[982px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="/assets/hero-section-bg.mp4"
            type="video/mp4"
            className="w-full h-full"
          />
          Your browser does not support the video tag.
        </video>

        <div className="w-full h-full absolute inset-0 pt-[185px] max-w-[1272px] mx-auto">
          <Hero />
        </div>
      </div>
      <FeaturedIn />
      <OurFeature />
      <BuyNRTX />
      <BuiltOn />
      <Footer />
    </I18nextProvider>
  );
};

export default Home;
