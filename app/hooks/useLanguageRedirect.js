"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLanguageRedirect = () => {
  const router = useRouter();
  const lang = window.location.pathname.split("/")[1];

  useEffect(() => {
    console.log("Current language:", lang); // Log the current language
    if (lang && !["en", "pt-BR", "ru"].includes(lang)) {
      console.log("Redirecting to /en/"); // Log the redirect action
      router.push("/en/");
    } else if (!lang) {
      console.log("No language specified, redirecting to /en/");
      router.push("/en/");
    }
  }, [lang, router]);
};

export default useLanguageRedirect;
