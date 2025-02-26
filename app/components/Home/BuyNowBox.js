"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styles from "../../styling/StakingButton.module.css";
import { useTranslation } from "react-i18next";

const tabs = [
  { id: "ETH", label: "ETH", icon: "/assets/icons/eth.svg" },
  { id: "BNB", label: "BNB", icon: "/assets/icons/bnb.svg" },
];

const currenciesByChain = {
  ETH: [
    { name: "ETH", icon: "/assets/icons/eth.svg" },
    { name: "USDC", icon: "/assets/icons/eth.svg" },
    { name: "USDT", icon: "/assets/icons/eth.svg" },
  ],
  BNB: [
    { name: "BNB", icon: "/assets/icons/bnb.svg" },
    { name: "BUSD", icon: "/assets/icons/bnb.svg" },
    { name: "CAKE", icon: "/assets/icons/bnb.svg" },
  ],
};

const infoItems = [
  {
    icon: "/assets/icons/refer-earn.svg",
    alt: "Refer Earn",
    text: "Refer & Earn",
  },
  {
    icon: "/assets/icons/how-to-buy.svg",
    alt: "How to buy",
    text: "How to buy",
  },
  {
    icon: "/assets/icons/my-wallet-wont-connect.svg",
    alt: "My wallet won't connect!",
    text: "My wallet won't connect!",
  },
];

