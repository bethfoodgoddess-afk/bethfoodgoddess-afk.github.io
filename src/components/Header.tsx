"use client"

import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"
import { Menu, X, Home, MapPin, Camera, BookOpen, Backpack, User, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import MyBlogButton from "@/components/buttons/my-blog-button";


import { useTheme } from "next-themes";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('common')
  const pathname = usePathname();
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

  const navigation = [
    {
      name: t('navigation.home'),
      href: "/",
      icon: Home,
    },
    {
      name: t('navigation.destinations'),
      href: "/destinations",
      icon: MapPin,
    },
    {
      name: t('navigation.stories'),
      href: "/stories",
      icon: BookOpen,
    },
    {
      name: t('navigation.gallery'),
      href: "/gallery",
      icon: Camera,
    },
    {
      name: t('navigation.about'),
      href: "/about",
      icon: User,
    },
    {
      name: t('navigation.contact'),
      href: "/contact",
      icon: Mail,
    },
  ]

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Beth's Home Logo" width={32} height={32} />
              <span className="text-xl font-bold text-foreground">
                {t('websiteName')}
              </span>
            </Link>
          </div>

          {/* Navigation Menus */}
          <nav className="hidden lg:flex items-center space-x-1">
            <TooltipProvider>
              {navigation.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      size="icon"
                      disabled={pathname === item.href}
                    >
                      <Link href={item.href}>
                        <item.icon className={`h-5 w-5 ${iconColorClass}`} />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </nav>

          {/* Locale Switcher & Theme Switcher */}
          <div className="hidden lg:flex items-center space-x-1">
            <MyBlogButton />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4 max-sm:space-x-3">
            {/* <div className="flex items-center space-x-1">
              <TooltipProvider>
                <MyBlogButton />
              </TooltipProvider>
            </div> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 border-t border-border/40 mt-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  disabled={pathname === item.href}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href={item.href} className="flex items-center">
                    <item.icon className={`h-5 w-5 mr-3 ${iconColorClass}`} />
                    {item.name}
                  </Link>
                </Button>
              ))}
              <div className="flex items-center space-x-1 justify-around pt-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
