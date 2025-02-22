"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLanguageRedirect = () => {
  const router = useRouter();
  const lang = window.location.pathname.split("/")[1];

  useEffect(() => {
    console.log("Current language:", lang);
    if (!["en", "pt-BR", "ru"].includes(lang) && lang !== "") {
      console.log("Redirecting to /en/");
      router.push("/en/");
    }
  }, [lang, router]);
};

export default useLanguageRedirect;
