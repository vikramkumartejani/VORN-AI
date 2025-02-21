"use client";
import React, { useState } from "react";
import styles from "../styling/StakingButton.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Button() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Link
        href="/"
        className={`${styles.stakingButton} ${isHovered ? styles.hovered : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.gradientBorder} />
        <div className={styles.buttonContent}>
          {t("btns.staking")}
        </div>
        <div className={styles.glowEffect} />
      </Link>
    </div>
  );
}
