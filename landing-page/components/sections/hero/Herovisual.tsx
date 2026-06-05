"use client"

import { useCallback, useEffect, useRef } from "react"

const GRADIENT_SRC =
  "https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b7899_herodash-gradient.webp"
const BEAM_LEFT_SRC =
  "https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b789f_oz-left.avif"
const BEAM_RIGHT_SRC =
  "https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b7963_Frame%202147226979.webp"

/** Aurion-style glow layers — render inside a `relative` parent behind the video */
export default function HeroVisual() {
  const gradientRef = useRef<HTMLImageElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const cur = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  const STRENGTH = 0.035
  const SCALE = 1.05

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const animate = useCallback(() => {
    cur.current.x = lerp(cur.current.x, target.current.x, 0.07)
    cur.current.y = lerp(cur.current.y, target.current.y, 0.07)

    if (gradientRef.current) {
      gradientRef.current.style.transform = `translate3d(calc(-50% + ${cur.current.x}px), ${cur.current.y}px, 0) scale3d(${SCALE}, ${SCALE}, 1)`
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate)

    const handleMouseMove = (e: MouseEvent) => {
      const wrap = wrapRef.current
      if (!wrap) return
      const r = wrap.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      target.current.x = (e.clientX - cx) * STRENGTH
      target.current.y = (e.clientY - cy) * STRENGTH * 0.6
    }

    const handleMouseLeave = () => {
      target.current.x = 0
      target.current.y = 0
    }

    const wrap = wrapRef.current
    wrap?.addEventListener("mousemove", handleMouseMove)
    wrap?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      wrap?.removeEventListener("mousemove", handleMouseMove)
      wrap?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [animate])

  return (
    <div
      ref={wrapRef}
      className="hero-aurion-glow pointer-events-none absolute inset-0 z-0 overflow-visible"
      aria-hidden
    >
      <img
        ref={gradientRef}
        src={GRADIENT_SRC}
        alt=""
        className="hero-aurion-glow__arch will-change-transform"
        style={{ transform: "translate3d(-50%, 0, 0)", transformOrigin: "center top" }}
      />

      {/* <div className="hero-aurion-glow__beam hero-aurion-glow__beam--left">
        <img src={BEAM_LEFT_SRC} alt="" className="h-350 w-full object-cover  " />
      </div> */}

      {/* <div className="hero-aurion-glow__beam hero-aurion-glow__beam--right">
        <img src={BEAM_RIGHT_SRC} alt="" className=" w-full h-350 object-cover " />
      </div> */}

      <div className="hero-aurion-glow__bottom-fade" />
    </div>
  )
}
