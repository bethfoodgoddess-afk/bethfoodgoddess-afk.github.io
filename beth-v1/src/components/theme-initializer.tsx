"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

// ????
const baseThemes = ["default", "mexico", "day-of-the-dead", "ai-passion", "future-world", "modern-tech"];

export function ThemeInitializer() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const userHasChosenTheme = !!localStorage.getItem('user-theme-choice');

    if (userHasChosenTheme) {
      return;
    }

    let sessionTheme = sessionStorage.getItem('session-theme');

    if (!sessionTheme) {
      const randomBase = baseThemes[Math.floor(Math.random() * baseThemes.length)];
      const modes = ['light', 'dark'];
      const mode = modes[Math.floor(Math.random() * modes.length)];
      if (randomBase === 'default') {
        sessionTheme = mode;
      } else {
        sessionTheme = `${randomBase}-${mode}`;
      }
      sessionStorage.setItem('session-theme', sessionTheme);
    }

    if (theme !== sessionTheme) {
      setTheme(sessionTheme);
    }

    return () => {
      const userHasChosenOnUnmount = !!localStorage.getItem('user-theme-choice');
      if (!userHasChosenOnUnmount) {
        localStorage.removeItem('theme');
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}