/** Keep anchor landing spacing consistent across breakpoints. */
function getDefaultExtraGap() {
  if (typeof window === 'undefined') return 12
  if (window.innerWidth < 768) return 8
  if (window.innerWidth < 1024) return 10
  return 12
}

/** Offset for fixed navbar (top + bar height) plus breathing room for section badges */
export function getNavbarScrollOffset(extraGap = getDefaultExtraGap()) {
  const header = document.querySelector('header')
  if (!header) return 96
  return header.getBoundingClientRect().bottom + extraGap
}

export function scrollToSectionId(sectionId: string, extraGap = getDefaultExtraGap()) {
  const target = document.getElementById(sectionId)
  if (!target) return false

  const top =
    target.getBoundingClientRect().top + window.scrollY - getNavbarScrollOffset(extraGap)

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  return true
}
