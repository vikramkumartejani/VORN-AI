import SectionHeading from "../SectionHeading";
import Chart3D from "./Chart3D";

export default function Toeknomics() {
  const TOKENOMICS_DATA = [
    { name: "Public & Private Sales", value: 35, color: "#a855f7" },
    { name: "Ecosystem & Rewards", value: 30, color: "#7e22ce" },
    { name: "Liquidity & Exchange Listings", value: 20, color: "#9333ea" },
    { name: "Infrastructure & Development", value: 10, color: "#c084fc" },
    { name: "Team & Advisors", value: 5, color: "#d8b4fe" },
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
            {TOKENOMICS_DATA.map(({ name, value, color }) => (
              <div key={name} className="flex items-center gap-[22px]">
                <div
                  className="w-[52px] h-[21px]"
                  style={{ backgroundColor: color }}
                />
                <span className="text-white text-[18px] font-poppins">
                  {name} ({value}%)
                </span>
              </div>
            ))}
          </div>
          <Chart3D />
        </div>
      </div>
    </div>
  );
}
