// components/LanguageProvider.js
"use client";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

export default function LanguageProvider({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initI18n = async () => {
      if (!i18n.isInitialized) {
        await i18n.init();
      }
      setIsReady(true);
    };

    initI18n();
  }, []);

  if (!isReady) {
    return null; // or a loading spinner
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
