"use client";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer/Footer";
import Container from "@/components/layout/container/Container";
import BlogPageBackground from "@/components/sections/blogs/BlogPageBackground";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactHero from "@/components/sections/contact/ContactHero";
import FAQ from "@/components/sections/faq/FAQ";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pt-28 md:pt-32 lg:pt-36">
      <BlogPageBackground />

      <Container>
        <Navbar />
      </Container>

      <section className="relative z-10">
        {/* <Container> */}
          <ContactHero />
        {/* </Container> */}

        {/* <Container> */}
          <div className="mx-auto mt-16 w-full max-w-[1000px] md:mt-20">
            <ContactForm />
          </div>
        {/* </Container> */}
      </section>

      <div className="relative z-10 mt-24 md:mt-28">
        {/* <Container> */}
          <FAQ/>
        {/* </Container> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
