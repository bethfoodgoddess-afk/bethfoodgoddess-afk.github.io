// ...existing code with all empty lines removed...
"use client"

import { ArrowRight, Code, Coffee, MapPinCheck, Warehouse, DiamondPlus, ClockArrowDown, EclipseIcon, MonitorSmartphoneIcon, BrainCircuit, MessageSquare, Bot, Brain, Cloud, Database, AppWindow, Smartphone, Eye, GitBranch, Languages, BlocksIcon, FastForwardIcon, RocketIcon, LucideIcon, InfoIcon, Search, HelpCircle, Atom, Zap, FileText, Book, BookOpen, Plane, Mountain, Sun, Pyramid, Sunrise, Train, Anchor, Compass, Camera, Turtle, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { useTheme } from "next-themes";
import React from "react"
// export async function generateStaticParams() {
//   const ids = ['es', 'en'];
//   return ids.map((locale) => ({
//     locale: locale,
//   }));
// }
import { useState, useEffect, useMemo } from "react"
import ClientOnly from "@/components/ClientOnly";
import AppLogo from "@/components/logos/AppLogo";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  ProjectItem,
  ProjectItemDescription,
  ProjectItemIcon,
  ProjectItemTitle,
  ProjectItemPeriod,
} from "@/components/elements/project-item";

