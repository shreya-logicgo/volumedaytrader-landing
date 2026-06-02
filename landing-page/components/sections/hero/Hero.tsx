"use client"

import Link from 'next/link'
import Image from "next/image"
import { useTranslation } from "react-i18next"
import HeroChart from "./HeroChart"
import VectorArrow from "@/components/ui/vector-arrow/VectorArrow";
import { Particles } from "@/components/ui/particles";


function HeroFeatureTag({ label, compact }: { label: string; compact?: boolean }) {
    return (
        <div
            className={`inline-flex  items-center gap-2 px-3 py-2 rounded-full bg-[#151032] shadow-control-inset
                }`}
        >
            <Image
                src="/assets/icons/check.svg"
                alt=""
                width={22}
                height={22}
                className={`shrink-0 ${compact ? "h-[18px] w-[18px]" : "h-[18px] w-[18px] 2xl:h-[22px] 2xl:w-[22px]"}`}
            />
            <span
                className={`whitespace-nowrap font-medium text-white ${compact ? "text-sm" : "text-lg"
                    }`}
            >
                {label}
            </span>
        </div>
    )
}

export default function Hero() {
    const { t } = useTranslation()

    const titleParts = t("hero.title")
        .split(". ")
        .filter(Boolean)
        .map((part, index, arr) => (index < arr.length - 1 ? `${part}.` : part))

    const floatingTags = [
        {
            label: t("hero.leftTopTag"),
            className: "left-[3%] top-[14%] 2xl:left-[8%]",
        },
        {
            label: t("hero.leftBottomTag"),
            className: "left-[6%] top-[28%] 2xl:left-[12%]",
        },
        {
            label: t("hero.rightTopTag"),
            className: "right-[3%] top-[14%] 2xl:right-[8%]",
        },
        {
            label: t("hero.rightBottomTag"),
            className: "right-[6%] top-[28%] 2xl:right-[12%]",
        },
    ]

    return (
        <section className="relative overflow-x-clip pt-8 sm:pt-12 md:pt-16 lg:pt-20 2xl:pt-28">
            {/* Starry background */}
            {/* <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
                aria-hidden
            /> */}

            {/* Center subtle glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-[220px] w-[min(900px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(80,40,120,0.18)_0%,transparent_70%)] sm:h-[280px] lg:h-[320px]"
                aria-hidden
            />

            {/* Particles background (client-only canvas) */}
            <div className="pointer-events-none absolute inset-0 z-[5] -translate-y-30 md:-translate-y-35 lg:-translate-y-40  ">
                <Particles quantity={90} size={0.9} color="#ffffff" className="opacity-70" />
            </div>


            <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block ">
                {floatingTags.map((tag, index) => (
                    <div
                        key={tag.label}
                        className={`absolute max-w-[min(240px,22vw)] scale-90 ${tag.className}`}
                    >
                        <div className="hero-tag-bounce" style={{ animationDelay: `${index * 180}ms` }}>
                            <HeroFeatureTag label={tag.label} />
                        </div>
                    </div>
                ))}
            </div>


            <div className="relative  z-30 mx-auto w-full max-w-[872px] px-4 text-center sm:px-6">
                {/* Top pill badge */}
                <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#1D1938] bg-[#151032] px-2 py-1.5 backdrop-blur-sm sm:gap-2 2xl:gap-3 2xl:px-3 2xl:py-2">
                    <span className="rounded-2xl bg-[#1D1938] px-2 py-0.5 text-[10px] font-normal tracking-wide text-white shadow-control-inset sm:px-2.5 sm:py-1 sm:text-sm 2xl:text-lg">
                        {t("hero.newBadge")}
                    </span>
                    <span className="text-center text-[10px] text-[#A7ADBE] sm:text-sm 2xl:text-lg">
                        {t("hero.badge")}
                    </span>
                </div>

                {/* Heading scales down on small screens; full size only at 2xl */}
                <h1 className="mx-auto mt-4 max-w-[652px] text-[clamp(1.375rem,5vw+0.65rem,3.75rem)]  lg:text-[47px] font-bold leading-[1.2] tracking-normal text-white sm:mt-6 md:mt-8 2xl:mt-8 2xl:leading-[1.2]">
                    {titleParts.join(' ')}
                </h1>

                <p className="mx-auto mt-3 max-w-[640px] px-1 text-[clamp(0.8125rem,1.6vw+0.45rem,1.25rem)] lg:text-[18px] leading-relaxed text-secondary-text sm:mt-4 md:mt-5 2xl:mt-5 2xl:leading-snug">
                    {t("hero.description")}
                </p>

                {/* CTAs */}
                <div className="mx-auto mt-5 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-6 sm:max-w-lg sm:flex-row sm:items-center sm:justify-center sm:gap-4 2xl:mt-8 2xl:max-w-none">
                    <Link
                        href="https://volumedaytrader.com/login/"
                        className="btn-primary font-medium w-full justify-center px-5 py-2.5 text-sm sm:w-auto sm:px-6 sm:py-3 sm:text-base 2xl:inline-flex 2xl:px-7 2xl:text-lg shadow-control-inset cursor-pointer"
                    >
                        {t("hero.primaryButton")}
                        <VectorArrow className="h-3 w-3" />
                    </Link>
                    <Link
                        href="https://volumedaytrader.com/login/"
                        className="inline-flex w-full items-center justify-center shadow-control-inset gap-2 rounded-full border border-[#2B2A56] bg-[#0D082B]/80 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-[#3d3c6e] sm:w-auto sm:px-6 sm:text-base 2xl:px-7 2xl:py-3 2xl:text-lg cursor-pointer"
                    >
                        {t("hero.secondaryButton")}
                        <VectorArrow className="h-3 w-3" />
                    </Link>
                </div>

                {/* Stacked tags below content until 2xl */}
                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 xl:hidden">
                    {floatingTags.map((tag, index) => (
                        <div
                            key={tag.label}
                            className="hero-tag-bounce flex justify-center px-1"
                            style={{ animationDelay: `${index * 180}ms` }}
                        >
                            <HeroFeatureTag label={tag.label} compact />
                        </div>
                    ))}
                </div>
            </div>

            <HeroChart />
        </section>
    )
}