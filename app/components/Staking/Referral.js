import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Referral = () => {
  const { t } = useTranslation();
  const referralLink = "https://vronai.net/dashboard/?ref=JXNRMRMHXT";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-[30px] border border-[#440675] bg-[#0B0015] rounded-[20px] px-[10px] py-[15px] lg:p-[30px] text-white">
      <h1 className="text-[24px] leading-[28.8px] font-bold mb-[15px] lg:mb-[25px] lg:text-left text-center">
        {t("staking.referral.title")}
      </h1>

      <div className="staking-section border-[#440675] border bg-[#1C0035] flex lg:flex-col flex-row lg:items-start items-center justify-between py-[15px] lg:py-[22px] px-5 rounded-xl">
        <h2 className="text-[20px] leading-[24px] font-normal mb-[5px]">
          {t("staking.referral.totalReferrals")}
        </h2>
        <h3 className="text-[32px] leading-[38.4px] font-normal">0</h3>
      </div>

      <div className="mt-[21px] staking-section border-[#440675] border bg-[#1C0035] flex lg:flex-col flex-row lg:items-start items-center justify-between py-[15px] lg:py-[22px] px-5 rounded-xl">
        <h2 className="text-[20px] leading-[24px] font-normal mb-[5px]">
          {t("staking.referral.totalEarnedAmount")}
        </h2>
        <h3 className="text-[32px] leading-[38.4px] font-normal">0</h3>
      </div>

      {/* Referral Link Section */}
      <div className="mt-5 border border-[#7209C5] rounded-xl p-[15px] lg:py-1.5 lg:px-5 flex items-start md:items-center md:flex-row flex-col gap-2.5 md:gap-5">
        <h2 className="text-[16px] md:text-[18px] leading-[27px] font-normal font-poppins">
          {t("staking.referral.yourReferralLink")}
          <Link href={referralLink} className="ml-1" target="_blank">
            {referralLink}
          </Link>
        </h2>
        <button onClick={handleCopy} className="relative">
          <Image
            src="/assets/icons/copy.svg"
            alt="copy"
            width={24}
            height={24}
          />
          {copied && (
            <span className="absolute top-[-20px] left-0 bg-[#7209C5] text-white text-xs px-2 py-1 rounded">
              {t("staking.referral.copied")}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Referral;
