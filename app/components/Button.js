"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../styling/StakingButton.module.css";

export default function LocalizedButtonLink({
  href = "/",
  text = "",
  translationKey = "",
  extraClass = "h-[41px]",
  paddingx = "px-[35px]",
}) {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [currentLang, setCurrentLang] = useState("");

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

  const displayText = translationKey ? t(translationKey) : text;

  return (
    <Link
      href={createLocalizedPath(href)}
      className={`${styles.stakingButton} ${extraClass} ${
        isHovered ? styles.hovered : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.gradientBorder} />
      <div className={`${styles.buttonContent} ${paddingx}`}>{displayText}</div>
      <div className={styles.glowEffect} />
    </Link>
  );
}
