"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollFadeWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
  id?: string
}

export default function ScrollFadeWrapper({ children, delay = 0, className = "", id }: ScrollFadeWrapperProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={className} id={typeof id === 'string' ? id : undefined}>
      <div
        className={`transition-opacity duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
