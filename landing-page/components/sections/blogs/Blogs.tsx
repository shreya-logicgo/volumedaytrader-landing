"use client";

import Badge from "@/components/ui/badge/Badge";
import SectionTitleWrap from "@/components/ui/heading/Sectiontitlewrap";
// import Heading from "@/components/ui/heading/Heading";
// import SubHeading from "@/components/ui/subheading/SubHeading";
import { useTranslation } from "react-i18next";

import BlogsCards from "./BlogsCards";
import CtaFlowLink from "@/components/ui/cta-flow/CtaFlowLink";

const Blogs = () => {
  const { t } = useTranslation("translation", { keyPrefix: "blogs" });

  return (
    <section id="blogs" className="scroll-anchor-offset section-pb">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="badge-wrap flex flex-col gap-2">
          <Badge text={t("badge")} />
        </div>

        {/* <div className="section-header-stack relative z-10 mx-auto">
          <Heading className="mx-auto max-w-3xl px-1 sm:px-0" text={t("title")} />
          <SubHeading
            className="mx-auto max-w-2xl px-2 sm:px-0"
            text={t("description")}
          />
        </div> */}
        <SectionTitleWrap heading={t("title")} subheading={t("description")} />
      </div>

      <BlogsCards />

      <div className="mt-12 flex justify-center ">
        <CtaFlowLink
          href="/blogs"
          label={t("allBlogsButton")}
          arrowClassName="h-3 w-3"
          className="flex items-center gap-2 shadow-control-inset rounded-full border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
        />
      </div>
    </section>
  );
};

export default Blogs;
