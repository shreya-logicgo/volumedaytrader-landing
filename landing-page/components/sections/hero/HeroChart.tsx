"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import type { Language } from "@/lib/i18n/settings"
import VimeoPlayer from "./VimeroPlayer"

const VIMEO_BY_LANGUAGE: Record<
  Language,
  { id: string; hash?: string }
> = {
  en: { id: "1001970850" },
  pl: { id: "950095166", hash: "b5b4640389" },
}

function buildVimeoEmbedSrc({ id, hash }: { id: string; hash?: string }) {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    title: "0",
    byline: "0",
    portrait: "0",
    controls: "0",
    dnt: "1",
  })
  if (hash) params.set("h", hash)
  return `https://player.vimeo.com/video/${id}?${params.toString()}`
}

type VimeoPlayerInstance = {
  play: () => Promise<void>
  pause: () => Promise<void>
  getPaused: () => Promise<boolean>
  setVolume: (volume: number) => Promise<number>
  getVolume: () => Promise<number>
  on: (event: string, callback: () => void) => void
  off: (event: string, callback: () => void) => void
  destroy: () => void
}

type VimeoPlayerConstructor = new (
  element: HTMLIFrameElement
) => VimeoPlayerInstance

declare global {
  interface Window {
    Vimeo?: {
      Player: VimeoPlayerConstructor
    }
  }
}

let vimeoApiPromise: Promise<void> | null = null

function loadVimeoPlayerApi() {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.Vimeo?.Player) return Promise.resolve()
  if (vimeoApiPromise) return vimeoApiPromise

  vimeoApiPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-vimeo-player-api="true"]'
    )
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true })
      existing.addEventListener("error", () => reject(), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.async = true
    script.dataset.vimeoPlayerApi = "true"
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load Vimeo Player API"))
    document.body.appendChild(script)
  })

  return vimeoApiPromise
}

export default function HeroChart() {
  const chartRef = useRef<HTMLElement | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const playerRef = useRef<VimeoPlayerInstance | null>(null)
  const reduceMotion = useReducedMotion()
  const { currentLanguage } = useLanguage()
  const [maxTilt, setMaxTilt] = useState(18)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [playerReady, setPlayerReady] = useState(false)

  const vimeoSrc = useMemo(
    () => buildVimeoEmbedSrc(VIMEO_BY_LANGUAGE[currentLanguage]),
    [currentLanguage]
  )

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

  const { scrollYProgress } = useScroll({
    target: chartRef,
    offset: ["start end", "center center"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [maxTilt, 0])
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let cancelled = false
    let onPlay: (() => void) | undefined
    let onPause: (() => void) | undefined
    let onVolumeChange: (() => void) | undefined

    setPlayerReady(false)
    setIsPlaying(false)

    const initPlayer = async () => {
      try {
        await loadVimeoPlayerApi()
        if (cancelled || !iframeRef.current || !window.Vimeo?.Player) return

        playerRef.current?.destroy()
        const player = new window.Vimeo.Player(iframeRef.current)
        playerRef.current = player

        onPlay = () => setIsPlaying(true)
        onPause = () => setIsPlaying(false)
        onVolumeChange = async () => {
          const volume = await player.getVolume()
          setIsMuted(volume === 0)
        }

        player.on("play", onPlay)
        player.on("pause", onPause)
        player.on("volumechange", onVolumeChange)

        const [paused, volume] = await Promise.all([
          player.getPaused(),
          player.getVolume(),
        ])

        if (cancelled) return
        setIsPlaying(!paused)
        setIsMuted(volume === 0)
        setPlayerReady(true)
      } catch {
        if (!cancelled) setPlayerReady(false)
      }
    }

    void initPlayer()

    return () => {
      cancelled = true
      if (playerRef.current && onPlay && onPause && onVolumeChange) {
        playerRef.current.off("play", onPlay)
        playerRef.current.off("pause", onPause)
        playerRef.current.off("volumechange", onVolumeChange)
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [vimeoSrc])

  const handlePlayPause = useCallback(async () => {
    const player = playerRef.current
    if (!player || !playerReady) return

    const paused = await player.getPaused()
    if (paused) {
      await player.play()
    } else {
      await player.pause()
    }
  }, [playerReady])

  const handleMuteToggle = useCallback(async () => {
    const player = playerRef.current
    if (!player || !playerReady) return

    const volume = await player.getVolume()
    if (volume === 0) {
      await player.setVolume(1)
      setIsMuted(false)
    } else {
      await player.setVolume(0)
      setIsMuted(true)
    }
  }, [playerReady])

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

          {/* <div aria-hidden className="hero-chart-top-glow" />
            <div aria-hidden className="hero-chart-top-glow" /> */}
          <div className="relative isolate mx-auto aspect-video w-full overflow-visible rounded-2xl bg-[#050024] sm:rounded-3xl">
            <div aria-hidden className="hero-chart-top-glow" />
            <iframe
              key={vimeoSrc}
              ref={iframeRef}
              src={vimeoSrc}
              title={
                currentLanguage === "pl"
                  ? "Volume Day Trader — wideo (PL)"
                  : "Volume Day Trader — video (EN)"
              }
              className="absolute inset-0 z-[1] h-full w-full rounded-2xl sm:rounded-3xl"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
            />


            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 sm:bottom-4 sm:right-4">
              <button
                type="button"
                onClick={() => void handlePlayPause()}
                disabled={!playerReady}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#151032]/90 text-white shadow-control-inset backdrop-blur-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-11 sm:w-11"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                ) : (
                  <Play className="ml-0.5 h-4 w-4 fill-current sm:h-[18px] sm:w-[18px]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => void handleMuteToggle()}
                disabled={!playerReady}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#151032]/90 text-white shadow-control-inset backdrop-blur-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-11 sm:w-11"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                ) : (
                  <Volume2 className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
        <VimeoPlayer />
        <iframe
          src="https://vimeo.com/1001970850"
          width="100%"
          height="500"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

        <iframe
          src=" https://vimeo.com/950095166/b5b4640389"
          width="100%"
          height="500"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}
