"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import ArrowSlideIcon from "@/components/ui/arrow-slide/ArrowSlideIcon";
import { usePremiumBlogCardHover } from "@/hooks/usePremiumBlogCardHover";
import { cn } from "@/lib/utils";

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
  const { cardRef, mediaRef, imageRef, lightRef, onEnter, onLeave } =
    usePremiumBlogCardHover();

  return (
    <article
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        "blog-card-premium group flex w-full min-w-0 cursor-pointer flex-col gap-2 rounded-[20px] border border-card-border bg-card-bg p-2 pb-3 will-change-transform sm:gap-2.5 sm:rounded-[24px] sm:p-2.5 sm:pb-4"
      )}
    >
      <div
        ref={mediaRef}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-auto sm:h-[220px] md:h-[250px] lg:h-[276px]"
      >
        <div
          ref={imageRef}
          className="relative h-full w-full will-change-transform"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
        <div ref={lightRef} className="blog-card-light-streak" aria-hidden />
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

          <h3 className="card-heading text-left text-base font-semibold line-clamp-2 leading-snug text-white transition-colors duration-300 group-hover:text-white sm:text-lg lg:text-xl">
            {title}
          </h3>
        </div>

        <Link
          href={href}
          className="blog-card-premium__cta inline-flex w-fit items-center gap-2 text-sm text-secondary-text sm:text-base"
          onClick={(e) => e.stopPropagation()}
        >
          {buttonLabel}
          <ArrowSlideIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </Link>
      </div>
    </article>
  );
}
