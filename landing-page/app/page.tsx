"use client";
import IndicatorSystem from "@/components/sections/Indicator System/IndicatorSystem";
import OurServices from "@/components/sections/our services/OurServices";
import SignalsAndIndicators from "@/components/sections/Signals & Indicators/SignalsAndIndicators";
import Trust from "@/components/sections/Trust/Trust";
import Footer from "@/components/common/footer/Footer";
import OurIndicators from "@/components/sections/Our Indicators/OurIndicators";
import Pricing from "@/components/sections/pricing/Pricing";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import Container from "@/components/layout/container/Container";
import Testimonials from "@/components/sections/testimonials/Testimonials";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="mt-20 ">
      <Container>
        <OurServices />
        <Trust />
        <SignalsAndIndicators />
      </Container>

      <IndicatorSystem />


      <Testimonials />
      <Container>
        <OurIndicators />
        <Pricing />
      </Container>

      <Footer />
    </div>
  );
}