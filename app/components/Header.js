"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import LocalizedButtonLink from "./Button";

const Header = () => {
  const [currentLang, setCurrentLang] = useState("");
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage");
    const langFromPath = window.location.pathname.split("/")[1];

    let finalLang = storedLang || "en";

    if (langFromPath === "pt" || langFromPath === "br") {
      finalLang = "pt-BR";
    } else if (langFromPath === "ru") {
      finalLang = "ru";
    }

    setCurrentLang(finalLang);
    i18n.changeLanguage(finalLang);
  }, [i18n]);

  const createLocalizedPath = (path) => `/${currentLang}${path}`;

  const navLinks = [
    { name: t("header.nav.home"), href: "/" },
    {
      name: t("header.nav.features"),
      href: "#",
      submenu: [
        { name: t("header.nav.aiModels"), href: "/features/ai-models" },
        { name: t("header.nav.security"), href: "/features/security" },
      ],
    },
    { name: t("header.nav.roadmap"), href: "/roadmap" },
    { name: t("header.nav.tokenomics"), href: "/tokenomics" },
    { name: t("header.nav.whitepaper"), href: "/whitepaper" },
    { name: t("header.nav.faqs"), href: "/faqs" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="px-4">
      <div
        className="fixed top-3 lg:top-8 left-1/2 -translate-x-1/2 lg:max-w-[1086px] w-[95%] py-2 px-4 z-30 flex justify-center bg-[#44067503] rounded-[14px] border border-[#9685afbd]"
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
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                link={link}
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
            <FaBars size={24} />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <MobileMenu
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          navLinks={navLinks}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          btnText={"header.btn"}
        />
      )}
    </div>
  );
};

export default Header;
