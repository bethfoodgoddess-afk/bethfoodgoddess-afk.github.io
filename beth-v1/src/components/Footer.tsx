"use client"

import Link from "next/link"
import Image from "next/image";
import { Home, Image as ImageIcon, Newspaper, Linkedin, Facebook, Instagram, Youtube, Github, Gitlab, MessageCircle, LucideIcon, LinkedinIcon } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface FooterLink {
  name: string
  href: string
  icon?: LucideIcon
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export function Footer() {
  const t = useTranslations();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lightThemeColorMap: { [key: string]: string } = {
    'light': 'text-sky-500',
    'mexico-light': 'text-green-500',
    'day-of-the-dead-light': 'text-orange-500',
    'ai-passion-light': 'text-red-500',
    'future-world-light': 'text-blue-300',
    'modern-tech-light': 'text-yellow-500',
  };

  const getIconColorClass = () => {
    if (!mounted) return '';
    if (resolvedTheme === 'dark') return '';
    if (!theme) return '';
    if (lightThemeColorMap[theme]) return lightThemeColorMap[theme];
    if (theme === 'system') return lightThemeColorMap['light'];
    return '';
  }

  const iconColorClass = getIconColorClass();

  const footerLinks: FooterSection[] = [
    {
      title: t('footer.navigation'),
      links: [
        { name: "Home", href: "/", icon: Home },
        { name: "Gallery", href: "/gallery", icon: ImageIcon },
        { name: "Blog", href: "/blog", icon: Newspaper },
      ],
    },
    {
      title: t('footer.socialMedia'),
      links: [
        { name: "Facebook", href: "https://facebook.com/bethtravels", icon: Facebook },
        { name: "Instagram", href: "https://instagram.com/bethtravels", icon: Instagram },
        { name: "TikTok", href: "https://tiktok.com/bethtravels", icon: Linkedin },
      ],
    },
    {
      title: t('footer.ytChannels'),
      links: [
        { name: "Wander for Life", href: "https://youtube.com/wanderforlife", icon: Youtube },
        { name: "Travel with Beth", href: "https://youtube.com/travelwithbeth", icon: Youtube },
      ],
    },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/web002/logo.png" alt="Beth's Home Logo" width={32} height={32} />
              <span className="text-xl font-bold text-foreground">
                {t('common.websiteName')}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:col-span-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm flex items-center space-x-2"
                      >
                        {link.icon && <link.icon className={`h-4 w-4 ${iconColorClass}`} />}
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href='/privacy'
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
