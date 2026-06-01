"use client"

import { gsap } from "gsap"
import { Inter_Tight } from "next/font/google"
import type { ReactNode } from "react"
import { useLayoutEffect, useMemo, useRef } from "react"

import { cn } from "@/lib/utils"

import { splitHeadingLines } from "./splitHeadingLines"

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400"],
})

export interface SectionTitleWrapProps {
  heading: string
  subheading: string
  className?: string
  headingClassName?: string
  subheadingClassName?: string
  /** Animate when scrolled into view (default). false = animate on mount. */
  scrollTrigger?: boolean
}

const REVEAL_DURATION = 1.05
const REVEAL_EASE = "power2.out"
const LINE_STAGGER = 0.2
const REVEAL_DELAY = 0.22

function RevealBlock({
  children,
  className,
  maskClassName,
}: {
  children: ReactNode
  className?: string
  maskClassName?: string
}) {
  return (
    <span className={cn("section-title-wrap__mask", maskClassName)}>
      <span
        data-reveal-inner=""
        className={cn("section-title-wrap__line-inner", className)}
      >
        {children}
      </span>
    </span>
  )
}

export default function SectionTitleWrap({
  heading,
  subheading,
  className,
  headingClassName,
  subheadingClassName,
  scrollTrigger = true,
}: SectionTitleWrapProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)

  const headingLines = useMemo(
    () => splitHeadingLines(heading),
    [heading]
  )

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const inners = root.querySelectorAll<HTMLElement>("[data-reveal-inner]")
    if (!inners.length) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const runReveal = () => {
      if (hasAnimatedRef.current) return
      hasAnimatedRef.current = true

      gsap.killTweensOf(inners)

      if (prefersReducedMotion) {
        gsap.set(inners, { yPercent: 0, opacity: 1, scale: 1 })
        return
      }

      gsap.fromTo(
        inners,
        {
          yPercent: 100,
          opacity: 0,
          scale: 0.96,
        },
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: REVEAL_DURATION,
          ease: REVEAL_EASE,
          delay: REVEAL_DELAY,
          stagger: LINE_STAGGER,
          overwrite: "auto",
        }
      )
    }

    if (prefersReducedMotion) {
      gsap.set(inners, { yPercent: 0, opacity: 1, scale: 1 })
    } else {
      gsap.set(inners, { yPercent: 100, opacity: 0, scale: 0.96 })
    }

    if (!scrollTrigger) {
      const timer = window.setTimeout(runReveal, 120)
      return () => window.clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runReveal()
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(root)

    if (root.getBoundingClientRect().top < window.innerHeight * 0.92) {
      runReveal()
      observer.disconnect()
    }

    return () => observer.disconnect()
  }, [scrollTrigger, headingLines.length, subheading])

  return (
    <div
      ref={rootRef}
      className={cn("section-title-wrap", interTight.className, className)}
    >
      <h2 className={cn("section-title-wrap__heading", headingClassName)}>
        {headingLines.map((line, index) => (
          <RevealBlock key={`${index}-${line}`}>{line}</RevealBlock>
        ))}
      </h2>

      {subheading ? (
        <p
          className={cn(
            "section-title-wrap__subheading",
            subheadingClassName
          )}
        >
          <RevealBlock>{subheading}</RevealBlock>
        </p>
      ) : null}
    </div>
  )
}
