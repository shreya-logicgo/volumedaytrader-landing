"use client"

import Link from 'next/link'
import Image from "next/image"
import { useTranslation } from "react-i18next"
import HeroChart from "./HeroChart"
import Vector from "@/assets/icons/Vector.svg";


function HeroFeatureTag({ label, compact }: { label: string; compact?: boolean }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full bg-signal-panel-bg px-3 py-2 shadow-control-inset">
            <Image
                src="/assets/icons/check.svg"
                alt=""
                width={22}
                height={22}
                className={`shrink-0 size-4.5 2xl:size-5.5`}
            />
            <span
                className={`whitespace-nowrap font-medium text-white ${compact ? "text-sm" : "text-lg"}`}
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
            className: "left-2 top-1/6 2xl:left-8",
        },
        {
            label: t("hero.leftBottomTag"),
            className: "left-4 top-1/4 2xl:left-12",
        },
        {
            label: t("hero.rightTopTag"),
            className: "right-2 top-1/6 2xl:right-8",
        },
        {
            label: t("hero.rightBottomTag"),
            className: "right-4 top-1/4 2xl:right-12",
        },
    ]

    return (
        <section className="relative left-1/2 w-screen max-w-screen-2xl -translate-x-1/2 overflow-x-clip pt-6 sm:pt-8 md:pt-12 lg:pt-16">
            {/* Starry background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
                aria-hidden
            />

            {/* Center subtle glow */}
            <div
                className="hero-center-glow pointer-events-none absolute left-1/2 top-2/5 z-0 h-56 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-72 lg:h-80"
                aria-hidden
            />

            <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
                {floatingTags.map((tag) => (
                    <div key={tag.label} className={`absolute max-w-60 ${tag.className}`}>
                        <HeroFeatureTag label={tag.label} />
                    </div>
                ))}
            </div>

            <div className="relative z-30 mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
                {/* Top pill badge */}
                <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-pricing-header-bg bg-signal-panel-bg px-2 py-1.5 backdrop-blur-sm sm:gap-2 2xl:gap-3 2xl:px-3 2xl:py-2">
                    <span className="rounded-2xl bg-pricing-header-bg px-2 py-0.5 text-xs font-normal tracking-wide text-white shadow-control-inset sm:px-2.5 sm:py-1 sm:text-sm 2xl:text-lg">
                        {t("hero.newBadge")}
                    </span>
                    <span className="text-center text-xs text-secondary-text sm:text-sm 2xl:text-lg">
                        {t("hero.badge")}
                    </span>
                </div>

                <h1 className="mx-auto mt-4 max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:mt-6 sm:text-3xl md:mt-8 md:text-4xl lg:text-5xl 2xl:mt-8 2xl:text-6xl 2xl:leading-tight">
                    {titleParts.map((line) => (
                        <span key={line} className="block">
                            {line}
                        </span>
                    ))}
                </h1>

                <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-secondary-text sm:mt-4 sm:text-base md:mt-5 md:text-lg 2xl:mt-5 2xl:text-xl 2xl:leading-snug">
                    {t("hero.description")}
                </p>

                {/* CTAs */}
                <div className="mx-auto mt-5 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-6 sm:max-w-lg sm:flex-row sm:items-center sm:justify-center sm:gap-4 2xl:mt-8 2xl:max-w-none">
                    <Link
                        href="https://volumedaytrader.com/login/"
                        className="btn-primary w-full justify-center px-5 py-2.5 text-sm shadow-control-inset sm:w-auto sm:px-6 sm:py-3 sm:text-base 2xl:inline-flex 2xl:px-7 2xl:text-lg"
                    >
                        {t("hero.primaryButton")}
                        <Vector className="block h-3 w-3" aria-hidden="true" />
                    </Link>
                    <Link
                        href="https://volumedaytrader.com/login/"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-btn-border bg-card-bg/80 px-5 py-2.5 text-sm font-medium text-white shadow-control-inset backdrop-blur-sm transition-colors hover:border-white/20 sm:w-auto sm:px-6 sm:text-base 2xl:px-7 2xl:py-3 2xl:text-lg"
                    >
                        {t("hero.secondaryButton")}
                        <Vector className="block h-3 w-3" aria-hidden="true" />
                    </Link>
                </div>

                {/* Stacked tags below content until xl */}
                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 xl:hidden">
                    {floatingTags.map((tag) => (
                        <div key={tag.label} className="flex justify-center px-1">
                            <HeroFeatureTag label={tag.label} compact />
                        </div>
                    ))}
                </div>
            </div>

            <HeroChart />
        </section>
    )
}
