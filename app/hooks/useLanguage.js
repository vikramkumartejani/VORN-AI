// hooks/useLanguage.js
"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const normalizeLanguage = (lang) => {
      if (lang === "pt" || lang === "br") return "pt-BR";
      return ["en", "pt-BR", "ru"].includes(lang) ? lang : "en";
    };

    const initializeLanguage = async () => {
      try {
        const pathLang = pathname.split("/")[1];
        const normalizedLang = normalizeLanguage(pathLang);

        // Only change language if it's different from current
        if (i18n.language !== normalizedLang && i18n.isInitialized) {
          await i18n.changeLanguage(normalizedLang);
        }
      } catch (error) {
        console.error("Language initialization error:", error);
      }
    };

    initializeLanguage();
  }, [i18n, pathname]);
};

export default useLanguage;
