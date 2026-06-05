'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function HeroVisual() {
  const gradientRef = useRef<HTMLImageElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const cur = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const STRENGTH = 0.04;
  const SCALE = 1.04;

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    cur.current.x = lerp(cur.current.x, target.current.x, 0.07);
    cur.current.y = lerp(cur.current.y, target.current.y, 0.07);

    if (gradientRef.current) {
      gradientRef.current.style.transform = `translate3d(${cur.current.x}px, ${cur.current.y}px, 0) scale3d(${SCALE}, ${SCALE}, 1)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      target.current.x = (e.clientX - cx) * STRENGTH;
      target.current.y = (e.clientY - cy) * STRENGTH;
    };

    const handleMouseLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    const handleScroll = () => {
      target.current.y = -window.scrollY * 0.03;
    };

    const wrap = wrapRef.current;
    wrap?.addEventListener('mousemove', handleMouseMove);
    wrap?.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap?.removeEventListener('mousemove', handleMouseMove);
      wrap?.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animate]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '-20%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {/* Gradient background — receives the parallax transform */}
      <img
        ref={gradientRef}
        src="https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b7899_herodash-gradient.webp"
        alt=""
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transformOrigin: 'center',
          willChange: 'transform',
        }}
      />

      {/* Left dashboard panel */}
      <div
        style={{
          position: 'absolute',
          left: '-2%',
          top: 0,
          width: '60%',
          height: '100%',
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b789f_oz-left.avif"
          alt=""
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          sizes="(max-width: 1645px) 100vw, 1645px"
          srcSet="
            https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b789f_oz-left-p-500.png 500w,
            https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b789f_oz-left-p-800.png 800w,
            https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b789f_oz-left-p-1080.png 1080w,
            https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b789f_oz-left.avif 1645w
          "
        />
      </div>

      {/* Right dashboard panel */}
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          top: 0,
          width: '52%',
          height: '100%',
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b7963_Frame%202147226979.webp"
          alt=""
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          sizes="(max-width: 814px) 100vw, 814px"
          srcSet="
            https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b7963_Frame%25202147226979-p-500.png 500w,
            https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b7963_Frame%25202147226979-p-800.png 800w,
            https://cdn.prod.website-files.com/67eb3a2dcf2bf6bd908b77ff/67eb3a2dcf2bf6bd908b7963_Frame%202147226979.webp 814w
          "
        />
      </div>
    </div>
  );
}