import IndicatorSystem from "@/components/sections/Indicator System/IndicatorSystem";
import OurServices from "@/components/sections/our services/OurServices";
import SignalsAndIndicators from "@/components/sections/Signals & Indicators/SignalsAndIndicators";
import Trust from "@/components/sections/Trust/Trust";
import Footer from "@/components/common/footer/Footer";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "@/components/common/LanguageSwitcher";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="mt-20 ">
      <OurServices />
      <Trust />
      <SignalsAndIndicators />
      <Footer />
      <IndicatorSystem />
    </div>
  );
}