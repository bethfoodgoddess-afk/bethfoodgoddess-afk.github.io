import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import SectionContainer from '@/components/SectionContainer'
import { Linkedin, Facebook, Instagram, Youtube, Github, Gitlab, MessageCircle, LucideIcon, Twitter } from "lucide-react";

interface LayoutProps {
  content: CoreContent<Authors>
  children: ReactNode
}

export default function AuthorLayout({ content, children }: LayoutProps) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, youtube, instagram } = content

  return (
    <SectionContainer>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          {avatar && (
                      <img
                        src={avatar}
                        alt="avatar"
                        width="192"
                        height="192"
                        className="w-48 h-48 rounded-full"
                      />          )}
          <h1 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h1>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">{company}</div>
          <div className="flex pt-6 space-x-3">
            {email && <a href={`mailto:${email}`}><MessageCircle /></a>}
            {github && <a href={github}><Github /></a>}
            {linkedin && <a href={linkedin}><Linkedin /></a>}
            {twitter && <a href={twitter}><Twitter /></a>}
            {youtube && <a href={youtube}><Youtube /></a>}
            {instagram && <a href={instagram}><Instagram /></a>}
          </div>
        </div>
        <div className="pt-8 pb-8 prose dark:prose-invert max-w-none xl:col-span-2">{children}</div>
      </div>
    </SectionContainer>
  )
}