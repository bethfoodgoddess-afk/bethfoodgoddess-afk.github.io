'use client';

import { BookOpen } from "lucide-react"
import { Button } from '@/components/ui/button';
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const MyBlogButton = () => {

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          variant="ghost"
        >
          <Link href="/blog" className="flex items-center p-2 max-sm:p-1 max-sm:pr-2">
            <BookOpen className="h-5 w-5" />
            <span className="hidden xl:inline ml-2">Blog</span>
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>My Blog</p>
      </TooltipContent>
    </Tooltip>
  )
};

export default MyBlogButton;
