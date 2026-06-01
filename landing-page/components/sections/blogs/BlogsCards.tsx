"use client";

import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "./blogPosts";

const HOME_BLOG_KEYS = ["post1", "post2", "post3"] as const;

const BlogsCards = () => {
  const { t } = useTranslation("translation", { keyPrefix: "blogs" });

  return (
    <div className="content-pt mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-6 md:gap-6 lg:px-8 xl:grid-cols-3">
      {HOME_BLOG_KEYS.map((postKey, index) => {
        const post = BLOG_POSTS[index];

        return (
          <BlogCard
            key={postKey}
            image={post.image}
            category={t(`page.posts.${postKey}.category`)}
            date={t(`page.posts.${postKey}.date`)}
            title={t(`page.posts.${postKey}.title`)}
            buttonLabel={t(`page.posts.${postKey}.button`)}
            href={`/blogs/${postKey}`}
          />
        );
      })}
    </div>
  );
};

export default BlogsCards;
