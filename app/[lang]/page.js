// [lang]/page.js
"use client";
import React, { Suspense } from "react";
import LanguageProvider from "../components/LanguageProvider";
import useLanguage from "../hooks/useLanguage";
import Header from "../components/Header";
import FeaturedIn from "../components/Home/FeaturedIn";
import OurFeature from "../components/Home/OurFeatures";
import BuiltOn from "../components/Home/BuiltOn";
import BuyNRTX from "../components/Home/BuyNRTX";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";

const Home = () => {
  useLanguage();

  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </LanguageProvider>
  );
};

export default Home;
