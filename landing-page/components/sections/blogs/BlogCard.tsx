"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Arrow from "@/assets/icons/Arrow.svg";

export type BlogCardProps = {
  image: StaticImageData;
  category: string;
  date: string;
  title: string;
  buttonLabel: string;
  href?: string;
};

export default function BlogCard({
  image,
  category,
  date,
  title,
  buttonLabel,
  href = "#",
}: BlogCardProps) {
  return (
    <article className="flex w-full flex-col gap-2.5 rounded-[24px] border border-card-border bg-card-bg p-2.5 pb-4 shadow-[0px_-4px_100px_21px_#18193333_inset]">
      <div
        className="relative h-[276px] w-full overflow-hidden rounded-[14px]"
        style={{ position: "relative" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 440px"
        />
      </div>

      <div className="flex flex-col gap-5 px-2.5 pb-2.5 pt-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center justify-center rounded-full bg-[#151032] px-3 py-2 text-base font-medium leading-5 text-secondary-text shadow-[inset_0px_1.41px_3.18px_0px_rgba(255,255,255,0.5)]">
              {category}
            </span>
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-secondary-text"
              aria-hidden
            />
            <span className="text-base font-medium leading-[19.2px] text-secondary-text">
              {date}
            </span>
          </div>

          <h3 className="text-xl font-semibold line-clamp-2 leading-snug text-white">{title}</h3>
        </div>

        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 py-px text-[17px] font-normal text-secondary-text transition hover:text-white"
        >
          {buttonLabel}
          <Arrow className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
