import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Alena Vetrovs",
    body: "Before using CVeeBee, I barely got any callbacks. After optimizing my keywords and rewriting my resume with the AI, I started receiving interview invitations within a week. The process was fast, simple, and surprisingly accurate.",
  },
  {
    name: "Makenna Lipshutz",
    body: "The AI resume optimization made my profile much clearer and role-focused. I started getting relevant interviews quickly, and the suggestions were practical and easy to apply.",
  },
  {
    name: "Carla Levin",
    body: "Before using CVeeBee, I barely got any callbacks. After optimizing my keywords and rewriting my resume with the AI, I started receiving interview invitations within a week. The process was fast, simple, and surprisingly accurate.",
  },
  {
    name: "Carter Franci",
    body: "The recommendations helped me align my resume with job descriptions better. My response rate improved significantly and I could apply with more confidence.",
  },
  {
    name: "Jakob Rosser",
    body: "Before using CVeeBee, I barely got any callbacks. After optimizing my keywords and rewriting my resume with the AI, I started receiving interview invitations within a week. The process was fast, simple, and surprisingly accurate.",
  },
  {
    name: "Nina Solberg",
    body: "It gave me structure and clarity for each application. I now get more interview responses and spend less time guessing what to improve.",
  },
]

const firstColumn = reviews.filter((_, index) => index % 3 === 0)
const secondColumn = reviews.filter((_, index) => index % 3 === 1)
const thirdColumn = reviews.filter((_, index) => index % 3 === 2)

const ReviewCard = ({
  name,
  body,
}: {
  name: string
  body: string
}) => {
  const initial = name.charAt(0).toUpperCase()

  return (
    <figure
      className={cn(
        "relative w-full max-w-[340px] text-[18px] overflow-hidden rounded-2xl border border-[#1D1938] bg-[#0D082B] p-6 text-left shadow-[0px_-4px_70px_10px_#1819332B_inset]"
      )}
    >
      <div className="mb-4  font-bold leading-none text-[#ff2e2e]">
        <img src="/assets/icons/quote.svg" alt="quote" className="h-10 w-11 object-contain" />
      </div>

      <blockquote className=" leading-[1.45] text-[#A7ADBE]">
        "{body}"
      </blockquote>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f2a65] text-xs font-semibold text-white">
          {initial}
        </div>
        <figcaption className=" font-medium text-white">{name}</figcaption>
      </div>
    </figure>
  )
}

export function MarqueeDemoVertical() {
  return (
    <div className="relative mx-auto mt-20 flex h-[760px] w-full max-w-[1128px] items-center justify-center overflow-hidden">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        <Marquee pauseOnHover vertical className="[--duration:36s] [--gap:1.25rem]">
          {firstColumn.map((review) => (
            <ReviewCard key={`${review.name}-col1`} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover vertical className="[--duration:34s] [--gap:1.25rem]">
          {secondColumn.map((review) => (
            <ReviewCard key={`${review.name}-col2`} {...review} />
          ))}
        </Marquee>

        <Marquee pauseOnHover vertical className="[--duration:38s] [--gap:1.25rem]">
          {thirdColumn.map((review) => (
            <ReviewCard key={`${review.name}-col3`} {...review} />
          ))}
        </Marquee>
      </div>
      {/* 
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#050024] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#050024] to-transparent" /> */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050024] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050024] to-transparent" />
    </div>
  )
}
