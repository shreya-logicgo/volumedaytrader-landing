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
    <article className="flex w-full min-w-0 flex-col gap-2 rounded-[20px] border border-card-border bg-card-bg p-2 pb-3 shadow-[0px_-4px_100px_21px_#18193333_inset] sm:gap-2.5 sm:rounded-[24px] sm:p-2.5 sm:pb-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-auto sm:h-[220px] md:h-[250px] lg:h-[276px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-3 px-2 pb-1 pt-2 sm:gap-4 sm:px-2.5 sm:pb-2.5 sm:pt-3 md:gap-5 md:pt-4">
        <div className="flex flex-col gap-2 sm:gap-2.5">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:gap-2.5">
            <span className="inline-flex items-center justify-center rounded-full bg-[#151032] px-2.5 py-1 text-xs font-medium text-secondary-text shadow-[inset_0px_1.41px_3.18px_0px_rgba(255,255,255,0.5)] sm:px-3 sm:py-1.5 sm:text-sm">
              {category}
            </span>
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-secondary-text"
              aria-hidden
            />
            <span className="text-xs font-medium text-secondary-text sm:text-sm">
              {date}
            </span>
          </div>

          <h3 className="card-heading text-left text-base font-semibold line-clamp-2 leading-snug text-white sm:text-lg lg:text-xl">{title}</h3>
        </div>

        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 text-sm text-secondary-text transition hover:text-white sm:text-base"
        >
          {buttonLabel}
          <Arrow className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
