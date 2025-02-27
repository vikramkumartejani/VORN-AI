import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styling/StakingButton.module.css";

const stakingOptions = [
  {
    period: "30 Days",
    apr: "50%",
    bgColor: "#1C0035",
    textColor: "text-[#C176FF]",
  },
  {
    period: "90 Days",
    apr: "90%",
    bgColor: "#1C0035",
    textColor: "text-[#C176FF]",
  },
  {
    period: "180 Days",
    apr: "120%",
    bgColor: "#1C0035",
    textColor: "text-[#C176FF]",
  },
  {
    period: "365 Days",
    apr: "200%",
    bgColor: "#1C0035",
    textColor: "text-[#C176FF]",
  },
];

const StakingSection = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);
  const [stakeAmount, setStakeAmount] = useState("");
  const [numericStakeAmount, setNumericStakeAmount] = useState(0);
  const [estimatedProfit, setEstimatedProfit] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [unlockDate, setUnlockDate] = useState("");

  // Format number with commas
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Parse input by removing commas
  const parseInput = (input) => {
    return input.replace(/,/g, "");
  };

  // Handle input change
  const handleInputChange = (e) => {
    let value = e.target.value;

    // Remove VRN and any non-numeric characters except decimal point
    value = value.replace(/VRN/g, "").replace(/[^0-9.]/g, "");

    // Ensure only one decimal point
    const decimalCount = (value.match(/\./g) || []).length;
    if (decimalCount > 1) {
      value = value.substring(0, value.lastIndexOf("."));
    }

    // Parse the numeric value
    const numericValue = parseFloat(value) || 0;
    setNumericStakeAmount(numericValue);

    // Format for display
    if (value) {
      const parts = value.split(".");
      if (parts.length > 1) {
        // Has decimal part
        const formattedInt = formatNumberWithCommas(parts[0]);
        setStakeAmount(`${formattedInt}.${parts[1].substring(0, 2)}`);
      } else {
        // Integer only
        setStakeAmount(formatNumberWithCommas(value));
      }
    } else {
      setStakeAmount("");
    }
  };

  // Handle max button click
  const handleMaxClick = () => {
    const maxValue = 100000; // Example max value, replace with actual max balance
    setNumericStakeAmount(maxValue);
    setStakeAmount(formatNumberWithCommas(maxValue.toFixed(2)));
  };

  // Calculate estimated profit based on APR and period
  useEffect(() => {
    if (numericStakeAmount > 0) {
      const selectedOption = stakingOptions[selectedPeriodIndex];
      const aprPercentage =
        parseFloat(selectedOption.apr.replace("%", "")) / 100;
      const periodDays = parseInt(selectedOption.period.split(" ")[0]);

      // Calculate profit: (amount * APR * days) / 365
      const profit = (numericStakeAmount * aprPercentage * periodDays) / 365;
      setEstimatedProfit(profit);
      setTotalAmount(numericStakeAmount + profit);

      // Calculate unlock date
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + periodDays);
      const month = currentDate.toLocaleString("default", { month: "short" });
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      setUnlockDate(
        `${month} ${day} ${year}, ${hours}:${
          minutes < 10 ? "0" + minutes : minutes
        }`
      );
    } else {
      setEstimatedProfit(0);
      setTotalAmount(0);
      setUnlockDate("");
    }
  }, [numericStakeAmount, selectedPeriodIndex]);

  // Handle staking period selection
  const handlePeriodSelect = (index) => {
    setSelectedPeriodIndex(index);
  };

  return (
    <div className="mt-[25px] rounded-[20px] bg-[#0B0015] border border-[#440675] px-2.5 pb-5 pt-2.5 lg:p-[30px]">
      <h2 className="text-white text-[24px] leading-[28.8px] font-bold lg:text-left text-center">
        {t("staking.stakingSection.title")}
      </h2>

      <div
        className="staking-section mt-6 flex lg:flex-col flex-row lg:items-start items-center justify-between rounded-[10px] lg:rounded-[12px] border border-[#440675] bg-[#1C0035] py-[22px] px-5"
        style={{}}
      >
        <h2 className="text-[#FFFFFF] text-[20px] leading-[24px] font-normal lg:mb-[5px]">
          {t("staking.stakingSection.totalStaking")}
        </h2>
        <h3 className="text-white text-[32px] leading-[38.4px] font-normal">
          0
        </h3>
      </div>

      <div className="my-[15px] lg:my-[30px] grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5 lg:gap-[27px]">
        {stakingOptions.map((option, index) => {
          const isSelected = index === selectedPeriodIndex;
          return (
            <div
              key={index}
              className="border border-[#9442ED] rounded-xl w-full px-[15px] py-5 cursor-pointer"
              style={{
                backdropFilter: "blur(30px)",
                background: isSelected
                  ? "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)"
                  : option.bgColor,
              }}
              onClick={() => handlePeriodSelect(index)}
            >
              <div className="flex md:items-center justify-between md:flex-row items-start flex-col gap-1.5 lg:gap-2 mb-1.5 xl:mb-[22px]">
                <h2 className="text-white text-[18px] sm:text-[20px] leading-[24px] font-normal">
                  {t("staking.stakingSection.stakingPeriod")}
                </h2>
                <h2 className="text-white text-[18px] sm:text-[20px] leading-[24px] font-normal">
                  {option.period}
                </h2>
              </div>
              <h3
                className={`text-[18px] sm:text-[20px] leading-[24px] font-medium ${
                  isSelected ? "text-white" : option.textColor
                }`}
              >
                {t("staking.stakingSection.apr", { apr: option.apr })}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-[30px]">
        <div className="w-full border border-[#7209C5] h-[66px] py-4 px-5 rounded-xl flex items-center justify-between gap-3">
          <input
            type="text"
            placeholder={t("staking.stakingSection.placeholder")}
            className="h-full bg-transparent outline-none w-full text-white text-[18px] leading-[27px] font-normal font-poppins placeholder:text-white"
            value={stakeAmount ? `${stakeAmount} VRN` : ""}
            onChange={handleInputChange}
          />
          <button
            className="underline text-[#C176FF] text-[18px] leading-[27px] font-normal font-poppins"
            onClick={handleMaxClick}
          >
            {t("staking.stakingSection.max")}
          </button>
        </div>
        <button
          className={`${styles.stakingButtonNow} ${
            isHovered ? styles.hovered : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          // disabled={numericStakeAmount <= 0}
        >
          <div className={styles.gradientBorder} />
          <div className={`${styles.buttonContentNow} `}>
            {t("staking.stakingSection.stakeNow")}
          </div>
          <div className={styles.glowEffect} />
        </button>
      </div>

      <div className="mt-[30px] grid grid-cols-2 gap-[27px]">
        <div
          className="w-full border border-[#440675] bg-[#1C0035] rounded-xl px-5 py-[18px] text-white space-y-[12px]"
          style={{ backdropFilter: "blur(30px)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[18px] leading-[21.6px] font-medium">
              {t("staking.stakingSection.stakeAmount")}
            </h2>
            <h2 className="text-[18px] leading-[21.6px] font-normal">
              {numericStakeAmount > 0
                ? `${formatNumberWithCommas(numericStakeAmount.toFixed(2))} VRN`
                : "0.00 VRN"}
            </h2>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
              {t("staking.stakingSection.estimatedProfit")}
            </h2>
            <h2 className="text-[#C176FF] text-[18px] leading-[21.6px] font-normal">
              {estimatedProfit > 0
                ? `${formatNumberWithCommas(estimatedProfit.toFixed(2))} VRN`
                : "0.00 VRN"}
            </h2>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
              {t("staking.stakingSection.total")}
            </h2>
            <h2 className="text-[#C176FF] text-[18px] leading-[21.6px] font-normal">
              {totalAmount > 0
                ? `${formatNumberWithCommas(totalAmount.toFixed(2))} VRN`
                : "0.00 VRN"}
            </h2>
          </div>
        </div>
        <div
          className="w-full border border-[#440675] bg-[#1C0035] rounded-xl px-5 py-[18px] text-white space-y-[12px]"
          style={{ backdropFilter: "blur(30px)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[18px] leading-[21.6px] font-medium">
              {t("staking.stakingSection.lcaiToBeLocked")}
            </h2>
            <h2 className="text-[18px] leading-[21.6px] font-normal">
              {numericStakeAmount > 0
                ? formatNumberWithCommas(numericStakeAmount.toFixed(2))
                : "0.00"}
            </h2>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
              {t("staking.stakingSection.duration")}
            </h2>
            <h2 className="text-[18px] leading-[21.6px] font-normal">
              {stakingOptions[selectedPeriodIndex].period}
            </h2>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
              {t("staking.stakingSection.unlockOn")}
            </h2>
            <h2 className="text-[18px] leading-[21.6px] font-normal">
              {unlockDate || "-"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingSection;
