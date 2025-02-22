"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLanguageRedirect = () => {
  const router = useRouter();
  const lang = window.location.pathname.split("/")[1];

  useEffect(() => {
    // Only redirect if the language is invalid and not empty
    if (lang && !["en", "pt-BR", "ru"].includes(lang)) {
      console.log("Redirecting to /en/");
      router.push("/en/");
    }
  }, [lang, router]);
};

export default useLanguageRedirect;
