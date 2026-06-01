"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Vector from "@/assets/icons/Vector.svg";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
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
      <div className="page-content-block">
        <Heading as="h2" variant="page-content" align="left" text={title} />
        <ul className="page-content-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="page-content-block">
      <Heading as="h2" variant="page-content" align="left" text={title} />
      <SubHeading variant="page-content" align="left" text={body} />
    </div>
  );
}

function ContentImage({
  src,
  alt,
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:rounded-3xl">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 960px) 100vw, 960px"
      />
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
    <div className="mx-auto flex w-full max-w-[960px] flex-col gap-8 px-4 sm:gap-10 sm:px-6 lg:px-8">
      <Link href="/blogs" className={blogPillButtonClassName}>
        <Vector className="h-3.5 w-3.5 shrink-0 rotate-180 sm:h-4 sm:w-4" aria-hidden="true" />
        {t("detail.backToBlogs")}
      </Link>

      <article className="page-content-stack">
        <header className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full sm:h-9 sm:w-9">
              <Image
                src={blogAuthor}
                alt={author}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="page-content-desc text-left">{author}</span>
              <MetaDot />
              <span className="page-content-desc text-left">{detailDate}</span>
              <MetaDot />
              <span className="inline-flex items-center justify-center rounded-full bg-[#151032] px-2.5 py-1 text-xs font-medium text-white shadow-[inset_0px_1.41px_3.18px_0px_rgba(255,255,255,0.5)] sm:px-3 sm:py-1.5 sm:text-sm">
                {t(`page.posts.${postKey}.category`)}
              </span>
            </div>
          </div>

          <div className="page-hero-stack">
            <Heading
              as="h1"
              variant="page-hero"
              align="left"
              text={t(`page.posts.${postKey}.title`)}
            />
            <SubHeading variant="page-hero" align="left" text={excerpt} />
          </div>
        </header>

        <ContentImage src={blogDetail1} alt="" priority={true} />

        <ArticleSection
          title={t("detail.posts.post1.section1Title")}
          body={t("detail.posts.post1.section1Body")}
          isList
        />

        <ContentImage src={blogDetail2} alt="" />

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
