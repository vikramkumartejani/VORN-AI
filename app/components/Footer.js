import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="relative py-[30px] px-5 md:px-20">
      <div className="flex justify-between flex-col md:flex-row items-center gap-7 relative max-w-[1400px] w-full mx-auto">
        <p className="text-white/80 font-normal text-sm text-center">
          {t("footer.footertext")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
