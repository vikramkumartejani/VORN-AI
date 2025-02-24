import SectionHeading from "../SectionHeading";
import Chart3D from "./Chart3D";
import { useTranslation } from "react-i18next";

export default function Tokenomics() {
  const { t } = useTranslation();
  const tokenomicsData = [
    {
      name: t("home.tokenomics.liquidityAndExchangeListings"),
      value: 20,
      displayValue: 20,
      height: 85,
      color: "#7D25C2",
    },
    {
      name: t("home.tokenomics.infrastructureAndDevelopment"),
      value: 15,
      displayValue: 10,
      height: 65,
      color: "#A43CFF",
    },
    {
      name: t("home.tokenomics.teamAndAdvisors"),
      value: 10,
      displayValue: 5,
      height: 50,
      color: "#A052FF",
    },
    {
      name: t("home.tokenomics.ecosystemAndRewards"),
      value: 30,
      displayValue: 30,
      height: 35,
      color: "#440675",
    },
    {
      name: t("home.tokenomics.publicAndPrivateSales"),
      value: 40,
      displayValue: 35,
      height: 100,
      color: "#930DFF",
    },
  ];

  return (
    <div className="xl:h-[950px] lg:h-[950px] md:h-[1200px] sm:h-[1200px] h-[1300px] bg-black px-4 md:px-5 pt-20 pb-0 relative overflow-hidden">
      <img
        src="/assets/tokenomics-bg.svg"
        alt="bg-graphic"
        className="absolute bottom-0 left-0 w-full z-[1]"
      />
      <div className="relative z-[2]">
        <SectionHeading text={t("home.tokenomics.subTitle")} />
        <h1 className="my-[25px] text-[40px] leading-[44px] font-bold text-white text-center">
          <span className="text-[#9442ED]">
            {t("home.tokenomics.title.start")}
          </span>{" "}
          {t("home.tokenomics.title.end")}
        </h1>
        <p className="text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80 max-w-[811px] mx-auto">
          {t("home.tokenomics.description")}
        </p>

        {/* Cards Section */}
        <div className="max-w-[1236px] mx-auto mt-[60px] pb-[40px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Legend */}
          <div className="space-y-4">
            {tokenomicsData.map(({ name, displayValue, color }) => (
              <div key={name} className="flex items-center gap-[22px]">
                <div
                  className="w-[52px] h-[21px]"
                  style={{ backgroundColor: color }}
                />
                <span className="text-white text-[18px] font-poppins">
                  {name} ({displayValue}%)
                </span>
              </div>
            ))}
          </div>
          <Chart3D data={tokenomicsData} />
        </div>
      </div>
    </div>
  );
}
