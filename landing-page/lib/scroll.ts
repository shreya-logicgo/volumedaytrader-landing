/** Offset for fixed navbar (top + bar height) plus breathing room for section badges */
export function getNavbarScrollOffset(extraGap = 20) {
  const header = document.querySelector('header')
  if (!header) return 112
  return header.getBoundingClientRect().bottom + extraGap
}

export function scrollToSectionId(sectionId: string, extraGap = 20) {
  const target = document.getElementById(sectionId)
  if (!target) return false

  const top =
    target.getBoundingClientRect().top + window.scrollY - getNavbarScrollOffset(extraGap)

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  return true
}
