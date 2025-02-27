import SectionHeading from "../SectionHeading";
import Image from "next/image";
import Button from "../Button";
import { useTranslation } from "react-i18next";

export default function EarnRewards() {
  const { t } = useTranslation();
  const cardData = [
    {
      icon: "/assets/icons/cart.svg",
      title: t("home.earnRewards.cards.0.title"),
      description: t("home.earnRewards.cards.0.description"),
      buttonText: t("home.earnRewards.cards.0.buttonText"),
      hasButton: true,
    },
    {
      icon: "/assets/icons/lock.svg",
      title: t("home.earnRewards.cards.1.title"),
      description: t("home.earnRewards.cards.1.description"),
      hasButton: false,
    },
    {
      icon: "/assets/icons/bag.svg",
      title: t("home.earnRewards.cards.2.title"),
      description: t("home.earnRewards.cards.2.description"),
      hasButton: false,
    },
  ];

  return (
    <div
      className="min-h-screen bg-black px-4 md:px-5 py-20 relative overflow-hidden"
      style={{
        background: `radial-gradient(32.52% 50% at 50% 50%, rgba(132, 45, 255, 0.58) 0%, rgba(2, 1, 3, 0.25) 100%), linear-gradient(0deg, #000000, #000000)`,
      }}
    >
      {/* Grid Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(162, 90, 240, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(163, 90, 240, 0.3) 1px, transparent 1px)`,
          backgroundSize: "130px 130px",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          opacity: 0.3,
        }}
      />
      <SectionHeading text={t("home.earnRewards.title.start")} />
      <h1 className="my-[25px] text-[40px] leading-[44px] font-bold text-white text-center">
        <span className="text-[#9442ED]">
          {t("home.earnRewards.title.start")}
        </span>{" "}
        {t("home.earnRewards.title.end")}
      </h1>
      <p className="text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80 max-w-[811px] mx-auto">
        {t("home.earnRewards.description")}
      </p>

      {/* Cards Section */}
      <div className="max-w-[1236px] mx-auto space-y-[35px] mt-[75px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-sm rounded-[20px] overflow-hidden min-h-[126px] p-[1px] transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6]"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 65.1deg, #2F2F2F 80.33deg, #2F2F2F 80.17deg, #2F2F2F 113.25deg, #959595 190.4deg, #2F2F2F 250.46deg, #2F2F2F 238.85deg, #2F2F2F 290.56deg, #959595 360deg)",
            }}
          >
            <div
              className="rounded-[20px] px-[24px] py-[17px] min-h-[126px] flex items-center justify-between gap-6 w-full h-full flex-1"
              style={{
                background: "linear-gradient(180deg, #000000 0%, #371866 100%)",
                boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-[18px]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={47}
                  height={44}
                />
                <div>
                  <h2 className="text-[24px] font-bold text-white mb-[15px]">
                    {card.title}
                  </h2>
                  <p className="text-white font-poppins font-[300] text-[16px] whitespace-pre-line">
                    {card.description}
                  </p>
                </div>
              </div>
              {card.hasButton && (
                <Button
                  href="/staking"
                  translationKey={card.buttonText}
                  paddingx="px-[28.5px]"
                  extraClass="h-[47px]"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
