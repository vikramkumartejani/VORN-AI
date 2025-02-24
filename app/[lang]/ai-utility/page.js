"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import useLanguage from "../../hooks/useLanguage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IntelligentAutomation from '../../components/AIUtility/IntelligentAutomation'
import AIUtilityServices from '../../components/AIUtility/AIUtilityServices'
import Timeline from '../../components/AIUtility/Timeline'

const AIUtility = () => {
  useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />

      {/* Hero Section */}
      <div className="relative ai-utility-hero flex flex-col items-center justify-center text-center min-h-screen px-6">
        {/* Hero Content */}
        <div className="max-w-[821px] mx-auto">
          <h1 className="text-4xl md:text-[54px] leading-[74px] font-bold text-white">
            Unified AI – The Brain of VORN.AI
          </h1>
          <p className="max-w-[665px] mx-auto text-[18px] leading-[30px] font-poppins text-white mt-[25px]">
            AI in VORN.AI acts as the intelligent automation layer, optimizing
            infrastructure, transactions, and security across the decentralized
            network. It ensures seamless operation, fraud prevention, yield
            management, and real-time decision-making.
          </p>
        </div>
      </div>

      <IntelligentAutomation />
      <AIUtilityServices/>
      <Timeline/>

      <Footer />
    </I18nextProvider>
  );
};

export default AIUtility;
