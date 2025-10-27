"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ScreenshotProps {
  srcLight: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Screenshot({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  className,
}: ScreenshotProps) {
  const { theme } = useTheme();
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (theme) {
      const mode = theme.includes("dark") ? "dark" : "light";
      setSrc(mode === "light" ? srcLight : srcDark || srcLight);
    }
  }, [theme, srcLight, srcDark]);

  if (!src) {
    return (
      <div
        style={{ width, height }}
        className={cn("bg-muted", className)}
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
