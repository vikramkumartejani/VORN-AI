import SectionHeading from "../SectionHeading";

export default function RoadMap() {
  const phaseData = [
    {
      quarter: "Q1 2025",
      title: "Research & Development",
      items: [
        "Market Research",
        "Whitepaper Release",
        "Tokenomics Design",
        "Technical Architecture",
        "Community Building",
        "Early Partnerships",
      ],
    },
    {
      quarter: "Q2 2025",
      title: "Prototype / Testnet Launch",
      items: [
        "AI Compute Grid Testnet",
        "RWA Tokenization Beta",
        "DePIN Node Deployment",
        "AI-DAO Prototype",
        "Smart Contract Audits",
        "Testnet Incentive Program",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Mainnet Launch",
      items: [
        "Mainnet Deployment",
        "RWA Marketplace",
        "AI-Managed Staking Pools",
        "Energy Trading Platform",
        "CEX/DEX Listings",
        "Ecosystem Incentives",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Scaling & Global Adoption",
      items: [
        "AI Model Marketplace",
        "Cross-Chain Compatibility",
        "Layer 2 Scaling",
        "Enterprise Integrations",
        "RWA Expansion",
        "Global Outreach",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black px-4 md:px-5 py-24 relative overflow-hidden">
      <img
        src="/assets/roadmap-bg.svg"
        alt="bg-graphic"
        className="absolute bottom-0 left-0 w-full"
      />
      <SectionHeading text="VORN AI Roadmap" />
      <h1 className="my-[25px] text-[40px] leading-[44px] font-bold text-white text-center">
        Pioneering the Future of Decentralized AI
      </h1>
      <p className="text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80 max-w-[653px] mx-auto">
        Our roadmap outlines the journey towards a scalable, secure, and fully
        autonomous AI ecosystem.
      </p>

      {/* Cards Section */}
      <div className="max-w-[1236px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 md:gap-[28px] gap-[16px] mt-[75px] pb-[40px]">
        {phaseData.map((phase, index) => (
          <div
            key={index}
            className="rounded-[20px] bg-[#12092503] border border-[#FFFFFF80] overflow-hidden min-h-[126px] transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6]"
          >
            <div
              className="text-white rounded-[20px] px-[20px] pt-[11px] pb-[19px] min-h-[126px] flex flex-col w-full h-full flex-1"
              style={{
                boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-[20px] mb-[12px]">{phase.quarter}</h3>
              <h2 className="text-[20px] font-bold mb-[18px]">{phase.title}</h2>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-poppins font-[400] flex items-center gap-2"
                  >
                    <span className="w-1 min-w-1 h-1 bg-white rounded-full me-1"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
