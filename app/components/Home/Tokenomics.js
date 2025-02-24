import SectionHeading from "../SectionHeading";
import Chart3D from "./Chart3D";

export default function Toeknomics() {
  const tokenomicsData = [
    {
      name: "Liquidity & Exchange Listings",
      value: 20,
      displayValue: 20,
      height: 85,
      color: "#7D25C2",
    },
    {
      name: "Infrastructure & Development",
      value: 15,
      displayValue: 10,
      height: 65,
      color: "#A43CFF",
    },
    {
      name: "Team & Advisors",
      value: 10,
      displayValue: 5,
      height: 50,
      color: "#A052FF",
    },
    {
      name: "Ecosystem & Rewards",
      value: 30,
      displayValue: 30,
      height: 35,
      color: "#440675",
    },
    {
      name: "Public & Private Sales",
      value: 40,
      displayValue: 35,
      height: 100,
      color: "#930DFF",
    },
  ];

  return (
    <div className="min-h-screen bg-black px-4 md:px-5 py-24 relative overflow-hidden">
      <img
        src="/assets/tokenomics-bg.svg"
        alt="bg-graphic"
        className="absolute bottom-0 left-0 w-full z-[1]"
      />
      <div className="relative z-[2]">
        <SectionHeading text="Tokenomics" />
        <h1 className="my-[25px] text-[40px] leading-[44px] font-bold text-white text-center">
          <span className="text-[#9442ED]">Tokenomics: </span> The Economy of
          VORN AI
        </h1>
        <p className="text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80 max-w-[811px] mx-auto">
          The VORN AI ($VRN) ecosystem is designed for long-term sustainability,
          balancing utility, rewards, and governance. Below is the token
          distribution model ensuring growth, security, and decentralization.
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
