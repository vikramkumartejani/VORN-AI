"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import Header from "../components/Header";
import useLanguage from "../hooks/useLanguage";
import useLanguageRedirect from "../hooks/useLanguageRedirect";
import Footer from "../components/Footer";

const Home = () => {
  useLanguage();
  useLanguageRedirect();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <div className="text-white">Welcome to the Home Page!</div>
      <Footer />
    </I18nextProvider>
  );
};

export default Home;
