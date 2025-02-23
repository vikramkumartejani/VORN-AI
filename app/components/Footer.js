import Link from "next/link";
import React from "react";
import LocalizedButtonLink from "./Button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className="border-t border-solid"
      style={{
        borderTopWidth: "1px",
        borderImageSource:
          "linear-gradient(270deg, rgba(139, 92, 246, 0) 0%, #9E52FE 35%, #9E52FE 50%, #9E52FE 65%, rgba(139, 92, 246, 0) 100%)",
        borderImageSlice: 1,
      }}
    >
      <div className="max-w-[1162px] mx-auto w-full py-[120px] pb-20">
        {/* Links */}
        <div className="pb-[50px] flex items-start justify-between gap-5">
          <div>
            <Image src="/assets/logo.svg" alt="logo" width={131} height={43} />
            <p className="max-w-[373px] pt-5 pb-10 text-[14px] text-white leading-[21px] font-normal font-poppins">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-[27px]">
              <Link href="/">
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/telegram.svg"
                  alt="telegram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/m.svg"
                  alt="m"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/tree.svg"
                  alt="tree"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className="max-w-[528px] w-full flex items-start justify-between gap-5">
            {/* Product Section */}
            <div className="w-full flex items-start justify-center flex-col">
              <h2 className="mb-6 text-white text-[16px] leading-[24px] font-bold font-poppins">
                {t("footer.product.title")}
              </h2>
              <ul className="space-y-[14px]">
                <li>
                  <Link href="/features" className="text-white">
                    {t("footer.product.features")}
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-white">
                    {t("footer.product.unifiedAI")}
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-white">
                    {t("footer.product.depin")}
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-white">
                    {t("footer.product.rwa")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="w-full flex items-start justify-center flex-col">
              <h2 className="mb-6 text-white text-[16px] leading-[24px] font-bold font-poppins">
                {t("footer.company.title")}
              </h2>
              <ul className="space-y-[14px]">
                <li>
                  <Link href="/" className="text-white">
                    {t("footer.company.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-white">
                    {t("footer.company.roadmap")}
                  </Link>
                </li>
                <li>
                  <Link href="/tokenomics" className="text-white">
                    {t("footer.company.tokenomics")}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white">
                    {t("footer.company.faqs")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="w-full flex items-start justify-center flex-col">
              <h2 className="mb-6 text-white text-[16px] leading-[24px] font-bold font-poppins">
                {t("footer.resources.title")}
              </h2>
              <ul className="space-y-[14px]">
                <li>
                  <Link href="/staking" className="text-white">
                    {t("footer.resources.staking")}
                  </Link>
                </li>
                <li>
                  <Link href="/whitepaper" className="text-white">
                    {t("footer.resources.whitepaper")}
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-white">
                    {t("footer.resources.cookiePolicy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-[50px] border-t border-[#8B5CF6]/20">
          <div className="flex items-center gap-4 justify-between">
            <div>
              <h2 className="text-white text-[16px] font-bold font-poppins mb-1">
                {t("footer.newsletter.title")}
              </h2>
              <h3 className="text-white text-[14px] font-poppins">
                {t("footer.newsletter.subtitle")}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder={t("footer.newsletter.placeholder")}
                className="text-white placeholder:text-white border border-[#8B5CF666] w-[400px] h-[45px] rounded-[12px] px-4 bg-transparent outline-none"
              />
              <LocalizedButtonLink
                href="/subscribe"
                translationKey="footer.newsletter.subscribe"
              />
            </div>
          </div>
        </div>

        {/* Rights */}
        <div className="flex items-center justify-between gap-4 border-t border-[#8B5CF6]/20 pt-[50px]">
          <div className="flex items-center gap-[18px]">
            <Link href="/privacy-policy" className="text-white">
              {t("footer.privacyPolicy")}
            </Link>
            <div className="bg-[#D9D9D9] w-1 h-1 rounded-full"></div>
            <Link href="/terms" className="text-white">
              {t("footer.termsConditions")}
            </Link>
          </div>
          <h3 className="text-white text-[14px]">{t("footer.rights")}</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
