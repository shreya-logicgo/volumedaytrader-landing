"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import CtaFlowLink from "@/components/ui/cta-flow/CtaFlowLink";
import Heading from "@/components/ui/heading/Heading";
import BlogCard from "./BlogCard";
import type { BlogPost } from "./blogPosts";

type SimilarBlogsProps = {
  posts: BlogPost[];
};

export default function SimilarBlogs({ posts }: SimilarBlogsProps) {
  const { t } = useTranslation("translation", { keyPrefix: "blogs" });

  return (
    <section className="flex flex-col gap-8 border-t border-[#1D1E38] pt-10 md:gap-10 md:pt-12">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Heading
          as="h2"
          variant="page-content"
          align="left"
          text={t("detail.similarBlogs")}
        />

        <CtaFlowLink
          href="/blogs"
          label={t("detail.allBlogs")}
          arrowClassName="h-3.5 w-3.5 sm:h-4 sm:w-4"
          className="inline-flex items-center gap-2 rounded-full bg-[#151032] px-4 py-2 text-sm font-medium text-white shadow-[inset_0px_1.41px_3.18px_0px_rgba(255,255,255,0.5)] transition hover:bg-[#1a1440] sm:text-base"
        />
      </div>

      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:justify-between">
        {posts.map((post) => (
          <div key={post.key}>
            <BlogCard
              image={post.image}
              category={t(`page.posts.${post.key}.category`)}
              date={t(`page.posts.${post.key}.date`)}
              title={t(`page.posts.${post.key}.title`)}
              buttonLabel={t(`page.posts.${post.key}.button`)}
              href={`/blogs/${post.slug}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
