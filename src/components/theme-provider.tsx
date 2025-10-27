"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
// import { ThemeInitializer } from "./theme-initializer"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} themes={["light", "dark", "mexico-light", "mexico-dark", "day-of-the-dead-light", "day-of-the-dead-dark", "ai-passion-light", "ai-passion-dark", "future-world-light", "future-world-dark", "modern-tech-light", "modern-tech-dark"]}>
      {/* <ThemeInitializer /> */}
      {children}
    </NextThemesProvider>
  )
}
