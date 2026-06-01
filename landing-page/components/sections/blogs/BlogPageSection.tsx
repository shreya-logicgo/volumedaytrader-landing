"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "./blogPosts";

export default function BlogPageSection() {
  const { t } = useTranslation("translation", { keyPrefix: "blogs" });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return BLOG_POSTS;

    return BLOG_POSTS.filter((post) => {
      const category = t(`page.posts.${post.key}.category`).toLowerCase();
      const date = t(`page.posts.${post.key}.date`).toLowerCase();
      const title = t(`page.posts.${post.key}.title`).toLowerCase();
      return (
        category.includes(query) ||
        date.includes(query) ||
        title.includes(query)
      );
    });
  }, [searchTerm, t]);

  return (
    <div className="mx-auto flex w-full max-w-[1360px] justify-center flex-col items-center">
      <div className="mx-auto w-full max-w-4xl text-center">
        <div className="relative mx-auto flex max-w-[717px] flex-col gap-2">
          <Badge text={t("page.badge")} />
        </div>

        <div className="relative z-10 mx-auto section-header-stack">
          <Heading
            as="h1"
            className="mx-auto max-w-3xl px-1 sm:px-0"
            text={t("page.title")}
          />
          <SubHeading
            className="mx-auto max-w-[530px] px-2 sm:px-0"
            text={t("page.description")}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-7 sm:gap-9">
          <div className="group relative w-full max-w-full sm:max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-4 z-10 flex items-center">
              <Search className="h-4 w-4 text-[#999999] transition-colors group-focus-within:text-white sm:h-5 sm:w-5" />
            </div>

            <input
              type="text"
              placeholder={t("page.searchPlaceholder")}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-full border border-white/5 bg-white/5 py-3.5 pl-11 pr-11 text-sm backdrop-blur-md transition-all duration-300 placeholder:text-[#999999] focus:border-white/20 focus:bg-white/10 focus:outline-none sm:py-3 sm:pl-12 sm:pr-12 sm:text-base lg:text-lg"
            />

            {searchTerm ? (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-4 z-10 flex cursor-pointer items-center text-[#C7CCD2] transition-colors hover:text-white"
                aria-label={t("page.clearSearch")}
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="w-full pt-20">
        {filteredPosts.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:justify-between">
            {filteredPosts.map((post) => (
              <div key={post.key}>
                <BlogCard
                  image={post.image}
                  category={t(`page.posts.${post.key}.category`)}
                  date={t(`page.posts.${post.key}.date`)}
                  title={t(`page.posts.${post.key}.title`)}
                buttonLabel={t(`page.posts.${post.key}.button`)}
                href={`/blogs/${post.key}`}
              />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-base text-[#C7CCD2] sm:text-lg">
            {t("page.noResults", { searchTerm })}
          </p>
        )}
      </div>
    </div>
  );
}
