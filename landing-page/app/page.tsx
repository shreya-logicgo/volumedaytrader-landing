"use client";
import IndicatorSystem from "@/components/sections/Indicator System/IndicatorSystem";
import OurServices from "@/components/sections/our services/OurServices";
import SignalsAndIndicators from "@/components/sections/Signals & Indicators/SignalsAndIndicators";
import Trust from "@/components/sections/Trust/Trust";
import Blogs from "@/components/sections/blogs/Blogs";
import Footer from "@/components/common/footer/Footer";
import OurIndicators from "@/components/sections/Our Indicators/OurIndicators";
import Pricing from "@/components/sections/pricing/Pricing";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import Container from "@/components/layout/container/Container";
import Navbar from '@/components/common/navbar'

import Testimonials from "@/components/sections/testimonials/Testimonials";
import FAQ from "@/components/sections/faq/FAQ";
import Wyckoff from "@/components/sections/wyckoff-indicators/Wyckoff";
import PTA from "@/components/sections/pta/PTA";


export default function Hero() {
  return (
    <div className="mt-20  bg-amber-5">
      {/* <div className="relative bg-amber-100 h-50 w-full"> */}

      {/* </div> */}
  
      <Container>
      <Navbar />
        <OurServices />
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-0" >
        <Trust />
        </div>
        <SignalsAndIndicators />

      </Container>

      <IndicatorSystem />


      <Testimonials />
      <Container>
        <OurIndicators />
      </Container>

      <Pricing />

      <Container>
        {/* <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-0" > */}
          <PTA />
        {/* </div> */}
        <Wyckoff />
        <FAQ />
        <Blogs />
      </Container>
      <Footer />
 

      
    </div>
  );
}