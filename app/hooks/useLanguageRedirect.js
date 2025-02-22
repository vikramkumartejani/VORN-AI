"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLanguageRedirect = () => {
  const router = useRouter();
  const lang = window.location.pathname.split("/")[1];

  useEffect(() => {
    // Redirect to /en if the language is invalid
    if (lang && !["en", "pt-BR", "ru"].includes(lang)) {
      console.log("Redirecting to /en/");
      router.push("/en/");
    } else if (!lang) {
      // If no language is specified, redirect to /en
      console.log("No language specified, redirecting to /en/");
      router.push("/en/");
    }
  }, [lang, router]);
};

export default useLanguageRedirect;
