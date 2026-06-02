"use client";

import Link from "next/link";
import { useRef, useState } from "react";

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
  imageSrc,
  imageAlt = "",
  date,
  readTime,
  title,
}: BlogCardProps) {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-6 items-start">

      {/* ── Image block ── */}
      <Link
        href={href}
        aria-label="Blog"
        ref={containerRef as any}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full flex flex-col items-end overflow-hidden"
        style={{ display: "flex" }}
      >
        {/* Main image — skewed/scaled by default, resets on hover */}
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="block w-full max-w-full object-cover object-[50%_0%]"
          style={{
            transform: hovered
              ? "translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)"
              : "translate3d(0px,0px,0px) scale3d(1.2,1.2,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,5deg)",
            transformStyle: "preserve-3d",
            transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* Hover overlay — absolute inset-0, overflow hidden, height animates 0 → 100% */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            height: hovered ? "100%" : "0px",
            transition: "height 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="w-full max-w-full object-cover object-[50%_0%]"
            style={{
              // Pin the image to the bottom of the reveal container so it appears
              // to wipe up — matches Growra's exact behaviour
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </Link>

      {/* ── Content block ── */}
      <Link
        href={href}
        className="flex flex-col gap-3 w-full no-underline"
        style={{ textDecoration: "none" }}
      >
        {/* Date + read time */}
        <div className="flex items-center gap-2">
          <p className="m-0 text-sm text-[#989898]">{date}</p>
          <p className="m-0 text-sm text-[#989898]">|</p>
          <p className="m-0 text-sm text-[#989898]">{readTime}</p>
        </div>

        {/* Title */}
        <h3
          className="m-0 text-white font-medium leading-snug"
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: "24px",
            letterSpacing: "-0.86px",
          }}
        >
          {title}
        </h3>

        {/* Learn More button */}
        <LearnMoreBtn />
      </Link>
    </div>
  );
}

function LearnMoreBtn() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center gap-2 cursor-pointer w-fit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="text-base"
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          color: hovered ? "#ffffff" : "#989898",
          transition: "color 300ms ease",
        }}
      >
        Learn More
      </span>

      {/* Arrow */}
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          style={{
            color: hovered ? "#ffffff" : "#989898",
            transition: "color 300ms ease",
          }}
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

      {/* Growing underline */}
      <span
        className="absolute bottom-0 left-0 h-px bg-white"
        style={{
          width: hovered ? "100%" : "0%",
          transition: "width 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}