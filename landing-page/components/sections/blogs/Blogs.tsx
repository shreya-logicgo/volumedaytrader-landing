"use client";

import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
import Vector from "@/assets/icons/Vector.svg";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import BlogsCards from "./BlogsCards";

const Blogs = () => {
  const { t } = useTranslation("translation", { keyPrefix: "blogs" });

  return (
    <section id="blogs" className="section-pb">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="relative mx-auto flex w-full max-w-[717px] flex-col gap-2 overflow-hidden">
          <Badge text={t("badge")} />
        </div>

        <div className="section-header-stack relative z-10 mx-auto">
          <Heading className="mx-auto max-w-3xl px-1 sm:px-0" text={t("title")} />
          <SubHeading
            className="mx-auto max-w-2xl px-2 sm:px-0"
            text={t("description")}
          />
        </div>
      </div>

      <BlogsCards />

      <div className="mt-8 flex justify-center px-4 sm:mt-10 md:mt-12">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white sm:px-6 sm:py-3 sm:text-base"
        >
          <span>{t("allBlogsButton")}</span>
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            <Vector className="block h-3 w-3" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
