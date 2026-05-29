"use client";

import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
import Vector from "@/assets/icons/vector.svg";
import React from "react";
import { useTranslation } from "react-i18next";

import BlogsCards from "./BlogsCards";

const Blogs = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'blogs' });

  return (
    <section className="section-pb">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
          <Badge text={t('badge')} />
        </div>

        <div className="relative z-10 mx-auto section-header-stack">
          <Heading className="mx-auto max-w-3xl" text={t('title')} />
          <SubHeading className="mx-auto max-w-2xl" text={t('description')} />
        </div>
      </div>

      <BlogsCards />

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-white/80 transition hover:bg-white/10 hover:text-white">
          <span>{t('allBlogsButton')}</span>

          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            <Vector className="block h-3 w-3" aria-hidden="true" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Blogs;