"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image, { type StaticImageData } from "next/image";
import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import chartSp500 from "@/assets/images/how-indicators/chart-sp500.png";
import chartImage2 from "@/assets/images/chart/chart2.png";
import chartBitcoin from "@/assets/images/how-indicators/chart-bitcoin.png";

const EASE_LUX = "cubic-bezier(0.22, 1, 0.36, 1)";

const POINT_KEYS = [
  "point1",
  "point2",
  "point3",
  "point4",
  "point5",
  "point6",
] as const;

const BULLET_RISE_Y = 120;
const BULLET_STAGGER = 0.12;
const BULLET_DURATION = 0.7;
const ICON_LEAD = 0.07;
const ICON_DURATION = 0.35;

const tabs = [
  { id: "volumeEdge" as const, labelKey: "tabs.volumeEdge" },
  { id: "smartProfits" as const, labelKey: "tabs.smartProfits" },
  { id: "hiddenStrategy" as const, labelKey: "tabs.hiddenStrategy" },
];

type TabId = (typeof tabs)[number]["id"];

const tabVisuals: Record<
  TabId,
  { image: StaticImageData; imageAlt: string }
> = {
  volumeEdge: {
    image: chartSp500,
    imageAlt: "Premium market analysis chart for Volume Edge",
  },
  smartProfits: {
    image: chartImage2,
    imageAlt: "Premium market analysis chart for Smart Profits",
  },
  hiddenStrategy: {
    image: chartBitcoin,
    imageAlt: "Premium market analysis chart for Hidden Strategy",
  },
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const OurIndicators = () => {
  const { t } = useTranslation("translation", { keyPrefix: "ourIndicators" });
  const [activeTab, setActiveTab] = useState<TabId>("volumeEdge");
  const [contentTab, setContentTab] = useState<TabId>("volumeEdge");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const bulletTextRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const bulletIconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const activeTimeline = useRef<gsap.core.Timeline | null>(null);

  const currentVisual = tabVisuals[contentTab];
  const contentPrefix = `contentByTab.${contentTab}`;

  const setBulletTextRef = (index: number) => (node: HTMLSpanElement | null) => {
    bulletTextRefs.current[index] = node;
  };

  const setBulletIconRef = (index: number) => (node: HTMLSpanElement | null) => {
    bulletIconRefs.current[index] = node;
  };

  const getBulletNodes = () => {
    const texts = bulletTextRefs.current.filter(Boolean) as HTMLSpanElement[];
    const icons = bulletIconRefs.current.filter(Boolean) as HTMLSpanElement[];
    return { texts, icons };
  };

  const resetVisibleState = () => {
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const image = imageRef.current;
    const { texts, icons } = getBulletNodes();

    if (!heading || !description || !image) return;

    gsap.set(heading, { opacity: 1, y: 0, clearProps: "transform" });
    gsap.set(description, { opacity: 1, y: 0, clearProps: "transform" });
    gsap.set(image, {
      opacity: 1,
      scale: 1,
      scaleX: 1,
      scaleY: 1,
      filter: "blur(0px)",
      clearProps: "transform,filter",
    });
    gsap.set(texts, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      clearProps: "transform,filter",
    });
    gsap.set(icons, { opacity: 1, scale: 1, clearProps: "transform" });
  };

  const prepareEnterState = () => {
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const image = imageRef.current;
    const { texts, icons } = getBulletNodes();

    if (!heading || !description || !image || texts.length === 0) return null;

    gsap.set(heading, { opacity: 0, y: 30 });
    gsap.set(description, { opacity: 0, y: 20 });
    gsap.set(image, {
      opacity: 0,
      scaleX: 0.75,
      scaleY: 0,
      filter: "blur(12px)",
      transformOrigin: "center center",
      force3D: true,
    });
    gsap.set(texts, {
      opacity: 0,
      y: BULLET_RISE_Y,
      scale: 0.92,
      filter: "blur(8px)",
      transformOrigin: "left center",
      force3D: true,
    });
    gsap.set(icons, {
      opacity: 0,
      scale: 0,
      transformOrigin: "center center",
      force3D: true,
    });

    return { heading, description, image, texts, icons };
  };

  const playEnterAnimation = () => {
    activeTimeline.current?.kill();

    if (prefersReducedMotion()) {
      resetVisibleState();
      return;
    }

    const prepared = prepareEnterState();
    if (!prepared) return;

    const { heading, description, image, texts, icons } = prepared;
    const timeline = gsap.timeline({ defaults: { overwrite: "auto" } });

    timeline.to(
      heading,
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", force3D: true },
      0.05,
    );

    timeline.to(
      description,
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", force3D: true },
      0.12,
    );

    timeline.to(
      image,
      {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: EASE_LUX,
        force3D: true,
      },
      0,
    );

    timeline.to(
      image,
      { scale: 1.03, duration: 0.125, ease: "power2.out", force3D: true },
      0.9,
    );

    timeline.to(
      image,
      { scale: 1, duration: 0.125, ease: "power2.in", force3D: true },
      1.025,
    );

    icons.forEach((icon, index) => {
      const start = 0.28 + index * BULLET_STAGGER;
      timeline.to(
        icon,
        {
          opacity: 1,
          scale: 1,
          duration: ICON_DURATION,
          ease: EASE_LUX,
          force3D: true,
        },
        start,
      );
    });

    texts.forEach((text, index) => {
      const start = 0.28 + index * BULLET_STAGGER + ICON_LEAD;
      timeline.to(
        text,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: BULLET_DURATION,
          ease: EASE_LUX,
          force3D: true,
        },
        start,
      );
    });

    activeTimeline.current = timeline;
  };

  const handleTabChange = (nextTab: TabId) => {
    if (nextTab === activeTab || isTransitioning) return;

    if (prefersReducedMotion()) {
      setActiveTab(nextTab);
      setContentTab(nextTab);
      return;
    }

    const heading = headingRef.current;
    const description = descriptionRef.current;
    const image = imageRef.current;
    const { texts, icons } = getBulletNodes();

    if (!heading || !description || !image) {
      setActiveTab(nextTab);
      setContentTab(nextTab);
      return;
    }

    setActiveTab(nextTab);
    setIsTransitioning(true);
    activeTimeline.current?.kill();

    const timeline = gsap.timeline({
      defaults: { overwrite: "auto" },
      onComplete: () => {
        setContentTab(nextTab);
        setIsTransitioning(false);
      },
    });

    timeline
      .to(
        heading,
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.out",
          force3D: true,
        },
        0,
      )
      .to(
        description,
        {
          opacity: 0,
          y: -15,
          duration: 0.35,
          ease: "power2.out",
          force3D: true,
        },
        0.04,
      )
      .to(
        texts.slice().reverse(),
        {
          opacity: 0,
          y: -48,
          scale: 0.96,
          filter: "blur(4px)",
          duration: 0.3,
          ease: "power2.in",
          stagger: { each: 0.06 },
          force3D: true,
        },
        0,
      )
      .to(
        icons.slice().reverse(),
        {
          opacity: 0,
          scale: 0.6,
          duration: 0.28,
          ease: "power2.in",
          stagger: { each: 0.06 },
          force3D: true,
        },
        0,
      )
      .to(
        image,
        {
          opacity: 0,
          scale: 0.9,
          filter: "blur(6px)",
          duration: 0.6,
          ease: "power2.inOut",
          force3D: true,
        },
        0,
      );

    activeTimeline.current = timeline;
  };

  useLayoutEffect(() => {
    playEnterAnimation();
    return () => {
      activeTimeline.current?.kill();
    };
  }, [contentTab]);

  return (
    <div className="section-pb">
      <section
        id="our-indicators"
        className="scroll-anchor-offset relative z-10 mx-auto"
      >
        <div className="badge-wrap relative mx-auto flex w-full max-w-[717px] flex-col gap-2 overflow-hidden">
          <Badge text={t("badge")} />
        </div>

        <div className="section-header-stack relative z-10 mx-auto text-center">
          <Heading
            className="mx-auto max-w-3xl px-1 sm:px-0"
            text={t("title")}
          />
          <SubHeading
            className="mx-auto max-w-[820px] px-2 leading-snug sm:px-0"
            text={t("description")}
          />
        </div>

        <div className="content-pt flex justify-center px-4 sm:px-6">
          <div
            className={cn(
              "flex w-full max-w-md flex-col gap-1 rounded-xl border border-card-border bg-card-bg p-1",
              "sm:inline-flex sm:w-auto sm:max-w-none sm:flex-row sm:items-center",
            )}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                disabled={isTransitioning}
                aria-pressed={activeTab === tab.id}
                className={cn(
                  "w-full cursor-pointer rounded-lg px-3 py-2 text-center text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-60",
                  "sm:w-auto sm:px-4 sm:py-2 sm:text-sm md:px-5 md:text-base",
                  activeTab === tab.id
                    ? "bg-tab-active text-white shadow-control-inset"
                    : "text-secondary-text hover:text-white",
                )}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[1200px] rounded-3xl border border-card-border bg-card-bg p-4 sm:mt-8 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
            <div className="min-w-0 overflow-visible">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-secondary-text sm:text-xs">
                {t(`tabs.${activeTab}`)}
              </div>

              <h3
                ref={headingRef}
                className="card-heading max-w-[560px] text-left text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl 2xl:text-[40px] 2xl:leading-[1.1]"
              >
                {t(`${contentPrefix}.title`)}
              </h3>

              <p
                ref={descriptionRef}
                className="card-desc mt-3 max-w-[560px] text-left leading-relaxed sm:mt-4"
              >
                {t(`${contentPrefix}.description`)}
              </p>

              <ul className="our-indicators-bullets mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {POINT_KEYS.map((pointKey, index) => (
                  <li
                    key={`${contentTab}-${pointKey}`}
                    className="flex items-start gap-2.5 text-left sm:gap-3"
                  >
                    <span
                      ref={setBulletIconRef(index)}
                      className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-service-accent sm:mt-1 sm:h-5 sm:w-5"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-2.5 w-2.5 fill-none stroke-white sm:h-3 sm:w-3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span
                      ref={setBulletTextRef(index)}
                      className="inline-block text-sm leading-snug text-secondary-text sm:text-base lg:text-lg"
                    >
                      {t(`${contentPrefix}.points.${pointKey}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ourind-image-border bg-ourind-image-bg sm:rounded-3xl">
              <div
                ref={imageRef}
                className="relative min-h-[280px] w-full overflow-hidden rounded-2xl will-change-transform sm:min-h-[360px] sm:rounded-3xl lg:min-h-[520px]"
              >
                <Image
                  key={contentTab}
                  src={currentVisual.image}
                  alt={currentVisual.imageAlt}
                  fill
                  priority={contentTab === "volumeEdge"}
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurIndicators;
