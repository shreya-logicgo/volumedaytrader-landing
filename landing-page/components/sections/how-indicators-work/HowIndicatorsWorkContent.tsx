"use client";

import Image, { type StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { HOW_INDICATORS_BLOCKS } from "./howIndicatorsContent";

function ContentImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div
      className="relative h-[min(542px,60vw)] w-full overflow-hidden rounded-[20px]"
      style={{ position: "relative" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 920px) 100vw, 920px"
      />
    </div>
  );
}

function HeadingBody({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-[40px] font-bold leading-[54px] text-white">{title}</h2>
      <p className="whitespace-pre-line text-lg leading-6 text-secondary-text">
        {body}
      </p>
    </div>
  );
}

function BodyParagraph({ body }: { body: string }) {
  return (
    <p className="whitespace-pre-line text-lg leading-6 text-secondary-text">
      {body}
    </p>
  );
}

export default function HowIndicatorsWorkContent() {
  const { t } = useTranslation("translation", {
    keyPrefix: "howIndicatorsWork",
  });

  return (
    <div className="mx-auto flex w-full max-w-[920px] flex-col gap-[60px]">
      {HOW_INDICATORS_BLOCKS.map((block, index) => {
        if (block.type === "headingBody") {
          return (
            <HeadingBody
              key={`${block.titleKey}-${index}`}
              title={t(block.titleKey)}
              body={t(block.bodyKey)}
            />
          );
        }

        if (block.type === "image") {
          return (
            <ContentImage
              key={`${block.altKey}-${index}`}
              src={block.image}
              alt={t(block.altKey)}
            />
          );
        }

        return (
          <BodyParagraph
            key={`${block.bodyKey}-${index}`}
            body={t(block.bodyKey)}
          />
        );
      })}
    </div>
  );
}
