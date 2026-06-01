"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Vector from "@/assets/icons/Vector.svg";
import blogAuthor from "@/assets/images/blog/blog-author.png";
import blogDetail1 from "@/assets/images/blog/blog-detail-1.png";
import blogDetail2 from "@/assets/images/blog/blog-detail-2.png";
import type { BlogPost, BlogPostKey } from "./blogPosts";

type BlogDetailViewProps = {
  post: BlogPost;
};

function MetaDot() {
  return (
    <span
      className="h-1 w-1 shrink-0 rounded-full bg-[#D9D9D9]"
      aria-hidden
    />
  );
}

function parseListItems(body: string) {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^-\s*/, ""));
}

function ArticleSection({
  title,
  body,
  isList = false,
}: {
  title: string;
  body: string;
  isList?: boolean;
}) {
  if (isList) {
    const items = parseListItems(body);
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-[40px] font-bold leading-[54px] text-white">
          {title}
        </h2>
        <ul className="list-disc space-y-3 pl-5 text-lg leading-6 text-secondary-text marker:text-secondary-text">
          {items.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[40px] font-bold leading-[54px] text-white">{title}</h2>
      <p className="text-lg leading-6 text-secondary-text">{body}</p>
    </div>
  );
}

const blogPillButtonClassName =
  "inline-flex w-fit items-center gap-2 rounded-full bg-[#151032] px-4 py-2 text-sm font-medium text-white shadow-[inset_0px_1.41px_3.18px_0px_rgba(255,255,255,0.5)] transition hover:bg-[#1a1440] sm:text-base";

export default function BlogDetailView({ post }: BlogDetailViewProps) {
  const { t } = useTranslation("translation", { keyPrefix: "blogs" });
  const postKey = post.key as BlogPostKey;
  const isPrimaryDetailPost = postKey === "post1";

  const author = t("detail.posts.post1.author");
  const detailDate = isPrimaryDetailPost
    ? t("detail.posts.post1.date")
    : t(`page.posts.${postKey}.date`);
  const excerpt = isPrimaryDetailPost
    ? t("detail.posts.post1.excerpt")
    : t("detail.posts.post1.excerpt");

  return (
    <div className="mx-auto flex w-full max-w-[960px] flex-col gap-10">
      <Link href="/blogs" className={blogPillButtonClassName}>
        <Vector className="h-3.5 w-3.5 shrink-0 rotate-180 sm:h-4 sm:w-4" aria-hidden="true" />
        {t("detail.backToBlogs")}
      </Link>

      <article className="flex flex-col gap-8 md:gap-10">
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-[30px]">
            <div
              className="relative h-8 w-8 shrink-0 overflow-hidden rounded-[24px]"
              style={{ position: "relative" }}
            >
              <Image
                src={blogAuthor}
                alt={author}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-lg text-secondary-text">{author}</span>
              <MetaDot />
              <span className="text-lg text-secondary-text">{detailDate}</span>
              <MetaDot />
              <span className="inline-flex items-center justify-center rounded-full bg-[#151032] px-3 py-2 text-base font-medium text-white shadow-[inset_0px_1.41px_3.18px_0px_rgba(255,255,255,0.5)]">
                {t(`page.posts.${postKey}.category`)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[48px] font-bold leading-[54px] text-white">
              {t(`page.posts.${postKey}.title`)}
            </h1>
            <p className="text-lg leading-6 text-secondary-text">{excerpt}</p>
          </div>
        </header>

        <div
          className="relative h-[min(542px,60vw)] w-full overflow-hidden rounded-[20px]"
          style={{ position: "relative" }}
        >
          <Image
            src={blogDetail1}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 960px"
            priority
          />
        </div>

        <ArticleSection
          title={t("detail.posts.post1.section1Title")}
          body={t("detail.posts.post1.section1Body")}
          isList
        />

        <div
          className="relative h-[min(542px,60vw)] w-full overflow-hidden rounded-[20px]"
          style={{ position: "relative" }}
        >
          <Image
            src={blogDetail2}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 960px"
          />
        </div>

        <ArticleSection
          title={t("detail.posts.post1.section2Title")}
          body={t("detail.posts.post1.section2Body")}
        />
        <ArticleSection
          title={t("detail.posts.post1.section3Title")}
          body={t("detail.posts.post1.section3Body")}
        />
      </article>
    </div>
  );
}