interface Destination {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const destinationIconMap = {
  "Plane": Plane,
  "Mountain": Mountain,
  "Sun": Sun,
  "Pyramid": Pyramid,
};

const getDestinations = (t) => {
  const items = t.raw('home.destinations.items') as any[];
  return items.map((item) => {
    return {
      ...item,
      icon: destinationIconMap[item.icon as keyof typeof destinationIconMap],
    };
  });
}

interface TravelStory {
  icon: LucideIcon;
  title: string;
  period: string;
  description: string;
  color: string;
}

const travelStoryIconMap = {
  "Sunrise": Sunrise,
  "Train": Train,
  "Anchor": Anchor,
  "Compass": Compass,
};

const getTravelStories = (t) => {
  const items = t.raw('home.travel_stories.items') as any[];
  return items.map((item) => {
    return {
      ...item,
      icon: travelStoryIconMap[item.icon as keyof typeof travelStoryIconMap],
    };
  });
}

interface PhotoGalleryItem {
  label: string;
  url: string;
  description: string;
  screenshot: {
    light: string;
    dark: string;
  };
  icon: LucideIcon;
  color: string;
}

const portfolioIconMap: { [key: string]: LucideIcon } = {
  "Camera": Camera,
  "Mountain": Mountain,
  "Turtle": Turtle,
  "Building": Building,
};

const getPhotoGallery = (t) => {
  const items = t.raw('home.photo_gallery.items') as any[];
  return items.map((item) => {
    const iconComponent = portfolioIconMap[item.icon as keyof typeof portfolioIconMap] || InfoIcon;
    return {
      ...item,
      icon: iconComponent,
    };
  });
}

export default function Home() {
  const t = useTranslations()
  const destinations = getDestinations(t);
  const travelStories = getTravelStories(t);
  const photoGallery = getPhotoGallery(t);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-bright-purple/10 to-bright-pink/10 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bright-purple">
                {t('home.hero.title')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Embrace <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-pink to-primary">the Journey!</span> Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-pink to-primary">the Adventure!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#photo-gallery">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-bright-purple hover:from-primary/90 hover:to-bright-purple/90">
                  {t('home.hero.browse1')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t('home.hero.browse2')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('home.destinations.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.destinations.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.slice(0, 4).map((destination, index) => (
              <ProjectItem key={index} title={destination.title} description={destination.description}>
                <ProjectItemTitle className="flex items-center gap-2">
                  <ProjectItemIcon>
                    {destination.icon && React.createElement(destination.icon, { className: `h-6 w-6 ${destination.color}` })}
                  </ProjectItemIcon>
                  {destination.title}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button type="button" className="ml-1 p-0 bg-transparent border-none cursor-pointer">
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] text-sm">
                      {destination.description}
                    </PopoverContent>
                  </Popover>
                </ProjectItemTitle>
                <ProjectItemDescription className="line-clamp-3">
                  {destination.description}
                </ProjectItemDescription>
              </ProjectItem>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/destinations">
              <Button variant="outline">
                View all
                <ArrowRight className={`ml-2 h-4 w-4 ${iconColorClass}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Stories Section */}
      <section id="travel-stories" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('home.travel_stories.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.travel_stories.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelStories.slice(0, 4).map((story, index) => (
              <ClientOnly key={index}>
                <ProjectItem key={index} title={story.title} description={story.description}>
                  <ProjectItemTitle className="flex items-center gap-2">
                    <ProjectItemIcon>
                      {story.icon && React.createElement(story.icon, { className: `h-6 w-6 ${story.color}` })}
                    </ProjectItemIcon>
                    {story.title}
                    <Popover>
                      <PopoverTrigger asChild>
                        <button type="button" className="ml-1 p-0 bg-transparent border-none cursor-pointer">
                          <InfoIcon className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] text-sm">
                        {story.description}
                      </PopoverContent>
                    </Popover>
                  </ProjectItemTitle>
                  {story.period && (
                    <ProjectItemPeriod className="text-xs text-muted-foreground -mt-2 -mb-1 md:-mt-3 md:-mb-2">
                      {story.period || "???"}
                    </ProjectItemPeriod>
                  )}
                  <ProjectItemDescription className="line-clamp-3">
                    {story.description}
                  </ProjectItemDescription>
                </ProjectItem>
              </ClientOnly>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/stories">
              <Button variant="outline">
                View all
                <ArrowRight className={`ml-2 h-4 w-4 ${iconColorClass}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photo-gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('home.photo_gallery.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.photo_gallery.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoGallery.slice(0, 4).map((item, index) => (
              <ProjectItem key={index} title={item.label} description={item.description || ""}>
                <ClientOnly>
                  <ProjectItemTitle className="flex items-center gap-2">
                    <ProjectItemIcon>
                      {item.icon && React.createElement(item.icon, { className: `h-6 w-6 ${item.color ?? ''}` })}
                    </ProjectItemIcon>
                    {item.label}
                    <Popover>
                      <PopoverTrigger asChild>
                        <button type="button" className="ml-1 p-0 bg-transparent border-none cursor-pointer">
                          <InfoIcon className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] text-sm">
                        {item.description}
                      </PopoverContent>
                    </Popover>
                  </ProjectItemTitle>
                </ClientOnly>
                {item.screenshot && (
                  <div className="my-1">
                    {item.url ? (
                      <a href={item.url}>
                        <Image
                          src={item.screenshot}
                          alt={item.label}
                          width={128}
                          height={128}
                          style={{ objectFit: "cover" }}
                        />
                      </a>
                    ) : (
                      <Image
                        src={item.screenshot}
                        alt={item.label}
                        width={128}
                        height={128}
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                )}
                <ProjectItemDescription className="line-clamp-3">
                  {item.description}
                </ProjectItemDescription>
              </ProjectItem>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button variant="outline">
                View all
                <ArrowRight className={`ml-2 h-4 w-4 ${iconColorClass}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('home.about_me.sectionTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.about_me.sectionDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw('home.about_me.list').map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('home.travel_tips.sectionTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.travel_tips.sectionDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {t('home.travel_tips.professional.title')}<br />
                <span className="text-base text-shadow-md text-primary font-normal">{t('home.travel_tips.professional.subtitle')}</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('home.travel_tips.professional.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {t('home.travel_tips.skills.title')}<br />
                <span className="text-base text-shadow-md text-primary font-normal">{t('home.travel_tips.skills.subtitle')}</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('home.travel_tips.skills.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {t('home.travel_tips.projects.title')}<br />
                <span className="text-base text-shadow-md text-primary font-normal">{t('home.travel_tips.projects.subtitle')}</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('home.travel_tips.projects.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {t('home.travel_tips.ideas.title')}<br />
                <span className="text-base text-shadow-md text-primary font-normal">{t('home.travel_tips.ideas.subtitle')}</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('home.travel_tips.ideas.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-bright-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              {t('common.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}

