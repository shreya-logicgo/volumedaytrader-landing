import type { StaticImageData } from "next/image";
import blog1 from "@/assets/images/blog/blog-1.png";
import blog2 from "@/assets/images/blog/blog-2.png";
import blog3 from "@/assets/images/blog/blog-3.png";
import blog4 from "@/assets/images/blog/blog-4.png";
import blog5 from "@/assets/images/blog/blog-5.png";
import blog6 from "@/assets/images/blog/blog-6.png";

export type BlogPostKey =
  | "post1"
  | "post2"
  | "post3"
  | "post4"
  | "post5"
  | "post6"
  | "post7"
  | "post8"
  | "post9";

export type BlogPost = {
  key: BlogPostKey;
  image: StaticImageData;
};

export const BLOG_POSTS: BlogPost[] = [
  { key: "post1", image: blog1 },
  { key: "post2", image: blog2 },
  { key: "post3", image: blog3 },
  { key: "post4", image: blog4 },
  { key: "post5", image: blog5 },
  { key: "post6", image: blog6 },
  { key: "post7", image: blog1 },
  { key: "post8", image: blog2 },
  { key: "post9", image: blog3 },
];
