"use client";
import OurServices from "@/components/sections/our services/OurServices";
import SignalsAndIndicators from "@/components/sections/Signals & Indicators/SignalsAndIndicators";
import Trust from "@/components/sections/Trust/Trust";
import Blogs from "@/components/sections/blogs/Blogs";
import Footer from "@/components/common/footer/Footer";
import Container from "@/components/layout/container/Container";
import FAQ from "@/components/sections/faq/FAQ";
import Wyckoff from "@/components/sections/wyckoff-indicators/Wyckoff";
import PTA from "@/components/sections/pta/PTA";


export default function Hero() {
  return (
    <div className="mt-20 ">
      <Container >
        <OurServices />
        <Trust />
        <SignalsAndIndicators />
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-0" >
        <PTA />
        </div>
        <Wyckoff />
        <FAQ />
        <Blogs />
        </Container>

      <Footer />
    </div>
  );
}