/** Split a heading into display lines without manual line breaks in the CMS. */
export function splitHeadingLines(heading: string, maxLines = 2): string[] {
  const trimmed = heading.trim()
  if (!trimmed) return []

  if (trimmed.includes("\n")) {
    return trimmed
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
  }

  const words = trimmed.split(/\s+/)
  if (words.length <= 1 || maxLines <= 1) {
    return [trimmed]
  }

  const lines: string[] = []
  let start = 0

  for (let lineIndex = 0; lineIndex < maxLines; lineIndex++) {
    const remainingLines = maxLines - lineIndex
    const remainingWords = words.length - start

    if (remainingWords <= 0) break

    const wordsForLine = Math.ceil(remainingWords / remainingLines)
    const chunk = words.slice(start, start + wordsForLine)
    start += wordsForLine

    if (chunk.length) {
      lines.push(chunk.join(" "))
    }
  }

  return lines
}
