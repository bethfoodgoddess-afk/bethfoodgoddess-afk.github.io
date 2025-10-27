import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Screenshot from "@/components/elements/Screenshot";

export interface ProjectItemProps {
  title: string;
  period?: string;
  description: string;
  icon?: ReactNode;
  screenshot?: { light: string, dark: string, alt: string };
  url?: string;
}

export interface ProjectItemsProps {
  title?: string;
  items?: ProjectItemProps[] | false;
  className?: string;
}


function ProjectItem({ className, children, ...props }: React.ComponentProps<"div"> & ProjectItemProps) {
  return (
    <div
      data-slot="item"
      className={cn("bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-foreground flex flex-col gap-4 p-4", className)}
      {...props}
    >
      {props.screenshot ? (
        <div className="my-1">
          <Link href={props.url || "#"}>
            <Screenshot
              srcLight={props.screenshot.light}
              srcDark={props.screenshot.dark}
              alt={props.screenshot.alt}
              width={128}
              height={128} />
          </Link>
        </div>
      ) : (
        props.icon && <ProjectItemIcon>{props.icon}</ProjectItemIcon>
      )}
      {children}
    </div>
  );
}

function ProjectItemTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="item-title"
      className={cn(
        "text-sm leading-none font-semibold tracking-tight sm:text-base",
        className,
      )}
      {...props}
    />
  );
}

function ProjectItemPeriod({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-period"
      className={cn(
        "text-small leading-none font-semibold tracking-tight sm:text-base",
        className,
      )}
      {...props}
    />
  );
}

function ProjectItemDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-description"
      className={cn(
        "text-muted-foreground flex flex-col gap-2 text-sm text-balance",
        className,
      )}
      {...props}
    />
  );
}

function ProjectItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-icon"
      className={cn("flex items-center self-center", className)}
      {...props}
    />
  );
}

export { ProjectItem, ProjectItemTitle, ProjectItemPeriod, ProjectItemDescription, ProjectItemIcon };
