"use client"

import * as React from "react"
import { ThemeSwitcher } from "./theme-switcher"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={className}>
        <div className="sr-only">Loading theme switcher</div>
      </div>
    )
  }

  return <ThemeSwitcher className={className} />
}
