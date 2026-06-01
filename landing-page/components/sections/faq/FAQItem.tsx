"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

const smoothEase = "cubic-bezier(0.32, 0.72, 0, 1)";

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <article
      className={cn(
        "w-full rounded-2xl border px-3 py-2.5 transition-[border-color,background-color] duration-300 sm:px-4 sm:py-3",
        isOpen
          ? "border-white/20 bg-white/10"
          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]"
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full cursor-pointer items-start justify-between gap-3 text-left sm:items-center sm:gap-4"
      >
        <span className="min-w-0 flex-1 text-sm font-normal leading-snug text-white sm:text-base lg:text-lg">
          {question}
        </span>

        <span
          className={cn(
            "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white sm:mt-0 sm:h-8 sm:w-8",
            "transition-transform duration-500 motion-reduce:transition-none",
            isOpen && "rotate-45"
          )}
          style={{ transitionTimingFunction: smoothEase }}
          aria-hidden
        >
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 sm:h-3.5 sm:w-3.5"
          >
            <line x1="7" y1="1" x2="7" y2="13" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="1" y1="7" x2="13" y2="7" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
        style={{ transitionTimingFunction: smoothEase }}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={cn(
              "card-desc pb-0.5 pt-2.5 leading-relaxed sm:pt-3",
              "transition-[opacity,transform] duration-500 motion-reduce:transition-none",
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
            )}
            style={{ transitionTimingFunction: smoothEase }}
          >
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}
