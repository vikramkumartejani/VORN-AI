"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SectionHeading from "../SectionHeading";

const FAQData = [
  {
    question: "What is VORN.AI?",
    answer:
      "VORN.AI is an AI-powered decentralized platform for infrastructure and real-world asset (RWA) tokenization.",
  },
  {
    question: "How does VORN.AI utilize AI?",
    answer:
      "VORN.AI leverages artificial intelligence for automated asset valuation, risk assessment, and market analysis. The platform uses advanced AI algorithms to optimize tokenization processes and enhance decision-making in real-world asset management.",
  },
  {
    question: "What can I do with VRN tokens?",
    answer:
      "VRN tokens serve multiple purposes within the VORN ecosystem. You can stake them for rewards, participate in governance decisions, access premium features, and trade them on supported exchanges.",
  },
  {
    question: "What is DePIN in VORN.AI?",
    answer:
      "DePIN (Decentralized Physical Infrastructure Network) in VORN.AI is a framework that connects real-world infrastructure to blockchain technology, enabling decentralized management and tokenization of physical assets.",
  },
  {
    question: "What are tokenized RWAs in VORN.AI?",
    answer:
      "Tokenized RWAs (Real World Assets) in VORN.AI are digital representations of physical assets on the blockchain. This includes real estate, infrastructure, commodities, and other tangible assets that have been converted into tradable digital tokens.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (clickedIndex) => {
    setOpenIndex(clickedIndex === openIndex ? openIndex : clickedIndex);
  };

  return (
    <div
      className="min-h-screen bg-black px-4 md:px-5 pt-20 pb-[120px] relative"
      style={{
        background: `radial-gradient(32.52% 50% at 50% 50%, rgba(132, 45, 255, 0.25) 0%, rgba(2, 1, 3, 0.25) 100%)`,
      }}
    >
      <SectionHeading text="FAQs" />
      <h1 className="my-[25px] text-[40px] leading-[44px] font-bold text-white text-center">
        Frequently Asked Questions
      </h1>
      <div className="max-w-[1090px] mx-auto space-y-4 mt-[60px]">
        {FAQData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
    rounded-2xl px-[36px] py-[16px]
    transition-all duration-500 ease-in-out
    ${isOpen ? "bg-purple-900/20" : "bg-purple-900/10"}
    backdrop-blur-xl
    overflow-hidden cursor-pointer
    border border-[#7E0ADB]
  `}
              style={
                isOpen
                  ? {
                      background:
                        "linear-gradient(180deg, rgba(139, 92, 246, 0) 20.83%, rgba(139, 92, 246, 0.2) 100%)",
                    }
                  : {}
              }
              onClick={() => handleClick(index)}
            >
              <button
                className="w-full text-left flex items-center justify-between relative "
                aria-expanded={isOpen}
              >
                <span className="text-white text-[18px] font-[600] font-poppins">
                  {faq.question}
                </span>
                <IoIosArrowDown
                  className={`
                    w-[30px] h-[30px] text-purple-400
                    transition-transform duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`
                  transition-all duration-500 ease-in-out pt-[14px]
                  ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="text-[#FFFFFFCC] text-[18px] font-poppins pe-[26px]">
                  {faq.answer}
                </div>
              </div>

              {/* Border and Glow Effect */}
              <div
                className={`
                  absolute inset-0 rounded-2xl
                  transition-opacity duration-300
                  ${isOpen || "hover:opacity-100"}
                  ${isOpen ? "opacity-100" : "opacity-0"}
                  border border-purple-500/30
                  shadow-[0_0_15px_-3px_rgba(147,51,234,0.3)]
                  pointer-events-none
                `}
              />

              {/* Inner Shadow */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
