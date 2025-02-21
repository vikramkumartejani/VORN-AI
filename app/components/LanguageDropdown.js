"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const languages = [
  { code: "en", name: "English", flag: "/assets/flag/au.svg" },
  { code: "pt-BR", name: "Brazilian", flag: "/assets/flag/de.svg" },
  { code: "ru", name: "Russian", flag: "/assets/flag/au.svg" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const langFromPath = pathname.split("/")[1];

    const matchedLang = languages.find(
      (lang) =>
        lang.code === langFromPath ||
        (langFromPath === "pt" && lang.code === "pt")
    );

    if (matchedLang) {
      setCurrentLang(matchedLang);
    }
  }, [pathname]);

  const handleLanguageChange = (selectedLang) => {
    if (selectedLang.code !== currentLang.code) {
      const currentPath = pathname.split("/").slice(2).join("/");
      const newPath = `/${selectedLang.code}/${currentPath}`;
      localStorage.setItem("selectedLanguage", selectedLang.code);
      i18n.changeLanguage(selectedLang.code);
      router.push(newPath);
      setCurrentLang(selectedLang);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative block" ref={dropdownRef}>
      <button
        className="inline-flex langmenu items-center gap-2 rounded-lg py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.name}
          width={24}
          height={24}
          loading="lazy"
        />
        <Image
          src="/assets/icons/arrow-down-2.svg"
          alt="down-arrow"
          width={24}
          height={24}
          loading="lazy"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {isOpen && (
        <ul className="w-[120px] absolute top-[62px] text-[#0F1017] border -left-6 rounded-xl text-sm shadow-lg bg-black/40 transition duration-100 ease-out">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`flex w-full items-center gap-2.5 p-3 cursor-pointer ${currentLang.code === lang.code
                  ? "font-semibold"
                  : "hover:bg-primary rounded-xl"
                }`}
            >
              <Image
                src={lang.flag}
                alt={`${lang.name}-flag`}
                width={24}
                height={24}
                loading="lazy"
              />
              <span
                className={`text-white/90 text-base flex-1 text-start ${currentLang.code === lang.code ? "font-bold" : "font-normal"
                  }`}
              >
                {lang.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
