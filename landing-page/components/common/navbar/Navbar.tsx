"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../../../assets/logo/logo.svg'
import { useLanguage } from '@/hooks/use-language'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/us.svg' },
  { code: 'pl', label: 'PL', flag: 'https://flagcdn.com/pl.svg' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const ticking = useRef(false)
  const { t } = useTranslation('translation')
  const { currentLanguage, changeLanguage } = useLanguage()
  const navLinks = [
    { label: t('navbar.features'), href: '/#features' },
    { label: t('navbar.pricing'), href: '/#pricing' },
    { label: t('navbar.community'), href: '/#community' },
    { label: t('navbar.howIndicatorsWork'), href: '/#how-indicators-work' },
    { label: t('navbar.blog'), href: '/#blogs' },
    { label: t('navbar.contact'), href: '/#contact' },
  ]

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false)
      }

      if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false)
        setLangMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useLayoutEffect(() => {
    const syncScrolled = () => setScrolled(window.scrollY > 20)

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        syncScrolled()
        ticking.current = false
      })
    }

    syncScrolled()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pageshow', syncScrolled)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pageshow', syncScrolled)
    }
  }, [])

  const selectedLanguage = languages.find((language) => language.code === currentLanguage) ?? languages[0]
  const signInLabel = t('navbar.signIn')
  const resolvedSignInLabel =
    signInLabel === 'navbar.signIn'
      ? selectedLanguage.code === 'pl'
        ? 'Zaloguj się'
        : 'Sign In'
      : signInLabel

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== '/') {
      return
    }

    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed left-0 top-5 z-50 w-full pointer-events-none md:top-7">
      <div className="relative mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute -left-[220px] top-1/2 hidden h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[#ED1F24]/45 blur-[120px] sm:block"
        />
        <div
          aria-hidden="true"
          className="absolute -right-[220px] top-1/2 hidden h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[#ED1F24]/45 blur-[120px] sm:block"
        />

        <nav
          className={`pointer-events-auto relative flex min-h-[68px] w-full items-center justify-between gap-3 rounded-full border px-4 py-3 text-[15px] font-medium tracking-[-0.01em] backdrop-blur-2xl transition-all duration-300 md:min-h-[76px] md:px-4 md:pl-8 xl:text-[16px] 2xl:text-[17px] ${scrolled ? 'border-white/10 bg-[#151032]/90 shadow-[0_24px_80px_rgba(0,0,0,0.45)]' : 'border-card-border bg-[#151032]/70 shadow-[0_18px_60px_rgba(0,0,0,0.28)]'}`}
        >
          <Link href="/" aria-label="home" onClick={handleLogoClick} className="flex shrink-0 items-center justify-start">
            <Logo className="block min-w-[280px] shrink-0 object-contain xl:w-[320px] 2xl:w-[320px] 2xl:h-13" role="img" aria-label="VDLTRA logo" />
          </Link>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-secondary-text xl:flex xl:gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative whitespace-nowrap rounded-full px-1 py-1 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-4/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 xl:flex xl:gap-4">
            <div
              ref={langRef}
              className="relative flex h-11 min-w-[96px] shrink-0 items-center justify-between rounded-full border border-white/5 bg-white/5 px-3 transition-colors duration-300 hover:bg-white/10"
            >
              <button
                type="button"
                onClick={() => setLangMenuOpen((value) => !value)}
                className="flex w-full items-center justify-between gap-2 whitespace-nowrap text-[14px] font-medium text-white xl:text-[15px]"
                aria-label="Select language"
              >
                <span className="flex items-center gap-2">
                  <img
                    src={selectedLanguage.flag}
                    alt={`${selectedLanguage.code} flag`}
                    className="block h-3.5 w-5 rounded-[2px] object-cover"
                  />
                  <span>{selectedLanguage.label}</span>
                </span>

                <svg className={`h-3 w-3 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 flex min-w-[120px] flex-col overflow-hidden rounded-2xl border border-[#1D1938] bg-[#0A1129]/95 shadow-2xl backdrop-blur-xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        className="flex items-center gap-3 px-4 py-3 text-left text-white/90 transition-colors hover:bg-white/10"
                        onClick={() => {
                          changeLanguage(lang.code as 'en' | 'pl')
                          setLangMenuOpen(false)
                        }}
                      >
                        <img src={lang.flag} alt={lang.code} className="h-3.5 w-5 rounded-[2px] object-cover" />
                        <span className="text-[15px] font-medium leading-6">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="https://volumedaytrader.com/login/"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-tab-active px-4 text-[14px] font-medium text-white shadow-[inset_0px_1.41px_3.18px_0px_rgba(255,255,255,0.5)] transition-colors duration-300 hover:bg-[#f52b31] xl:px-5 xl:text-[15px]"
            >
              <span>{resolvedSignInLabel}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.25 9.75L9.75 2.25M5.25 2.25H9.75V6.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                ref={mobileRef}
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto absolute left-4 right-4 top-full mt-3 overflow-hidden rounded-[28px] border border-card-border bg-[#151032]/96 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl xl:hidden"
              >
                <div className="flex flex-col p-5 sm:p-6">
                  <div className="grid gap-2 border-b border-white/5 pb-5">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="rounded-2xl px-3 py-3 text-base font-medium text-secondary-text transition-colors hover:bg-white/5 hover:text-white sm:text-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-5">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="https://volumedaytrader.com/login/"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-medium text-white transition-all hover:bg-white/10"
                        onClick={() => setMobileOpen(false)}
                      >
                        {resolvedSignInLabel}
                      </Link>
                    </div>

                    <div className="flex items-center justify-center gap-3 border-t border-white/10 pt-5">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedLanguage.code === lang.code ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                          onClick={() => {
                            changeLanguage(lang.code as 'en' | 'pl')
                            setMobileOpen(false)
                          }}
                        >
                          <img src={lang.flag} alt={lang.code} className="h-3.5 w-5 rounded-[2px] object-cover" />
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}