"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  date: string;
  readTime: string;
  title: string;
}

export default function BlogCard({
  href,
  imageSrc="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  imageAlt = "",
  date,
  readTime,
  title,
}: BlogCardProps) {
  return (
    <div
      className="flex flex-col gap-6"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* ── Image block ── */}
      <Link
        href={href}
        aria-label="Blog"
        className="blog-image-block group relative w-full overflow-hidden"
      >
        {/* Main image — starts skewed/scaled, resets on hover */}
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="
            block w-full object-cover
            transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            [transform:translate3d(0px,0px,0px)_scale3d(1.2,1.2,1)_skew(0deg,5deg)]
            [transform-style:preserve-3d]
            group-hover:[transform:translate3d(0px,0px,0px)_scale3d(1,1,1)_skew(0deg,0deg)]
          "
        />

        {/* Hover overlay — slides up from bottom (height 0 → 100%) */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-0 overflow-hidden
            transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:h-full
          "
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* ── Content block ── */}
      <Link href={href} className="blog-content-wrap flex flex-col gap-3 no-underline">

        {/* Date + read time */}
        <div className="flex items-center gap-2">
          <p className="m-0 text-sm text-[#989898]">{date}</p>
          <p className="m-0 text-sm text-[#989898]">|</p>
          <p className="m-0 text-sm text-[#989898]">{readTime}</p>
        </div>

        {/* Title */}
        <h3 className="m-0 font-['Inter_Tight',sans-serif] text-2xl font-medium leading-snug tracking-[-0.86px] text-white">
          {title}
        </h3>

        {/* Learn More button */}
        <LearnMoreBtn />
      </Link>
    </div>
  );
}

function LearnMoreBtn() {
  return (
    <div className="group/btn relative flex items-center gap-3 cursor-pointer">
      <span className="font-['Inter_Tight',sans-serif] text-base text-[#989898] transition-colors duration-300 group-hover/btn:text-white">
        Learn More
      </span>

      {/* Arrow icon */}
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          className="text-[#989898] transition-colors duration-300 group-hover/btn:text-white"
        >
          <path
            d="M15.6183 10.1309H4.2207"
            stroke="currentColor"
            strokeWidth="1.68852"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.9746 15.1966C10.9746 15.1966 16.0402 11.4659 16.0402 10.131C16.0402 8.79606 10.9746 5.06543 10.9746 5.06543"
            stroke="currentColor"
            strokeWidth="1.68852"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Underline that grows on hover */}
      <span
        className="
          absolute bottom-0 left-0 h-px bg-white
          w-0 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover/btn:w-full
        "
      />
    </div>
  );
}