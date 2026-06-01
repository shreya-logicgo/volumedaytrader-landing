"use client";

import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "./blogPosts";

const HOME_BLOG_KEYS = ["post1", "post2", "post3"] as const;

const BlogsCards = () => {
  const { t } = useTranslation("translation", { keyPrefix: "blogs" });

  return (
    <div className="grid grid-cols-1 gap-5 pt-18 sm:grid-cols-2 xl:grid-cols-[repeat(3,440px)] xl:justify-between">
      {HOME_BLOG_KEYS.map((postKey, index) => {
        const post = BLOG_POSTS[index];

        return (
          <div key={postKey}>
            <BlogCard
              image={post.image}
              category={t(`page.posts.${postKey}.category`)}
              date={t(`page.posts.${postKey}.date`)}
              title={t(`page.posts.${postKey}.title`)}
              buttonLabel={t(`page.posts.${postKey}.button`)}
              href={`/blogs/${postKey}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogsCards;
