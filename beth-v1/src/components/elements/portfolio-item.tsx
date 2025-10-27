import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Screenshot from "@/components/elements/Screenshot";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ClientOnly from "@/components/ClientOnly";


export interface PortfolioItemProps {
  label: string;
  url: string;
  description?: string;
  screenshot?: { light: string, dark: string };
  icon?: React.ReactNode;
}

function PortfolioItem({ className, children, label, url, description, screenshot, icon, ...props }: React.ComponentProps<"div"> & PortfolioItemProps) {
  return (
    <div
      data-slot="item"
      className={cn("bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-foreground flex flex-col gap-4 p-4", className)}
      {...props}
    >
      {icon && (
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4`}>
          {icon}
        </div>
      )}
      {label && (
        <div className="text-sm leading-none font-semibold tracking-tight sm:text-base text-muted-foreground">
          {url ? <Link href={url}>{label}</Link> : label}
        </div>
      )}
      {screenshot && (
        <div className="my-1">
          {url ? (
            <Link href={url}>
              <Screenshot
                srcLight={screenshot.light}
                srcDark={screenshot.dark}
                alt={label}
                width={128}
                height={128} />
            </Link>
          ) : (
            <Screenshot
              srcLight={screenshot.light}
              srcDark={screenshot.dark}
              alt={label}
              width={128}
              height={128} />
          )}
        </div>
      )}
      {description && (
        <ClientOnly>
          <Popover>
            <PopoverTrigger asChild>
              <div className="line-clamp-3 text-muted-foreground text-sm font-semibold text-pretty cursor-pointer">
                {description}
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <p>{description}</p>
            </PopoverContent>
          </Popover>
        </ClientOnly>
      )}
      {children}
    </div>
  );
}

export { PortfolioItem };