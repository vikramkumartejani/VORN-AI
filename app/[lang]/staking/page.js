"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import useLanguage from "../../hooks/useLanguage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StakingSection from "../../components/Staking/StakingSection";
import Referral from "../../components/Staking/Referral";
import Leaderboard from "../../components/Staking/Leaderboard";
import { useTranslation } from "react-i18next";

const Staking = () => {
  useLanguage();
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <div className="pt-[202px] pb-[167px]">
        <div
          className="w-full max-w-[1332px] mx-auto rounded-[20px] py-9 px-[30px] bg-[#10002080] border border-[#8616DF]"
          style={{ backdropFilter: "blur(14px)" }}
        >
          {/* Total $VRN Balance & Staking Reward & Your Referral Earnings */}
          <div className="flex items-center gap-[25px] justify-between">
            <div className="relative p-[30px] rounded-[20px] shadow-custom">
              <h3 className="text-white text-[20px] leading-[24px] font-normal mb-[5px]">
                {t("staking.totalVRNBalance")}
              </h3>
              <h2 className="text-white text-[32px] leading-[38.4px] font-normal">
                0
              </h2>
            </div>
            <div className="relative p-[30px] rounded-[20px] shadow-custom">
              <h3 className="text-white text-[20px] leading-[24px] font-normal mb-[5px]">
                {t("staking.stakingReward")}
              </h3>
              <h2 className="text-white text-[32px] leading-[38.4px] font-normal">
                0
              </h2>
            </div>
            <div className="relative p-[30px] rounded-[20px] shadow-custom">
              <h3 className="text-white text-[20px] leading-[24px] font-normal mb-[5px]">
                {t("staking.referralEarnings")}
              </h3>
              <h2 className="text-white text-[32px] leading-[38.4px] font-normal">
                0
              </h2>
            </div>
          </div>

          <StakingSection />

          {/* Referral & Leaderboard */}
          <div className="grid grid-cols-2 gap-[25px]">
            <Referral />
            <Leaderboard />
          </div>
        </div>
      </div>
      <Footer />
    </I18nextProvider>
  );
};

export default Staking;
