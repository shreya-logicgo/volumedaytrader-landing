"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { MouseEvent } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  active?: boolean;
}

export default function NavLink({ href, label, onClick, className, active = false }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);
  const letters = label.split("");
  const shift = "1.08em";
  const letterDurationMs = 1000;
  const hoverStepMs = 42;
  const leaveStepMs = 30;
  const letterEase = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(className)}
      style={{
   
        color: active ? "white" : "#A7ADBE",
        padding: "0.06em 0",
        textDecoration: "none",
        transition: "color 0.3s",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1.08,
        verticalAlign: "middle",
      }}
    >
      {/* Tight clip box so duplicate text shadow never bleeds above the link */}
      <div style={{ overflow: "hidden", lineHeight: 1.08, height: "1.08em" }}>
        <div
          // text-shadow pushes a purple copy of each letter below the baseline
          style={{ textShadow: `0 ${shift} 0 #ED1F24`, lineHeight: 1.08 }}
        >
          {letters.map((char, i) => (
            <span
              key={i}
              aria-hidden={i > 0 ? true : undefined}
              style={{
                position: "relative",
                display: "inline-block",
                lineHeight: 1.08,
                transform: hovered ? `translate3d(0px, -${shift}, 0px)` : "translate3d(0px, 0px, 0px)",
                transitionProperty: "transform",
                transitionDuration: `${letterDurationMs}ms`,
                transitionTimingFunction: letterEase,
                transitionDelay: hovered
                  ? `${i * hoverStepMs}ms`
                  : `${(letters.length - 1 - i) * leaveStepMs}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
      {/* Accessible label for screen readers */}
      <span className="sr-only">{label}</span>
    </Link>
  );
}