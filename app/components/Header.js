"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import LocalizedButtonLink from "./Button";

const Header = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const supportedLanguages = [
      "en",
      "pt-BR",
      "ru",
      "bn",
      "de",
      "es",
      "fr",
      "hi",
      "it",
      "ja",
    ];

    const normalizeLanguage = (lang) => {
      if (lang === "pt" || lang === "br") return "pt-BR";
      return supportedLanguages.includes(lang) ? lang : "en";
    };

    const storedLang =
      localStorage.getItem("selectedLanguage") ||
      localStorage.getItem("i18nextLng");
    const langFromPath = window.location.pathname.split("/")[1];

    const finalLang = normalizeLanguage(langFromPath || storedLang);

    if (finalLang !== currentLang) {
      console.log("Header: Setting language to", finalLang);
      setCurrentLang(finalLang);
      i18n.changeLanguage(finalLang);
      localStorage.setItem("i18nextLng", finalLang);
    }
  }, [i18n]);

  const createLocalizedPath = (path) => {
    return `/${currentLang}${path}`.replace("//", "/");
  };

  const navLinks = [
    { name: t("header.nav.home"), href: "/" },
    {
      name: t("header.nav.features"),
      href: "#",
      submenu: [
        { name: t("header.nav.unifiedAI"), href: "/ai-utility" },
        { name: t("header.nav.depin"), href: "/de-pin" },
        { name: t("header.nav.rwa"), href: "/rwa" },
      ],
    },
    { name: t("header.nav.roadmap"), href: "/#roadmap" },
    { name: t("header.nav.tokenomics"), href: "/#tokenomics" },
    { name: t("header.nav.whitepaper"), href: "/whitepaper" },
    { name: t("header.nav.faqs"), href: "/#faqs" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fully localize all navLinks (main and submenu) for consistency
  const localizedNavLinks = navLinks.map((link) => ({
    ...link,
    href: createLocalizedPath(link.href),
    submenu: link.submenu?.map((sub) => ({
      ...sub,
      href: createLocalizedPath(sub.href),
    })),
  }));

  return (
    <div className="px-4">
      <div
        className="fixed top-0 lg:top-8 left-1/2 -translate-x-1/2 lg:max-w-[1086px] w-full py-2.5 lg:py-2 px-4 z-30 flex justify-center  bg-[#44067503] lg:rounded-[14px] border border-white/15 lg:border-[#9685afbd]"
        style={{
          backdropFilter: "blur(94.2px)",
          boxShadow: "0px 0px 6px 2px #9B59FF inset",
        }}
      >
        <div className="flex items-center justify-between w-full">
          <Link href={createLocalizedPath("/")} className="cursor-pointer">
            <Image
              src="/assets/logo.svg"
              alt="VORNA AI"
              width={131}
              height={43}
            />
          </Link>

          <ul className="hidden lg:flex items-center space-x-6 text-white">
            {localizedNavLinks.map((link, idx) => (
              <NavLink
                key={idx}
                link={link} // Pass fully localized link object
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            ))}
          </ul>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageDropdown />
            <LocalizedButtonLink href="/staking" translationKey="header.btn" />
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Image
              src="/assets/icons/mobile-menu.svg"
              alt="mobile-menu"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <MobileMenu
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          navLinks={localizedNavLinks} // Use the same localized links
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          btnText={"header.btn"}
        />
      )}
    </div>
  );
};

export default Header;
