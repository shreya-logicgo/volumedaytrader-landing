"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

const YOUTUBE_VIDEO_ID = "xU2hBVXIQ5c"
const VIEWPORT_THRESHOLD = 0.4

function buildYouTubeEmbedSrc(origin: string) {
  const params = new URLSearchParams({
    si: "rVhSl-MA6CRuC-SH",
    enablejsapi: "1",
    mute: "1",
    rel: "0",
    playsinline: "1",
    origin,
  })

  return `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${params.toString()}`
}

function postPlayerCommand(
  iframe: HTMLIFrameElement,
  command: "playVideo" | "pauseVideo"
) {
  iframe.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func: command, args: "" }),
    "https://www.youtube.com"
  )
}

export default function HeroChart() {
  const chartRef = useRef<HTMLElement | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const isVisibleRef = useRef(false)
  const isReadyRef = useRef(false)
  const reduceMotion = useReducedMotion()
  const [maxTilt, setMaxTilt] = useState(18)
  const [embedSrc, setEmbedSrc] = useState(() =>
    buildYouTubeEmbedSrc("http://localhost:3000")
  )

  useEffect(() => {
    setEmbedSrc(buildYouTubeEmbedSrc(window.location.origin))
  }, [])

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)")
    const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1024px)")

    const syncTilt = () => {
      if (mobileQuery.matches) {
        setMaxTilt(8)
        return
      }

      if (tabletQuery.matches) {
        setMaxTilt(12)
        return
      }

      setMaxTilt(18)
    }

    syncTilt()
    mobileQuery.addEventListener("change", syncTilt)
    tabletQuery.addEventListener("change", syncTilt)

    return () => {
      mobileQuery.removeEventListener("change", syncTilt)
      tabletQuery.removeEventListener("change", syncTilt)
    }
  }, [])

  useEffect(() => {
    const section = chartRef.current
    const iframe = iframeRef.current
    if (!section || !iframe) return

    let retryTimer: ReturnType<typeof setTimeout> | undefined

    const syncPlayback = () => {
      if (!isReadyRef.current) return

      if (retryTimer) {
        clearTimeout(retryTimer)
        retryTimer = undefined
      }

      if (isVisibleRef.current) {
        postPlayerCommand(iframe, "playVideo")
        retryTimer = setTimeout(() => postPlayerCommand(iframe, "playVideo"), 600)
      } else {
        postPlayerCommand(iframe, "pauseVideo")
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
        syncPlayback()
      },
      { threshold: [0, VIEWPORT_THRESHOLD, 0.6, 1] }
    )

    const handleLoad = () => {
      isReadyRef.current = true
      syncPlayback()
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return
      if (typeof event.data !== "string") return

      try {
        const data = JSON.parse(event.data) as { event?: string }
        if (data.event === "onReady") {
          isReadyRef.current = true
          syncPlayback()
        }
      } catch {
        // ignore non-JSON messages from YouTube
      }
    }

    window.addEventListener("message", handleMessage)
    iframe.addEventListener("load", handleLoad)
    observer.observe(section)

    return () => {
      if (retryTimer) clearTimeout(retryTimer)
      window.removeEventListener("message", handleMessage)
      iframe.removeEventListener("load", handleLoad)
      observer.disconnect()
      isReadyRef.current = false
    }
  }, [embedSrc])

  const { scrollYProgress } = useScroll({
    target: chartRef,
    offset: ["start end", "center center"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [maxTilt, 0])
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])

  return (
    <section
      ref={chartRef}
      className="relative z-20 mx-auto mt-8 w-full overflow-visible px-3 sm:mt-10 sm:px-4 md:mt-12 md:px-6 lg:mt-10 lg:px-4"
    >
      <div
        className="relative mx-auto max-w-[1200px] overflow-visible"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        <motion.div
          style={
            reduceMotion
              ? {
                  rotateX: 0,
                  y: 0,
                  scale: 1,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }
              : {
                  rotateX,
                  y,
                  scale,
                  transformOrigin: "50% 100%",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }
          }
          className="relative z-10 overflow-visible rounded-2xl border bg-[#FFFFFF0D] p-3 sm:rounded-3xl sm:p-4 lg:p-5"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[6%] -bottom-8 -z-10 h-20 rounded-full"
            style={{ transform: "translateZ(-40px)" }}
          />

          <div className="relative isolate mx-auto aspect-video w-full overflow-visible rounded-2xl bg-[#050024] sm:rounded-3xl">
            <div aria-hidden className="hero-chart-top-glow" />
            <iframe
              key={embedSrc}
              ref={iframeRef}
              src={embedSrc}
              title="YouTube video player"
              className="absolute inset-0 z-[1] h-full w-full rounded-2xl sm:rounded-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