const BuyNowBox = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("ETH");
  const [currencies, setCurrencies] = useState(currenciesByChain.ETH);
  const [selectedCurrency, setSelectedCurrency] = useState(
    currenciesByChain.ETH[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setCurrencies(currenciesByChain[activeTab]);
    setSelectedCurrency(currenciesByChain[activeTab][0]);
  }, [activeTab]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Percent
  const [activePercent, setActivePercent] = useState("5%");

  const percentOptions = ["5%", "10%", "15%"];

  const handlePercentClick = (percent) => {
    setActivePercent(percent);
  };

  return (
    <div className="text-center w-full">
      <div className="px-5 sm:px-[30px]">
        <h2 className="text-[24px] sm:text-[32px] leading-[29px] sm:leading-[38.4px] font-bold text-white">
          {t("home.buyNowBox.title")}<span className="text-[#8E00FF]">$VRN</span> {t("home.buyNowBox.now")}
        </h2>
        <h4 className="text-white/90 text-[13px] sm:text-[14px] leading-[16.8px] font-medium pt-[15px]">
          {t("home.buyNowBox.untilPriceIncrease")}
        </h4>
        {/* Current & Next Price */}
        <div className="mt-5">
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-white/90 text-[13px] sm:text-[14px] leading-[16.8px] font-normal">
              {t("home.buyNowBox.currentPrice")}: $0.109343
            </h2>
            <h2 className="text-white/90 text-[13px] sm:text-[14px] leading-[16.8px] font-normal">
              {t("home.buyNowBox.nextPrice")}: $0.113461
            </h2>
          </div>
          <div className="my-2 sm:my-2.5 bg-[#250142] rounded-[49px] w-full h-[15px]">
            <div
              className="h-full w-[180px] rounded-[11px]"
              style={{
                background: "linear-gradient(270deg, #A052FF 0%, #440675 100%)",
              }}
            ></div>
          </div>
          <h3 className="text-[13px] sm:text-[14px] leading-[16.8px] font-normal text-[#C176FF]">
            <span className="text-white/90">{t("home.buyNowBox.raised")}:</span>{" "}
            20000/350000
          </h3>
        </div>
      </div>

      {/* Stackable & Purchased VRN */}
      <div className="mt-5 w-full bg-[#7314C040]">
        <div className="max-w-[300px] sm:max-w-[395px] mx-auto w-full flex items-center justify-between sm:gap-[85px] py-2.5">
          <div>
            <h2 className="text-[13px] sm:text-[14px] leading-[16.8px] font-medium mb-[5px]">
              {t("home.buyNowBox.stackableVRN")}
            </h2>
            <h3 className="text-[#C176FF] text-[13px] sm:text-[14px] leading-[16.8px] font-normal">
              44093531
            </h3>
          </div>
          <div className="bg-[#842DFF] h-[40px] w-[0.5px]"></div>
          <div>
            <h2 className="text-[13px] sm:text-[14px] leading-[16.8px] font-medium mb-[5px]">
              {t("home.buyNowBox.purchasedVRN")}
            </h2>
            <h3 className="text-[#C176FF] text-[13px] sm:text-[14px] leading-[16.8px] font-normal">
              142356276
            </h3>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-[30px]">
        {/* Tab ETH & BNB */}
        <div className="mt-5 mb-4 sm:my-5 border border-[#8616DF] rounded-md sm:rounded-[9px] p-[3.87px] sm:p-[5px] flex items-center justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`h-[46px] sm:h-[50px] w-full rounded-md sm:rounded-lg flex items-center justify-center gap-2 sm:gap-2.5 ${activeTab === tab.id ? "border border-[#FFFFFF26]" : ""
                }`}
              style={
                activeTab === tab.id
                  ? {
                    background:
                      "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)",
                  }
                  : {}
              }
              onClick={() => setActiveTab(tab.id)}
            >
              <Image src={tab.icon} alt={tab.label} width={24} height={24} className="sm:w-[24px] sm:h-[24px] w-[19px] h-[19px]" />
              <span className="text-[14px] sm:text-[16px] leading-[19.2px] font-normal">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Listing price */}
        <div className="w-full justify-center flex items-center gap-4 px-5">
          <Image
            src="/assets/heading-arrow.svg"
            alt="arrow"
            width={110}
            height={1}
            className="sm:w-[110px] w-[85px]"
          />
          <div
            className="px-2 sm:px-2.5 py-1 bg-[#9442ED80] rounded-[99px] flex items-center justify-center border border-[#9442ED80]"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <h2 className="text-nowrap text-white text-[13px] sm:text-[14px] leading-[16.8px] font-normal">
              {t("home.buyNowBox.listingPrice")}: $0.12343
            </h2>
          </div>
          <Image
            src="/assets/heading-arrow.svg"
            alt="arrow"
            width={110}
            height={1}
            className="rotate-180 sm:w-[110px] w-[85px]"
          />
        </div>

        {/* Choose amount & $VRN you receive */}
        <div className="mt-4 sm:mt-5 flex items-center gap-[15px] sm:gap-5">
          {/* Choose amount */}
          <div className="flex flex-col gap-1.5 sm:gap-2 items-start w-full">
            <h2 className="text-[13px] sm:text-[14px] leading-[16.8px] font-bold text-white">
              {t("home.buyNowBox.chooseAmount")}
            </h2>
            <div className="w-full h-[39px] sm:h-[50px] rounded-md sm:rounded-lg border border-[#8616DF] flex items-center justify-between gap-3 pl-3 sm:pl-4 pr-[3.5px] sm:pr-[5px]">
              <input
                type="text"
                placeholder="0.00"
                className="w-full bg-transparent outline-none placeholder:text-white/80 text-white text-[14px] sm:text-base font-normal"
              />

              {/* Dropdown */}
              <div ref={dropdownRef} className="relative inline-block">
                {/* Dropdown Button */}
                <div
                  className={`h-[31px] sm:h-10 max-w-[80px] sm:max-w-[100px] min-w-[75px] sm:min-w-[94px] flex items-center justify-between px-[3px] sm:px-1.5 py-2 rounded-[7.74px] sm:rounded-t-[10px] ${isOpen ? "rounded-b-none" : "rounded-[10px]"
                    } bg-[#762CC5] border border-[#A66CFD] cursor-pointer`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex items-center">
                    <Image
                      src={selectedCurrency.icon}
                      alt={selectedCurrency.name}
                      width={22}
                      height={22}
                      className="sm:w-[22px] sm:h-[22px] w-[18px] h-[18px]"
                    />
                    <h3 className="text-white text-[13px] sm:text-[14px] leading-[18px] font-normal ml-[2px] sm:ml-[4px]">
                      {selectedCurrency.name}
                    </h3>
                  </div>
                  <Image
                    src="/assets/icons/caret-down.svg"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="sm:w-[14px] sm:h-[14px] w-[11px] h-[11px]"
                  />
                </div>

                {/* Dropdown List */}
                {isOpen && (
                  <div className="absolute top-[31px] sm:top-[40px] space-y-[9px] left-0 w-full bg-[#762CC5] border border-t-0 border-[#A66CFD] py-3 rounded-t-none rounded-[10px] text-white shadow-lg z-10">
                    {currencies.map((currency) => (
                      <div
                        key={currency.name}
                        className="flex items-center gap-2 px-3 cursor-pointer space-y-2"
                        onClick={() => {
                          setSelectedCurrency(currency);
                          setIsOpen(false);
                        }}
                      >
                        <span className="text-[15px] leading-[18px] font-light">
                          {currency.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* $VRN you receive */}
          <div className="flex flex-col gap-1.5 sm:gap-2 items-start w-full">
            <h2 className="text-[13px] sm:text-[14px] leading-[16.8px] font-bold text-white">
              {t("home.buyNowBox.vrnYouReceive")}
            </h2>
            <div className="w-full h-[39px] sm:h-[50px] rounded-md sm:rounded-lg border border-[#8616DF] flex items-center justify-between px-4 gap-5">
              <input
                type="text"
                placeholder="0.00"
                className="w-full bg-transparent outline-none placeholder:text-white/80 text-white text-[14px] sm:text-base font-normal"
              />
              <Image
                src="/assets/icons/meta.svg"
                alt="meta"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {/* Available Bonus */}
        <div className="my-[15px] sm:my-5 space-y-2 sm:space-y-[11px]">
          <h3 className="text-white text-[13px] sm:text-[14px] leading-[16.8px] font-bold text-left">
            {t("home.buyNowBox.availableBonus")}
          </h3>
          <div className="grid grid-cols-3 gap-[9px] sm:gap-[11px]">
            {percentOptions.map((percent) => (
              <button
                key={percent}
                className={`border border-[#8616DF] rounded-lg p-[5px] sm:p-2 text-[12px] sm:text-[14px] leading-[16.8px] font-medium ${activePercent === percent ? "text-white" : "text-white"
                  }`}
                style={
                  activePercent === percent
                    ? {
                      background:
                        "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)",
                    }
                    : {}
                }
                onClick={() => handlePercentClick(percent)}
              >
                {percent}
              </button>
            ))}
          </div>
          <p className="text-white/90 text-[12px] sm:text-[14px] font-normal leading-[16.8px] text-left">
            {t("home.buyNowBox.spendMore")} $299.90{" "}
            {t("home.buyNowBox.toGetBonus")}
          </p>
        </div>

        {/* Buy Now */}
        <button
          className={`${styles.stakingButtonBuyNow} ${isHovered ? styles.hovered : ""
            }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.gradientBorder} />
          <h3 className={styles.buttonContentBuyNow}>
            {t("home.buyNowBox.buyNow")}
          </h3>
          <div className={styles.glowEffectBuyNow} />
        </button>

        <div className="mt-5 flex items-center flex-wrap justify-center sm:justify-between gap-4 sm:gap-3">
          {infoItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-2.5">
              <Image src={item.icon} alt={item.alt} width={16} height={16} />
              <h3 className="text-white/90 text-[13px] sm:text-[14px] leading-[16.8px] font-normal">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyNowBox;
