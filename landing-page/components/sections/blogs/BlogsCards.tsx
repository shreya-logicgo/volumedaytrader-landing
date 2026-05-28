"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import blog1 from "@/assets/images/blog/blog-1.png";
import blog2 from "@/assets/images/blog/blog-2.png";
import blog3 from "@/assets/images/blog/blog-3.png";

type BlogCard = {
  key: "blog1" | "blog2" | "blog3";
  image: StaticImageData;
  tint: string;
  category: string;
  date: string;
  title: string;
  button: string;
};

const BLOGS: BlogCard[] = [
  {
    key: "blog1",
    image: blog1,
    tint: "from-[#7c3aed]/20 via-transparent to-transparent",
    category: "Digital Marketing",
    date: "Jul 31, 2026",
    title: "Strategies for Boosting Online Engagement Today",
    button: "Learn More",
  },
  {
    key: "blog2",
    image: blog2,
    tint: "from-[#0ea5e9]/20 via-transparent to-transparent",
    category: "Digital Marketing",
    date: "Oct 11, 2024",
    title: "User-Centric Product Design, A Complete Guide From Scratch",
    button: "Learn More",
  },
  {
    key: "blog3",
    image: blog3,
    tint: "from-[#f97316]/20 via-transparent to-transparent",
    category: "Digital Marketing",
    date: "Jul 7, 2024",
    title: "Top Design Trends Driving Business Success & Growth",
    button: "Learn More",
  },
];

const BlogsCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-18 md:grid-cols-2 xl:grid-cols-3">
      {BLOGS.map((blog) => (
        <article
          key={blog.key}
          className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#120a33] shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${blog.tint}`} />
          </div>

          <div className="space-y-4 p-5">
            <div className="flex items-center gap-2 text-base text-secondary-text font-medium">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {blog.category}
              </span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>

            <h3 className="text-lg font-semibold leading-snug text-white">
              {blog.title}
            </h3>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[17px] font-medium text-secondary-text transition hover:text-white"
            >
              {blog.button}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogsCards;