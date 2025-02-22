"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLanguageRedirect = () => {
  const router = useRouter();
  const lang = window.location.pathname.split("/")[1];

  useEffect(() => {
    if (!["en", "pt-BR", "ru"].includes(lang)) {
      router.push("/en/");
    }
  }, [lang, router]);
};

export default useLanguageRedirect;
