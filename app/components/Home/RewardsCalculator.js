import SectionHeading from "../SectionHeading";
import Button from "../Button";

export default function RewardsCalculator() {
  const cardData = [
    {
      title: "30 Days",
      apr: "APR: 50%",
    },
    {
      title: "90 Days",
      apr: "APR: 90%",
    },
    {
      title: "180 Days",
      apr: "APR: 120%",
    },
    {
      title: "360 Days",
      apr: "APR: 200%",
    },
  ];

  return (
    <div className="min-h-screen bg-black px-4 md:px-5 py-24 relative overflow-hidden">
      <img
        src="/assets/graphic.svg"
        alt="graphic"
        className="absolute bottom-0 left-0 w-full"
      />
      <SectionHeading text="Rewards Calculator" />
      <h1 className="my-[25px] text-[40px] leading-[44px] font-bold text-white text-center">
        Staking <span className="text-[#9442ED]">Rewards Calendar</span>
      </h1>
      <p className="text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80 max-w-[653px] mx-auto">
        The VORN AI Staking Program allows users to lock their VRN tokens and
        earn staking rewards based on the duration of their stake. The longer
        you stake, the higher your rewards, with APR reaching up to 200%
      </p>

      {/* Cards Section */}
      <div className="max-w-[1236px] mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-[47px] gap-[20px] mt-[75px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-[20px] bg-[#12092503] border border-white/40 overflow-hidden min-h-[126px] transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6]"
          >
            <div
              className="rounded-[20px] px-[24px] py-[29px] min-h-[126px] flex flex-col items-center justify-center text-center gap-[15px] w-full h-full flex-1"
              style={{
                boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2 className="text-[24px] font-bold text-white">{card.title}</h2>
              <p className="text-white font-poppins font-[400] text-[16px] whitespace-pre-line">
                {card.apr}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-full justify-center items-center mt-[60px] pb-[160px]">
        <Button href="/" translationKey="Stake Now" extraClass="h-[47px]" />
      </div>
    </div>
  );
}
